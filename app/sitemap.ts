import {automotiveEnabled,automotiveProducts} from '@/lib/automotive-catalog';
import {automotiveReviewDate} from '@/lib/automotive-reviews';
import {carpenterFinal25Categories} from '@/lib/carpenter-final25';
import type { MetadataRoute } from "next";
import { guides, hubs } from "@/lib/data";
import { reviews } from "@/lib/reviews";
import { workflows } from "@/lib/workflows";
import { reviewedDate, siteUrl } from "@/components/Editorial";
import {indexingPriorityCanonicalPath} from '@/lib/indexing-priority';
export default function sitemap(): MetadataRoute.Sitemap {
  if (process.env.NEXT_PUBLIC_INDEX_SITE !== "true") return [];
  const paths = [
    "/",
    "/how-we-choose/",
    "/privacy/",
    "/apprentice-essentials/",
    ...(automotiveEnabled ? automotiveProducts.map(p=>`/automotive-mechanics/products/${p.id}/`) : []),
    ...hubs.map((h) => `/${h.slug}/tools/`),
    ...hubs.map((h) => `/${h.slug}/`),
    ...guides.map((g) => `/${g.trade}/${g.slug}/`),
    ...reviews.map((r) => `/reviews/${r.slug}/`),
    ...workflows.map((w) => `/${w.trade}/workflows/${w.slug}/`),
  ];
  const updatedPaths=new Set([...hubs.flatMap(h=>[`/${h.slug}/`,`/${h.slug}/tools/`]),...carpenterFinal25Categories.map(c=>`/carpenters/${c.slug}/`),...reviews.filter(r=>r.sourceNote?.includes('October 14')).map(r=>`/reviews/${r.slug}/`)]);
  const automotiveDates=new Map(automotiveProducts.map(p=>[`/automotive-mechanics/products/${p.id}/`,automotiveReviewDate(p)]));
  return paths.map((path) => ({
    url: siteUrl + indexingPriorityCanonicalPath(path),
    lastModified: automotiveDates.get(path) || (path.startsWith('/automotive-mechanics/') ? '2026-10-17' : updatedPaths.has(path) ? '2026-10-14' : path.startsWith('/carpenters/') || path.startsWith('/reviews/carpenters-') ? '2026-10-13' : reviewedDate),
  }));
}
