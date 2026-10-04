import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuide,getHub,guides } from "@/lib/data";
import { reviews } from "@/lib/reviews";

export function generateStaticParams(){return guides.map(g=>({trade:g.trade,slug:g.slug}))}

export async function generateMetadata({params}:{params:Promise<{trade:string;slug:string}>}):Promise<Metadata>{
  const {trade,slug}=await params;const g=getGuide(trade,slug);if(!g)return{};
  return{title:g.title,description:g.meta,robots:process.env.NEXT_PUBLIC_INDEX_SITE==="true"?{index:true,follow:true}:{index:false,follow:false},alternates:{canonical:`/${trade}/${slug}/`}}
}

export default async function Guide({params}:{params:Promise<{trade:string;slug:string}>}){
  const {trade,slug}=await params;const g=getGuide(trade,slug);if(!g)notFound();const hub=getHub(trade);
  const reviewFor=(model:string)=>reviews.find(r=>r.trade===trade&&r.model===model);
  return <>
    <section className="guideHero" id="top">
      {hub&&<img src={hub.image} alt={`${g.tradeName} professional at work`} />}
      <div className="tradeHeroShade" />
      <div className="shell guideHeroInner"><div className="crumb"><Link href="/">Home</Link> / <Link href={`/${trade}/`}>{g.tradeName}</Link> / {g.cluster}</div><span className="eyebrow">{g.tradeName.toUpperCase()} · {g.cluster.toUpperCase()}</span><h1>{g.title}</h1><p>{g.meta}</p><div className="guideMeta"><span>5 shortlisted picks</span><span>US-focused buying guide</span><span>Updated for 2026</span></div></div>
    </section>

    <section className="section"><div className="shell guideShell">
      <div className="disclosure"><b>Disclosure:</b> We may earn a commission when you buy through links on this page, at no extra cost to you. As an Amazon Associate I earn from qualifying purchases.</div>
      <div className="sectionHeading"><h2>Quick picks</h2><p>Compare the shortlist, read our detailed review where available, or check the current Amazon listing.</p></div>
      <div className="compare">{g.products.map((p,i)=>{const r=reviewFor(p.model);return <div className="compareRow" key={p.model}>
        <b className="rank">#{i+1}</b>
        <div><span>{p.role}</span><Link href={`#pick-${i+1}`} className="productJump"><strong>{p.brand} {p.model}</strong></Link></div>
        <div className="compareActions">{r?<Link href={`/reviews/${r.slug}/`} className="detailLink">Read full review →</Link>:<Link href={`#pick-${i+1}`} className="detailLink">View details ↓</Link>}<a href={p.url} target="_blank" rel="sponsored nofollow noopener">Amazon →</a></div>
      </div>})}</div>

      <div className="method"><span className="eyebrow orange">HOW WE CHOOSE</span><h2>Built around {g.keyword} search intent.</h2><p>We focus the page on a real buying task: narrow the category to a useful shortlist, explain who each option is for, and make the important tradeoffs easy to scan.</p></div>

      <div className="sectionHeading"><h2>Detailed picks</h2><p>Each product is evaluated for the needs of this trade. Dedicated reviews are being added for the strongest candidates, with technical claims checked against manufacturer sources.</p></div>
      <div className="productStack">{g.products.map((p,i)=>{const r=reviewFor(p.model);return <article className="product" id={`pick-${i+1}`} key={p.model}>
        <div className="rankPanel"><span>PICK {i+1}</span><b>#{i+1}</b><small>{p.role}</small></div>
        <div className="productCopy"><span className="badge">{p.role}</span><p className="brandName">{p.brand}</p><h3>{p.model}</h3>{r?<><p><b>Best for:</b> {r.bestFor}</p><ul className="miniPros">{r.pros.slice(0,3).map(x=><li key={x}>{x}</li>)}</ul><p className="tradeoff"><b>Main tradeoff:</b> {r.cons[0]}</p></>:<p>This candidate remains in editorial research. Specifications and positioning will be verified before the page is publicly indexed.</p>}<div className="productActions">{r&&<Link className="reviewBtn" href={`/reviews/${r.slug}/`}>Read Full Review</Link>}<a className="amazonBtn" href={p.url} target="_blank" rel="sponsored nofollow noopener">Check Price on Amazon</a><a className="backLink" href="#top">Back to shortlist ↑</a></div><small className="micro">We may earn a commission.</small></div>
      </article>})}</div>

      <section className="faq"><span className="eyebrow orange">BUYING QUESTIONS</span><h2>Common questions about {g.keyword}</h2><details open><summary>What should I prioritize when comparing {g.keyword}?</summary><p>Prioritize the factors that directly affect the work: safety and measurement capability for electrical tools, access and probe size for inspection cameras, workflow and refrigerant compatibility for HVAC manifolds, and usable thermal resolution and documentation for inspection cameras.</p></details><details><summary>Why are there only five picks?</summary><p>The aim is to reduce a crowded category to a useful shortlist rather than reproduce an Amazon search-results page.</p></details><details><summary>Are prices and availability live?</summary><p>Not yet. TradeGear HQ does not hard-code Amazon prices or availability. The Amazon Creators API will supply approved dynamic product data once the Associates account is eligible and API access is active.</p></details></section>
    </div></section>
  </>
}
