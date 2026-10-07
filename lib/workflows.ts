import {hvacWorkflows} from "./hvac-workflows";
import {plumberWorkflows} from './plumber-workflows';
import {additionalElectricianWorkflows} from "./electrician-workflows";
import {guides} from "./data";
export type WorkflowTool = {
  stage:string;
  type:string;
  name:string;
  why:string;
  amazonUrl:string;
  reviewUrl?:string;
  guideUrl?:string;
  priority:"Core"|"Useful"|"Upgrade";
};

export type Workflow = {
  trade:string;
  tradeName:string;
  slug:string;
  title:string;
  meta:string;
  keyword:string;
  summary:string;
  heroImage:string;
  stages:{name:string;description:string}[];
  tools:WorkflowTool[];
  faqs:{q:string;a:string}[];
  notes?:string[];
};

export const workflows:Workflow[] = [
  {
    trade:"electricians",
    tradeName:"Electricians",
    slug:"electrician-service-call-tool-kit",
    title:"Electrician Service Call Tool Kit: What to Carry for Residential Troubleshooting",
    meta:"A workflow-based electrician service-call tool kit for residential troubleshooting: safety checks, fault finding, circuit identification, repair and final verification.",
    keyword:"electrician service call tools",
    summary:"A good service-call kit is not the biggest bag in the van. It is the smallest dependable set of tools that lets you make the circuit safe, measure what is happening, identify the fault, complete the common repair and prove the job is safe before you leave.",
    heroImage:"https://images.pexels.com/photos/29491360/pexels-photo-29491360.jpeg?cs=srgb&dl=pexels-elvan-lam-1105439946-29491360.jpg&fm=jpg",
    stages:[
      {name:"1. Make safe",description:"Confirm the work area, isolate where required and verify before touching conductors or equipment."},
      {name:"2. Diagnose",description:"Use the meter, clamp meter and simple testers to turn a vague symptom into measurements you can act on."},
      {name:"3. Identify",description:"Trace the circuit, locate the right breaker and confirm outlets, switches and downstream devices."},
      {name:"4. Repair",description:"Handle the everyday cutting, stripping, fastening and connection work without returning to the van for basics."},
      {name:"5. Verify",description:"Retest the circuit, confirm operation and leave the customer with a clear explanation of what was found and changed."}
    ],
    tools:[
      {stage:"Make safe / diagnose",type:"Digital multimeter",name:"Fluke 117 Electrician’s Multimeter",why:"A strong everyday electrical meter for service work where voltage, continuity, resistance, capacitance and frequency measurements are part of the diagnosis.",amazonUrl:"https://www.amazon.com/dp/B000O3LUEI/ref=nosim?tag=robbieom0e-20",reviewUrl:"/reviews/fluke-117-review/",priority:"Core"},
      {stage:"Make safe",type:"Non-contact voltage tester",name:"Klein Tools NCVT-3P",why:"Fast first-pass voltage indication and a useful pocket tool before deeper testing. It does not replace proper absence-of-voltage verification where that is required.",amazonUrl:"https://www.amazon.com/s?k=Klein+NCVT-3P&tag=robbieom0e-20",priority:"Core"},
      {stage:"Diagnose",type:"Clamp meter",name:"Fluke 323 True-RMS Clamp Meter",why:"Lets a technician check current without breaking the circuit, useful when the complaint is load-related or intermittent.",amazonUrl:"https://www.amazon.com/s?k=Fluke+323+True-RMS+Clamp+Meter&tag=robbieom0e-20",priority:"Core"},
      {stage:"Identify",type:"Circuit breaker finder",name:"Klein Tools ET310 Circuit Breaker Finder",why:"Useful when panel labels are poor or the customer cannot identify the circuit, reducing trial-and-error at the panel.",amazonUrl:"https://www.amazon.com/s?k=Klein+ET310+Circuit+Breaker+Finder&tag=robbieom0e-20",priority:"Useful"},
      {stage:"Verify",type:"Receptacle / GFCI tester",name:"Klein Tools RT250 GFCI Receptacle Tester",why:"A quick outlet-side check for common wiring conditions and GFCI testing after work on receptacle circuits.",amazonUrl:"https://www.amazon.com/s?k=Klein+RT250+GFCI+Receptacle+Tester&tag=robbieom0e-20",priority:"Core"},
      {stage:"Repair",type:"Lineman’s pliers",name:"Klein Tools J2000-9NE Journeyman Pliers",why:"The everyday gripping, twisting and cutting tool that earns a permanent place in a residential service bag.",amazonUrl:"https://www.amazon.com/s?k=Klein+J2000-9NE&tag=robbieom0e-20",priority:"Core"},
      {stage:"Repair",type:"Wire stripper",name:"Klein Tools 11055 Wire Stripper/Cutter",why:"Covers the common stripping and cutting work that follows once the fault is found and a device or conductor needs attention.",amazonUrl:"https://www.amazon.com/s?k=Klein+11055+Wire+Stripper&tag=robbieom0e-20",priority:"Core"},
      {stage:"Repair",type:"Compact driver",name:"Milwaukee M12 Installation Drill/Driver",why:"A compact cordless option for device swaps, boxes, covers and lighter fastening work where a full-size drill can be awkward.",amazonUrl:"https://www.amazon.com/s?k=Milwaukee+M12+Installation+Drill+Driver&tag=robbieom0e-20",priority:"Useful"},
      {stage:"Diagnose / repair",type:"Work light",name:"Milwaukee M12 ROVER Service and Repair Flood Light",why:"Service calls regularly end up in panels, basements, crawlspaces and utility rooms where good task lighting is part of doing careful work.",amazonUrl:"https://www.amazon.com/s?k=Milwaukee+M12+ROVER+Service+Repair+Flood+Light&tag=robbieom0e-20",priority:"Useful"},
      {stage:"Whole call",type:"Tool bag",name:"Veto Pro Pac TECH PAC",why:"A structured backpack can keep test gear, hand tools and small service items visible and separated so the call does not turn into a search through one deep bag.",amazonUrl:"https://www.amazon.com/s?k=Veto+Pro+Pac+TECH+PAC&tag=robbieom0e-20",priority:"Upgrade"}
    ],
    faqs:[
      {q:"What tools should an electrician carry on a residential service call?",a:"At minimum, carry a dependable meter, voltage tester, core hand tools, stripping/cutting tools, outlet-testing gear, lighting and the small fastening tools needed for common device repairs. Add tracing and clamp-meter equipment when fault finding is a regular part of the work."},
      {q:"Do I need both a multimeter and a clamp meter?",a:"Not for every call, but they solve different problems. A multimeter handles a broad range of electrical measurements; a clamp meter is especially useful when current draw matters and you want to measure without opening the circuit."},
      {q:"Should apprentices buy every tool on this list immediately?",a:"No. Start with the core hand tools and test equipment required by your employer or training program. Add specialty diagnostic tools as the work you actually perform justifies them."},
      {q:"Is a non-contact voltage tester enough to prove a circuit is dead?",a:"No. Treat it as a convenient screening tool, not a universal substitute for the safe isolation and verification procedure required for the task, workplace and jurisdiction."},
      {q:"Why organize the kit by workflow instead of by tool type?",a:"Because service work is a sequence: make safe, diagnose, identify, repair and verify. Organizing recommendations around that sequence makes it easier to see why a tool deserves space in the bag."}
    ]
  }
];

workflows.push(...additionalElectricianWorkflows);
const service = workflows[0];
const serviceCategories=["best-multimeters-for-electricians","best-voltage-testers-for-electricians","best-clamp-meters-for-electricians","best-circuit-breaker-finders-for-electricians","best-receptacle-testers-for-electricians","best-linemans-pliers-for-electricians","best-wire-strippers-for-electricians","best-cordless-drills-for-electricians","best-work-lights-for-electricians","best-tool-backpacks-for-electricians"];
service.tools.forEach((tool,i)=>{const g=guides.find(g=>g.slug===serviceCategories[i]);if(!g)throw Error(serviceCategories[i]);const p=g.products[0];tool.name=`${p.brand} ${p.model}`;tool.amazonUrl=p.url;tool.guideUrl=`/electricians/${g.slug}/`;tool.reviewUrl=p.reviewSlug?`/reviews/${p.reviewSlug}/`:undefined;});
service.notes=["Confirm employer-required PPE, isolation equipment, measuring and marking tools, consumables and any specified torque or specialist test equipment. This is an everyday service shortlist, not a complete safety equipment list.","Follow the instrument instructions and the required qualified-work procedure. A non-contact indicator or plug-in tester cannot independently prove the whole installation safe."];

export function getWorkflow(trade:string,slug:string){return workflows.find(w=>w.trade===trade&&w.slug===slug)}
export function getTradeWorkflows(trade:string){return workflows.filter(w=>w.trade===trade)}

workflows.push(...plumberWorkflows);

workflows.push(...hvacWorkflows);
