# Technical architecture & URL rules
**Target:** independent Next.js 15/React/TypeScript/Vercel US kitchen research site, modelled on the *proven UI patterns* in TradeGear HQ. Not another trade inside TradeGear HQ. No cross-domain canonical or shared Google verification; no accidental live publication.

## From TradeGear HQ to Kitchen Equipment HQ
Reuse/adapt the patterns (not site credentials, analytics or brand): `components/FullProductReview.tsx` (hero, quick verdict, Our Take, pros/cons, specs, detailed sections, FAQs, sources, alternatives), `components/ProductFeedback.tsx` + `.module.css` (warm insight cards), `components/ProductPhoto`, `components/Editorial`, guide comparison-table layout from `app/[trade]/[slug]/page.tsx`, sitemap/robots logic, affiliate helper, and `scripts/validate-*.cjs`. **Remove TradeGear trade coupling** instead of hardcoding `kitchen` as a seventh trade or referencing existing tool records. No secrets copied.

## New repository design (proposed `robbie400/kitchen-equipment-hq` — NOT CREATED in this phase)
```
app/
  layout.tsx; page.tsx; globals.css; sitemap.ts; robots.ts; not-found.tsx
  equipment/[category]/page.tsx
  guides/[slug]/page.tsx
  reviews/[slug]/page.tsx
  compare/[slug]/page.tsx
  setups/[slug]/page.tsx
  tools/build-your-kitchen/page.tsx  # gated future interactive builder
  about/page.tsx; research-methodology/page.tsx; affiliate-disclosure/page.tsx
components/
  Header.tsx; Footer.tsx; GuideHero.tsx; ComparisonMatrix.tsx
  FullProductReview.tsx; ProductFeedback.tsx; ProductPhoto.tsx
  RatingLink.tsx; EditorialByline.tsx; AffiliateDisclosure.tsx; QuickVerdict.tsx
lib/
  content/registry.ts; content/categories.ts; content/guides.ts
  content/reviews.ts; content/comparisons.ts; content/setups.ts
  product-catalogue.ts; product-images.ts; affiliate.ts; seo.ts; schema.ts
  validate/catalogue.ts; validate/links.ts; validate/sources.ts
data/
  keyword-map.csv; products.json; guides.json; review-editorial.json
  comparisons.json; setups.json; sources.json; image-rights.json; affiliate-records.json
scripts/
  validate-catalogue.cjs; validate-editorial.cjs; validate-seo.cjs; validate-affiliates.cjs
  validate-images.cjs; validate-structured-data.cjs
tests/
  smoke.spec.ts; visual-mobile.spec.ts
```

## Normalized data definitions
- **Category**: `id`, `name`, `intro`, `decisionCriteria`, `heroAssetId`, `primaryGuideIds[]`, `setupIds[]`.
- **Keyword**: `phrase`, `source`, `geo`, `window`, `monthlyRange`, `adsCompetition`, `organicDifficulty?`, `intent`, `canonicalPageId`, `cluster`, `status`.
- **Product**: stable `productId`, `brand`, `manufacturerModel`, `variation`, `retailerAsin?`, `sourceIds[]`, `specs[]`, `dimensions`, `clearance`, `capacity`, `power`, `warrantyRegion`, `foodContactEvidence`, `imageAssetId?`, `listingVerification`, `publicationStatus`. **No default / fake rating**.
- **Review**: exactly one canonical `productId`, `slug`, `intro`, `verdict`, `bestFor`, `skipIf`, `pros[]`, `cons[]`, `analysisSections[]`, `faqs[]`, `limitationFlags[]`, `lastVerifiedAt`, `quoteOrParaphraseEvidenceIds[]`.
- **Guide**: stable `guideId`, `slug`, `targetKeyword`, `supportingKeywordIds[]`, `categoryId`, `rankedProductIds[]`, `comparisonFields[]`, `methodology`, `buyerQuestions[]`, `relatedGuideIds[]`, `setupIds[]`, `publicationStatus`.
- **Comparison**: distinct search intent and materially different `productIds[2]`, dimensions of comparison, conditions where each wins, meaningful differences, not a duplicate guide.
- **Setup**: buyer scenario, kitchen space constraints, budget envelopes, products grouped by role, compatibility notes, total cost **if sourced current prices only**.
- **Evidence**: `sourceId`, `url`, `type`, `productId`, `manufacturerModel`, `claim`, `checkedAt`, `licenseStatus`, `citation`.
- **Image**: `assetId`, `localPath`, `brandProduct`, `sourceUrl`, `licenseOrPermission`, `credit`, `lastVerifiedAt`. Only approved assets rendered.

## Strict routing + linking
One **primary keyword -> one canonical guide**; supporting queries map to one guide unless SERP evidence justifies separate pages. E.g. 'best rice cooker for one person' may belong in 'best small rice cookers' — **do not create both without intent differentiation**. `/equipment/espresso/` links to buying guides, which link to individual reviews, alternative guides, A-vs-B comparisons and setup pages. All review pages link back to all relevant guides without duplicating their full text. Guides include deep relevant FAQs and real comparison attributes, not dozens of repetitive SEO pages. Breadcrumbs, canonical, XML sitemap, robots, OG/metadata, internal link validator, no orphan indexable pages.

## Templates
**Guide**: unique problem/answer first paragraph -> quick picks by use case -> clickable table of 4–6 products -> 4–6 substantial researched assessments -> "what actually differs" trade-offs -> fit/budget calculator or space guide -> model FAQs -> source & methodology -> related comparisons/reviews/setups -> clear affiliate disclosure & verified links.
**Individual review**: TradeGear `FullProductReview` depth, kitchen-specific data tables + ergonomics/accessory ecosystem/maintenance/warranty/dimensions/clearance; no claims to first-hand testing.
**Comparison**: answer one distinct buyer decision with a side-by-side matrix; not a reshuffled top 5.
**Setup**: espresso-for-beginners, compact-kitchen, bread-baking, meal-prep & freezer, home coffee bar, home bar ice; 2–6 roles each (not redundant product piles).

## SEO and structured data
Use `Article` and `BreadcrumbList` where appropriate; `Product` **product snippet** markup only when valid for editorial reviews; do **not** mark an affiliate publisher as the merchant/seller or invent `Offer`, `AggregateRating`, `Review` schema without firsthand authored review rating and schema eligibility. Respect Google's current requirements. Separate affiliate destination from site product data. No retailer price or stock unless from authorised current sources compliant with caching. `/robots.txt` and root meta noindex for previews; index only published, approved originals in production. Original hero visuals, helpful illustrations and 3–4 relevant visual breaks per long page, responsive image alt text and accessible comparison tables.

## Copy architecture / safety
Never reuse TradeGear brand, logos, Search Console tokens, analytics property, Amazon env tags, or vehicle/trade data. `AMAZON_TAG_KITCHEN` only after publisher registration and account approval. Validate exact Amazon.com ASIN and selected variant, don't silently send users to keyword search in a 'Check Price' CTA if direct listing claimed. Implement explicit `listingStatus:\"verified\"|\"hold\"`, no CTA until verified. Security: no API secrets clientside. New Vercel project with separate environment and domain after decision.
