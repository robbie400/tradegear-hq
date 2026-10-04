import Link from "next/link";
import { notFound } from "next/navigation";
import { getHub,guides,hubs } from "@/lib/data";

export function generateStaticParams(){return hubs.map(h=>({trade:h.slug}))}

export default async function TradePage({params}:{params:Promise<{trade:string}>}){
  const {trade}=await params;
  const hub=getHub(trade);
  if(!hub)notFound();
  const items=guides.filter(g=>g.trade===trade);
  return <>
    <section className="tradeHero">
      <img src={hub.image} alt={`${hub.name} professional at work`} />
      <div className="tradeHeroShade" />
      <div className="shell tradeHeroInner"><span className="eyebrow">{hub.name.toUpperCase()} TOOL GUIDES</span><h1>Tools & Gear for {hub.name}</h1><p>{hub.blurb}</p></div>
    </section>
    <section className="section">
      <div className="shell">
        <span className="eyebrow orange">BUYING GUIDES</span>
        <div className="sectionHeading"><h2>Start with the job you're trying to solve.</h2><p>Open a guide to compare a short list of products, see the tradeoffs and then check the current Amazon offer when you're ready.</p></div>
        <div className="hubGuideGrid">{items.map(g=><Link className="hubGuideCard" key={g.slug} href={`/${trade}/${g.slug}/`}>
          <div className="hubGuideTop"><span>{g.cluster}</span><strong>5 picks</strong></div>
          <h3>{g.title}</h3><p>{g.meta}</p><b>Open comparison →</b>
        </Link>)}</div>
        <div className="coming"><b>More guides are being loaded from the master plan.</b> This hub is designed to expand into multiple SEO clusters rather than one giant product list.</div>
      </div>
    </section>
  </>
}
