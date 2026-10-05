import type { Guide } from "./data";
import { getProductImage } from "./product-images";

// Give each electrician category its own actual tool photo instead of the trade's shared stock image.
export function getGuideImage(guide: Guide) {
  if (guide.trade !== "electricians") return undefined;
  const product = guide.products[0];
  return product && getProductImage(product.productId || product.reviewSlug || `${product.brand} ${product.model}`);
}
