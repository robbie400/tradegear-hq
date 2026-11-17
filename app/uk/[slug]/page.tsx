import type {Metadata} from "next";
import {notFound} from "next/navigation";
import Link from "@/components/SiteLink";
import {ukGuides,ukAmazonSearch} from "@/lib/uk-pilot";

type Props = {params:Promise<{slug:string}>};
export function generateStaticParams(){return ukGuides.map(({slug})=>({slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{
  const {slug}=await params;
  const guide=ukGuides.find(g=>g.slug===slug);
  return guide ? {title:guide.title,description:guide.intro,alternates:{canonical:`/uk/${slug}`},robots:{index:false,follow:true}} : {};
}
export default async function UKGuide({params}:Props){
  const {slug}=await params;
  const g=ukGuides.find(x=>x.slug===slug);
  if(!g) notFound();
  return <article lang="en-GB" className="section"><div className="shell guideShell">
    <Link href="/uk">← UK tool guides</Link>
    <h1>{g.title}</h1><p className="leadCopy">{g.intro}</p>
    <div className="verdictBox"><b>What to check before buying</b><p>{g.note}</p></div>
    <p className="disclosure">As an Amazon Associate, TradeGear HQ earns from qualifying purchases. Links open Amazon UK search results; confirm the model and kit before buying.</p>
    <h2>Options to compare</h2>
    <div className="fitGrid">{g.picks.map(([model,reason])=><section className="fitCard" key={model}><h3>{model}</h3><p>{reason}</p><p><a className="amazonBtn" rel="sponsored noreferrer" href={ukAmazonSearch(model)}>Search Amazon UK</a></p></section>)}</div>
    <div className="sourceBox">Research-based guidance. <a href={g.source}>{g.sourceLabel}</a></div>
  </div></article>;
}
