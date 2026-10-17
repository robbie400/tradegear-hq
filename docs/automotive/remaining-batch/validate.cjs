require('../../../scripts/catalog-runtime.cjs');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const root=__dirname;
const products=require('./products.json');
const photos=require('./photo-manifest.json');
const evidence=require('./research-evidence.json');
const plan=require('./coverage-plan.json');
const live=require('../../../lib/automotive-products.json');
const expansion=require('../comparison-expansion.json');
const {getToolkitProducts}=require('../../../lib/toolkit-catalogue.ts');
const {affiliateUrl}=require('../../../lib/affiliate.ts');
const canonical=getToolkitProducts();
if(live.length===100){require('../../../scripts/validate-automotive.cjs');console.log('The former preparation batch is now implemented; full catalogue validation passed.');process.exit(0);}
assert.equal(products.length,39);
assert.equal(live.length,61);
assert.equal(live.length+products.length,100);
assert.equal(new Set(products.map(p=>p.id)).size,39);
assert.equal(new Set(products.map(p=>p.asin)).size,39);
assert.deepEqual(products.map(p=>p.id).sort(),[...expansion.remainingIds].sort());
assert.equal(photos.length,39);assert.equal(evidence.length,39);
const byId=new Map(products.map(p=>[p.id,p]));
const normalize=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
for(const p of products){
 assert.ok(!live.some(x=>x.id===p.id));
 assert.ok(!canonical.some(x=>x.id===p.id),'Existing canonical record must be reused: '+p.id);
 const existingMatch=canonical.find(x=>normalize(x.brand)===normalize(p.brand)&&normalize(x.model)===normalize(p.model));
 assert.ok(!existingMatch,'Duplicate brand/model: '+p.id);
 const existingAsin=canonical.find(x=>(x.amazon?.url||'').includes('/dp/'+p.asin));
 assert.ok(!existingAsin,'Amazon destination already has a canonical record: '+p.id);
 assert.match(p.asin,/^[A-Z0-9]{10}$/);
 const u=new URL(p.amazonUrl);assert.equal(u.hostname,'www.amazon.com');assert.equal(u.pathname,'/dp/'+p.asin);assert.equal(u.searchParams.get('tag'),'robbieom0e-20');
 const attributed=new URL(affiliateUrl(p.amazonUrl,'automotive-mechanics'));assert.equal(attributed.pathname,u.pathname);assert.ok(attributed.searchParams.get('tag'));
 assert.ok(p.familyIds.length&&p.familyIds.every(f=>/^[a-z0-9-]+$/.test(f)));
 assert.ok(p.intro.length>=180&&p.intro.length<=800);
 assert.ok(p.specifications.length>=2&&p.specifications.every(s=>s.label&&s.value));
 assert.equal(p.publicationStatus,'staged-not-for-runtime');assert.equal(p.researchPrice.publicDisplayAllowed,false);
 assert.equal(p.rating,null);assert.deepEqual(p.feedback,[]);
 const e=evidence.find(x=>x.productId===p.id);assert.equal(e.amazon.asin,p.asin);assert.equal(e.manufacturer.url,p.sourceUrl);
 const identity=normalize(e.amazon.title+' '+e.amazon.identityFields.map(x=>x.value).join(' '));assert.ok(identity.includes(normalize(p.trackerModel))||identity.includes(normalize(p.model)),p.id+' needs identity match');
 const photo=photos.find(x=>x.id===p.id);assert.ok(photo);
 const bytes=fs.readFileSync(path.resolve(root,'../../..',photo.path));assert.ok(bytes.length>1000);
 assert.equal(bytes.toString('ascii',0,4),'RIFF');assert.equal(bytes.toString('ascii',8,12),'WEBP');
 assert.equal(bytes.length,photo.bytes);assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),photo.sha256);
 assert.equal(p.image.src,photo.path);assert.equal(p.image.sourceUrl,photo.page);
 assert.equal(photo.permissionStatus,'reuse-permission-unconfirmed');assert.equal(photo.permissionEvidence,null);
 assert.equal(p.imageRights.permissionEvidence,null);assert.ok(!photo.url.includes('media-amazon.com'));
 const familyMatches=products.filter(x=>x.familyIds.some(f=>p.familyIds.includes(f)));assert.ok(familyMatches.some(x=>x.id===p.id));
}
assert.equal(plan.comparisons.length,20);assert.equal(plan.workflows.length,10);
for(const c of plan.comparisons)for(const id of c.productIds)assert.ok(byId.has(id)||live.some(p=>p.id===id),id);
for(const p of products){for(const id of p.comparisonIds)assert.ok(plan.comparisons.some(c=>c.id===id&&c.productIds.includes(p.id)));for(const id of p.workflowIds)assert.ok(plan.workflows.some(w=>w.id===id&&w.stagedProductIds.includes(p.id)));}
assert.ok(byId.get('lisle-51450').comparisonIds.includes('C11'));assert.ok(!byId.get('lisle-51450').comparisonIds.includes('C17'));
assert.equal(canonical.length,399);
for(const dir of ['app','components','lib']) {
 const scan=d=>{for(const entry of fs.readdirSync(d,{withFileTypes:true})){const f=path.join(d,entry.name);if(entry.isDirectory())scan(f);else if(/\.(tsx?|json)$/.test(f))assert.ok(!fs.readFileSync(f,'utf8').includes('remaining-batch/'),'Staging imported into runtime: '+f);}};
 scan(path.resolve(root,'../../..',dir));
}
const summary={checkedAt:'2026-10-17',stagedProducts:products.length,liveProducts:live.length,totalPlanned:100,exactAsinDestinations:products.length,imagesDecodedSeparately:39,sourceImagesAtLeast1000px:photos.filter(p=>p.highResolution).length,largerPhotoReplacements:photos.filter(p=>Math.max(p.originalWidth,p.originalHeight)<800).map(p=>p.id),imagePermissionsEstablished:0,higherTicketAtLeast150USD:products.filter(p=>p.researchPrice.amountUSD>=150).length,observedPriceAtLeast100USD:products.filter(p=>p.researchPrice.amountUSD>=100).length,variantApprovals:plan.proposedVariantUpdates.map(p=>p.id),runtimeCanonicalCount:canonical.length,status:'preparation validated; not publication clearance'};
fs.writeFileSync(path.join(root,'validation-report.json'),JSON.stringify(summary,null,2)+'\n');
console.log('Remaining automotive preparation: 39 unique records/ASINs, photos/checksums, affiliate destinations, family IDs and 100-product coverage passed. Runtime remains 61 automotive / 399 canonical.');
