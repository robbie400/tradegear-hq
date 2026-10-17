import {automotiveEnabled,automotiveProducts} from '@/lib/automotive-catalog';
import {carpenterFinal25Categories} from '@/lib/carpenter-final25';
import type { MetadataRoute } from "next";
import { guides, hubs } from "@/lib/data";
import { reviews } from "@/lib/reviews";
import { workflows } from "@/lib/workflows";
import { reviewedDate, canonicalAbsoluteUrl } from "@/components/Editorial";
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
  return paths.map((path) => ({
    url: canonicalAbsoluteUrl(path),
    lastModified: path.startsWith('/automotive-mechanics/') ? '2026-10-16' : updatedPaths.has(path) ? '2026-10-14' : path.startsWith('/carpenters/') || path.startsWith('/reviews/carpenters-') ? '2026-10-13' : reviewedDate,
  }));
}
