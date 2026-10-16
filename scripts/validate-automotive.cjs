require('./catalog-runtime.cjs');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {execFileSync}=require('node:child_process');
const {automotiveProducts:products,automotiveCategories:categories,automotiveJobs:jobs,automotiveHandGroups:groups}=require('../lib/automotive-catalog.ts');
const {getToolDirectory,getGlobalToolSearchItems}=require('../lib/tool-directory.ts');
const {getToolkitProducts,getToolkitProductsByFamily,getToolkitPurchaseUrl}=require('../lib/toolkit-catalogue.ts');
const {guides,hubs}=require('../lib/data.ts');
const {matchesToolSearch}=require('../lib/tool-search.ts');
assert.equal(products.length,61);assert.equal(new Set(products.map(p=>p.id)).size,61);assert.equal(new Set(products.map(p=>p.asin)).size,61);
const holds={'arcan-a20019':'B0047D2FWM','fluke-88v-a-kit':'B005T5G38E','gearwrench-81906':'B000NI93SE','milwaukee-2125-20':'B06ZZYPCNL','dewalt-dpg94-1d':'B004EYOKU4','3m-peltor-x4a':'B00CPCHADQ','stanley-33-725':'B00002PV66'};
for(const [id,asin] of Object.entries(holds))assert.equal(products.find(p=>p.id===id)?.asin,asin);
assert.deepEqual(products.filter(p=>p.replacesId).map(p=>[p.id,p.replacesId]),[['arcan-a20019','arcan-a20018'],['dewalt-dpg94-1d','dewalt-dpg94-1c']]);
assert.ok(products.find(p=>p.id==='lisle-81850').intro.includes('thickness gauge'));
assert.ok(products.every(p=>!/^Reuse existing|old tracker|Do not invent/.test(p.advice)));
const canonical=getToolkitProducts();assert.equal(canonical.length,399);assert.equal(new Set(canonical.map(p=>p.id)).size,399);
for(const p of products){
 const url=new URL(getToolkitPurchaseUrl(p.id,'automotive-mechanics'));assert.equal(url.hostname,'www.amazon.com');assert.equal(url.pathname,`/dp/${p.asin}`);assert.ok(url.searchParams.get('tag'));
 assert.ok(p.sourceUrl.startsWith('https://'));assert.ok(p.image.src.startsWith('/images/automotive/'));assert.ok(fs.statSync('public'+p.image.src).size>1000);
 assert.equal(p.imageRights.status,'publisher-directed-permission-unconfirmed');assert.equal(p.imageRights.permissionEvidence,null);
 assert.ok(!('price' in p)&&!('rating' in p)&&!('reviewCount' in p));
 for(const family of p.familyIds)assert.equal(getToolkitProductsByFamily(family,'automotive-mechanics').filter(x=>x.id===p.id).length,1);
 assert.ok(getGlobalToolSearchItems().some(x=>x.id===p.id&&matchesToolSearch(x.searchText,p.model)));
}
const reused=['klein-d203-8','klein-d228-8','klein-32500hd','knipex-8701250','stanley-33-725','streamlight-66118'];
for(const id of reused){const entries=canonical.filter(p=>p.id===id);assert.equal(entries.length,1);assert.ok(entries[0].trades.length>1);}
assert.equal(getToolDirectory('automotive-mechanics').products.length,61);assert.equal(categories.length,18);assert.equal(jobs.length,7);assert.equal(hubs.length,6);
assert.equal(guides.filter(g=>g.trade==='automotive-mechanics').flatMap(g=>g.products).filter(p=>p.reviewSlug).length,0);
const grouped=groups.flatMap(g=>g.productIds);assert.equal(grouped.length,new Set(grouped).size);assert.deepEqual([...grouped].sort(),[...categories.find(c=>c.id==='C07').productIds].sort());
assert.ok(categories.every(c=>c.productIds.length>=2));assert.equal(categories.find(c=>c.id==='C01').productIds.length,4);
const plan=require('../docs/automotive/comparison-expansion.json');assert.equal(plan.previewIds.length+plan.remainingIds.length,100);assert.equal(new Set([...plan.previewIds,...plan.remainingIds]).size,100);
for(const p of products){const b=p.image.contentBounds;assert.ok(b&&b.width>0&&b.height>0&&b.x>=0&&b.y>=0&&b.x+b.width<=b.imageWidth&&b.y+b.height<=b.imageHeight);}
for(const c of categories)for(const id of c.productIds)assert.ok(products.find(p=>p.id===id));
for(const job of jobs)for(const slug of job.guideSlugs)assert.ok(categories.find(c=>c.slug===slug));
const production=JSON.parse(execFileSync(process.execPath,['-e',`require('./scripts/catalog-runtime.cjs');const d=require('./lib/data.ts');const t=require('./lib/toolkit-catalogue.ts');console.log(JSON.stringify({hubs:d.hubs.length,automotive:d.guides.filter(g=>g.trade==='automotive-mechanics').length,products:t.getToolkitProducts().length}));`],{cwd:process.cwd(),env:{...process.env,VERCEL_ENV:'production'},encoding:'utf8'}));
assert.deepEqual(production,{hubs:5,automotive:0,products:344});
console.log('Automotive: 61 exact destinations/photos, 6 reused records, family/search lookups, grouped hand tools and production hold passed.');
