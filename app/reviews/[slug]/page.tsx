import {indexingPriorityCanonicalPath} from '@/lib/indexing-priority';
import {FullProductReview} from '@/components/FullProductReview';
import {getGuide} from '@/lib/data';
import { getProductImage } from "@/lib/product-images";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getReview, reviews } from "@/lib/reviews";
import { getTradeWorkflows } from "@/lib/workflows";
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
    openGraph: {title:r.title,description:r.meta,url:indexingPriorityCanonicalPath(`/reviews/${slug}/`)},
    alternates: { canonical: indexingPriorityCanonicalPath(`/reviews/${slug}/`) },
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
  const workflows = getTradeWorkflows(r.trade).filter(w => (r.sourceNote?.includes('October 14') && getGuide(r.trade,r.guideSlug)?.workflowSlugs?.includes(w.slug)) || w.tools.some(t => t.guideUrl === `/${r.trade}/${r.guideSlug}/` || t.reviewUrl === `/reviews/${r.slug}/`));
  return <FullProductReview r={r} photo={photo} path={`/reviews/${slug}/`} date={r.trade === 'carpenters' ? (r.sourceNote?.includes('October 14') ? '2026-10-14' : r.sourceNote?.includes('October 13') ? '2026-10-13' : '2026-10-12') : undefined} alternatives={alternatives.map(a=>({url:`/reviews/${a.slug}/`,brand:a.brand,model:a.model,role:a.role}))} workflows={workflows}/>;
}
