import type { MetadataRoute } from "next";
import { guides, hubs } from "@/lib/data";
import { reviews } from "@/lib/reviews";
import { workflows } from "@/lib/workflows";
import { reviewedDate, siteUrl } from "@/components/Editorial";
export default function sitemap(): MetadataRoute.Sitemap {
  if (process.env.NEXT_PUBLIC_INDEX_SITE !== "true") return [];
  const paths = [
    "/",
    "/how-we-choose/",
    ...hubs.map((h) => `/${h.slug}/`),
    ...guides.map((g) => `/${g.trade}/${g.slug}/`),
    ...reviews.map((r) => `/reviews/${r.slug}/`),
    ...workflows.map((w) => `/${w.trade}/workflows/${w.slug}/`),
  ];
  return paths.map((path) => ({
    url: siteUrl + path,
    lastModified: reviewedDate,
  }));
}
