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


## Carousel and photo correction — 2026-10-15

The essentials strip now has prominent 44px left/right arrow buttons vertically centered on the card row. Buttons move a visible group of complete cards, update their disabled state at each end, work with keyboard input, and respect reduced-motion preferences. Native swipe and keyboard scrolling remain available. The bottom scrollbar is hidden. On narrow screens the track displays one card between the controls. Search remounts the strip at its first result.

Pica 3030 now uses the official model-specific photo pack, `3030_Dry/3030_Dry_Hero-1_Open_Closed.png`, resized to WebP without changing product content. It shows one pencil in/out of its holster, not a two-pencil package. Local asset: `public/images/essentials/pica-3030.webp`. Source: https://pica-marker.com/wp-content/uploads/2026/06/3030_Dry.zip . Permission: https://pica-marker.com/en/downloads/ explicitly states: “All data packages can be used for both web and print.” Retrieved 2026-10-15; no gating agreement or dealer-only qualification appears on that downloads page. The card attributes the photograph to Pica.

Remaining ten product images remain permission-pending; publicly reachable photos and downloadable links alone have not been treated as licences. Klein terms expressly require written approval for republication: https://www.kleintools.com/content/terms-conditions . Crescent/Apex restrict commercial reuse: https://www.crescenttool.com/terms-service . Milwaukee reserves image rights: https://www.milwaukeetool.com/legal . Streamlight’s media kit directs publishers to request high-resolution images: https://www.streamlight.com/community/newsletters-press . No permission request has been sent, and no Amazon image has been copied.

This correction does not change product IDs, trade/family mappings, ASINs, affiliate helpers, the held DEWALT purchase link, review/guide counts, or the planner branch. Mobile visual verification remains pending as recorded above.


## Publisher-directed manufacturer photos — 2026-10-15 (supersedes photo hold above)

After reviewing the unresolved permissions, the publisher instructed: “Ah no, we'll be okay. I think we won't get in trouble if we, if we use them.” The remaining ten manufacturer photographs are now displayed in the review preview at the publisher’s direction. This is an editorial publication instruction, not a manufacturer licence or rights clearance. No contact requests were sent. The status is explicitly `publisher-directed-permission-unconfirmed`; `image.rightsNote` records that distinction and `image.sourceUrl` records the exact source page. Pica retains its separate, established web-use permission and local asset.

Klein uses exact-model main packshots from the official product galleries. DEWALT uses the image explicitly labelled DPG94-1C in the Radians gallery, rather than its generic family social-preview image. Crescent and Wiss use exact-model main product photos; Bucket Boss uses its 50200 photograph; Milwaukee uses its 48-22-2502 page photo; Streamlight uses the black Stylus Pro gallery image. External photographs use the existing Next Image pipeline and manufacturer attribution. Card images are contained, not cropped. This change does not resolve or enable the mismatched DEWALT Amazon link.

No production release is authorised by this instruction. Review and approve the updated preview separately.


## Directory placement and footer access — 2026-10-15

At the publisher’s request, all five tool directories now render the full reviews/comparisons grid before the Apprentice Essentials carousel. The existing horizontal group-navigation link remains in its original position; it jumps to the relocated section. The section has a 100px anchor offset to clear the sticky header. Search still filters both types of record and can show an essential directly when it is the only matching result.

The sitewide footer adds Apprentice Essentials immediately below Trade Guides. It opens `/apprentice-essentials/`, a small five-trade chooser linking to each directory’s essentials anchor. The chooser does not add or duplicate product records, reviews, buying guides, planner functionality or product detail pages. It is included in the sitemap as a navigation page. All approved product images, source/permission status, affiliate routing and the withheld DEWALT destination remain unchanged.
