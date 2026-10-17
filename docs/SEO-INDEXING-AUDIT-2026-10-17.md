# TradeGear HQ — GSC indexing investigation: 17 October 2026

## Data and live checks
User exported two Search Console issue tables dated 2026-10-17. **Report historical data end date 2026-10-12**. These labels are not a live truth source. Export rows: 62 "Discovered — currently not indexed" (all URL strings ended in /), and 28 "Crawled — currently not indexed" (only 23 unique paths once slash variants were collapsed). Screenshot also shows 54 "Page with redirect" (mostly valid 308 trailing-slash variants) and 237 indexed at historical report cut-off.

Fresh Google URL Inspection checks on 2026-10-17:
- **All 23 distinct pages** in the 28-record 'crawled' export are indexed. Five extra entries are alternate trailing-slash URL forms. **Do not rewrite these indexed carpenter pages**.
- Among the 62 'discovered' export paths, **54 non-trailing-slash final URLs already show 'Submitted and indexed'**, while **8 final URLs show 'URL is unknown to Google'**. These 8 should not be called disallowed/noindexed without evidence.
- Live technical crawl of all **eight outstanding pages**: HTTP 200, indexability allowed, one H1, valid canonical on fetched response (but canonical points at redirected slash alias), 641–1694 words, **zero high/critical audit issues**. Shared non-blocking structured-data enhancement issues exist on both indexed and unindexed pages; not evidence for why these 8 aren't indexed.
- Production robots: 'Allow: /'; sitemap https://tradegearhq.com/sitemap.xml HTTP 200, 401 submitted URL entries as of inspection, accepted in GSC with 0 sitemap errors and 0 warnings. Original sitemap emits trailing slashes for nearly all URLs even though production final URLs return without a slash, with a 308 redirect from slash aliases.

## Exact eight unresolved FINAL (HTTP 200) URLs
1. https://tradegearhq.com/electricians/best-wire-strippers-for-electricians
2. https://tradegearhq.com/electricians/workflows/commercial-electrician-tool-kit
3. https://tradegearhq.com/electricians/workflows/electrician-service-call-tool-kit
4. https://tradegearhq.com/home-inspectors/workflows/home-inspector-crawlspace-and-basement-tool-kit
5. https://tradegearhq.com/plumbers/best-tubing-cutters-for-plumbers
6. https://tradegearhq.com/reviews/hvac-fieldpiece-vp87-review
7. https://tradegearhq.com/reviews/inspector-klein-et140-review
8. https://tradegearhq.com/reviews/klein-11055-review

## Scope of candidate correction
- For these exact eight paths ONLY, publish final no-slash URL in sitemap, canonical metadata and JSON-LD (keep every other page's metadata & content unchanged).
- Do not modify 23 already indexed carpenter pages, ~54 already indexed from discovered group, 54 redirect aliases, main robots, internal route handlers, affiliate tags, review ratings, or robots/index settings.
- Confirm eight final URLs render with correct canonical in protected Vercel preview before owner-approved production deployment. A successful preview build is not indexing proof.
- After explicit production approval, resubmit sitemap in GSC and inspect the eight final URLs over the following days/weeks. URL Inspection API cannot itself force indexing. Owners can request indexing manually for a small high-priority list, but Search Console may decline; wait for real crawl/indexation.

## Known limitations
These eight pages are all crawlable; not indexed can reflect Google scheduling/selection. Canonical mismatch creates unnecessary indirect routing, but **this correction cannot guarantee indexing**. The user explicitly wants already-indexed pages untouched; do not merge broad PR #11 for an across-site slash sweep. A separate approved comprehensive rewrite could be considered much later with redirect/Google-selected-canonical data across the whole site. Additionally, Search Console counts are lagged and should not be added to counts from fresh per-URL inspections as if they are the same snapshot.
