import { ProductPhoto } from "@/components/ProductPhoto";
import { getProductImage } from "@/lib/product-images";
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
        title: trade === "electricians" ? "Electrician Tools: Job Kits, Buying Guides and Reviews" : trade === "plumbers" ? "Plumbing Tools: Job Kits, Buying Guides and Reviews" : trade === "hvac" ? "HVAC Tools: Service Kits, Buying Guides and Reviews" : trade === "home-inspectors" ? "Home Inspector Tools: Inspection Kits, Buying Guides and Reviews" : `Tools & Gear for ${h.name}`,
        description: trade === "electricians" ? "Find electrician tools by job: service calls, house rewires, panel work and apprentice kits. Compare meters, hand tools, drills, cable tools, lighting and storage." : trade === "plumbers" ? "Choose plumbing tools by job: service calls, leak diagnosis, bathroom installs and drain clearing. Compare hand tools, press tools, cameras, pumps and cleanup gear." : trade === "hvac" ? "Build HVAC job kits for service, heat-pump commissioning, evacuation, recovery and airside diagnosis. Compare instruments, refrigerant tools and carrying options." : trade === "home-inspectors" ? "Build home inspection kits for pre-purchase visits, moisture investigations and accessible system observations. Compare cameras, meters, lighting, access and reporting tools." : h.blurb,
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
          <p>{trade === "electricians" ? "Build the kit for the job: eight workflow and starter-kit guides, fourteen tool comparisons and detailed product reviews for US electricians." : trade === "plumbers" ? `Build the kit for the job: ${workflows.length} workflow and starter-kit guides, ${items.length} tool comparisons and detailed buying assessments for US plumbers.` : trade === "hvac" ? `Build the kit for the job: ${workflows.length} workflow and starter-kit guides, ${items.length} tool comparisons and detailed buying assessments for US HVAC technicians.` : trade === "home-inspectors" ? `Build the kit for the inspection: ${workflows.length} workflow and starter-kit guides, ${items.length} tool comparisons and detailed buying assessments for US home inspectors.` : hub.blurb}</p>
          <nav className="heroActions" aria-label="Browse this trade">{workflows.length > 0 && <a className="orangeBtn" href="#job-kits">Find a job kit</a>}<a className="ghostBtn" href="#tool-guides">Compare tool categories</a></nav>
        </div>
      </section>

      {workflows.length > 0 && (
        <section className="section workflowHubSection" id="job-kits">
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
                  {["electricians", "plumbers", "hvac", "home-inspectors"].includes(trade) && <div className="workflowCardPhotos" aria-hidden="true">{w.tools.filter(t=>getProductImage(t.name)).slice(0,3).map(t=><ProductPhoto key={t.name} photo={getProductImage(t.name)} />)}</div>}
                  <div>
                    <span>WORKFLOW GUIDE</span>
                    <h3>{w.title}</h3>
                    <p>{w.meta}</p>
                  </div>
                  <b>Build the job kit →</b>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section light" id="tool-guides">
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
                <ProductPhoto photo={getProductImage(g.products[0].productId || g.products[0].reviewSlug || `${g.products[0].brand} ${g.products[0].model}`)} className="hubProductPhoto" />
                <div className="hubGuideTop">
                  <span>{g.cluster}</span>
                  <strong>{g.products.length} picks</strong>
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
