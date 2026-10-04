# TradeGear HQ

US-focused tool research and affiliate buying guides for professional tradespeople.

## Current editorial cluster

- Four trade hubs and four five-product buying guides.
- Twenty standalone, research-based product reviews with manufacturer references.
- One electrician service-call workflow, linked to its category guide and reviews.
- Editorial methodology, compact affiliate disclosures and sponsored link attributes.
- Unique metadata, absolute canonical URLs, article and breadcrumb structured data.
- Global noindex and robots blocking by default while the launch set is incomplete.

## Stack and development

Next.js App Router, TypeScript, React and CSS. Run `npm ci`, `npm run build`, then `npm start` to check the production build. GitHub main deploys automatically to Vercel.

## Environment

Keep `NEXT_PUBLIC_INDEX_SITE=false` until launch approval. `NEXT_PUBLIC_SITE_URL` defaults to https://tradegear-hq.vercel.app; set it to the real canonical domain when connected. The sitemap is empty while indexing is disabled; when enabled it lists the finished hubs, guides, reviews, workflow and methodology page.

Amazon US tag: `robbieom0e-20`. Credentials must be stored privately as Vercel environment variables. No Amazon prices, review scores or scraped product images are stored.

## Editorial rules

Product cards use stable `reviewSlug` keys. Review additions live in trade-specific data modules, with shared fields derived from the buying guide. Check exact manufacturer models and kit variants before writing claims. Recommendations are research-based; do not imply hands-on testing. Review dates should represent an editorial check, not update automatically with every build.

The MM720 replaces discontinued MM600; TITANMAX 40881 replaces discontinued P51-870. Milwaukee 2323-21 and CPS BMD200A resolve earlier ambiguous shortlist entries. Do not mix hardware generations or app compatibility across related models.

## Next work

Build service workflows for the remaining trades, expand well-sourced category guides, and add meaningful head-to-head comparisons. The long-term blueprint is 50 category guides plus workflow and review clusters; publish substantive pages rather than empty routes.
