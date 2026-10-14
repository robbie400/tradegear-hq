// Catalogue-wide inventory. --require-complete fails until every entry has a sourced score.
require('./catalog-runtime.cjs');
const fs=require('node:fs');
const {guides}=require('../lib/data.ts');
const {getProductRating}=require('../lib/product-ratings.ts');
const entries=guides.flatMap(g=>g.products.map(p=>{
 const rating=getProductRating(g.trade,p.brand,p.model);
 const url=new URL(p.url);
 if(!(url.hostname==='amazon.com'||url.hostname.endsWith('.amazon.com'))||!url.searchParams.get('tag'))throw new Error(`Missing tagged Amazon destination: ${g.trade}/${p.brand}/${p.model}`);
 return {trade:g.trade,productId:p.productId||p.reviewSlug,brand:p.brand,model:p.model,guidePath:`/${g.trade}/${g.slug}`,reviewPath:p.reviewSlug?`/reviews/${p.reviewSlug}`:null,amazonUrl:p.url,rating:rating?{score:rating.value,count:rating.countDisplay||rating.count,source:rating.source,sourceUrl:rating.url,checkedDate:rating.checkedDate}:null,status:rating?'sourced-score':'missing-score'};
}));
const byTrade=Object.fromEntries([...new Set(entries.map(e=>e.trade))].map(t=>{const es=entries.filter(e=>e.trade===t);return [t,{entries:es.length,sourced:es.filter(e=>e.rating).length,missing:es.filter(e=>!e.rating).length}]}));
const report={total:entries.length,sourced:entries.filter(e=>e.rating).length,missing:entries.filter(e=>!e.rating).length,complete:entries.every(e=>e.rating),byTrade,entries};
if(process.argv.includes('--save'))fs.writeFileSync(`docs/product-rating-coverage-${new Date().toISOString().slice(0,10)}.json`,JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({...report,entries:undefined},null,2));
if(process.argv.includes('--require-complete')&&!report.complete)process.exitCode=1;
