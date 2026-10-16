import type {AutomotiveProduct} from './automotive-catalog';
import {getAutomotiveReview} from './automotive-reviews';

// Google's editorial pros/cons pattern does not require inventing a numeric score.
// Retailer customer ratings are deliberately outside this editorial Review.
export function automotiveProductSchema(p:AutomotiveProduct,siteUrl:string) {
 const r=getAutomotiveReview(p);
 const url=new URL(`/automotive-mechanics/products/${p.id}/`,siteUrl).href;
 const notes=(items:string[])=>({
  '@type':'ItemList',
  itemListElement:items.map((name,i)=>({'@type':'ListItem',position:i+1,name})),
 });
 return {
  '@context':'https://schema.org',
  '@type':'Product',
  '@id':`${url}#product`,
  url,
  name:`${p.brand} ${p.model} — ${p.name}`,
  brand:{'@type':'Brand',name:p.brand},
  model:p.model,
  description:p.intro,
  image:[new URL(p.image.src,siteUrl).href],
  additionalProperty:r.specs.map(s=>({'@type':'PropertyValue',name:s.label,value:s.value})),
  review:{
   '@type':'Review',
   '@id':`${url}#editorial-review`,
   url,
   name:r.title,
   inLanguage:'en-US',
   author:{'@type':'Organization',name:'TradeGear HQ editorial desk',url:new URL('/how-we-choose/',siteUrl).href},
   dateModified:'2026-10-16',
   reviewBody:`${r.intro}\n\n${r.verdict}\n\n${r.sourceNote}`,
   positiveNotes:notes(r.pros),
   negativeNotes:notes(r.cons),
  },
 };
}

export function serializeProductSchema(schema:ReturnType<typeof automotiveProductSchema>) {
 return JSON.stringify(schema).replace(/</g,'\\u003c');
}
