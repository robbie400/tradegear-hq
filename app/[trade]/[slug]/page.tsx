import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuide,getHub,guides } from "@/lib/data";

export function generateStaticParams(){return guides.map(g=>({trade:g.trade,slug:g.slug}))}

export async function generateMetadata({params}:{params:Promise<{trade:string;slug:string}>}):Promise<Metadata>{
  const {trade,slug}=await params;const g=getGuide(trade,slug);if(!g)return{};
  return{title:g.title,description:g.meta,robots:process.env.NEXT_PUBLIC_INDEX_SITE==="true"?{index:true,follow:true}:{index:false,follow:false},alternates:{canonical:`/${trade}/${slug}/`}}
}

export default async function Guide({params}:{params:Promise<{trade:string;slug:string}>}){
  const {trade,slug}=await params;const g=getGuide(trade,slug);if(!g)notFound();const hub=getHub(trade);
  return <>
    <section className="guideHero" id="top">
      {hub&&<img src={hub.image} alt={`${g.tradeName} professional at work`} />}
      <div className="tradeHeroShade" />
      <div className="shell guideHeroInner"><div className="crumb"><Link href="/">Home</Link> / <Link href={`/${trade}/`}>{g.tradeName}</Link> / {g.cluster}</div><span className="eyebrow">{g.tradeName.toUpperCase()} · {g.cluster.toUpperCase()}</span><h1>{g.title}</h1><p>{g.meta}</p><div className="guideMeta"><span>5 shortlisted picks</span><span>US-focused buying guide</span><span>Updated for 2026</span></div></div>
    </section>

    <section className="section"><div className="shell guideShell">
      <div className="disclosure"><b>Disclosure:</b> We may earn a commission when you buy through links on this page, at no extra cost to you. As an Amazon Associate I earn from qualifying purchases.</div>
      <div className="sectionHeading"><h2>Quick picks</h2><p>Jump to a pick for the detail, or go straight to Amazon if you already know what you're looking for.</p></div>
      <div className="compare">{g.products.map((p,i)=><div className="compareRow" key={p.model}>
        <b className="rank">#{i+1}</b>
        <div><span>{p.role}</span><Link href={`#pick-${i+1}`} className="productJump"><strong>{p.brand} {p.model}</strong></Link></div>
        <div className="compareActions"><Link href={`#pick-${i+1}`} className="detailLink">View details ↓</Link><a href={p.url} target="_blank" rel="sponsored nofollow noopener">Amazon →</a></div>
      </div>)}</div>

      <div className="method"><span className="eyebrow orange">HOW WE CHOOSE</span><h2>Built around {g.keyword} search intent.</h2><p>We focus the page on a real buying task: narrow the category to a useful shortlist, explain who each option is for, and make the important tradeoffs easy to scan.</p></div>

      <div className="sectionHeading"><h2>Detailed picks</h2><p>These are the candidates in the current editorial shortlist. Exact Amazon product imagery will be connected through approved Amazon Product Links / API data before public indexing.</p></div>
      <div className="productStack">{g.products.map((p,i)=><article className="product" id={`pick-${i+1}`} key={p.model}>
        <div className="rankPanel"><span>PICK {i+1}</span><b>#{i+1}</b><small>{p.role}</small></div>
        <div className="productCopy"><span className="badge">{p.role}</span><p className="brandName">{p.brand}</p><h3>{p.model}</h3><p>This pick is part of the {g.title.toLowerCase()} shortlist. The final indexed version will include source-verified specifications, clear strengths, limitations and product imagery from an approved Amazon source.</p><div className="productActions"><a className="amazonBtn" href={p.url} target="_blank" rel="sponsored nofollow noopener">Check Price on Amazon</a><a className="backLink" href="#top">Back to shortlist ↑</a></div><small className="micro">We may earn a commission.</small></div>
      </article>)}</div>

      <section className="faq"><span className="eyebrow orange">BUYING QUESTIONS</span><h2>Common questions about {g.keyword}</h2><details open><summary>What should I prioritize when comparing {g.keyword}?</summary><p>Start with the factors that affect safety, accuracy, durability and workflow in the trade. The public version of this guide will spell those factors out with product-specific evidence.</p></details><details><summary>Why are there only five picks?</summary><p>The aim is to reduce a crowded category to a useful shortlist rather than reproduce an Amazon search-results page.</p></details><details><summary>Are prices and availability live?</summary><p>No. TradeGear HQ does not hard-code Amazon prices or availability. Follow the Amazon link for the current offer.</p></details></section>
    </div></section>
  </>
}
