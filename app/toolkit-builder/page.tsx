import type {Metadata} from "next";
import Link from "next/link";
import {ApprenticePlanner, type PlannerProduct} from "@/components/ApprenticePlanner";
import {getToolDirectory} from "@/lib/tool-directory";
import styles from "./page.module.css";

export const metadata:Metadata = {
  title: "Apprentice Tool List & Budget Planner — Electrician Pilot",
  description: "Test a free apprentice tool-list planner. Use your actual required tools, mark what you own, and plan purchases against a budget with TradeGear HQ product recommendations.",
  alternates:{canonical:"/toolkit-builder/"},
  robots:{index:false,follow:false},
};

const mappedProductIds = new Set([
  "stanley-stht10721", "channellock-440", "klein-j2000-9ne",
  "klein-11055", "stanley-33-725", "klein-32288",
  "fluke-t5-600", "fluke-117-review", "klein-56331",
]);

function getPilotProducts():Record<string,PlannerProduct> {
  const result:Record<string,PlannerProduct>={};
  // Use actual canonical TradeGear HQ data, including existing review URLs and
  // Amazon.com affiliate destinations. Do not create or guess Amazon listings.
  for(const trade of ["electricians","plumbers","carpenters"]){
    const directory=getToolDirectory(trade);
    if(!directory)continue;
    for(const p of directory.products){
      if(!mappedProductIds.has(p.id) || result[p.id])continue;
      result[p.id]={
        id:p.id,name:p.brand+" "+p.model,detailHref:p.detailHref,
        amazonUrl:p.amazonUrl,detailLabel:p.detailLabel,
      };
    }
  }
  return result;
}

export default function ToolkitBuilderPage() {
  return <div className={styles.page}>
    <section className={styles.hero}>
      <div className="shell">
        <div className={styles.eyebrow}>FREE BETA · ELECTRICIAN APPRENTICES</div>
        <h1>Your tool list. <span>Your budget.</span> A smarter plan.</h1>
        <p>Already have a required equipment list? Turn it into a personal shopping plan, keep track of what you own, and explore suitable tools from TradeGear HQ.</p>
        <div className={styles.heroDetails}>
          <span>✓ Use your real tool list</span><span>✓ Keep employer-provided items separate</span><span>✓ No sign-up</span>
        </div>
      </div>
    </section>
    <section className={styles.content}>
      <div className="shell">
        <div className={styles.introduction}>
          <Link href="/electricians/" className={styles.back}>← Browse electrician tools</Link>
          <p><strong>Prototype for feedback.</strong> We're testing the planning workflow with one trade before extending it to plumbers, HVAC technicians, carpenters and new home inspectors.</p>
        </div>
        <ApprenticePlanner products={getPilotProducts()}/>
      </div>
    </section>
    <section className={styles.about}>
      <div className="shell">
        <h2>Built to complement your official requirements, not replace them.</h2>
        <p>Your employer, apprenticeship coordinator or training provider determines which tools and safety equipment you need. We publish research-based buying information, not trade certification or personal site experience. Product links may earn us an Amazon commission; your list remains yours to verify.</p>
        <p>If you're an apprentice or trainer reviewing this pilot, we're especially interested in where the matching is wrong or where the workflow could save time.</p>
      </div>
    </section>
  </div>;
}
