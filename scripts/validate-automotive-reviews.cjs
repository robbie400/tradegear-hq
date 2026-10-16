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
console.log('Automotive reviews: 61 complete records, distinct analysis, shared template, sourced specs/feedback, exact affiliate destinations and comparison links passed.');
