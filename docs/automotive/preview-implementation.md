# Automotive Mechanics — first-batch preview

Owner authorized page work on 15 October 2026 after photo preparation. Development branch: `feature/automotive-first-batch`. Production remains held for review.

## Implemented scope

- 50 product buying-note pages and visible directory cards, all with exact Amazon.com destinations and local product photographs.
- 18 buying guides and seven job workflows. The remaining two guides and three workflows depend on second-batch products; the overall target remains 100 products, 20 guides and 10 workflows.
- Hand-tool guide separated into functional groups rather than ranking unlike tools together.
- Six existing product IDs reused through the shared catalogue. Family and product ID lookups are available without changing the separately developed Toolkit Builder application.
- Research-based notes are labelled as such. No new full reviews, invented prices, stock claims, ratings or customer quotes.

## Owner review points

- Arcan A20019 replaces the unresolved A20018 candidate in this preview.
- Clear industrial DEWALT DPG94-1D replaces the unresolved DPG94-1C candidate in this preview.
- These are explicit proposed substitutions, not claims that the original variants were verified. Their manufacturer details, exact ASINs and identity evidence are in `preview-verification.json`.
- The owner directed use of the source photos; no manufacturer reuse licence is asserted. All 50 retain `publisher-directed-permission-unconfirmed` status and photo source URLs.
- 49 source originals have a long edge of at least 1,000 px. Lisle 17922 is 697 × 418 px. WebP derivatives preserve aspect ratio and do not upscale the sources.

## Verification

`npm test` includes automotive regressions covering all 50 records, the seven formerly unresolved ASINs, two explicit substitutions, source-photo presence, affiliate destinations, family/search discovery, six reused IDs and unchanged production catalogue counts. `npm run build` passes with the existing image-element lint warnings.

HTTP checks cover the hub, directory, all 50 buying-note pages and all 50 photo assets. Browser visual verification is recorded separately when the preview is available.

The automotive feature is excluded when `VERCEL_ENV=production`, so approval and an intentional release change are required before production publication.
