# Automotive editorial product markup

Adds server-rendered Product JSON-LD with a nested editorial Review to each of the 61 automotive product pages. Existing Article and BreadcrumbList markup remains. Product names, models, photographs, specifications, verdicts, research disclosure and pros/cons come directly from the same records rendered on the page.

Uses Google's editorial pros-and-cons example:
https://developers.google.com/search/docs/appearance/structured-data/product-snippet#pros-cons-example

The Review author is the displayed TradeGear HQ editorial desk organization. This is documentary editorial analysis, not a hands-on test. No numeric editorial rating, imported aggregate/customer rating, price, availability or merchant offer is emitted. Model values are not assumed to be manufacturer part numbers. The affiliate architecture, visible star attribution and other trades are unchanged.

Google determines rich-result eligibility and appearance. This targets the editorial pros/cons appearance; it does not promise search stars, merchant listings or a ranking improvement. Missing offers/aggregate ratings are intentional. Local catalogue tests and rendered HTML checks are distinct from Google's Rich Results Test.

Prepared on feature/automotive-product-schema for preview approval before production release.
