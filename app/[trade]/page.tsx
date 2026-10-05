import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getHub, guides, hubs } from "@/lib/data";
import {PageSchema} from "@/components/Editorial";
import { getTradeWorkflows } from "@/lib/workflows";

export function generateStaticParams() {
  return hubs.map((h) => ({ trade: h.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ trade: string }>;
}): Promise<Metadata> {
  const { trade } = await params;
  const h = getHub(trade);
  return h
    ? {
        title: trade === "electricians" ? "Electrician Tools: Job Kits, Buying Guides and Reviews" : `Tools & Gear for ${h.name}`,
        description: trade === "electricians" ? "Find electrician tools by job: service calls, house rewires, panel work and apprentice kits. Compare meters, hand tools, drills, cable tools, lighting and storage." : h.blurb,
        alternates: { canonical: `/${trade}/` },
      }
    : {};
}

export default async function TradePage({
  params,
}: {
  params: Promise<{ trade: string }>;
}) {
  const { trade } = await params;
  const hub = getHub(trade);
  if (!hub) notFound();
  const items = guides.filter((g) => g.trade === trade);
  const workflows = getTradeWorkflows(trade);
  const clusters = [...new Set(items.map(g=>g.cluster))];
  return (
    <>
      <PageSchema kind="CollectionPage" title={`Tools & Gear for ${hub.name}`} description={hub.blurb} path={`/${trade}/`} crumbs={[{name:"Home",path:"/"},{name:hub.name,path:`/${trade}/`}]}/>
      <section className="tradeHero">
        <img src={hub.image} alt={`${hub.name} professional at work`} />
        <div className="tradeHeroShade" />
        <div className="shell tradeHeroInner">
          <span className="eyebrow">{hub.name.toUpperCase()} TOOL GUIDES</span>
          <h1>Tools & Gear for {hub.name}</h1>
          <p>{trade === "electricians" ? "Build the kit for the job: eight workflow and starter-kit guides, fourteen tool comparisons and detailed product reviews for US electricians." : hub.blurb}</p>
        </div>
      </section>

      {workflows.length > 0 && (
        <section className="section workflowHubSection">
          <div className="shell">
            <span className="eyebrow orange">SHOP BY THE WORK YOU DO</span>
            <div className="sectionHeading">
              <h2>Start with the job, then choose the tools.</h2>
              <p>
                Workflow guides organize the kit around real service, diagnostic
                and installation tasks instead of dumping a catalogue of
                products on you.
              </p>
            </div>
            <div className="workflowHubGrid">
              {workflows.map((w) => (
                <Link
                  key={w.slug}
                  className="workflowHubCard"
                  href={`/${trade}/workflows/${w.slug}/`}
                >
                  <div>
                    <span>WORKFLOW GUIDE</span>
                    <h3>{w.title}</h3>
                    <p>{w.summary}</p>
                  </div>
                  <b>Build the job kit →</b>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section light">
        <div className="shell">
          <span className="eyebrow orange">PRODUCT BUYING GUIDES</span>
          <div className="sectionHeading">
            <h2>Compare the strongest options by tool type.</h2>
            <p>
              Use these when you already know the category you need and want a
              tight shortlist, detailed reviews and a current Amazon route.
            </p>
          </div>
          <nav className="articleNav" aria-label="Tool categories">{clusters.map((c,i)=><a key={c} href={`#category-${i}`}>{c}</a>)}</nav>
          {clusters.map((cluster,i)=><section key={cluster} className="hubCategory" id={`category-${i}`}><h2>{cluster}</h2>
          <div className="hubGuideGrid">
            {items.filter(g=>g.cluster===cluster).map((g) => (
              <Link
                className="hubGuideCard"
                key={g.slug}
                href={`/${trade}/${g.slug}/`}
              >
                <div className="hubGuideTop">
                  <span>{g.cluster}</span>
                  <strong>5 picks</strong>
                </div>
                <h3>{g.title}</h3>
                <p>{g.meta}</p>
                <b>Open comparison →</b>
              </Link>
            ))}
          </div></section>)}
          <div className="coming">
            <b>Choose for the work you do.</b> Start with a category comparison,
            then use the full reviews to check features, kit variations and
            tradeoffs before buying.
          </div>
        </div>
      </section>
    </>
  );
}
