import {plumberHandToolCategories} from './plumber-handtools-catalog';
import {plumberJoiningCategories} from './plumber-joining-catalog';
import {plumberDrainCategories} from './plumber-drain-catalog';
import {plumberDiagnosticCategories} from './plumber-diagnostics-catalog';
import {plumberJobsiteCategories} from './plumber-jobsite-catalog';
import type {Guide} from './data';
import type {ProductReview} from './reviews';
export const plumberCategories=[...plumberHandToolCategories,...plumberJoiningCategories,...plumberDrainCategories,...plumberDiagnosticCategories,...plumberJobsiteCategories];
export const plumberCatalogGuides:Guide[]=plumberCategories.map(c=>({trade:'plumbers',tradeName:'Plumbers',slug:c.slug,title:c.title,meta:c.meta,keyword:c.keyword,secondary:c.secondary,cluster:c.cluster,workflowSlugs:c.workflowSlugs,
 products:c.products.map((p,i)=>({brand:p.brand,model:p.model,role:p.role,productId:p.id,assessment:p.assessment,reviewSlug:p.reviewSlug||(i===0?`${p.id}-review`:undefined),url:`https://www.amazon.com/s?k=${encodeURIComponent(`${p.brand} ${p.model}`)}&tag=robbieom0e-20`}))}));
export const plumberCatalogReviews:ProductReview[]=plumberCategories.flatMap((c,i)=>{
 const p=c.products[0],a=p.assessment;
 if(p.reviewSlug) return [];
 return [{slug:`${p.id}-review`,trade:'plumbers',tradeName:'Plumbers',guideSlug:c.slug,guideTitle:c.title,brand:p.brand,model:p.model,role:p.role,amazonUrl:plumberCatalogGuides[i].products[0].url,
 title:`${p.brand} ${p.model} Review: Plumbing Job Fit and Purchase Checks`,meta:`${p.brand} ${p.model.split(' ')[0]} review for plumbers: documented configuration, suitable jobs, limitations and alternatives. Research-based buying assessment.`,sourceUrl:a.sourceUrl,
 intro:a.intro,verdict:a.verdict,bestFor:a.bestFor,avoidIf:a.avoidIf,pros:a.pros,cons:a.cons,specs:a.specs,sections:c.leadSections,
 faqs:[...c.faqs,{q:'Was this tool independently tested?',a:'No. This review uses manufacturer documentation and task-fit analysis. It does not claim measured field performance, durability or comparative test results.'}],
 sourceNote:'Use the linked manufacturer documentation to confirm the exact model, approved application and package. This is a research-based buying assessment, not a hands-on field test.'}];
});
