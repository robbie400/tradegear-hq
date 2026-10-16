# Source-labelled automotive ratings — October 16, 2026

Owner approved verified manufacturer/retailer scores with visible source attribution, with stars linking to the exact Amazon.com affiliate product destination. No new manually copied Amazon ratings are used.

## Result

- Checked all 61 automotive records against manufacturer pages and exact-model retailer review sources.
- Added 55 source-labelled rating snapshots in `lib/automotive-ratings.json` with scores, positive counts, URLs, check dates and explanatory notes.
- Six models remain unscored: TEKTON TRQ52403, TEKTON SHA91011, DEWALT DPG94-1D, Lisle 68100, Ullman HTC-2 and SUNEX 8057XTR. They show the Amazon customer-reviews link without outlined stars. Detailed reasons and source checks are in `rating-verification-2026-10-16.json`.
- All 61 keep their existing exact Amazon.com ASIN destinations and `affiliateUrl` helper. Stars are now real accessible anchors, as well as the existing linked count. The hover title names the Amazon destination and rating source; native browser link previews show the tagged URL.
- Source name and check date remain visible beneath the score. About-this-rating includes the source link. These are not labelled Amazon ratings or TradeGear HQ test scores.
- Automotive matching uses only the checked automotive rating records; it cannot silently inherit a score from another trade or model. Canonical product IDs, reviews, photos and Toolkit Builder application are unchanged.

## Research controls

Do not substitute store-wide ratings, seller feedback, another model, a zero-review placeholder or an indexed score contradicted by the retrieved page. A listing advertising MK900-BT had an AL619 rating catalogue and was rejected; the selected MK900-BT source is the retailer AutelSale's exact model review page. The SUNEX cart retailer's Trustpilot score was rejected as store-wide. Acme's one-star 85062M score was retained and labelled as a one-review sample rather than replaced with a more flattering unverified number.

Three Lisle manufacturer pages show a 5/5 aggregate and one visible written review without a separately published total. Their count label explicitly says `1 visible review`; the note explains the distinction. Small samples and the Streamlight source's older production revisions are noted. Source hosts control syndication, incentives and review grouping. No independent purchase verification is claimed.

These are dated source snapshots, not a live ratings feed. No Amazon ratings API or subscription has been configured. Automotive remains preview-only pending owner approval; production gating is preserved.

## Verification

The test suite checks all 61 destinations, all 55 source records, six explicit gaps, score/count consistency with the audit, exact-model lookups and the linked-star markup. Existing catalogue, review, feedback, affiliate and production-hold checks remain required. The build and generated HTML are checked before pushing the preview; live browser checks verify the actual star-link destinations.

Validation passed: full npm test, Next.js build (406 static routes), and generated-HTML checks of all 61 pages. All 55 star anchors have the exact ASIN, affiliate tag, hover title and source label. All six unscored pages omit outlined stars. Existing image-element lint warnings remain unchanged.
