import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWorkflow, workflows } from "@/lib/workflows";
import { guides } from "@/lib/data";
import { AffiliateDisclosure, EditorialByline } from "@/components/Editorial";

export function generateStaticParams() {
  return workflows.map((w) => ({ trade: w.trade, slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ trade: string; slug: string }>;
}): Promise<Metadata> {
  const { trade, slug } = await params;
  const w = getWorkflow(trade, slug);
  if (!w) return {};
  return {
    title: w.title,
    description: w.meta,
    robots:
      process.env.NEXT_PUBLIC_INDEX_SITE === "true"
        ? { index: true, follow: true }
        : { index: false, follow: false },
    alternates: { canonical: `/${trade}/workflows/${slug}/` },
  };
}

export default async function WorkflowPage({
  params,
}: {
  params: Promise<{ trade: string; slug: string }>;
}) {
  const { trade, slug } = await params;
  const w = getWorkflow(trade, slug);
  if (!w) notFound();
  return (
    <>
      <section className="workflowHero">
        <img src={w.heroImage} alt={`${w.tradeName} service work`} />
        <div className="tradeHeroShade" />
        <div className="shell workflowHeroInner">
          <div className="crumb">
            <Link href="/">Home</Link> /{" "}
            <Link href={`/${trade}/`}>{w.tradeName}</Link> / Workflow guide
          </div>
          <span className="eyebrow">
            WORKFLOW GUIDE · {w.tradeName.toUpperCase()}
          </span>
          <h1>{w.title}</h1>
          <p>{w.meta}</p>
          <div className="guideMeta">
            <span>10 practical picks</span>
            <span>Built around the service-call workflow</span>
            <span>US-focused</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell workflowShell">
          <EditorialByline />
          <div className="workflowIntro">
            <span className="eyebrow orange">THE IDEA</span>
            <h2>Build the bag around the job, not the catalogue.</h2>
            <p>{w.summary}</p>
          </div>

          <div className="workflowStages">
            {w.stages.map((s, i) => (
              <article key={s.name}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{s.name}</h3>
                  <p>{s.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="sectionHeading workflowHeading">
            <div>
              <span className="eyebrow orange">SERVICE-CALL KIT</span>
              <h2>The tools that earn their place in the bag.</h2>
            </div>
            <p>
              These are organized by the part of the call they support. “Core”
              means we would prioritize it before the nice-to-have upgrades.
            </p>
          </div>

          <AffiliateDisclosure />
          <div className="workflowToolGrid">
            {w.tools.map((t) => (
              <article className="workflowTool" key={t.name}>
                <div className="workflowToolTop">
                  <span className={`priority ${t.priority.toLowerCase()}`}>
                    {t.priority}
                  </span>
                  <span>{t.stage}</span>
                </div>
                <p className="toolType">{t.type}</p>
                <h3>{t.name}</h3>
                <p>{t.why}</p>
                <div className="workflowActions">
                  {t.reviewUrl && (
                    <Link href={t.reviewUrl} className="reviewBtn">
                      Read full review
                    </Link>
                  )}
                  <a
                    href={t.amazonUrl}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    className="amazonBtn"
                  >
                    Check Price on Amazon
                  </a>
                </div>
                <small className="micro">
                  Paid link — we may earn a commission.
                </small>
              </article>
            ))}
          </div>

          <section className="workflowDecision">
            <span className="eyebrow orange">WHY THIS IS DIFFERENT</span>
            <h2>
              Most tool lists start with products. This one starts with the
              call.
            </h2>
            <div className="decisionGrid">
              <div>
                <b>01</b>
                <h3>Safety first</h3>
                <p>
                  The first question is what lets you approach and verify the
                  work safely, not which brand has the loudest launch campaign.
                </p>
              </div>
              <div>
                <b>02</b>
                <h3>Reduce second trips</h3>
                <p>
                  Tools earn a place when they remove guesswork, avoid a return
                  to the van or help verify the repair before you leave.
                </p>
              </div>
              <div>
                <b>03</b>
                <h3>Buy in the right order</h3>
                <p>
                  Apprentices and working techs can see what is core, what is
                  useful and what is an upgrade instead of buying everything at
                  once.
                </p>
              </div>
            </div>
          </section>

          <section className="faq">
            <span className="eyebrow orange">SEARCH QUESTIONS</span>
            <h2>Electrician service-call tool questions</h2>
            {w.faqs.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </section>
          <aside className="relatedBox">
            <b>Compare the tools for this job</b>
            {guides
              .filter((g) => g.trade === trade)
              .map((g) => (
                <p key={g.slug}>
                  <Link href={`/${trade}/${g.slug}/`}>{g.title} →</Link>
                </p>
              ))}
          </aside>

          <div className="affiliateFooter">
            <b>Affiliate disclosure:</b> TradeGear HQ may earn a commission from
            qualifying purchases made through links on this page. As an Amazon
            Associate I earn from qualifying purchases.
          </div>
        </div>
      </section>
    </>
  );
}
