import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getReview,reviews } from "@/lib/reviews";

export function generateStaticParams(){return reviews.map(r=>({slug:r.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params; const r=getReview(slug); if(!r)return{};
  return {title:r.title,description:r.meta,robots:process.env.NEXT_PUBLIC_INDEX_SITE==="true"?{index:true,follow:true}:{index:false,follow:false},alternates:{canonical:`/reviews/${slug}/`}};
}

export default async function ReviewPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const r=getReview(slug); if(!r)notFound();
  return <>
    <section className="reviewHero"><div className="shell reviewShell">
      <div className="crumb"><Link href="/">Home</Link> / <Link href={`/${r.trade}/`}>{r.tradeName}</Link> / <Link href={`/${r.trade}/${r.guideSlug}/`}>{r.guideTitle}</Link> / {r.model}</div>
      <span className="eyebrow orange">PRODUCT REVIEW · {r.tradeName.toUpperCase()}</span>
      <h1>{r.title}</h1><p>{r.meta}</p>
      <div className="reviewHeroActions"><a className="amazonBtn" href={r.amazonUrl} target="_blank" rel="sponsored nofollow noopener">Check Price on Amazon</a><Link className="secondaryBtn" href={`/${r.trade}/${r.guideSlug}/`}>Back to comparison</Link></div>
      <small className="micro lightText">We may earn a commission when you buy through links on this page.</small>
    </div></section>

    <section className="section"><div className="shell reviewShell">
      <div className="disclosure"><b>Disclosure:</b> We may earn a commission when you buy through links on this page, at no extra cost to you. As an Amazon Associate I earn from qualifying purchases.</div>

      <div className="reviewLeadGrid">
        <div className="reviewProductPanel"><span>{r.role}</span><strong>{r.brand}</strong><h2>{r.model}</h2><p>Product imagery will be connected through an approved Amazon product-data source once API access is active.</p></div>
        <div><span className="eyebrow orange">QUICK VERDICT</span><p className="leadCopy">{r.intro}</p><div className="verdictBox"><b>Our take</b><p>{r.verdict}</p></div></div>
      </div>

      <div className="fitGrid"><div className="fitCard"><b>Best for</b><p>{r.bestFor}</p></div><div className="fitCard"><b>Skip it if</b><p>{r.avoidIf}</p></div></div>

      <div className="prosCons"><div><h2>Pros</h2><ul>{r.pros.map(x=><li key={x}>{x}</li>)}</ul></div><div><h2>Cons</h2><ul>{r.cons.map(x=><li key={x}>{x}</li>)}</ul></div></div>

      <section className="specSection"><span className="eyebrow orange">VERIFIED SPECIFICATIONS</span><h2>Key specs</h2><div className="specGrid">{r.specs.map(s=><div className="specRow" key={s.label}><span>{s.label}</span><b>{s.value}</b></div>)}</div></section>

      <div className="articleBody">{r.sections.map(s=><section key={s.heading}><h2>{s.heading}</h2><p>{s.body}</p></section>)}</div>

      <div className="sourceBox"><b>Primary technical source</b><p>Specifications and product-feature claims on this review were checked against the manufacturer's current product page.</p><a href={r.sourceUrl} target="_blank" rel="noopener noreferrer">View manufacturer source →</a></div>

      <div className="reviewCta"><div><span className="eyebrow">READY TO CHECK THE CURRENT OFFER?</span><h2>{r.brand} {r.model}</h2><p>Amazon pricing and availability can change. Use the link below for the current listing or search result.</p></div><a className="amazonBtn" href={r.amazonUrl} target="_blank" rel="sponsored nofollow noopener">Check Price on Amazon</a></div>

      <section className="faq"><span className="eyebrow orange">QUESTIONS & ANSWERS</span><h2>Frequently asked questions</h2>{r.faqs.map((f,i)=><details key={f.q} open={i===0}><summary>{f.q}</summary><p>{f.a}</p></details>)}</section>

      <div className="relatedBox"><b>Compare before you buy</b><p>This product is one of five picks in our full {r.guideTitle.toLowerCase()} guide.</p><Link className="secondaryBtn dark" href={`/${r.trade}/${r.guideSlug}/`}>See all five picks →</Link></div>
    </div></section>
  </>;
}
