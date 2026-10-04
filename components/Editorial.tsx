import Link from "next/link";
export const reviewedDate = "2026-10-04";
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://tradegear-hq.vercel.app";
export function EditorialByline() {
  return (
    <p className="editorialByline">
      By TradeGear HQ editorial desk · Reviewed{" "}
      <time dateTime={reviewedDate}>October 4, 2026</time> ·{" "}
      <Link href="/how-we-choose/">Research methodology</Link>
    </p>
  );
}
export function AffiliateDisclosure() {
  return (
    <p className="affiliateDisclosure">
      Affiliate disclosure: We may earn a commission from purchases made through
      links on this page.
    </p>
  );
}
export function PageSchema({
  title,
  path,
  description,
  crumbs,
}: {
  title: string;
  path: string;
  description: string;
  crumbs: { name: string; path: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: title,
        description,
        url: siteUrl + path,
        dateModified: reviewedDate,
        author: {
          "@type": "Organization",
          name: "TradeGear HQ editorial desk",
          url: siteUrl + "/how-we-choose/",
        },
        publisher: {
          "@type": "Organization",
          name: "TradeGear HQ",
          url: siteUrl,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.name,
          item: siteUrl + c.path,
        })),
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
