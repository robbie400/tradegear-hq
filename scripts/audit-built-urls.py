"""Audit every generated page without requesting Amazon or any other external URL."""
import sys,runpy,json,xml.etree.ElementTree as ET,urllib.parse
from pathlib import Path
sys.argv=['audit','unused']
Page=runpy.run_path('scripts/audit-live-urls.py')['Page']
BASE='https://tradegearhq.com'
root=Path('.next/server/app')
xml=(root/'sitemap.xml.body').read_text()
urls=[x.text for x in ET.fromstring(xml).findall('.//{*}loc')]
errors=[];amazon={};internal=set();schema=set();counts=0
for u in urls:
 path=urllib.parse.urlsplit(u).path
 if path!='/' and path.endswith('/'):errors.append([u,'sitemap trailing slash'])
 f=root/('index.html' if path=='/' else path.lstrip('/')+'.html')
 if not f.exists():errors.append([u,'missing generated page']);continue
 p=Page();p.feed(f.read_text());counts+=1
 if p.canon!=[u] and not (u==BASE+'/' and p.canon==[BASE]):errors.append([u,'canonical mismatch',p.canon])
 for href in p.links:
  x=urllib.parse.urlsplit(urllib.parse.urljoin(u,href))
  if x.hostname=='tradegearhq.com':
   internal.add(x.path)
   if x.path!='/' and x.path.endswith('/'):errors.append([u,'internal trailing slash',href])
  if x.hostname=='amazon.com' or (x.hostname or '').endswith('.amazon.com'):
   amazon[href]=amazon.get(href,0)+1
   q=urllib.parse.parse_qs(x.query)
   if q.get('tag')!=['robbieom0e-20']:errors.append([u,'unexpected affiliate tag',href])
 def inspect(x):
  if isinstance(x,dict):
   for k,v in x.items():
    if k in ('url','@id','item') and isinstance(v,str) and v.startswith(BASE):
     parsed=urllib.parse.urlsplit(v);schema.add(v)
     if parsed.path!='/' and parsed.path.endswith('/'):errors.append([u,'schema trailing slash',v])
    else:inspect(v)
  elif isinstance(x,list):
   for v in x:inspect(v)
 inspect(p.schema)
known={urllib.parse.urlsplit(u).path for u in urls}
for path in internal-known:
 if not (root/(path.lstrip('/')+'.html')).exists():errors.append([path,'internal destination missing'])
summary={'pages':counts,'sitemapURLs':len(urls),'internalDestinationPaths':len(internal),'structuredDataURLs':len(schema),'uniqueAmazonURLs':len(amazon),'renderedAmazonLinks':sum(amazon.values()),'directAmazonDestinations':sum('/dp/' in u or '/gp/product/' in u for u in amazon),'searchAmazonDestinations':sum(urllib.parse.urlsplit(u).path in ['/s','/s/'] for u in amazon),'errors':errors}
Path('docs/technical-audits/build-url-audit-20261026.json').write_text(json.dumps(summary,indent=2))
Path('docs/technical-audits/affiliate-destinations-20261026.json').write_text(json.dumps(amazon,indent=2))
print(json.dumps(summary,indent=2));sys.exit(bool(errors))
