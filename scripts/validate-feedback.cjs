require('./catalog-runtime.cjs');
const assert=require('node:assert/strict');
const {productFeedback,getProductFeedback}=require('../lib/product-feedback.ts');
const {guides}=require('../lib/data.ts');
assert.equal(new Set(productFeedback.map(f=>`${f.trade}/${f.productId}`)).size,productFeedback.length);
for(const f of productFeedback){
 assert.equal(new URL(f.url).protocol,'https:');assert.ok(f.summary&&f.author&&f.source);
 if(f.portrait){assert.equal(new URL(f.portrait.src).protocol,'https:');assert.equal(f.portrait.sourceUrl,f.url);assert.ok(f.portrait.credit);assert.notEqual(f.author,'Community member');}
 const p=guides.filter(g=>g.trade===f.trade).flatMap(g=>g.products).find(p=>p.productId===f.productId||p.reviewSlug===`${f.productId}-review`);
 assert.ok(p,`${f.productId}: existing product`);
 assert.equal(getProductFeedback(f.trade,p.brand,p.model,p.productId)?.productId,f.productId);
 assert.equal(getProductFeedback(f.trade,'Unrelated brand',p.model,p.productId),undefined);
}
assert.equal(getProductFeedback('hvac','Appion','Unrelated model'),undefined);
assert.deepEqual(['electricians','plumbers','hvac'].map(t=>productFeedback.filter(f=>f.trade===t).length),[7,6,4]);
console.log('Feedback checks passed: source attribution and matching catalogue products.');
