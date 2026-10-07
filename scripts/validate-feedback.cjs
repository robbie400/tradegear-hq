require('./catalog-runtime.cjs');
const assert=require('node:assert/strict');
const {productFeedback,getProductFeedback}=require('../lib/product-feedback.ts');
const {guides}=require('../lib/data.ts');
assert.equal(new Set(productFeedback.map(f=>`${f.trade}/${f.productId}`)).size,productFeedback.length);
for(const f of productFeedback){
 assert.equal(new URL(f.url).protocol,'https:');assert.ok(f.summary&&f.author&&f.source);
 const p=guides.filter(g=>g.trade===f.trade).flatMap(g=>g.products).find(p=>p.productId===f.productId||p.reviewSlug===`${f.productId}-review`);
 assert.ok(p,`${f.productId}: existing product`);
 assert.equal(getProductFeedback(f.trade,p.brand,p.model,p.productId)?.productId,f.productId);
 assert.equal(getProductFeedback(f.trade,'Unrelated brand',p.model,p.productId),undefined);
}
assert.equal(getProductFeedback('hvac','Appion','Unrelated model'),undefined);
assert.equal(productFeedback.filter(f=>f.trade==='hvac').length,4);
console.log('Feedback checks passed: source attribution and matching catalogue products.');
