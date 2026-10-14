require('./catalog-runtime.cjs');
const assert=require('node:assert/strict');
const {getToolDirectory}=require('../lib/tool-directory.ts');
const {normalizeToolSearch,matchesToolSearch}=require('../lib/tool-search.ts');
const {getReview}=require('../lib/reviews.ts');
const {getGuide}=require('../lib/data.ts');
const expected={electricians:70,plumbers:95,hvac:70,'home-inspectors':66,carpenters:100};
for(const [trade,count] of Object.entries(expected)){
 const d=getToolDirectory(trade);assert.equal(d.products.length,count);
 assert.equal(new Set(d.products.map(p=>p.id)).size,count);
 assert.equal(d.products.filter(p=>p.groupAnchor).length,d.categories.length);
 for(const p of d.products){
  assert.ok(p.searchText.includes(normalizeToolSearch(p.brand)));
  if(p.detailHref.startsWith('/reviews/'))assert.ok(getReview(p.detailHref.split('/')[2]),`${p.id}: live standalone destination`);
  else{const match=p.detailHref.match(/^\/([^/]+)\/([^/]+)\/#pick-(\d+)$/);assert.ok(match);const g=getGuide(match[1],match[2]);assert.equal(`${g.products[Number(match[3])-1].brand} ${g.products[Number(match[3])-1].model}`,`${p.brand} ${p.model}`);}
 }
}
const carpenter=getToolDirectory('carpenters');
const find=q=>carpenter.products.filter(p=>matchesToolSearch(p.searchText,q));
assert.equal(find('').length,100);
assert.equal(find('  ').length,100);
assert.deepEqual(find('ESTWING claw hammer').map(p=>p.id),['estwing-e3-20s']);
assert.deepEqual(find('dCs335b').map(p=>p.id),['dewalt-dcs335b']);
assert.ok(find('jigsaw').length>=5);
assert.equal(find('no-such-brand-xyz').length,0);
assert.equal(getToolDirectory('unknown-trade'),undefined);
console.log('Tool directories passed: five complete catalogues, exact detail destinations and useful search results.');
