import type {Metadata} from "next";
import Link from "@/components/SiteLink";
import {ukGuides} from "@/lib/uk-pilot";

export const metadata: Metadata = {
  title:"UK Tool Buying Guides",
  description:"TradeGear HQ’s UK pilot: clamp meters, cable routing rods and copper pipe cutters.",
  alternates:{canonical:"/uk"},
  robots:{index:false,follow:true},
};

export default function UKHome() {
  return <section lang="en-GB" className="section"><div className="shell">
    <span className="eyebrow orange">TRADEGEAR HQ · UK PILOT</span>
    <h1>Find the right tool for the job in the UK</h1>
    <p>Three practical buying guides focused on UK jobs, model choices and what to check before you buy.</p>
    <div className="hubGuideGrid">{ukGuides.map(g=><Link key={g.slug} href={`/uk/${g.slug}`} className="hubGuideCard"><h3>{g.title}</h3><p>{g.intro}</p><b>Read the guide →</b></Link>)}</div>
  </div></section>;
}
