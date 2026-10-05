import Link from "next/link";
import { guides,hubs,getHub } from "@/lib/data";
import { ProductPhoto } from "@/components/ProductPhoto";
import { getGuideImage } from "@/lib/guide-images";

export default function Home(){
  return <>
    <section className="hero">
      <div className="shell heroGrid">
        <div className="heroCopy">
          <span className="eyebrow">US TRADE TOOL BUYING GUIDES</span>
          <h1>Find the Right Tool for the Job.</h1>
          <p>Trade-specific comparisons for electricians, plumbers, HVAC techs and home inspectors. Compare faster. Buy smarter.</p>
          <div className="heroActions"><a className="orangeBtn" href="#trades">Choose Your Trade</a><a className="ghostBtn" href="#popular">See Popular Guides</a></div>
          <div className="trustLine"><span>✓ Built around real trade workflows</span><span>✓ Clear pros, tradeoffs & picks</span><span>✓ Amazon buying links</span></div>
        </div>
        <div className="heroMedia" aria-label="Professional trade work">
          <img className="heroPhoto heroPhotoMain" src={hubs[0].image} alt="Electrician working with tools" />
          <img className="heroPhoto heroPhotoSmall" src={hubs[1].image} alt="Plumber working on pipework" />
          <div className="heroStat"><b>50</b><span>launch buying guides mapped</span></div>
        </div>
      </div>
    </section>

    <section className="section" id="trades">
      <div className="shell">
        <span className="eyebrow orange">START WITH YOUR TRADE</span>
        <div className="sectionHeading"><h2>Tools organized around the work you do.</h2><p>Choose your trade, then jump into focused comparisons built around the jobs, tools and buying questions that matter.</p></div>
        <div className="tradeGrid">{hubs.map(h=><Link className="tradeCard visualCard" key={h.slug} href={`/${h.slug}/`}>
          <div className="cardImageWrap"><img src={h.image} alt={`${h.name} tools and work`} /><span className="imageShade" /></div>
          <div className="cardBody"><span className="miniLabel">TRADE HUB</span><h3>{h.name}</h3><p>{h.blurb}</p><b>Explore {h.name} guides →</b></div>
        </Link>)}</div>
      </div>
    </section>

    <section className="section light" id="popular">
      <div className="shell">
        <span className="eyebrow orange">POPULAR BUYING GUIDES</span>
        <div className="sectionHeading"><h2>Start with a focused comparison.</h2><p>Each guide shortlists five candidates, explains who each option suits and sends you to Amazon only when you're ready to check the current offer.</p></div>
        <div className="guideGrid">{guides.map(g=>{const hub=getHub(g.trade);return <Link className="guideCard visualGuide" key={g.slug} href={`/${g.trade}/${g.slug}/`}>
          {getGuideImage(g) ? <ProductPhoto photo={getGuideImage(g)} className="guideCardPhoto" /> : hub&&<div className="guideThumb"><img src={hub.image} alt="" /></div>}
          <div className="guideBody"><span>{g.tradeName} · {g.cluster}</span><h3>{g.title}</h3><p>{g.meta}</p><b>Open buying guide →</b></div>
        </Link>})}</div>
      </div>
    </section>

    <section className="section howSection"><div className="shell"><span className="eyebrow orange">HOW IT WORKS</span><h2>Search less. Compare the right five.</h2><div className="steps"><div><b>01</b><h3>Choose a trade or task</h3><p>Start from the work you're actually doing, not a generic product category.</p></div><div><b>02</b><h3>Compare the shortlist</h3><p>See the best overall, value, premium, compact and alternative picks at a glance.</p></div><div><b>03</b><h3>Check the current offer</h3><p>Use the Amazon link for current pricing, availability and checkout.</p></div></div></div></section>
  </>
}
