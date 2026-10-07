require('./catalog-runtime.cjs');
const assert = require('node:assert/strict');
process.env.AMAZON_TAG_ELECTRICIANS = 'tgh-electric-20';
process.env.AMAZON_TAG_PLUMBERS = 'tgh-plumbing-20';
process.env.AMAZON_TAG_HVAC = 'tgh-hvac-20';
process.env.AMAZON_TAG_INSPECTORS = 'tgh-inspect-20';
const {affiliateUrl} = require('../lib/affiliate.ts');
const original = 'https://www.amazon.com/s?k=RIDGID+101&tag=robbieom0e-20';
for (const [trade, tag] of Object.entries({'electricians':'tgh-electric-20',plumbers:'tgh-plumbing-20',hvac:'tgh-hvac-20','home-inspectors':'tgh-inspect-20'})) {
 const u = new URL(affiliateUrl(original, trade));
 assert.equal(u.searchParams.get('tag'),tag);
 assert.equal(u.searchParams.get('k'),'RIDGID 101');
 assert.equal(u.hostname,'www.amazon.com');
}
assert.equal(affiliateUrl(original,'other'),original);
assert.equal(affiliateUrl('https://manufacturer.example/tool','plumbers'),'https://manufacturer.example/tool');
console.log('Affiliate trade routing passed');
