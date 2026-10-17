import Link from "next/link";
import {indexingPriorityCanonicalPath} from '@/lib/indexing-priority';
export const reviewedDate = "2026-10-04";
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://tradegear-hq.vercel.app";
export function EditorialByline({date = reviewedDate, showMethodology=true}:{date?:string;showMethodology?:boolean} = {}) {
  return (
    <p className="editorialByline">
      By TradeGear HQ editorial desk · Reviewed{" "}
      <time dateTime={date}>{new Intl.DateTimeFormat('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'}).format(new Date(`${date}T00:00:00Z`))}</time>{showMethodology && <> · <Link href="/how-we-choose/">Research methodology</Link></>}
    </p>
  );
}
export function PageSchema({
  title,
  path,
  description,
  crumbs,
  kind = "Article",
  date = reviewedDate,
}: {
  title: string;
  path: string;
  description: string;
  crumbs: { name: string; path: string }[];
  kind?: "Article" | "CollectionPage";
  date?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": kind,
        headline: title,
        description,
        url: siteUrl + indexingPriorityCanonicalPath(path),
        dateModified: date,
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
          item: siteUrl + indexingPriorityCanonicalPath(c.path),
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
