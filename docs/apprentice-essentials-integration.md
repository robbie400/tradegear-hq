# Apprentice essentials: catalogue integration

Branch: `feature/apprentice-essentials`. Preview only. The independently developed `feature/apprentice-tool-list-mvp` application is not edited by this change.

## Approved scope

Eleven lightweight product records are defined once in `lib/apprentice-essentials.ts`. They are rendered in compact, searchable Apprentice Essentials sections in the five existing trade tool directories. They are not standalone reviews or buying guides. Existing catalogue totals remain 401 placements, 333 unique IDs, 81 guides and 178 reviews. The global search adds the 11 unique essentials once, producing 344 distinct search items.

| Product ID | Exact model | Tool-family ID | Directories |
|---|---|---|---|
| klein-935rb | Klein 935RB | magnetic-torpedo-level | Electricians, Plumbers, HVAC |
| crescent-ac210vs | Crescent AC210VS | adjustable-wrench | Electricians, Plumbers, HVAC |
| dewalt-dpg94-1c | DEWALT DPG94-1C | safety-glasses | All five |
| bucket-boss-50200 | Bucket Boss 50200 | carpenter-tool-belt | Carpenters |
| pica-3030 | Pica 3030 | marking-pencil | Carpenters, Electricians |
| klein-31430 | Klein 31430 | hacksaw | Electricians, Plumbers |
| klein-d228-8 | Klein D228-8 | diagonal-cutting-pliers | Electricians, HVAC |
| klein-d203-8 | Klein D203-8 | needle-nose-pliers | Electricians, HVAC |
| milwaukee-48-22-2502 | Milwaukee 48-22-2502 | magnetic-nut-driver-set | Electricians, HVAC |
| wiss-m3r | Crescent Wiss M3R | aviation-snips | HVAC, Plumbers, Carpenters |
| streamlight-66118 | Streamlight 66118 | inspection-flashlight | Home Inspectors, Electricians |

Placement counts: Electricians 9, Plumbers 5, HVAC 7, Carpenters 4, Home Inspectors 2. Repeated trade placements reference the same canonical record. Gloves and research alternatives are excluded.

## Listing and image exceptions

Fresh Amazon detail-page checks were requested for the exact approved ASINs before implementation. Ten products have matched purchase destinations. Pica's direct request returned an error; its same-ASIN Amazon product-summary page was then retrieved and matched successfully.

**DEWALT exception:** approved ASIN B002IVTX8E currently identifies DPG94-1D / DPG94-1D-CLEAR in its title and product fields, rather than approved DPG94-1C. The 1C record remains visible with a pending message, but no purchase link is rendered or returned by the shared purchase-URL helper. No replacement model or unverified ASIN is introduced. Resolve the exact 1C listing, or obtain explicit approval for a model change, before enabling this CTA.

**Streamlight metadata:** the listing title identifies 683-66118/66118, and its UPC 080926661189 exactly matches the manufacturer's black 66118 item. An unrelated generic part-number field remains inconsistent. Identity was corroborated using the official part-number sheet: https://www.streamlight.com/docs/default-source/info-sheet-with-part-numbers/stylus-pro_sup.pdf . The card avoids output/runtime claims and preserves the approved ASIN.

**Images:** none of the 11 new product photographs has a confirmed reuse licence. All cards use neutral, original SVG package placeholders, not scraped or generated product photos. The record's optional image slot includes a required rights basis for later authorised assets. No dated research prices, availability claims, Amazon star scores or review counts are published.

## Planner integration surface

The planner can adopt these modules when its owner integrates this branch. No planner screen, route, state or recommendation rule is added here.

```ts
import {
  getApprenticeEssentialById,
  getApprenticeEssentialsByFamily,
  getApprenticeEssentialsForTrade,
} from '@/lib/apprentice-essentials';

import {
  getToolkitProducts,
  getToolkitProductById,
  getToolkitProductsByFamily,
  getToolkitProductsForTrade,
  getToolkitPurchaseUrl,
} from '@/lib/toolkit-catalogue';

getApprenticeEssentialsByFamily('magnetic-torpedo-level');
getToolkitProductById('pica-3030');
getToolkitProductsByFamily('tape-measure', 'electricians');
// References existing stanley-33-725. No duplicate product/review created.
getToolkitProductsByFamily('tape-measure', 'plumbers');
// Same canonical product, with its original carpentry review/guide placements.
getToolkitPurchaseUrl('dewalt-dpg94-1c', 'electricians');
// undefined while model matching remains unresolved.
```

The unified adapter deduplicates existing catalogue entries by their current product IDs and preserves all original guide/review placements. All 11 new essentials have explicit family IDs. The existing Stanley 33-725 has an explicit `tape-measure` capability mapping and cross-trade eligibility; other existing equipment remains available by ID with its original trade associations. Unclassified existing products have an empty `familyIds` list until curated mappings are added. The adapter does not infer a tool's function from a broad comparison category or automatically assert that every product is required for an apprentice.

Do not convert `amazon.status: existing-destination` into an exact-ASIN verification claim: many original catalogue links are tagged search destinations. For essentials, require `matched` before showing a buy button. Use `getToolkitPurchaseUrl(id, trade)` so the hold and trade eligibility checks apply. Ownership, employer provision, task priority and budget rules remain the separate planner's responsibility.

## Affiliate routing

Matched essentials use the approved exact Amazon.com ASIN, established `robbieom0e-20` fallback tag, and existing `affiliateUrl()` per-trade override. Buttons preserve `data-trade`, `data-product`, `target="_blank"` and `rel="sponsored nofollow noopener noreferrer"`; they also expose `data-product-id`. The site's existing consent-aware document click handler remains unchanged. The essentials section includes the standard Amazon disclosure. Source URLs are retained as editorial metadata, not competing buying destinations.

## Review and release

Run `npm test`, `npm run lint`, `npm run build`, then check directory search and horizontal cards at desktop and mobile widths. `scripts/validate-apprentice-essentials.cjs` covers the approved set, ASIN correspondence, held link, reuse and trade mappings. Existing catalogue/directory checks retain their original expected guide, review and product counts.

No production merge or deployment is authorised. Review the Vercel preview before release. A later planner integration must coordinate the shared modules with the planner branch rather than overwrite its implementation.

## Completed validation and remaining check

Catalogue, feedback, affiliate, directory and essentials tests pass. Lint reports no errors and eight pre-existing image-optimization warnings. The production build succeeds. The rendered production-mode audit checks 312 sitemap pages and 8,542 internal links with zero errors; original review and guide counts are preserved.

Desktop browser checks on the deployed preview confirm all five directory placement counts, 22 rendered tagged Amazon buttons across 10 unique matched products, the held glasses card, and one deduplicated Pica result in homepage search that navigates to its directory card. Directory filtering works. Full-page horizontal overflow was absent at the available desktop width. See `apprentice-essentials-browser-checks.json`.

Mobile scrolling CSS is implemented, but a mobile visual/interaction pass remains outstanding. This browser exposes no viewport-resize API and blocked the local responsive harness; the local Playwright browser could not be installed in the execution environment. Do not label mobile browser verification complete. Review the preview on a mobile viewport before production approval.
