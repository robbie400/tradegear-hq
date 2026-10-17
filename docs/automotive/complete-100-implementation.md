# Automotive Mechanics — complete 100-product preview

Implemented October 17, 2026 after Robbie approved building all 39 remaining products. Branch: `feature/automotive-complete-100`. Preview only; production release is not authorized by this build request.

The automotive catalogue now contains 100 substantial research-based product reviews, 20 buying guides and 10 workflows. The original 61 reviews' editorial records and labelled specifications are unchanged. The separate Apprentice Toolkit Builder application is untouched; its existing read-only catalogue surface now resolves 438 unique canonical records, with the established six cross-trade automotive records still reused.

## Presentation and content

The 39 additions use the existing `FullProductReview` renderer: photograph, review headline, summary, byline, affiliate CTA, Quick Verdict/Our Take, Best For/Skip It If, model-specific pros/cons, labelled specifications, distinct analysis sections, FAQs, sources, alternatives, workflow links and final buying CTA. Visible new review text ranges from 675 to 981 words. No generic duplicated analysis paragraphs were added.

All 100 automotive records have real photographs and the established content-bound framing. The MV6412A thumbnail was replaced with the manufacturer's 800 × 882 photo. The S-506 photograph now comes from an exact model/UPC retailer record. The yellow-only 68750 photo avoids the manufacturer's mixed-colour image. Smaller source images are kept at their genuine resolution, never upscaled and described as high resolution.

The existing compact brown-gradient quote styling, border, padding and typography are unchanged. Added 26 short attributed customer excerpts across 18 new products, bringing automotive to 38 quotations across 27 products. Source links, individual-experience caveats and displayed incentive context are retained. Quotations stay within 25 words per source URL across the automotive collection. Numeric ratings remain separate from editorial assessment and schema.

There are now 83 verified non-Amazon source scores and 17 explicit unscored products. Unscored pages use the existing Amazon customer-reviews link. Stars and counts link to the exact tagged Amazon destination, with the actual rating source displayed. Quarter-point retailer scores such as 4.75 retain their source precision. No Amazon ratings, counts, prices, offers or availability have been copied into public content or Product/Review schema.

## Important model and grouping checks

- Current Motivx MX2320-US and MX2326-US retain the stable tracker IDs, with the documented 64.3 mm and 86.6 mm interfaces respectively.
- Milwaukee 2562-20 is the newer 3/8-inch bare tool; DCF900B is tool-only; GWMP100 is an empty case; SUNEX 8019B is black.
- Milton S-506 is corroborated by matching model and UPC 030937005069 on Amazon and Mac's Hardware. The manufacturer's current S-506W field is disclosed; an S-506D rating and quote were rejected. Its inlet and separately described thread detail are not conflated.
- BlueDriver LSB2 remains distinct from Pro Next-Gen. Newer-generation reset or programming claims are not transferred.
- OTC 6295 already includes 6297. The set and standalone product are presented as alternatives.
- C11 separates pressing, front-end separation, hub/bearing work, slide-hammer extraction and harmonic-damper removal. Lisle 51450 remains a mechanical puller, outside diagnostic gauge comparison C17.
- C15 separates pressure tests, filling/vacuum refill and heater-core backflushing. The transmission filler is excluded from the cooling workflow.
- Added source checks corrected duplicate OTC source paths, documented receiver sizes and Hub Grappler guide coverage through 2018. Corrected the Lisle 19722 specifications from its exact manufacturer page: 8 US quarts, 24 × 36 × 1.5 inches, polyethylene.

## Verification

- Existing `npm test` suite passes: catalogue, cross-trade reuse, directory search, affiliate routing, all 100 full reviews, Product/Review schema, feedback and ratings.
- All 100 images were decoded successfully; photo bounds and exact affiliate destinations are checked.
- Production build passes: 450 static routes generated, including all 100 automotive product pages. Only pre-existing image-optimization lint warnings remain.
- New meta descriptions are at most 160 characters. Existing breadcrumb, Product/Review pros-and-cons markup, canonical and sitemap architecture is reused. Automotive sitemap dates reflect review dates, and the latest main-branch indexing fixes are preserved.
- The shared full-review renderer and customer-quote CSS remain unchanged. No new review layout or planner UI was introduced.

The local managed preview supervisor could not start this existing Next.js checkout; source/build checks completed independently. Browser verification is performed against the Vercel preview after deployment.

## Source and permission limits

Image source provenance and reuse permission are separate. No new manufacturer reuse licence is asserted: permission evidence remains unconfirmed in each image record, matching the existing publisher-directed source architecture. Production publication still requires owner review of the finished preview and these recorded conditions.

Firecrawl completed the review and customer-source research jobs, then the connected account exhausted its credits during extra source rechecks. Additional direct web source checks were used. No account upgrade was initiated and no unavailable quote or score was invented to fill a gap. Sources, dates, model evidence, rejected matches and short excerpts are preserved in the accompanying verification JSON.
