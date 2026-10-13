# Compact product rating strip — October 13, 2026

Code commit: 8c42dc4bdc0efa00dbb150e3601118465f1ea33c.

Standalone review pages now show a compact score, orange fractional stars and linked source review count beneath the introduction. Source and snapshot date are visible. The existing sourced rating is reused; manufacturer ratings are not labelled as Amazon ratings. Products without sourced ratings display no strip. Lower feedback cards remain, with their duplicate rating removed.

Validation: catalogue/feedback/affiliate tests passed; lint has zero errors and eight existing image warnings; production build and built-page audit passed (278 pages, 278 sitemap entries, 7,381 internal links, 318 affiliate destinations). Eight newly rated review outputs each contain one strip before the affiliate CTA. Desktop preview of DCN680B visually passed: 4.5, 52 reviews, DeWalt source, correct image, no horizontal overflow. Mobile visual checks remain pending for the batch release.

Preview: https://tradegear-8j1bohby8-robbie-7671.vercel.app/reviews/carpenters-dewalt-dcn680b-review

Screenshot: carpenter-rating-strip-preview.jpg. Production unchanged.
