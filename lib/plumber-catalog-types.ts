import type { Assessment } from './electrician-catalog-types';
export type PlumberCandidate = { id:string; brand:string; model:string; role:string; assessment:Assessment; reviewSlug?:string };
export type PlumberCategory = {
 slug:string; title:string; meta:string; keyword:string; secondary:string[]; cluster:string;
 answer:string; note:string; criteria:{title:string;body:string}[]; faqs:{q:string;a:string}[];
 workflowSlugs:string[]; products:PlumberCandidate[]; leadSections:{heading:string;body:string}[];
};
export function pick(id:string,brand:string,model:string,role:string,sourceUrl:string,bestFor:string,avoidIf:string,intro:string,verdict:string,pros:string[],cons:string[],specs:[string,string][],analysis:string[]=[]):PlumberCandidate {
 return {id,brand,model,role,assessment:{sourceUrl,bestFor,avoidIf,intro,verdict,pros,cons,specs:specs.map(([label,value])=>({label,value})),analysis}};
}
export const job = {
 service:'plumber-residential-service-call-tool-kit',leak:'plumber-leak-detection-tool-kit',drain:'plumber-drain-clearing-tool-kit',bath:'plumber-bathroom-installation-tool-kit',pipe:'plumber-pipe-repair-tool-kit',heater:'plumber-water-heater-service-tool-kit',apprentice:'plumber-apprentice-starter-kit',van:'plumber-van-and-tool-bag-setup'
};
