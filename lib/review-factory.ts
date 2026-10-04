import { guides } from "./data";
import type { ProductReview } from "./reviews";

type Editorial = Pick<
  ProductReview,
  | "title"
  | "meta"
  | "sourceUrl"
  | "intro"
  | "verdict"
  | "bestFor"
  | "avoidIf"
  | "pros"
  | "cons"
  | "specs"
  | "sections"
  | "faqs"
> & { sourceNote?: string; extraSources?: { label: string; url: string }[] };
export function makeReview(
  trade: string,
  slot: number,
  editorial: Editorial,
): ProductReview {
  const guide = guides.find((g) => g.trade === trade);
  if (!guide) throw new Error(`Missing guide for ${trade}`);
  const product = guide.products[slot];
  if (!product.reviewSlug)
    throw new Error(`Missing review key for ${product.model}`);
  return {
    slug: product.reviewSlug,
    trade,
    tradeName: guide.tradeName,
    guideSlug: guide.slug,
    guideTitle: guide.title,
    brand: product.brand,
    model: product.model,
    role: product.role,
    amazonUrl: product.url,
    ...editorial,
  };
}
