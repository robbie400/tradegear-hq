# Sitewide URL consistency — October 26, 2026

Owner requested a sitewide fix for sitemap/canonical addresses ending in `/` while Next.js serves non-trailing-slash paths. This separately approved project supersedes the October 17 eight-page compatibility list.

- `canonicalPath` is shared by sitemap, existing canonical templates, Open Graph paths and editorial/automotive structured data.
- `SiteLink` normalizes root-relative navigation when rendered, including catalogue-driven and search links. Query strings, fragments, object-form Next links and root navigation are retained. External URLs, affiliate URLs and hash-only links are passed through unchanged.
- `trailingSlash: false` makes the existing server behavior explicit. Existing slash aliases continue to redirect; no route/content/design migration is introduced.
- Existing article and product data are unchanged. Affiliate helper and product destinations are unchanged. GA4 remains removed, respecting the latest main-branch change.

Validation: TypeScript check and production build passed. Full existing npm test suite passed after updating the automotive schema URL expectation to the non-trailing-slash destination. Exhaustive generated-output audit checked 445 sitemap pages, all 445 internal destination paths, and 643 distinct structured-data URLs with zero mismatches or missing destinations. The hostname-only homepage canonical is treated as equivalent to `/`, since both represent the root resource.

Read-only affiliate audit: 4,483 rendered Amazon anchors, 451 distinct URL strings, all with `robbieom0e-20`. Of those unique URLs, 110 are direct `/dp/` destinations and 341 are Amazon search destinations. These are existing links, not replacements. This does not establish current product availability, exact search results, commission eligibility or Amazon reporting attribution after a real purchase. No Amazon URL was requested, clicked, prefetched or opened. Audit clients only read TradeGear HTML and reject external redirects.

`audit-built-urls.py` inspects production-generated HTML; `audit-live-urls.py` reads the live sitemap and TradeGear pages only. Raw live crawl output remains a local verification artifact; the generated-output summary and destination inventory are committed for review. Live post-release results will be reported to the owner after deployment.
