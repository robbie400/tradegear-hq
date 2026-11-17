import { PageSchema } from "@/components/Editorial";
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
  return guide ? {title:guide.title,description:guide.intro,alternates:{canonical:`/uk/${slug}`},openGraph:{title:guide.title,description:guide.intro,url:`/uk/${slug}`,locale:"en_GB"}} : {};
}
export default async function UKGuide({params}:Props){
  const {slug}=await params;
  const g=ukGuides.find(x=>x.slug===slug);
  if(!g) notFound();
  return <article lang="en-GB" className="section"><div className="shell guideShell">
    <PageSchema title={g.title} description={g.intro} path={`/uk/${slug}`} language="en-GB" date="2026-11-17" crumbs={[{name:"Home",path:"/"},{name:"UK tools",path:"/uk"},{name:g.title,path:`/uk/${slug}`}]} />
    <MarketSwitch />
    <Link href="/uk">← UK tool guides</Link>
    <h1>{g.title}</h1><p className="leadCopy">{g.intro}</p>
    <div className="verdictBox"><h2>What to check before buying</h2><p>{g.note}</p></div>
    <p className="disclosure">As an Amazon Associate, TradeGear HQ earns from qualifying purchases. Links open the listed products on Amazon UK. Confirm the selected variant before buying.</p>
    <h2>Options to compare</h2>
    <div className="fitGrid">{g.picks.map(([model,asin,reason])=><section className="fitCard" key={model}><h3>{model}</h3><p>{reason}</p><p><a className="amazonBtn" rel="sponsored noreferrer" href={ukAmazonProduct(asin)}>View on Amazon UK</a></p></section>)}</div>
    <div className="sourceBox">Research-based guidance. <a href={g.source}>{g.sourceLabel}</a></div>
  </div></article>;
}
