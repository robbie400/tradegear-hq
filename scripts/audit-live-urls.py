"""Read only TradeGear pages; never request external/affiliate destinations."""
import urllib.request,urllib.parse,xml.etree.ElementTree as ET,json,concurrent.futures,sys
from html.parser import HTMLParser
BASE='https://tradegearhq.com'
OUT=sys.argv[1] if len(sys.argv)>1 else None
class Page(HTMLParser):
 def __init__(self):super().__init__();self.canon=[];self.links=[];self.schema=[];self.injson=False;self.buf='';self.robots=[]
 def handle_starttag(self,t,attrs):
  a=dict(attrs)
  if t=='link' and a.get('rel')=='canonical':self.canon.append(a.get('href'))
  if t=='a' and a.get('href'):self.links.append(a['href'])
  if t=='meta' and a.get('name')=='robots':self.robots.append(a.get('content'))
  if t=='script' and a.get('type')=='application/ld+json':self.injson=True;self.buf=''
 def handle_data(self,s):
  if self.injson:self.buf+=s
 def handle_endtag(self,t):
  if t=='script' and self.injson:
   try:self.schema.append(json.loads(self.buf))
   except:pass
   self.injson=False
class SameSiteRedirect(urllib.request.HTTPRedirectHandler):
 def redirect_request(self,req,fp,code,msg,headers,newurl):
  if urllib.parse.urlparse(newurl).hostname!='tradegearhq.com':raise ValueError('Refusing external redirect')
  return super().redirect_request(req,fp,code,msg,headers,newurl)
def read(u):
 if urllib.parse.urlparse(u).hostname!='tradegearhq.com':raise ValueError('Refusing external request')
 r=urllib.request.build_opener(SameSiteRedirect()).open(urllib.request.Request(u,headers={'User-Agent':'TradeGearHQ-URL-Audit/1.0'}),timeout=20);return r,r.read().decode()
def schema_urls(x):
 if isinstance(x,dict):
  for k,v in x.items():
   if k in ('url','@id','item') and isinstance(v,str) and v.startswith(BASE):yield v
   else:yield from schema_urls(v)
 elif isinstance(x,list):
  for v in x:yield from schema_urls(v)
def scan(u):
 try:
  r,s=read(u);p=Page();p.feed(s)
  return {'url':u,'final':r.url,'status':r.status,'canonical':p.canon,'links':p.links,'schemaUrls':list(schema_urls(p.schema)),'robots':p.robots}
 except Exception as e:return {'url':u,'error':str(e)}
if __name__=='__main__':
 _,s=read(BASE+'/sitemap.xml');urls=[x.text for x in ET.fromstring(s).findall('.//{*}loc')]
 results=[]
 with open(OUT,'w') as f,concurrent.futures.ThreadPoolExecutor(16) as ex:
  for result in ex.map(scan,urls):
   results.append(result);f.write(json.dumps(result)+'\n');f.flush()
   if len(results)%50==0:print('Checked',len(results),'of',len(urls),flush=True)
 print(json.dumps({'pages':len(results),'errors':sum('error'in r for r in results),'redirects':sum(r.get('final')!=r['url'] for r in results if 'error'not in r),'canonicalMismatch':sum(r.get('canonical')!=[r.get('final')] for r in results if 'error'not in r),'output':OUT}),flush=True)
