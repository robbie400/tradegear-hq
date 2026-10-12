import {electricianReviewContext,electricianProductQuestions} from "./electrician-review-context";
import {testingCategories} from './electrician-testing-catalog';
import {identificationCategories} from './electrician-identification-catalog';
import {handToolCategories} from './electrician-handtools-catalog';
import {powerCategories} from './electrician-power-catalog';
import {jobsiteCategories} from './electrician-jobsite-catalog';
import type {Guide} from './data';
import type {ProductReview} from './reviews';
export const electricianCategories=[...testingCategories,...identificationCategories,...handToolCategories,...powerCategories,...jobsiteCategories];
export const electricianCatalogGuides:Guide[]=electricianCategories.map(c=>({
 trade:'electricians',tradeName:'Electricians',slug:c.slug,title:c.title,meta:c.meta,keyword:c.keyword,secondary:c.secondary,cluster:c.cluster,workflowSlugs:c.workflowSlugs,
 products:c.products.map((p,i)=>({brand:p.brand,model:p.model,role:p.role,productId:p.id,assessment:p.assessment,reviewSlug:i===0?`${p.id}-review`:undefined,url:`https://www.amazon.com/s?k=${encodeURIComponent(`${p.brand} ${p.model}`)}&tag=robbieom0e-20`}))
}));
const reviewTitles:Record<string,string>={
"fluke-323":"Fluke 323 Review: AC Current for an Electrician Service Kit",
"klein-ncvt-3p":"Klein NCVT-3P Review: Indication, Range and Limitations",
"klein-et310":"Klein ET310 Review: Receptacle Circuit Identification",
"klein-et450":"Klein ET450 Review: Advanced Tracing or Simple Finder?",
"klein-rt250":"Klein RT250 Review: LCD Outlet and GFCI Checks",
"klein-11055":"Klein 11055 Review: Manual Stripping for Service Work",
"klein-j2000-9ne":"Klein J2000-9NE Review: Everyday Lineman’s Pliers",
"klein-32288":"Klein 32288 Review: Insulated Interchangeable Drivers",
"milwaukee-2505-20":"Milwaukee 2505-20 Review: M12 Installation Driver",
"milwaukee-3453-20":"Milwaukee 3453-20 Review: M12 Service Fastening",
"klein-56331":"Klein 56331 Review: 50-Foot Steel Fish Tape",
"milwaukee-2367-20":"Milwaukee 2367-20 Review: M12 ROVER Service Lighting",
"veto-tech-pac":"Veto TECH PAC Review: Organizing an Electrician Service Kit"
};
export const electricianCatalogReviews:ProductReview[]=electricianCategories.map((c,i)=>{
 const p=c.products[0],a=p.assessment,g=electricianCatalogGuides[i];
 return {slug:`${p.id}-review`,trade:'electricians',tradeName:'Electricians',guideSlug:c.slug,guideTitle:c.title,brand:p.brand,model:p.model,role:p.role,amazonUrl:g.products[0].url,
 title:reviewTitles[p.id] || `${p.brand} ${p.model} Review`,meta:`${p.brand} ${p.model.split(" ")[0]} review: check documented features, job fit, limitations and alternatives before buying for an electrician kit. Research-based assessment.`,
 sourceUrl:a.sourceUrl,intro:a.intro,verdict:a.verdict,bestFor:a.bestFor,avoidIf:a.avoidIf,pros:a.pros,cons:a.cons,specs:a.specs,
 sections:[...a.analysis.map((body,j)=>({heading:[`Where ${p.model} fits in the kit`,'The decision that matters','Alternatives and purchase checks'][j]||'Buying considerations',body})),electricianReviewContext[p.id]],
 faqs:[...electricianProductQuestions[p.id],{q:`Who should buy ${p.brand} ${p.model}?`,a:a.bestFor},{q:'When should I choose a different tool?',a:a.avoidIf},{q:'Was this product hands-on tested?',a:'No. This review uses manufacturer documentation and task-fit analysis. It does not claim measured durability, speed, comfort or field performance.'}],
 sourceNote:'Specifications and configuration were checked against the linked manufacturer source. The analysis explains buying fit; it is not a claim of independent laboratory or jobsite testing.'
 };
});
