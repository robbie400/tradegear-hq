# Product rating expansion — October 14, 2026

Verified source coverage: 188 of 376 catalogue entries (50%), up from 58. The remaining 188 entries have an Amazon customer-reviews CTA without a numeric rating. This release does not claim complete score coverage.

Added 93 model-specific source records from manufacturer and retailer pages. Exact models share a score across trades; distinct BluVac+ Micro and Pro identifiers prevent cross-variant matching. Preserve source scores including negative ratings and small review samples. Indexed snapshots are described in the rating note; retrieval date is not proof of a live current score.

Source labels remain visible. Rating arrows, customer-feedback CTAs and shopping links go to tracked Amazon.com destinations rather than the source retailer. The displayed score is not presented as an Amazon score when sourced elsewhere. Evidence: product-rating-evidence-2026-10-14.json. Inventory: product-rating-coverage-2026-10-14.json.

Validation passed: npm test, npm run lint (8 existing image warnings, no errors), production npm run build, and rendered HTML audit. The audit checked 278 pages, 64 preserved routes, 7,075 internal links, and all 604 rating/reviews links, including 326 rendered sourced-rating blocks. Rating links use the affiliate tag and click-tracking fields. Catalogue entries and rendered blocks are different counts because tools appear on guides, standalone reviews and directory cards.

Amazon blocked automated listing access; this release does not claim live Amazon stock or listing verification. No source-store click or Amazon purchase was needed to verify link markup. Desktop production spot checks follow deployment; no new mobile layout change is included.
