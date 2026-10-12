# TradeGear HQ

US-focused tool research and affiliate buying guides for professional tradespeople.

## Current editorial cluster

- Four trade hubs and seventeen five-product buying guides.
- Thirty-three standalone, research-based product reviews with manufacturer references.
- Eight electrician workflow / kit guides, contextually linked to tool-category guides and available reviews.
- Electrician cluster: 41 pages (one hub, eight workflows, fourteen buying guides and eighteen reviews), covering 70 unique product candidates.
- Product imagery for all 70 electrician candidates, with photos on reviews, comparisons, job-kit cards and hub tiles.
- Editorial methodology, compact affiliate disclosures and sponsored link attributes.
- Unique metadata, absolute canonical URLs, article and breadcrumb structured data.
- Global noindex and robots blocking by default while the launch set is incomplete.

## Stack and development

Next.js App Router, TypeScript, React and CSS. Run `npm ci`, `npm run build`, then `npm start` to check the production build. GitHub main deploys automatically to Vercel.

## Environment

Keep `NEXT_PUBLIC_INDEX_SITE=false` until launch approval. `NEXT_PUBLIC_SITE_URL` defaults to https://tradegear-hq.vercel.app; set it to the real canonical domain when connected. The sitemap is empty while indexing is disabled; when enabled it lists the finished hubs, guides, reviews, workflow and methodology page.

Amazon US tag: `robbieom0e-20`. Credentials must be stored privately as Vercel environment variables. No Amazon prices, review scores or scraped product images are stored.

## Editorial rules

Product cards use stable `productId` or `reviewSlug` keys. Every candidate has a detailed assessment; only candidates with a substantive standalone review get a review link. Review additions live in trade-specific data modules, with shared fields derived from the buying guide. Check exact manufacturer models and kit variants before writing claims. Recommendations are research-based; do not imply hands-on testing. Review dates should represent an editorial check, not update automatically with every build.

The MM720 replaces discontinued MM600; TITANMAX 40881 replaces discontinued P51-870. Milwaukee 2323-21 and CPS BMD200A resolve earlier ambiguous shortlist entries. Do not mix hardware generations or app compatibility across related models.

## Electrician scope

The fourteen everyday categories cover testing, hand tools, drilling/fastening, cable routing, lighting and storage. The eight job kits cover service, house rewires, panels, commercial work, cable pulling, lighting/controls, apprentice buying and van/bag organization. These are a researched launch batch, not a claim to cover every electrical specialty. PPE, isolation, torque tools, installation testers, access equipment and specialist rough-in tools are noted as job-specific requirements; dedicated buying guides for those remain future work.

Primary and secondary query themes are editorial intent hypotheses, not measured search-volume forecasts. Do not promise ranking or traffic. Head-to-head comparisons can be added when a substantive comparison has been researched.

## Next work

The plumbing expansion adds 19 category guides with 95 distinct products and eight job kits. See `docs/plumbing-release-status.md` for the verification results and outstanding release gates. Build service workflows for HVAC and home inspectors, expand well-sourced category guides, and add meaningful head-to-head comparisons. The long-term blueprint is 50 category guides plus workflow and review clusters; publish substantive pages rather than empty routes.

## Product imagery

`lib/product-images.ts` keeps exact-model photo URLs, source pages, alt text and credits together. Images come from manufacturer product pages or matching retailer listings, not Amazon image scraping. Next.js serves appropriately sized images from an explicit host allowlist; an original-image fallback handles optimization failures. Image frames reserve their dimensions, contain the whole tool and lazy-load below the hero. Refresh changed source links against the exact model and package before replacing them.
