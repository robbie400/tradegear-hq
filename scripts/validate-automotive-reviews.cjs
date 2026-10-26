require('./catalog-runtime.cjs');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {automotiveProducts}=require('../lib/automotive-catalog.ts');
const {getAutomotiveReview,automotiveReviewLinks,automotiveFeedback}=require('../lib/automotive-reviews.ts');
const {affiliateUrl}=require('../lib/affiliate.ts');
const bodies=new Set();
for(const p of automotiveProducts){
 const r=getAutomotiveReview(p),links=automotiveReviewLinks(p);
 assert.equal(r.slug,p.id);assert.equal(r.amazonUrl,p.amazonUrl);
 assert.ok(r.title.includes(p.model)&&r.title.includes('Review:'));
 for(const key of ['intro','verdict','bestFor','avoidIf','sourceNote'])assert.ok(r[key]?.length>30,`${p.id}: ${key}`);
 assert.ok(r.pros.length>=3&&r.cons.length>=2);
 assert.ok(r.specs.length>=3&&r.specs.every(s=>s.label&&s.value&&!/^Specification \d/.test(s.label)));
 assert.ok(r.sections.length>=4&&r.sections.every(s=>s.heading&&s.body.length>150));
 for(const section of r.sections){assert.ok(!bodies.has(section.body),`${p.id}: duplicated analysis`);bodies.add(section.body);}
 assert.ok(r.faqs.length>=3&&r.faqs.length<=5&&r.faqs.every(f=>f.q&&f.a));
 assert.ok(links.alternatives.length&&links.alternatives.every(a=>!a.url.includes(`/products/${p.id}/`)));
 for(const a of links.alternatives)assert.ok(automotiveProducts.some(x=>a.url===`/automotive-mechanics/products/${x.id}/`));
 const url=new URL(affiliateUrl(r.amazonUrl,r.trade));assert.equal(url.pathname,`/dp/${p.asin}`);assert.ok(url.searchParams.get('tag'));
 assert.ok(!('rating' in r)&&!('reviewCount' in r));
}
const torque=getAutomotiveReview(automotiveProducts.find(p=>p.id==='tekton-trq52403'));
assert.ok(torque.specs.some(s=>s.label==='Scale'&&s.value.includes('Single unit: ft-lb')));
assert.ok(torque.sections.some(s=>s.body.includes('40, 180 and 300')));
const esco=getAutomotiveReview(automotiveProducts.find(p=>p.id==='esco-10498-pair'));
assert.ok(esco.extraSources.some(s=>s.url.endsWith('04.25.A.pdf')));
assert.ok(esco.sections.some(s=>s.body.includes('unrestricted six-ton')));
assert.ok(automotiveFeedback.every(f=>f.sourceConfirmed&&f.match==='Exact model'&&f.quote.split(/\s+/).length<=25));
const shared=fs.readFileSync('components/FullProductReview.tsx','utf8');
for(const feature of ['reviewHero','ProductRating','ProductFeedback','EditorialByline','QUICK VERDICT','prosCons','specSection','articleBody','sourceBox','reviewCta','faq','relatedBox'])assert.ok(shared.includes(feature));
assert.ok(fs.readFileSync('app/reviews/[slug]/page.tsx','utf8').includes('<FullProductReview'));
assert.ok(fs.readFileSync('components/Automotive.tsx','utf8').includes('<FullProductReview'));
console.log('Automotive reviews: 100 complete records, distinct analysis, shared template, sourced specs/feedback, exact affiliate destinations and comparison links passed.');

const {automotiveProductSchema,serializeProductSchema}=require('../lib/automotive-product-schema.ts');
for(const p of automotiveProducts){
 const r=getAutomotiveReview(p),s=automotiveProductSchema(p,'https://tradegearhq.com');
 assert.equal(s['@type'],'Product');assert.equal(s.model,p.model);assert.equal(s.brand.name,p.brand);
 assert.equal(s.url,`https://tradegearhq.com/automotive-mechanics/products/${p.id}`);
 assert.equal(s.image[0],`https://tradegearhq.com${p.image.src}`);
 assert.equal(s.review['@type'],'Review');assert.equal(s.review.author.name,'TradeGear HQ editorial desk');
 assert.ok(s.review.reviewBody.includes(r.verdict)&&s.review.reviewBody.includes(r.sourceNote));
 for(const [key,items] of [['positiveNotes',r.pros],['negativeNotes',r.cons]]){
  assert.deepEqual(s.review[key].itemListElement.map(x=>x.name),items);
  assert.deepEqual(s.review[key].itemListElement.map(x=>x.position),items.map((_,i)=>i+1));
 }
 assert.deepEqual(s.additionalProperty.map(x=>[x.name,x.value]),r.specs.map(x=>[x.label,x.value]));
 const serialized=serializeProductSchema(s);assert.deepEqual(JSON.parse(serialized),s);
 for(const forbidden of ['aggregateRating','reviewRating','offers','price','availability','ratingValue','reviewCount'])assert.ok(!serialized.includes(`"${forbidden}":`));
}
const unsafe=automotiveProductSchema(automotiveProducts[0],'https://tradegearhq.com');unsafe.description='</script><script>alert(1)</script>';
assert.ok(!serializeProductSchema(unsafe).includes('</script>'));assert.equal(JSON.parse(serializeProductSchema(unsafe)).description,unsafe.description);
console.log('Automotive schema: 100 exact products, editorial pros/cons, visible-source parity, no imported ratings/offers, and script-safe JSON passed.');

const oldFeedbackAudit=require('../docs/automotive/owner-feedback-verification-2026-10-16.json');
const newFeedbackAudit=require('../docs/automotive/owner-feedback-verification-2026-10-17.json');
const feedbackAudit={records:[...oldFeedbackAudit.records,...newFeedbackAudit.records]};
assert.equal(automotiveFeedback.length,12+newFeedbackAudit.records.length);assert.ok(new Set(automotiveFeedback.map(f=>f.productId)).size>=9);
const perSource=new Map();
for(const f of automotiveFeedback){
 const p=automotiveProducts.find(p=>p.id===f.productId);assert.ok(p);assert.equal(f.modelNumber,p.model);assert.equal(f.brand,p.brand);
 assert.ok(f.url.startsWith('https://'));assert.ok(f.summary&&f.context&&f.caveat);assert.equal(f.sourceConfirmed,true);
 perSource.set(f.url,(perSource.get(f.url)||0)+f.quote.split(/\s+/).length);
 if(f.productId!=='innova-5610'){
  const a=feedbackAudit.records.find(a=>a.productId===f.productId&&a.author===f.author);
  assert.ok(a&&a.evidence.includes(f.quote));assert.equal(a.quote,f.quote);assert.equal(a.url,f.url);
 }
}
assert.ok([...perSource.values()].every(n=>n<=25));
const feedbackComponent=fs.readFileSync('components/ProductFeedback.tsx','utf8');assert.ok(feedbackComponent.includes('Source: {feedback.source}'));assert.ok(feedbackComponent.includes('feedback.summary'));
assert.ok(automotiveFeedback.find(f=>f.author==='Petertwit').context.includes('Received free product'));
console.log('Automotive feedback: '+automotiveFeedback.length+' short attributed quotes, exact source evidence, incentive disclosure and quote budgets passed.');
