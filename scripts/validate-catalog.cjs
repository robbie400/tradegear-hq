require('./catalog-runtime.cjs');
const assert = require('node:assert/strict');
const {guides} = require('../lib/data.ts');
const {reviews} = require('../lib/reviews.ts');
const {workflows} = require('../lib/workflows.ts');
const {getProductImage, productImages} = require('../lib/product-images.ts');
const {plumberCategories} = require('../lib/plumber-catalog.ts');
const {plumberWorkflows} = require('../lib/plumber-workflows.ts');
const {plumberCatalogReviews} = require('../lib/plumber-catalog.ts');
const config = require('../next.config.ts').default;
const allowedImageHosts = new Set(config.images.remotePatterns.map(p => p.hostname));
const reviewMap = new Map(reviews.map(r => [r.slug, r]));
assert.equal(reviewMap.size, reviews.length, 'Review slugs must be unique');
assert.equal(new Set(guides.map(g => `${g.trade}/${g.slug}`)).size, guides.length);
assert.equal(new Set(workflows.map(w => `${w.trade}/${w.slug}`)).size, workflows.length);
const report = {};
function destination(value) {
  const u = new URL(value);
  u.searchParams.sort();
  return `${u.origin}${u.pathname}?${u.searchParams.toString()}`;
}
for (const trade of ['plumbers', 'electricians']) {
  const selected = guides.filter(g => g.trade === trade);
  const ids = new Set(); let photos = 0;
  for (const guide of selected) {
    assert.equal(guide.products.length, 5, `${guide.slug}: five distinct comparisons`);
    assert.ok(getProductImage(guide.products[0].productId || guide.products[0].reviewSlug), `${guide.slug}: exact lead photo`);
    for (const p of guide.products) {
      const id = p.productId || p.reviewSlug.replace(/-review$/, '');
      assert.ok(!ids.has(id), `${trade}: repeated product ${id}`); ids.add(id);
      if (getProductImage(id)) photos++;
      const u = new URL(p.url);
      assert.equal(u.hostname, 'www.amazon.com');
      assert.equal(u.searchParams.get('tag'), 'robbieom0e-20');
      assert.ok(p.assessment || p.reviewSlug, `${id}: buying assessment`);
      if (p.reviewSlug) {
        const r = reviewMap.get(p.reviewSlug);
        assert.ok(r, `${id}: review exists`);
        assert.equal(`${r.brand} ${r.model}`, `${p.brand} ${p.model}`, `${id}: matching review model`);
        assert.equal(destination(r.amazonUrl), destination(p.url), `${id}: matching review destination`);
      }
    }
  }
  report[trade] = {guides:selected.length, products:ids.size, photos, workflows:workflows.filter(w => w.trade === trade).length};
}
for (const w of plumberWorkflows) for (const t of w.tools) {
  const matches = guides.filter(g => g.trade === 'plumbers').flatMap(g => g.products).filter(p => `${p.brand} ${p.model}` === t.name);
  assert.equal(matches.length, 1, `${w.slug}: exact unique tool ${t.name}`);
  assert.equal(t.amazonUrl, matches[0].url, `${w.slug}: matching affiliate destination`);
}
const photos = new Map();
for (const [id, p] of Object.entries(productImages)) {
  assert.ok(!photos.has(p.src), `Photo reused for ${id} and ${photos.get(p.src)}`);
  photos.set(p.src, id);
  assert.equal(new URL(p.src).protocol, 'https:');
  assert.ok(allowedImageHosts.has(new URL(p.src).hostname), `${id}: image host configured`);
  assert.equal(new URL(p.sourceUrl).protocol, 'https:');
  assert.ok(p.alt && p.credit);
}
assert.equal(plumberCategories.length, 18);
assert.equal(plumberCatalogReviews.length, 17);
assert.ok(report.plumbers.guides >= report.electricians.guides);
assert.ok(report.plumbers.products >= report.electricians.products);
console.log(JSON.stringify({ ...report, newPlumbingReviews:plumberCatalogReviews.length, duplicateImageUrls:0, status:'passed'}, null, 2));
