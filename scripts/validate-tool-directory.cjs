require('./catalog-runtime.cjs');
const assert=require('node:assert/strict');
const {getToolDirectory,getGlobalToolSearchItems}=require('../lib/tool-directory.ts');
const {normalizeToolSearch,matchesToolSearch}=require('../lib/tool-search.ts');
const {getReview}=require('../lib/reviews.ts');
const {getGuide}=require('../lib/data.ts');
const expected={electricians:70,plumbers:95,hvac:70,'home-inspectors':66,carpenters:100};
for(const [trade,count] of Object.entries(expected)){
 const d=getToolDirectory(trade);assert.equal(d.products.length,count);
 assert.equal(new Set(d.products.map(p=>p.id)).size,count);
 assert.equal(d.products.filter(p=>p.groupAnchor).length,d.categories.length);
 assert.equal(d.groups.length,new Set(d.categories.map(g=>normalizeToolSearch(g.cluster))).size);
 assert.equal(d.groups.length,new Set(d.groups.map(g=>normalizeToolSearch(g.name))).size);
 for(const group of d.groups){
  const first=d.categories.find(g=>normalizeToolSearch(g.cluster)===normalizeToolSearch(group.name));
  assert.equal(group.slug,first.slug);
  assert.ok(d.products.some(p=>p.groupAnchor===`tools-${group.slug}`),`${trade}: category anchor exists`);
 }
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
const globalItems=getGlobalToolSearchItems();
assert.equal(new Set(globalItems.map(p=>p.id)).size,globalItems.length);
for(const trade of Object.keys(expected)){
 const d=getToolDirectory(trade);
 for(const p of d.products){const global=globalItems.find(item=>item.id===p.id);assert.ok(global);assert.ok(global.trades.includes(d.hub.name));}
}
assert.equal(globalItems.filter(p=>matchesToolSearch(p.searchText,'Estwing claw hammer')).length,1);
assert.ok(globalItems.some(p=>matchesToolSearch(p.searchText,'Fluke 117')));
assert.equal(globalItems.filter(p=>matchesToolSearch(p.searchText,'no-such-brand-xyz')).length,0);
console.log('Tool directories passed: five complete catalogues, exact detail destinations and useful search results.');
