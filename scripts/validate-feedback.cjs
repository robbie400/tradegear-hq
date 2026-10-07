require('./catalog-runtime.cjs');
const assert=require('node:assert/strict');
const {productFeedback,showFeedbackDrafts,getProductFeedback}=require('../lib/product-feedback.ts');
const before={NODE_ENV:process.env.NODE_ENV,VERCEL_ENV:process.env.VERCEL_ENV};
for(const [node,vercel,expected] of [['production','production',false],['production',undefined,false],['production','preview',true],['development',undefined,true],['development','production',false]]) {
 process.env.NODE_ENV=node;if(vercel)process.env.VERCEL_ENV=vercel;else delete process.env.VERCEL_ENV;
 assert.equal(showFeedbackDrafts(),expected,`${node}/${vercel}: draft visibility`);
}
for(const [key,value] of Object.entries(before))if(value===undefined)delete process.env[key];else process.env[key]=value;
for(const f of productFeedback){assert.equal(f.permission,'pending');assert.equal(new URL(f.url).protocol,'https:');assert.ok(f.summary&&f.caveat);}
assert.equal(productFeedback.filter(f=>f.trade==='hvac').length,4);
assert.equal(getProductFeedback('hvac','Appion','G5Twin Refrigerant Recovery Machine')?.author,'Aussie HVC-R Tech');
console.log('Feedback checks passed: sourced candidates and production exclusion.');
