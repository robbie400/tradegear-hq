import { ProductPhoto } from "@/components/ProductPhoto";
import { ProductFeedback } from "@/components/ProductFeedback";
import { getProductImage } from "@/lib/product-images";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getReview, reviews } from "@/lib/reviews";
import { getTradeWorkflows } from "@/lib/workflows";
import {
  EditorialByline,
  PageSchema,
} from "@/components/Editorial";
export function generateStaticParams() {
  return reviews.map((r) => ({ slug: r.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = getReview(slug);
  if (!r) return {};
  return {
    title: r.title,
    description: r.meta,
    openGraph: {title:r.title,description:r.meta,url:`/reviews/${slug}/`},
    alternates: { canonical: `/reviews/${slug}/` },
  };
}
export default async function ReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = getReview(slug);
  if (!r) notFound();
  const photo = getProductImage(r.slug);
  const alternatives = reviews.filter(
    (x) => x.trade === r.trade && x.guideSlug === r.guideSlug && x.slug !== r.slug,
  );
  const workflows = getTradeWorkflows(r.trade).filter(w => w.tools.some(t => t.guideUrl === `/${r.trade}/${r.guideSlug}/` || t.reviewUrl === `/reviews/${r.slug}/`));
  return (
    <>
      <PageSchema
        title={r.title}
        description={r.meta}
        path={`/reviews/${slug}/`}
        crumbs={[
          { name: "Home", path: "/" },
          { name: r.tradeName, path: `/${r.trade}/` },
          { name: r.guideTitle, path: `/${r.trade}/${r.guideSlug}/` },
          { name: r.model, path: `/reviews/${slug}/` },
        ]}
      />
      <section className="reviewHero">
        <div className={`shell reviewShell${photo ? " reviewHeroWithPhoto" : ""}`}>
          <div className="reviewHeroCopy">
          <div className="crumb">
            <Link href="/">Home</Link> /{" "}
            <Link href={`/${r.trade}/`}>{r.tradeName}</Link> /{" "}
            <Link href={`/${r.trade}/${r.guideSlug}/`}>{r.guideTitle}</Link> /{" "}
            {r.model}
          </div>
          <span className="eyebrow orange">
            PRODUCT REVIEW · {r.tradeName.toUpperCase()}
          </span>
          <h1>{r.title}</h1>
          <p>{r.meta}</p>
          <EditorialByline />
          <div className="reviewHeroActions">
            <a
              className="amazonBtn"
              href={r.amazonUrl}
              target="_blank"
              rel="sponsored nofollow noopener"
            >
              Check Price on Amazon
            </a>
            <Link className="secondaryBtn" href={`/${r.trade}/${r.guideSlug}/`}>
              Back to comparison
            </Link>
          </div>
          </div>
          {photo && <ProductPhoto photo={photo} className="reviewHeroPhoto" priority credit />}
        </div>
      </section>
      <section className="section">
        <div className="shell reviewShell">
          <div className="reviewLeadGrid">
            <div className="reviewProductPanel">
              <span>{r.role}</span>
              <strong>{r.brand}</strong>
              <h2>{r.model}</h2>
              <p>
                {r.specs[0].label}: {r.specs[0].value}
              </p>
              <p>Research-based review</p>
            </div>
            <div>
              <span className="eyebrow orange">QUICK VERDICT</span>
              <p className="leadCopy">{r.intro}</p>
              <div className="verdictBox">
                <b>Our take</b>
                <p>{r.verdict}</p>
              </div>
            </div>
          </div>
          <ProductFeedback trade={r.trade} brand={r.brand} model={r.model} productId={r.slug} />
          <div className="fitGrid">
            <div className="fitCard">
              <b>Best for</b>
              <p>{r.bestFor}</p>
            </div>
            <div className="fitCard">
              <b>Skip it if</b>
              <p>{r.avoidIf}</p>
            </div>
          </div>
          <div className="prosCons">
            <div>
              <h2>Pros</h2>
              <ul>
                {r.pros.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Cons</h2>
              <ul>
                {r.cons.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
          <section className="specSection">
            <span className="eyebrow orange">MANUFACTURER SPECIFICATIONS</span>
            <h2>Key specs</h2>
            <div className="specGrid">
              {r.specs.map((s) => (
                <div className="specRow" key={s.label}>
                  <span>{s.label}</span>
                  <b>{s.value}</b>
                </div>
              ))}
            </div>
          </section>
          <div className="articleBody">
            {r.sections.map((s) => (
              <section key={s.heading}>
                <h2>{s.heading}</h2>
                <p>{s.body}</p>
              </section>
            ))}
          </div>
          <div className="sourceBox">
            <b>Sources and review method</b>
            <p>
              {r.sourceNote ||
                "Technical details were checked against manufacturer documentation. Recommendations reflect the documented features and their fit for the work."}
            </p>
            <p>
              This is a research-based review. We have not hands-on tested this
              product or independently measured its performance.{" "}
              <Link href="/how-we-choose/">How we choose tools →</Link>
            </p>
            <ul>
              <li>
                <a href={r.sourceUrl} target="_blank" rel="noopener noreferrer">
                  Primary manufacturer source ↗
                </a>
              </li>
              {r.extraSources?.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="reviewCta">
            <div>
              <span className="eyebrow">CHECK THE CURRENT OFFER</span>
              <h2>
                {r.brand} {r.model}
              </h2>
              <p>
                Confirm the exact model, kit contents and seller. The link may
                open a product search; prices and availability can change.
              </p>
            </div>
            <a
              className="amazonBtn"
              href={r.amazonUrl}
              target="_blank"
              rel="sponsored nofollow noopener"
            >
              Check Price on Amazon
            </a>
          </div>
          <section className="faq">
            <span className="eyebrow orange">QUESTIONS & ANSWERS</span>
            <h2>Frequently asked questions</h2>
            {r.faqs.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </section>
          <div className="relatedBox">
            <b>Compare before you buy</b>
            <p>
              <Link href={`/${r.trade}/${r.guideSlug}/`}>
                See all five picks in {r.guideTitle} →
              </Link>
            </p>
            <ul>
              {alternatives.map((a) => (
                <li key={a.slug}>
                  <Link href={`/reviews/${a.slug}/`}>
                    {a.brand} {a.model}
                  </Link>{" "}
                  — {a.role}
                </li>
              ))}
            </ul>
            {workflows.map((w) => (
              <p key={w.slug}>
                <Link href={`/${r.trade}/workflows/${w.slug}/`}>
                  {w.title} →
                </Link>
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
