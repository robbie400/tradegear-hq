require('./catalog-runtime.cjs');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {automotiveProducts}=require('../lib/automotive-catalog.ts');
const {getProductRating}=require('../lib/product-ratings.ts');
const {affiliateUrl}=require('../lib/affiliate.ts');
const scores=require('../lib/automotive-ratings.json');
const audit=require('../docs/automotive/rating-verification-2026-10-16.json');
assert.equal(audit.total,automotiveProducts.length);
assert.equal(audit.verified,scores.length);
assert.equal(audit.unscored,audit.total-audit.verified);
assert.equal(new Set(scores.map(s=>s.productId)).size,scores.length);
for(const p of automotiveProducts){
 const r=getProductRating('automotive-mechanics',p.brand,p.model);
 const expected=scores.find(s=>s.productId===p.id);
 assert.equal(r,expected,`${p.id}: exact automotive source only`);
 if(r){
  assert.ok(r.value>0&&r.value<=5&&Number.isInteger(r.count)&&r.count>0);
  assert.equal(r.modelNumber,p.model);assert.equal(r.brand,p.brand);
  assert.ok(!/amazon/i.test(r.source));assert.ok(!new URL(r.url).hostname.includes('amazon.'));
  assert.equal(r.checkedDate,audit.checkedDate);
  const evidence=audit.products.find(x=>x.productId===p.id).selectedEvidence;
  assert.equal(evidence.value,r.value);assert.equal(evidence.count,r.count);assert.equal(evidence.url,r.url);
 }
 const dest=new URL(affiliateUrl(p.amazonUrl,'automotive-mechanics'));
 assert.equal(dest.hostname,'www.amazon.com');assert.equal(dest.pathname,`/dp/${p.asin}`);assert.equal(dest.searchParams.get('tag'),'robbieom0e-20');
}
const component=fs.readFileSync('components/ProductRating.tsx','utf8');
assert.ok(component.includes('className={styles.ratingStarsLink} href={affiliateUrl(amazonUrl,trade)}'));
assert.ok(component.includes('Rating source: ${r.source}'));
assert.ok(component.includes("trade !== 'automotive-mechanics' &&"));
console.log(`Automotive ratings: ${scores.length} verified non-Amazon source scores; ${audit.unscored} explicit gaps; 61 exact tagged Amazon destinations and linked stars passed.`);
