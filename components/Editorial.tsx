import Link from "@/components/SiteLink";
import {indexingPriorityCanonicalPath} from '@/lib/indexing-priority';
export const reviewedDate = "2026-10-04";
export const siteUrl =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://tradegearhq.com").replace(/\/+$/, "");
const homepageUrl = siteUrl + "/";
const organization = {
  "@type": "Organization",
  "@id": homepageUrl + "#organization",
  name: "TradeGear HQ",
  url: homepageUrl,
};
const websiteId = homepageUrl + "#website";

export function SiteSchema() {
  return <JsonLd data={{
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: organization.name,
        url: homepageUrl,
        inLanguage: "en-US",
        publisher: { "@id": organization["@id"] },
      },
    ],
  }} />;
}

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
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
  const url = siteUrl + indexingPriorityCanonicalPath(path);
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": kind,
        "@id": url + (kind === "Article" ? "#article" : "#webpage"),
        name: title,
        description,
        url,
        inLanguage: "en-US",
        isPartOf: { "@id": websiteId },
        publisher: organization,
        ...(kind === "Article" ? {
          headline: title,
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          dateModified: date,
          author: {
            "@type": "Organization",
            name: "TradeGear HQ editorial desk",
            url: siteUrl + indexingPriorityCanonicalPath("/how-we-choose/"),
          },
        } : { breadcrumb: { "@id": url + "#breadcrumb" } }),
      },
      {
        "@type": "BreadcrumbList",
        "@id": url + "#breadcrumb",
        itemListElement: crumbs.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.name,
          item: siteUrl + indexingPriorityCanonicalPath(c.path),
        })),
      },
    ],
  };
  return <JsonLd data={data} />;
}
