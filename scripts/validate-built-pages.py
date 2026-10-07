"""Validate the complete prerendered site after npm run build."""
import json, re, sys, os
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote

ROOT = Path(__file__).resolve().parents[1]
class Page(HTMLParser):
    def __init__(self):
        super().__init__(); self.links=[]; self.ids=set(); self.h1=0; self.title=''; self.description=''; self.robots=[]; self.canonical=[]; self.in_title=False; self.in_script=False; self.text=[]
    def handle_starttag(self, tag, attrs):
        attrs=dict(attrs)
        if attrs.get('id'): self.ids.add(attrs['id'])
        if tag=='a': self.links.append(attrs)
        if tag=='h1': self.h1+=1
        if tag=='title': self.in_title=True
        if tag=='script': self.in_script=True
        if tag=='meta' and attrs.get('name')=='description': self.description=attrs.get('content','')
        if tag=='meta' and attrs.get('name')=='robots': self.robots.append(attrs.get('content',''))
        if tag=='link' and attrs.get('rel')=='canonical': self.canonical.append(attrs.get('href'))
    def handle_endtag(self, tag):
        if tag=='title': self.in_title=False
        if tag=='script': self.in_script=False
    def handle_data(self, value):
        if self.in_title: self.title+=value
        if not self.in_script: self.text.append(value)

manifest=json.loads((ROOT/'.next/prerender-manifest.json').read_text())
routes={r for r in manifest['routes'] if r not in {'/robots.txt','/sitemap.xml','/_not-found'}}
baseline=json.loads((ROOT/'scripts/existing-routes.json').read_text())
site_origin=os.environ.get('NEXT_PUBLIC_SITE_URL','https://tradegear-hq.vercel.app').rstrip('/')
live=os.environ.get('NEXT_PUBLIC_INDEX_SITE')=='true'
errors=[]; pages={}; titles={}; descriptions={}; amazon_urls=set(); internal_count=0
for route in sorted(routes):
    path=ROOT/'.next/server/app'/('index.html' if route=='/' else route.lstrip('/')+'.html')
    if not path.exists(): errors.append([route,'missing rendered HTML']); continue
    html=path.read_text(); p=Page(); p.feed(html); pages[route]=p
    if p.h1!=1: errors.append([route,'expected one H1',p.h1])
    if not p.title or p.title in titles: errors.append([route,'missing/duplicate title'])
    if not p.description or p.description in descriptions: errors.append([route,'missing/duplicate description'])
    titles[p.title]=route; descriptions[p.description]=route
    if live:
        if not p.robots or any('noindex' in s or 'nofollow' in s for s in p.robots): errors.append([route,'production indexing blocked'])
    elif not any('noindex' in s for s in p.robots): errors.append([route,'prelaunch noindex missing'])
    if [s.rstrip('/') for s in p.canonical]!=[site_origin+('' if route=='/' else route)]: errors.append([route,'canonical mismatch'])
    if ''.join(p.text).count('As an Amazon Associate I earn from qualifying purchases.')!=1: errors.append([route,'disclosure count'])
    if 'B01IH41CUW' in html: errors.append([route,'old mismatched Fluke ASIN'])
    for match in re.findall(r'<script type="application/ld\+json">(.*?)</script>',html):
        try: json.loads(match)
        except ValueError: errors.append([route,'invalid structured data'])
    for link in p.links:
        href=link.get('href',''); u=urlsplit(href)
        if href.startswith('/') and not href.startswith('//'):
            target=u.path.rstrip('/') or '/'; internal_count+=1
            if target not in routes: errors.append([route,'missing linked route',href])
        elif href.startswith('#'): target=route
        else: target=None
        if target and u.fragment and target in pages and unquote(u.fragment) not in pages[target].ids: errors.append([route,'missing anchor',href])
        if u.hostname=='www.amazon.com':
            amazon_urls.add(href)
            if 'tag=robbieom0e-20' not in u.query: errors.append([route,'affiliate tag missing',href])
            if not {'sponsored','nofollow','noopener'}.issubset(set(link.get('rel','').split())): errors.append([route,'affiliate rel missing',href])
for route in baseline:
    if route not in routes: errors.append([route,'existing route removed'])
# Cross-page anchors can only be checked once every page has been parsed.
for route,p in pages.items():
    for a in p.links:
        u=urlsplit(a.get('href','')); target=(u.path.rstrip('/') or '/') if u.path.startswith('/') else route if not u.path else None
        if target in pages and u.fragment and unquote(u.fragment) not in pages[target].ids:
            error=[route,'missing anchor',a['href']]
            if error not in errors: errors.append(error)
# Check discovery files under both launch and staging settings.
robots=(ROOT/'.next/server/app/robots.txt.body').read_text()
sitemap=(ROOT/'.next/server/app/sitemap.xml.body').read_text()
import xml.etree.ElementTree as ET
locations=[e.text for e in ET.fromstring(sitemap).iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
if live:
    if 'Disallow: /' in robots or 'Allow: /' not in robots or f'Sitemap: {site_origin}/sitemap.xml' not in robots: errors.append(['robots.txt','production discovery settings mismatch'])
    if set(locations)!={site_origin+('/' if route=='/' else route+'/') for route in routes}: errors.append(['sitemap.xml','missing or incorrect canonical URLs'])
else:
    if 'Disallow: /' not in robots or locations: errors.append(['robots/sitemap','staging discovery mismatch'])
report={'indexing_enabled':live,'sitemap_urls':len(locations),'pages':len(pages),'existing_routes_preserved':len(baseline),'internal_links_checked':internal_count,'unique_affiliate_destinations':len(amazon_urls),'errors':errors,
        'scope':'Rendered HTML, metadata, route graph, anchors, disclosure and affiliate markup. This does not verify browser layout, external availability or Amazon inventory.'}
print(json.dumps(report,indent=2))
sys.exit(bool(errors))
