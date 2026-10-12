export type Assessment = {
 intro:string; verdict:string; bestFor:string; avoidIf:string;
 pros:string[];cons:string[];specs:{label:string;value:string}[];sourceUrl:string;
 analysis:string[];
};
export type ElectricianCandidate = {id:string;brand:string;model:string;role:string;assessment:Assessment};
export type ElectricianCategory = {
 slug:string;title:string;meta:string;keyword:string;secondary:string[];cluster:string;
 answer:string;note:string;criteria:{title:string;body:string}[];faqs:{q:string;a:string}[];
 workflowSlugs:string[];products:ElectricianCandidate[];
};
export function candidate(id:string,brand:string,model:string,role:string,sourceUrl:string,bestFor:string,avoidIf:string,intro:string,verdict:string,pros:string[],cons:string[],specs:[string,string][],analysis:string[]=[]):ElectricianCandidate {
 return {id,brand,model,role,assessment:{sourceUrl,bestFor,avoidIf,intro,verdict,pros,cons,specs:specs.map(([label,value])=>({label,value})),analysis}};
}
