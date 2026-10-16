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
assert.equal(carpenterFeedback.length,114);
assert.equal(new Set(carpenterFeedback.map(f=>f.productId)).size,60);
assert.equal(getProductFeedbacks('carpenters','Milwaukee','2505-20 M12 FUEL Installation Drill/Driver','milwaukee-2505-20').length,2);
assert.equal(getProductFeedbacks('carpenters','Unrelated brand','2505-20','milwaukee-2505-20').length,0);
for(const r of productRatings){
 assert.ok(r.value>0&&r.value<=5&&Number.isInteger(r.count)&&r.count>0);
 assert.equal(new URL(r.url).protocol,'https:');
 const p=guides.filter(g=>g.trade===r.trade).flatMap(g=>g.products).find(p=>p.productId===r.productId||p.reviewSlug===`${r.productId}-review`);
 assert.ok(p,`${r.productId}: rating matches a catalogue model`);
 assert.equal(getProductRating(r.trade,p.brand,p.model),r);
}
assert.ok(productRatings.filter(r=>r.trade==='carpenters').length>=44);
assert.equal(getProductRating('hvac','AccuTools','BluVac+ Micro Wireless Micron Gauge').productId,'accutools-bluvac-micro');
assert.equal(getProductRating('hvac','AccuTools','BluVac+ Pro Wireless Vacuum Gauge').productId,'accutools-bluvac-pro');
assert.equal(getProductRating('hvac','AccuTools','BluVac+ LTE Wireless Vacuum Gauge'),undefined);
console.log('Feedback checks passed: source attribution and matching catalogue products.');

const directQuotes=carpenterFeedback.filter(f=>f.quote);
assert.equal(directQuotes.length,31);
for(const f of directQuotes){assert.equal(f.sourceConfirmed,true);assert.equal(f.summary,f.quote);assert.ok(f.caveat.includes('verbatim'));assert.equal(f.match,'Exact model');}
const wordsBySource=new Map();
for(const f of directQuotes)wordsBySource.set(f.url,(wordsBySource.get(f.url)||0)+f.quote.split(/\s+/).length);
for(const [url,words] of wordsBySource)assert.ok(words<=25,`${url}: short excerpt budget`);

// All numeric customer ratings currently use identified external sources.
for(const r of productRatings){assert.notEqual(r.source.toLowerCase(),'amazon');assert.ok(!/(^|\.)amazon\.[a-z.]+$/.test(new URL(r.url).hostname),`${r.productId}: unauthorized Amazon rating source`);}
const replacementAudit=require('../docs/external-electrical-ratings-2026-10-16.json');
for(const expected of replacementAudit.records){
 const actual=getProductRating('electricians',expected.brand,expected.modelNumber);
 for(const key of ['productId','value','count','source','url','checkedDate'])assert.equal(actual[key],expected[key]);
 assert.equal(actual.countDisplay,undefined);
}
console.log('External electrical ratings: Fluke 117 4.8/99, MM720 4.5/93, exact NCVT-3P 3.6/22; zero Amazon-sourced scores.');
