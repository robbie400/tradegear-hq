import records from './automotive-products.json';
import categories from './automotive-guides.json';
import jobs from './automotive-workflows.json';
import handGroups from './automotive-hand-tool-groups.json';
import type {Guide} from './data';
import type {Workflow} from './workflows';
import type {ProductImage} from './product-images';

export const automotiveTrade='automotive-mechanics';
// Owner review and image-rights clearance are required before production publication.
// The protected Vercel preview is for evaluation; it is not a licence assertion.
export const automotiveEnabled=process.env.VERCEL_ENV!=='production';
export const automotiveProducts=records;
export type AutomotiveProduct=typeof records[number];
export const automotiveCategories=categories;
export const automotiveJobs=jobs;
export const automotiveHandGroups=handGroups;
export const getAutomotiveProduct=(id:string)=>records.find(p=>p.id===id);
export const automotivePhoto=(p:AutomotiveProduct):ProductImage=>p.image;
export const automotiveHub={slug:automotiveTrade,name:'Automotive Mechanics',blurb:'Diagnostics, hand tools, lifting, oil servicing and workshop equipment. Choose the tools for the vehicles and jobs you work on.',image:records[0].image.src};
export const automotiveGuides:Guide[]=categories.map(c=>({trade:automotiveTrade,tradeName:'Automotive Mechanics',slug:c.slug,title:c.title,keyword:c.title.toLowerCase(),meta:c.answer+' '+c.body,cluster:c.title,products:c.productIds.map(id=>{const p=getAutomotiveProduct(id)!;return {productId:p.id,brand:p.brand,model:p.model,url:p.amazonUrl,role:p.name,assessment:{intro:p.intro,verdict:p.advice,bestFor:p.name,avoidIf:p.advice,sourceUrl:p.sourceUrl,pros:[],cons:[],specs:p.specifications.map((s,i)=>({label:`Specification ${i+1}`,value:s})),analysis:[]}};})}));
export const automotiveWorkflows:Workflow[]=jobs.map(w=>({trade:automotiveTrade,tradeName:'Automotive Mechanics',slug:w.slug,title:w.title,meta:w.summary,keyword:w.title.toLowerCase(),summary:w.body,heroImage:records[0].image.src,stages:[],tools:w.productIds.map(id=>{const p=getAutomotiveProduct(id)!;return {stage:p.category,type:p.name,name:`${p.brand} ${p.model}`,why:p.advice,amazonUrl:p.amazonUrl,guideUrl:`/${automotiveTrade}/${categories.find(c=>c.productIds.includes(p.id))!.slug}/`,reviewUrl:`/${automotiveTrade}/products/${p.id}/`,priority:'Useful' as const};}),faqs:[],notes:[w.caution]}));
