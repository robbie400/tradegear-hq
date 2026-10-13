require('./catalog-runtime.cjs');
const assert=require('node:assert/strict');
const {productFeedback,getProductFeedback,getProductFeedbacks}=require('../lib/product-feedback.ts');
const {productRatings,getProductRating}=require('../lib/product-ratings.ts');
const {guides}=require('../lib/data.ts');
assert.equal(new Set(productFeedback.map(f=>`${f.trade}/${f.productId}/${f.author}`)).size,productFeedback.length);
for(const f of productFeedback){
 assert.equal(new URL(f.url).protocol,'https:');assert.ok(f.summary&&f.author&&f.source);
 if(f.portrait){assert.equal(new URL(f.portrait.src).protocol,'https:');assert.equal(f.portrait.sourceUrl,f.url);assert.ok(f.portrait.credit);assert.notEqual(f.author,'Community member');}
 const p=guides.filter(g=>g.trade===f.trade).flatMap(g=>g.products).find(p=>p.productId===f.productId||p.reviewSlug===`${f.productId}-review`);
 assert.ok(p,`${f.productId}: existing product`);
 assert.equal(getProductFeedback(f.trade,p.brand,p.model,p.productId)?.productId,f.productId);
 assert.equal(getProductFeedback(f.trade,'Unrelated brand',p.model,p.productId),undefined);
}
assert.equal(getProductFeedback('hvac','Appion','Unrelated model'),undefined);
assert.deepEqual(['electricians','plumbers','hvac','home-inspectors'].map(t=>productFeedback.filter(f=>f.trade===t).length),[7,6,4,1]);
const carpenterFeedback=productFeedback.filter(f=>f.trade==='carpenters');
assert.equal(carpenterFeedback.length,83);
assert.equal(new Set(carpenterFeedback.map(f=>f.productId)).size,43);
assert.equal(getProductFeedbacks('carpenters','Milwaukee','2505-20 M12 FUEL Installation Drill/Driver','milwaukee-2505-20').length,2);
assert.equal(getProductFeedbacks('carpenters','Unrelated brand','2505-20','milwaukee-2505-20').length,0);
for(const r of productRatings){
 assert.ok(r.value>0&&r.value<=5&&Number.isInteger(r.count)&&r.count>0);
 assert.equal(new URL(r.url).protocol,'https:');
 const p=guides.filter(g=>g.trade===r.trade).flatMap(g=>g.products).find(p=>p.productId===r.productId||p.reviewSlug===`${r.productId}-review`);
 assert.ok(p,`${r.productId}: rating matches a catalogue model`);
 assert.equal(getProductRating(r.trade,p.brand,p.model),r);
}
assert.equal(productRatings.filter(r=>r.trade==='carpenters').length,44);
console.log('Feedback checks passed: source attribution and matching catalogue products.');
