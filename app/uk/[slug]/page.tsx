import { fieldNotes } from "@/lib/uk-guide-field-notes";
import { ukEditorial } from "@/lib/uk-guide-editorial";
import { ProductPhoto } from "@/components/ProductPhoto";
import { getProductImage } from "@/lib/product-images";
import { getHub } from "@/lib/data";
import { EditorialByline, PageSchema } from "@/components/Editorial";
import { MarketSwitch } from "@/components/MarketSwitch";
import type {Metadata} from "next";
import {notFound} from "next/navigation";
import Link from "@/components/SiteLink";
import {ukGuides,ukAmazonProduct} from "@/lib/uk-pilot";

type Props = {params:Promise<{slug:string}>};
export function generateStaticParams(){return ukGuides.map(({slug})=>({slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{
  const {slug}=await params;
  const guide=ukGuides.find(g=>g.slug===slug);
  return guide ? {title:fieldNotes[guide.slug].keyword,description:guide.intro,alternates:{canonical:`/uk/${slug}`},openGraph:{title:guide.title,description:guide.intro,url:`/uk/${slug}`,locale:"en_GB"}} : {};
}
export default async function UKGuide({params}:Props){
  const {slug}=await params;
  const g=ukGuides.find(x=>x.slug===slug);
  if(!g) notFound();
  const e = ukEditorial[g.slug];
  const field = fieldNotes[g.slug];
  const hub = getHub(e.trade === "Plumbers" ? "plumbers" : "electricians");
  const photo = (index: number) => getProductImage((e.images as readonly string[])[index] ?? "");
  return <article lang="en-GB">
    <PageSchema title={g.title} description={g.intro} path={`/uk/${slug}`} language="en-GB" date="2026-11-17" crumbs={[{name:"Home",path:"/"},{name:"UK tools",path:"/uk"},{name:g.title,path:`/uk/${slug}`}]} />
    <header className="guideHero" id="top">
      {hub && <img src={hub.image} alt="" />}
      <div className="tradeHeroShade" />
      <div className="shell guideHeroInner"><div className="guideHeroCopy">
        <div className="crumb"><Link href="/uk">UK tool guides</Link> / {e.trade}</div>
        <span className="eyebrow">UK BUYING GUIDE</span>
        <h1>{g.title}</h1><p>{g.intro}</p>
        <div className="guideMeta"><span>2 picks</span><span>Amazon UK</span><span>Research-based recommendations</span></div>
      </div></div>
    </header>
    <section className="section"><div className="shell guideShell">
      <MarketSwitch />
      <EditorialByline date="2026-11-17" />
      <nav className="articleNav" aria-label="On this page"><a href="#quick-picks">Quick picks</a><a href="#side-by-side">Side by side</a><a href="#choosing">How to choose</a><a href="#detailed-picks">Detailed picks</a><a href="#questions">Buying questions</a></nav>
      <div className="verdictBox guideBuyingNote"><h2>Our buying advice</h2><p>{e.verdict}</p></div>
      <div className="sectionHeading" id="quick-picks"><h2>Quick picks</h2></div>
      <div className="compare">{g.picks.map(([model,,reason],i)=><div className="compareRow" key={model}><b className="rank">0{i+1}</b><div><strong>{model}</strong>{reason}</div><a className="detailLink" href={`#pick-${i+1}`}>See buying notes ↓</a></div>)}</div>
      <section id="side-by-side" className="ukComparison">
        <h2>{field.keyword}</h2>
        <div className="ukTableWrap"><table><caption>Compare the two UK picks</caption><thead><tr><th scope="col">Buying factor</th>{g.picks.map(([model],i)=><th scope="col" key={model}>{photo(i) && <ProductPhoto photo={photo(i)} className="comparePhoto" />}{model}</th>)}</tr></thead><tbody>{field.rows.map(([label,a,b])=><tr key={label}><th scope="row">{label}</th><td>{a}</td><td>{b}</td></tr>)}</tbody></table></div>
      </section>
      <section className="method" id="choosing"><span className="eyebrow orange">HOW TO CHOOSE</span><h2>What matters for the work</h2><p>{g.note}</p>{e.criteria.map(([title,body])=><div key={title}><h3>{title}</h3><p>{body}</p></div>)}</section>
      <section className="ukComparison"><h2>How to choose for the jobs you do</h2>{field.jobs.map(([title,copy])=><div key={title}><h3>{title}</h3><p>{copy}</p></div>)}</section>
      <div className="sectionHeading" id="detailed-picks"><h2>Detailed picks</h2></div>
      <div className="productStack">{g.picks.map(([model,asin],i)=><section className="product" id={`pick-${i+1}`} key={asin}>
        <div className={`rankPanel${photo(i) ? " rankPanelWithPhoto" : ""}`}>{photo(i) ? <ProductPhoto photo={photo(i)} credit /> : <><span>UK PICK</span><b>0{i+1}</b></>}</div>
        <div><span className="badge">{e.detail[i][0]}</span><h3>{model}</h3><p>{e.detail[i][1]}</p><p className="tradeoff">{e.detail[i][2]}</p><div className="productActions"><a className="amazonBtn" rel="sponsored noreferrer" href={ukAmazonProduct(asin)}>View on Amazon UK</a></div></div>
      </section>)}</div>
      <section className="faq" id="questions"><h2>Buying questions</h2>{e.faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
      <section className="sourceBox"><h2>Sources and methodology</h2><p>We compare documented capabilities, exact UK listing variants and likely fit for the job. TradeGear HQ has not hands-on tested these picks.</p><p><a href={g.source}>{g.sourceLabel}</a></p></section>
    </div></section>
  </article>;
}
