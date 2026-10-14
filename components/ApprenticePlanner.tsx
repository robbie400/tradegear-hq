"use client";

import {useMemo, useState} from "react";
import styles from "./ApprenticePlanner.module.css";

export type PlannerProduct = {
  id: string;
  name: string;
  detailHref: string;
  amazonUrl: string;
  detailLabel: string;
};

type ToolCategory = {
  id: string;
  name: string;
  aliases: string[];
  productId?: string;
  note?: string;
};

// Deliberately small, traceable pilot mapping. A product is suggested only where
// its published model fits the category; a loose keyword match is not enough.
const categories: ToolCategory[] = [
  {id:"lock",name:"Tool-box lock",aliases:["tool box lock","toolbox lock","padlock","box lock"],note:"Check whether your training programme requires a lockable box."},
  {id:"toolbox",name:"Tool box or tool bag",aliases:["tool box","toolbox","lockable tool bag","lockable toolbox","tool bag","tool tote"],note:"Check whether a lockable container is required. We have not matched a verified lockable model."},
  {id:"hammer",name:"Straight-claw hammer",aliases:["claw hammer","straight claw hammer","16 oz hammer","hammer"],note:"Some published lists specify 16 oz. Our existing reviewed Estwing is 20 oz, so it is not presented as an exact match."},
  {id:"utility-knife",name:"Utility knife",aliases:["utility knife","retractable knife","knife","box cutter"],productId:"stanley-stht10721"},
  {id:"adjustable-wrench",name:"Adjustable wrench",aliases:["crescent wrench","adjustable wrench","10-12 inch wrench","10 inch wrench","12 inch wrench"],note:"Pliers wrenches and pipe wrenches are not assumed to meet an adjustable-wrench requirement."},
  {id:"tongue-pliers",name:"Tongue-and-groove pliers",aliases:["channel lock","channellock","channel-lock","tongue and groove pliers","water pump pliers"],productId:"channellock-440",note:"If your list specifies two pairs, confirm sizes and quantities. This link is for one model."},
  {id:"flashlight",name:"Handheld flashlight",aliases:["flashlight","torch"],note:"Jobsite floodlights and headlamps are not automatically substituted for a handheld flashlight."},
  {id:"lineman-pliers",name:"Lineman's pliers",aliases:["lineman","linesman","side cutter 9","lineman pliers"],productId:"klein-j2000-9ne"},
  {id:"wire-strippers",name:"Wire strippers",aliases:["wire stripper","wirestripper","cable stripper"],productId:"klein-11055",note:"Confirm the wire sizes required by your programme."},
  {id:"hacksaw",name:"Hacksaw",aliases:["hacksaw","hack saw"],note:"No verified exact-match product in the current catalogue."},
  {id:"torpedo-level",name:"Torpedo level",aliases:["torpedo level","magnetic level","small level"],note:"The existing 48-inch box level is not an equivalent to a torpedo level."},
  {id:"tape-measure",name:"Tape measure",aliases:["tape measure","measuring tape","power return tape","12 foot tape","25 ft tape"],productId:"stanley-33-725",note:"The recommended 25-ft model exceeds a 12-ft minimum, where permitted."},
  {id:"screwdrivers",name:"Screwdrivers",aliases:["screwdriver","phillips and blade","flat head driver","flathead screwdriver","phillips driver"],productId:"klein-32288",note:"Check that the supplied heads, insulation rating and individual sizes meet your list."},
  {id:"diagonal-pliers",name:"Diagonal cutting pliers",aliases:["diagonal pliers","diagonal cutters","wire cutters","dikes"],note:"No exact matched product in the current catalogue."},
  {id:"long-nose",name:"Long-nose pliers",aliases:["needle nose pliers","needle-nose pliers","long nose pliers","long-nose pliers"],note:"No exact matched product in the current catalogue."},
  {id:"electrical-tester",name:"Voltage tester",aliases:["voltage tester","electrical tester","cat iii tester"],productId:"fluke-t5-600",note:"Electrical testing is safety-critical. Only trained and authorised people should test, with the rating and procedure required by their supervisor."},
  {id:"multimeter",name:"Multimeter",aliases:["multimeter","volt ohm meter","volt-ohm meter","digital meter"],productId:"fluke-117-review",note:"Confirm required measurement functions and safety category before purchasing."},
  {id:"fish-tape",name:"Fish tape",aliases:["fish tape"],productId:"klein-56331"},
];

const sampleList = [
  "Tool box", "Tool box lock", "16 oz straight-claw hammer", "Utility knife",
  "10-12 inch Crescent wrench", "2 pairs of Channel Lock pliers", "Flashlight",
  "Lineman's pliers", "Wire strippers", "Hacksaw", "Torpedo level",
  "12-foot tape measure", "Phillips and flat screwdrivers", "Diagonal pliers",
].join("\n");

type ItemStatus = "buy" | "owned" | "provided" | "ask";
type Item = {id:number; label:string; categoryId:string; status:ItemStatus; estimatedPrice:string};

function normalize(value:string) {
  return value.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g,"")
    .replace(/[^a-z0-9]+/g," ").trim();
}
function findCategory(text:string) {
  const normal = normalize(text);
  return categories.find(c=>c.aliases.some(alias=>normal.includes(normalize(alias))))?.id || "";
}
function formattedCurrency(value:number) {
  return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:2}).format(value);
}

export function ApprenticePlanner({products}:{products:Record<string,PlannerProduct>}) {
  const [listText,setListText] = useState("");
  const [budget,setBudget] = useState("300");
  const [employer,setEmployer] = useState("unknown");
  const [items,setItems] = useState<Item[]>([]);
  const [built,setBuilt] = useState(false);
  const [copyState,setCopyState] = useState("");

  const summary = useMemo(()=>{
    const buying=items.filter(item=>item.status==="buy");
    const priced=buying.filter(item=>item.estimatedPrice.trim()!=="" && Number.isFinite(Number(item.estimatedPrice)) && Number(item.estimatedPrice)>=0);
    const subtotal=priced.reduce((total,item)=>total+Number(item.estimatedPrice),0);
    const limit=Number(budget);
    return {buying,priced:priced.length,unpriced:buying.length-priced.length,subtotal,
      budget:Number.isFinite(limit)&&limit>=0?limit:0,
      own:items.filter(item=>item.status==="owned").length,
      supplied:items.filter(item=>item.status==="provided").length,
      ask:items.filter(item=>item.status==="ask").length};
  },[items,budget]);

  function makePlan(){
    const rows=listText.split(/\r?\n/).map(line=>line.replace(/^\s*(?:[-*•]|\d+[.)])\s*/,"").trim()).filter(Boolean).slice(0,50);
    setItems(rows.map((label,id)=>({id,label,categoryId:findCategory(label),status:"buy",estimatedPrice:""})));
    setBuilt(true);
    setCopyState("");
  }
  function patchItem(id:number,change:Partial<Item>) {
    setItems(prev=>prev.map(item=>item.id===id?{...item,...change}:item));
  }
  function formatPlan() {
    return [
      "TradeGear HQ - Apprentice Tool List & Budget Plan",
      "Electrician pilot | Personal budget: " + formattedCurrency(summary.budget),
      "Employer tool provision: " + employer,
      "Reminder: Confirm the official list and employer-provided equipment before purchasing.",
      "",
      ...items.map(item=>{
        const cat=categories.find(c=>c.id===item.categoryId);
        const product=cat?.productId?products[cat.productId]:undefined;
        return "["+item.status.toUpperCase()+"] "+item.label+(item.estimatedPrice?" | Your estimate: $"+item.estimatedPrice:"")+
          (product?" | Read: https://tradegearhq.com"+product.detailHref:"");
      }),
      "",
      "Entered purchase estimates: "+formattedCurrency(summary.subtotal)+" for "+summary.priced+" of "+summary.buying.length+" items to buy.",
      summary.unpriced?"Totals incomplete: "+summary.unpriced+" items lack an estimate.":"",
      "Free planning aid, not an official training list. Amazon prices must be checked at checkout."
    ].join("\n");
  }
  async function copyPlan() {
    try {
      await navigator.clipboard.writeText(formatPlan());
      setCopyState("Copied");
    } catch {
      setCopyState("Copy unavailable on this browser; use Print instead.");
    }
  }

  return <div className={styles.planner}>
    <div className={styles.notice}>
      <strong>Electrician pilot only.</strong> This is an early research-based planning aid, not an official union or employer list. It does not replace apprenticeship instructions or electrical safety training.
    </div>
    <div className={styles.formGrid}>
      <section className={styles.panel}>
        <span className={styles.step}>01 / YOUR REQUIREMENTS</span>
        <h2>Start with your actual tool list.</h2>
        <p>Already have a checklist from your employer, school or local? Paste it below, one tool per line. Or load a sample to test the planner.</p>
        <div className={styles.buttonRow}>
          <button type="button" className={styles.outlineButton} onClick={()=>{setListText(sampleList);setBuilt(false)}}>Try an electrician sample list</button>
          <button type="button" className={styles.textButton} onClick={()=>{setListText("");setBuilt(false)}}>Clear list</button>
        </div>
        <label htmlFor="required-tools" className={styles.label}>Your required tools</label>
        <textarea id="required-tools" className={styles.listInput} rows={10} value={listText}
          onChange={event=>{setListText(event.target.value);setBuilt(false)}} placeholder={"Lineman's pliers\nWire strippers\n12-foot tape measure\n..."} maxLength={6000}/>
        <div className={styles.smallNote}>Maximum 50 lines in this pilot. Suggestions are based on a limited verified catalogue mapping; unmatched tools remain on your list.</div>
        <div className={styles.sourceNote}>Sample inspired by the published <a href="https://www.ibewlocal340.org/tool-list/" target="_blank" rel="noopener noreferrer">IBEW Local 340 apprentice tool list ↗</a>. Always use the requirements provided to you personally.</div>
      </section>
      <section className={styles.panel}>
        <span className={styles.step}>02 / YOUR CIRCUMSTANCES</span>
        <h2>Set your spending limit.</h2>
        <p>We'll help you track the tools you need to buy, what you already have and what the employer may provide.</p>
        <label className={styles.label} htmlFor="budget">Available budget (US dollars)</label>
        <div className={styles.moneyField}><span>$</span><input id="budget" type="number" min="0" step="1" value={budget} onChange={event=>setBudget(event.target.value)}/></div>
        <label className={styles.label} htmlFor="employer">Does your employer supply tools?</label>
        <select id="employer" className={styles.select} value={employer} onChange={event=>setEmployer(event.target.value)}>
          <option value="unknown">I don't know yet</option><option value="some">Some of them</option>
          <option value="most">Most or all of them</option><option value="none">No, I buy my own</option>
        </select>
        <div className={styles.tip}><strong>Why we ask:</strong> Different employers and unions have different rules. You can mark each item as already owned, employer-provided or awaiting confirmation after building your list.</div>
        <button type="button" disabled={!listText.trim()} className={styles.primaryButton} onClick={makePlan}>Build my shopping plan →</button>
        <p className={styles.privacy}>No account, email address or upload required. Your entries stay in this browser page; we don't submit them to a server.</p>
      </section>
    </div>
    {built && <section className={styles.results} aria-live="polite">
      <div className={styles.resultsHeader}>
        <div><span className={styles.step}>03 / YOUR SHOPPING PLAN</span><h2>Make every purchase count.</h2><p>Edit each tool's status. Enter your own expected cost after checking retailers, then see how it fits your budget.</p></div>
        <div className={styles.buttonRow}>
          <button type="button" className={styles.outlineButton} onClick={copyPlan}>Copy checklist</button>
          <button type="button" className={styles.outlineButton} onClick={()=>window.print()}>Print</button>
        </div>
      </div>
      {copyState && <p role="status" className={styles.smallNote}>{copyState}</p>}
      <div className={styles.stats}>
        <div><strong>{summary.buying.length}</strong><span>Still to buy</span></div>
        <div><strong>{summary.own}</strong><span>Already own</span></div>
        <div><strong>{summary.supplied}</strong><span>Employer provides</span></div>
        <div><strong>{summary.ask}</strong><span>Need to confirm</span></div>
      </div>
      <div className={styles.budgetPanel}>
        <div><span className={styles.smallCaps}>YOUR BUDGET</span><strong>{formattedCurrency(summary.budget)}</strong></div>
        <div><span className={styles.smallCaps}>COSTS YOU ENTERED</span><strong>{formattedCurrency(summary.subtotal)}</strong><span className={styles.smallNote}>{summary.priced} of {summary.buying.length} purchase items priced</span></div>
        <div><span className={styles.smallCaps}>BUDGET STATUS</span><strong>{summary.subtotal>summary.budget?"Over budget by "+formattedCurrency(summary.subtotal-summary.budget):summary.unpriced===0?"Remaining: "+formattedCurrency(summary.budget-summary.subtotal):"Incomplete"}</strong><span className={styles.smallNote}>{summary.unpriced?"Add estimates for "+summary.unpriced+" more items.": "Based only on your entered estimates."}</span></div>
      </div>
      <div className={styles.warning}>We do not show scraped or outdated Amazon prices. All costs above are estimates you enter yourself; retailer prices, tax and shipping can differ. A required item is not automatically optional because it exceeds your budget.</div>
      <div className={styles.itemList}>
        {items.map(item=>{
          const cat=categories.find(c=>c.id===item.categoryId);
          const product=cat?.productId?products[cat.productId]:undefined;
          return <article key={item.id} className={styles.item}>
            <div className={styles.itemTop}>
              <div><span className={styles.smallCaps}>REQUIRED ITEM {item.id+1}</span><h3>{item.label}</h3></div>
              <label className={styles.statusLabel}>Status
                <select value={item.status} onChange={event=>patchItem(item.id,{status:event.target.value as ItemStatus})}>
                  <option value="buy">Need to buy</option><option value="owned">Already own</option>
                  <option value="provided">Employer provides</option><option value="ask">Ask employer</option>
                </select>
              </label>
            </div>
            <div className={styles.itemMeta}>
              <label className={styles.categoryLabel}>Match to tool type
                <select value={item.categoryId} onChange={event=>patchItem(item.id,{categoryId:event.target.value})}>
                  <option value="">No confirmed match</option>
                  {categories.map(c=><option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </label>
              <label className={styles.priceLabel}>Your estimated price ($)
                <input type="number" min="0" step=".01" value={item.estimatedPrice} onChange={event=>patchItem(item.id,{estimatedPrice:event.target.value})} placeholder="Optional" disabled={item.status!=="buy"}/>
              </label>
            </div>
            {cat?.note&&<p className={styles.note}>{cat.note}</p>}
            {product ? <div className={styles.product}>
              <div><span className={styles.smallCaps}>MATCHED FROM TRADEGEAR HQ</span><strong>{product.name}</strong><span>Example to consider. Confirm its exact specification before buying.</span></div>
              <div className={styles.productLinks}><a href={product.detailHref}>Read buying advice →</a><a href={product.amazonUrl} target="_blank" rel="sponsored nofollow noopener noreferrer">Check Amazon offer ↗</a></div>
            </div> : <div className={styles.unmatched}>No verified product match yet. Keep this item on your checklist — we won't substitute an unsuitable model to earn a commission.</div>}
          </article>;
        })}
      </div>
      <div className={styles.footerNote}><strong>About TradeGear HQ:</strong> Independent, research-led product comparisons; not a trade school or hands-on testing laboratory. We may earn a commission from Amazon purchases. We'd welcome feedback from apprentices and trainers before expanding this pilot.</div>
    </section>}
  </div>;
}
