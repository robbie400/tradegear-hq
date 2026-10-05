import {pick, type PlumberCategory, type PlumberCandidate} from './plumber-catalog-types';
export function tool(id:string,brand:string,model:string,role:string,source:string,fit:string,limit:string,features:[string,string][],benefits:string[],tradeoffs:string[]):PlumberCandidate {
 return pick(id,brand,model,role,source,fit,limit,
 `${brand} ${model} earns consideration for ${fit.charAt(0).toLowerCase()+fit.slice(1)} ${benefits.join('. ')}. The important distinction is the exact configuration and the work it can cover.`,
 `Choose this option when that job fit matches your recurring work. ${limit} Compare the complete package, including accessories and any separately required power or viewing equipment, before deciding on value.`,benefits,tradeoffs,features);
}
export function category(slug:string,title:string,cluster:string,answer:string,note:string,criteria:{title:string;body:string}[],faqs:{q:string;a:string}[],workflowSlugs:string[],products:PlumberCandidate[],leadSections:{heading:string;body:string}[]):PlumberCategory {
 return {slug,title,cluster,answer,note,criteria,faqs,workflowSlugs,products,leadSections,keyword:slug.replace(/^best-/,'best ').replace(/-/g,' '),secondary:[],meta:`${title.replace(/:.*$/,'')}: compare ${products.map(p=>p.brand+' '+p.model.split(' ')[0]).join(', ')} by job fit, configuration and limitations.`};
}
