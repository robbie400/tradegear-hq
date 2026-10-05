import { ProductPhoto } from "@/components/ProductPhoto";
import { getProductImage } from "@/lib/product-images";
import { getGuideImage } from "@/lib/guide-images";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuide, getHub, guides } from "@/lib/data";
import { getReview } from "@/lib/reviews";
import { guideEditorial } from "@/lib/guide-editorial";
import { getTradeWorkflows } from "@/lib/workflows";
import {
  AffiliateDisclosure,
  EditorialByline,
  PageSchema,
} from "@/components/Editorial";
export function generateStaticParams() {
  return guides.map((g) => ({ trade: g.trade, slug: g.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ trade: string; slug: string }>;
}): Promise<Metadata> {
  const { trade, slug } = await params;
  const g = getGuide(trade, slug);
  if (!g) return {};
  return {
    title: g.title.split(":")[0],
    description: g.meta,
    openGraph: {title:g.title,description:g.meta,url:`/${trade}/${slug}/`},
    alternates: { canonical: `/${trade}/${slug}/` },
  };
}
export default async function Guide({
  params,
}: {
  params: Promise<{ trade: string; slug: string }>;
}) {
  const { trade, slug } = await params;
  const g = getGuide(trade, slug);
  if (!g) notFound();
  const hub = getHub(trade);
  const guideImage = getGuideImage(g);
  const e = guideEditorial[slug] || guideEditorial[trade];
  const workflows = getTradeWorkflows(trade).filter(w => !g.workflowSlugs || g.workflowSlugs.includes(w.slug));
  const fullReviewCount = g.products.filter(p => p.reviewSlug && getReview(p.reviewSlug)).length;
  const relatedGuides = guides.filter(x => x.trade === trade && x.slug !== slug && x.cluster === g.cluster);
  return (
    <>
      <PageSchema
        title={g.title}
        description={g.meta}
        path={`/${trade}/${slug}/`}
        crumbs={[
          { name: "Home", path: "/" },
          { name: g.tradeName, path: `/${trade}/` },
          { name: g.title, path: `/${trade}/${slug}/` },
        ]}
      />
      <section className={`guideHero${guideImage ? " guideHeroWithPhoto" : ""}`} id="top">
        {!guideImage && hub && (
          <img src={hub.image} alt={`${g.tradeName} professional at work`} />
        )}
        <div className="tradeHeroShade" />
        <div className="shell guideHeroInner">
          <div className="guideHeroCopy">
          <div className="crumb">
            <Link href="/">Home</Link> /{" "}
            <Link href={`/${trade}/`}>{g.tradeName}</Link> / {g.cluster}
          </div>
          <span className="eyebrow">
            {g.tradeName.toUpperCase()} · {g.cluster.toUpperCase()}
          </span>
          <h1>{g.title}</h1>
          <p>{e.answer}</p>
          <div className="guideMeta">
            <span>{g.products.length} picks · {fullReviewCount} full {fullReviewCount === 1 ? "review" : "reviews"}</span>
            <span>US-focused</span>
            <span>Research-based recommendations</span>
          </div>
          </div>
          {guideImage && <ProductPhoto photo={guideImage} className="guideHeroPhoto" priority credit />}
        </div>
      </section>
      <section className="section">
        <div className="shell guideShell">
          <EditorialByline />
          <nav className="articleNav" aria-label="On this page">
            <a href="#quick-picks">Quick picks</a>
            <a href="#choosing">How to choose</a>
            <a href="#detailed-picks">Detailed picks</a>
            <a href="#questions">Buying questions</a>
          </nav>
          <div className="sectionHeading" id="quick-picks">
            <h2>Quick picks</h2>
            <p>
              Choose by the task. Read the detailed buying assessment and available full reviews before checking the retailer offer.
            </p>
          </div>
          <AffiliateDisclosure />
          <div className="compare">
            {g.products.map((p, i) => (
              <div className="compareRow" key={p.productId || p.reviewSlug}>
                <b className="rank">{String(i + 1).padStart(2, "0")}</b>
                <div className="compareIdentity">
                  <ProductPhoto photo={getProductImage(p.productId || p.reviewSlug || `${p.brand} ${p.model}`)} className="comparePhoto" />
                  <div>
                  <span>{p.role}</span>
                  <Link href={`#pick-${i + 1}`} className="productJump">
                    <strong>
                      {p.brand} {p.model}
                    </strong>
                  </Link>
                  </div>
                </div>
                <div className="compareActions">
                  <Link
                    href={p.reviewSlug ? `/reviews/${p.reviewSlug}/` : `#pick-${i + 1}`}
                    className="detailLink"
                  >
                    {p.reviewSlug ? "Read full review →" : "Read buying assessment ↓"}
                  </Link>
                  <div>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="sponsored nofollow noopener"
                    >
                      Amazon →
                    </a>
                    <small className="micro">
                      Paid link — we may earn a commission.
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="editorialNote">{e.note}</p>
          <section className="method" id="choosing">
            <span className="eyebrow orange">HOW TO CHOOSE</span>
            <h2>What matters for the work</h2>
            <div className="criteriaGrid">
              {e.criteria.map((c) => (
                <div key={c.title}>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>
            <p className="methodNote">
              We compared manufacturer specifications and documented features.
              We have not hands-on tested these products.{" "}
              <Link href="/how-we-choose/">
                Read our recommendation method →
              </Link>
            </p>
          </section>
          {workflows.length > 0 && (
            <aside className="relatedBox">
              <b>Build the whole kit around the job</b>
              {workflows.map((w) => (
                <p key={w.slug}>
                  <Link href={`/${trade}/workflows/${w.slug}/`}>
                    {w.title} →
                  </Link>
                </p>
              ))}
            </aside>
          )}
          <div className="sectionHeading" id="detailed-picks">
            <h2>Detailed picks</h2>
            <p>
              Useful differences, meaningful drawbacks and the specifications
              behind each recommendation.
            </p>
          </div>
          <div className="productStack">
            {g.products.map((p, i) => {
              const fullReview = p.reviewSlug ? getReview(p.reviewSlug) : undefined;
              const r = fullReview || p.assessment;
              if (!r) throw new Error(`Missing assessment: ${p.model}`);
              return (
                <article
                  className="product"
                  id={`pick-${i + 1}`}
                  key={p.productId || p.reviewSlug}
                >
                  <div className={`rankPanel${getProductImage(p.productId || p.reviewSlug || `${p.brand} ${p.model}`) ? " rankPanelWithPhoto" : ""}`}>
                    <span>OPTION {i + 1}</span>
                    {getProductImage(p.productId || p.reviewSlug || `${p.brand} ${p.model}`) ? <ProductPhoto photo={getProductImage(p.productId || p.reviewSlug || `${p.brand} ${p.model}`)} className="pickPhoto" credit /> : <b>{String(i + 1).padStart(2, "0")}</b>}
                    <small>{p.role}</small>
                  </div>
                  <div className="productCopy">
                    <span className="badge">{p.role}</span>
                    <p className="brandName">{p.brand}</p>
                    <h3>{p.model}</h3>
                    <p>
                      <b>Best for:</b> {r.bestFor}
                    </p>
                    <p>{r.intro}</p>
                    <p>{r.verdict}</p>
                    <ul className="miniPros">
                      {r.pros.slice(0, 3).map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                    <dl className="pickSpecs">
                      {r.specs.slice(0, 3).map((s) => (
                        <div key={s.label}>
                          <dt>{s.label}</dt>
                          <dd>{s.value}</dd>
                        </div>
                      ))}
                    </dl>
                    <p className="tradeoff">
                      <b>Main tradeoff:</b> {r.cons[0]}
                    </p>
                    <p className="micro">
                      <a
                        href={r.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Manufacturer specification source ↗
                      </a>
                    </p>
                    <div className="productActions">
                      {fullReview && <Link className="reviewBtn" href={`/reviews/${fullReview.slug}/`}>Read Full Review</Link>}
                      <a
                        className="amazonBtn"
                        href={p.url}
                        target="_blank"
                        rel="sponsored nofollow noopener"
                      >
                        Check Price on Amazon
                      </a>
                      <a className="backLink" href="#top">
                        Back to shortlist ↑
                      </a>
                    </div>
                    <small className="micro">
                      Paid link — we may earn a commission. Check the exact
                      model and kit in the listing.
                    </small>
                  </div>
                </article>
              );
            })}
          </div>
          {relatedGuides.length > 0 && <aside className="relatedBox"><b>Other tools in {g.cluster}</b>{relatedGuides.map(x => <p key={x.slug}><Link href={`/${trade}/${x.slug}/`}>{x.title} →</Link></p>)}</aside>}
          <section className="faq" id="questions">
            <span className="eyebrow orange">BUYING QUESTIONS</span>
            <h2>Before you choose</h2>
            {e.faqs.map((f) => (
              <div className="visibleAnswer" key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </section>
        </div>
      </section>
    </>
  );
}
