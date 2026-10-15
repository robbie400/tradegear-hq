require('./catalog-runtime.cjs');
const assert=require('node:assert/strict');
const {apprenticeEssentials,getApprenticeEssentialsForTrade}=require('../lib/apprentice-essentials.ts');
const {getToolDirectory,getGlobalToolSearchItems}=require('../lib/tool-directory.ts');
const {getToolkitProducts,getToolkitProductById,getToolkitProductsByFamily,getToolkitPurchaseUrl}=require('../lib/toolkit-catalogue.ts');
const {matchesToolSearch}=require('../lib/tool-search.ts');
const expected={
 'klein-935rb':'B01MF9N8FE','crescent-ac210vs':'B00002N5L1','dewalt-dpg94-1c':'B002IVTX8E','bucket-boss-50200':'B00GK4TZ2E','pica-3030':'B002X7Y90U','klein-31430':'B0F1Z2RS83','klein-d228-8':'B0000302VW','klein-d203-8':'B0000302WQ','milwaukee-48-22-2502':'B00KQQTLD0','wiss-m3r':'B00002N5KQ','streamlight-66118':'B07KLSG5JG',
};
assert.deepEqual(apprenticeEssentials.map(p=>p.id).sort(),Object.keys(expected).sort());
assert.equal(new Set(apprenticeEssentials.map(p=>p.id)).size,11);
assert.equal(new Set(apprenticeEssentials.map(p=>p.familyId)).size,11);
const catalogue=getToolkitProducts();
assert.equal(catalogue.filter(p=>p.kind==='catalogue').length,333);
assert.equal(catalogue.filter(p=>p.kind==='essential').length,11);
assert.equal(catalogue.length,new Set(catalogue.map(p=>p.id)).size);
for(const p of apprenticeEssentials){
 const url=new URL(p.amazon.url);
 assert.equal(url.hostname,'www.amazon.com');assert.equal(url.pathname,`/dp/${expected[p.id]}`);
 assert.equal(url.searchParams.get('tag'),'robbieom0e-20');
 assert.ok(p.advice.length>90);assert.ok(p.manufacturerUrl.startsWith('https://'));
 assert.ok(!('price' in p) && !('rating' in p) && !('reviewCount' in p));
 assert.ok(p.image && p.image.src && p.image.sourceUrl);
 if(p.imageStatus==='permission-established')assert.ok(p.image.rightsBasis);
 else {assert.equal(p.imageStatus,'publisher-directed-permission-unconfirmed');assert.ok(p.image.rightsNote.includes('permission remains unconfirmed'));assert.equal(p.image.rightsBasis,undefined);}
 for(const trade of p.trades){
  assert.ok(getToolDirectory(trade).essentials.some(item=>item.id===p.id));
  assert.equal(getToolkitProductsByFamily(p.familyId,trade).filter(item=>item.id===p.id).length,1);
  if(p.amazon.status==='matched')assert.equal(new URL(getToolkitPurchaseUrl(p.id,trade)).pathname,url.pathname);
  else assert.equal(getToolkitPurchaseUrl(p.id,trade),undefined);
 }
}
assert.equal(getApprenticeEssentialsForTrade('unknown').length,0);
assert.equal(getToolkitProductById('work-gloves'),undefined);
assert.equal(getToolkitPurchaseUrl('unknown','electricians'),undefined);
assert.equal(getToolkitPurchaseUrl('pica-3030','home-inspectors'),undefined);
assert.equal(getToolkitProductsByFamily('tape-measure','electricians')[0].id,'stanley-33-725');
assert.equal(getToolkitProductsByFamily('tape-measure','plumbers')[0].id,'stanley-33-725');
assert.equal(catalogue.filter(p=>p.id==='stanley-33-725').length,1);
assert.ok(getToolkitProductById('stanley-33-725').placements.every(p=>p.detailHref.startsWith('/reviews/') || p.detailHref.startsWith('/carpenters/')));
const globalItems=getGlobalToolSearchItems();
assert.equal(globalItems.length,344);
assert.equal(globalItems.filter(p=>matchesToolSearch(p.searchText,'935RB')).length,1);
assert.ok(globalItems.find(p=>p.id==='dewalt-dpg94-1c').searchText.includes('ppe'));
assert.deepEqual(Object.fromEntries(['electricians','plumbers','hvac','carpenters','home-inspectors'].map(t=>[t,getApprenticeEssentialsForTrade(t).length])),{electricians:9,plumbers:5,hvac:7,carpenters:4,'home-inspectors':2});
console.log('Approved essentials: 11 canonical records, 10 verified purchase links, 1 model mismatch withheld, five directory/search mappings and existing tape reuse passed.');
