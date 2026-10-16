import editorial from './automotive-review-editorial.json';
import specifications from './automotive-review-specifications.json';
import {automotiveProducts, automotiveCategories, automotiveJobs, type AutomotiveProduct} from './automotive-catalog';
import type {ProductReview} from './reviews';

type EditorialRecord = typeof editorial[keyof typeof editorial];
const entries:Record<string,EditorialRecord> = editorial;
const specs:Record<string,{label:string;value:string}[]> = specifications;
const extraSources:Record<string,{label:string;url:string}[]> = {
 'autel-mk900-bt':[
  {label:'Autel MK900 series operating manual',url:'https://www.autel.com/u/cms/www/202402/26082614tk3o.pdf'},
  {label:'Autel North America: secure gateways and regional subscription requirements',url:'https://autel.us/security-gateways/'},
  {label:'Innova 5610: coverage, update policy and AutoAuth limitations',url:'https://www.innova.com/products/carscan-pro-5610'},
 ],
 'tekton-trq52403':[
  {label:'TEKTON micrometer torque wrench operating manual',url:'https://media.tekton.com/docs/Tekton-Micrometer-Torque-Wrenches-Product-Manual.pdf'},
  {label:'TEKTON recertification service',url:'https://www.tekton.com/torque-wrench-recertification-service'},
 ],
 'tekton-trq50402':[{label:'TEKTON micrometer torque wrench operating manual',url:'https://media.tekton.com/docs/Tekton-Micrometer-Torque-Wrenches-Product-Manual.pdf'}],
 'esco-10498-pair':[{label:'ESCO current 10497/10498/10499 operating instructions (April 2025)',url:'https://esco.net/wp-content/uploads/2025/05/10497_10498_10498_Instructions-04.25.A.pdf'}],
 'innova-5610':[{label:'Innova vehicle and function coverage checker',url:'https://www.innova.com/pages/coverage'}],
};

export function getAutomotiveReview(p:AutomotiveProduct):ProductReview {
 const e=entries[p.id];
 const guide=automotiveCategories.find(c=>c.productIds.includes(p.id))!;
 return {
  productId:p.existingCanonicalId || p.id,slug:p.id,trade:'automotive-mechanics',tradeName:'Automotive Mechanics',
  guideSlug:guide.slug,guideTitle:guide.title,brand:p.brand,model:p.model,
  title:`${p.brand} ${p.model} Review: ${e.headline}`,meta:`${p.brand} ${p.model}: ${e.headline}. ${p.intro}`,
  role:p.name,amazonUrl:p.amazonUrl,sourceUrl:p.sourceUrl,intro:p.intro,
  verdict:e.verdict,bestFor:e.bestFor,avoidIf:e.avoidIf,pros:e.pros,cons:e.cons,
  specs:specs[p.id],sections:e.sections,faqs:e.faqs,
  sourceNote:'Reviewed October 16, 2026 using the linked manufacturer product information and available operating documentation, together with the exact-model listing research. Technical figures are manufacturer claims; job suitability and comparisons are TradeGear HQ editorial analysis of those documented features. We have not verified every vehicle application, measured accuracy, tested load capacity or assessed long-term durability. Open the current manual and vehicle service information before use. Customer feedback and numeric ratings are displayed only when a verified record is available; their absence is not a negative rating.',
  extraSources:extraSources[p.id],
 };
}

export function automotiveReviewLinks(p:AutomotiveProduct) {
 const guides=automotiveCategories.filter(c=>c.productIds.includes(p.id));
 const ids=[...new Set(guides.flatMap(c=>c.productIds))].filter(id=>id!==p.id);
 // For mixed-function groups, explain the distinct job instead of implying a ranking.
 const alternatives=ids.slice(0,4).map(id=>{
  const a=automotiveProducts.find(x=>x.id===id)!;
  return {url:`/automotive-mechanics/products/${a.id}/`,brand:a.brand,model:a.model,
   role:`${a.name}. ${a.specifications.slice(0,2).join('; ')}. ${a.advice}`};
 });
 const workflows=automotiveJobs.filter(w=>w.productIds.includes(p.id)||w.guideSlugs.some(s=>guides.some(g=>g.slug===s)));
 return {alternatives,workflows};
}

// Brief exact-model editorial quotation; no reviewer identity, occupation or purchase status inferred.
export const automotiveFeedback = [{
 productId:'innova-5610',trade:'automotive-mechanics' as const,brand:'Innova',modelNumber:'5610',
 author:'Anonymous customer quoted by Innova',avatar:'',
 context:'Manufacturer-selected customer quotation · August 10, 2025',
 source:'Innova 5610 product page',url:'https://www.innova.com/products/carscan-pro-5610',
 summary:'The best part about this tool is no cost for updates ever.',
 quote:'The best part about this tool is no cost for updates ever.',
 match:'Exact model' as const,permission:'pending' as const,sourceConfirmed:true,
 caveat:'Short editorial excerpt checked October 16, 2026 on the exact 5610 page. Innova attributes the original to an Amazon customer; we have not independently verified the original Amazon review, purchase or identity. This is a manufacturer-selected testimonial, not a representative review sample or an Amazon rating. Explicit republication permission is not documented.',
}];
