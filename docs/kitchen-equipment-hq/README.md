# Kitchen Equipment HQ — US Affiliate Site Blueprint (research only)
**Version:** 2026-10-16 | **Status:** Proposed, not approved for live publication | **Market:** United States / Amazon.com | **Working brand:** Kitchen Equipment HQ (domain NOT purchased or verified)
**Parent/source reference:** TradeGear HQ `app/reviews/[slug]/page.tsx`, `components/FullProductReview.tsx`, `components/ProductFeedback.tsx`, `app/[trade]/[slug]/page.tsx`, `lib/data.ts`, `lib/reviews.ts`, `lib/affiliate.ts`. This branch modifies no production application files.

## Product vision
A buyer-first **kitchen equipment research publication**, not a recipe blog, ecommerce store, or generic Amazon bestsellers clone. Primary promise: **Find the right appliance for the way you cook, the space you have and the budget you can spend.** Unique differentiator = structured **use-case, dimensions, operating constraints and total-setup-cost comparisons**, including "what not to buy" trade-offs. Professional, editorial, warm parchment/amber boxes — *not* an Amazon copycat or an unsupported "we tested everything" site.

**Content flywheel:** US keyword -> one canonical buying guide with a comparison of 4–6 independently researched products -> canonical individual reviews -> related A-vs-B comparisons -> countertop/workflow setup guide -> relevant accessories -> useful FAQs and source evidence. Use cases and crosslinks are data-defined, not random inline product pushes.

## What is empirically supported
Google Ads Keyword Planner saved plan: 90 US English/All languages keywords, Oct 2025–Sep 2026, captured Oct 16 2026. It reports **ranges** (10–100 / 100–1K / 1K–10K) and **advertising competition**, NOT exact monthly search counts or organic SEO difficulty. Selected transcriptions are in `keyword-map.csv`. Do not add volume ranges or claim easy rankings for unmeasured expansions.
A 2026 US Google Trends comparison independently indicates air-fryer demand across the year and higher holiday interest for espresso equipment. Trends is relative demand, NOT volume.
Selected 2026 SERPs contain major lab-tested publishers (e.g. Food Network for air fryer ovens; Consumer Reports for ice makers) and niche affiliates; generic "best" queries are competitive. Our differentiation depends on genuinely useful fit/ownership data, not merely a better-looking listicle.
Amazon.com published standard Kitchen category commission **4.5%** (actual classification/qualifying fees can differ). E.g. $400 x 4.5% = $18 illustrative, not revenue forecast. No qualified Amazon sales or conversion rate is assumed.

## High-priority topical silos
1. **Coffee & espresso:** semi-automatic vs integrated-grinder vs super-automatic; machine-only vs entire setup budget; grinder matching; compact countertop.
2. **Air fryers & multifunction ovens:** basket vs oven-style; internal material evidence; real external dimensions; countertop clearance; rack/basket cleaning; number of portions.
3. **Blenders & processors:** frozen ingredients vs shakes vs dough vs compact storage; minimum batch size and lid/parts care.
4. **Mixers & baking:** dough weight, mixing geometry, bowl lift vs tilt head; service/accessory compatibility, weight and space.
5. **Vacuum sealers & food preservation:** edge vs chamber; wet foods, bag type and cost, chamber dimensions and storage/maintenance.
6. **Ice makers & drinks:** nugget vs bullet, daily output vs first-batch time, cleaning frequency, actual footprint, noise claims.
7. **Rice, kettles & small equipment:** batch size, coating/material, power, keep-warm duration, heating control and counter space.
8. **Premium/specialist equipment:** high-ticket espresso systems, premium mixers, outdoor/pizza ovens, countertop induction and home freeze dryers — **research expansion only** until demand, category commission, safety and affiliate availability are independently validated.

## Canonical site architecture — no duplicate doorway pages
- `/` homepage — prominent problem-based browsing, **not** 80 generic category tiles.
- `/equipment/[category]/` category hub with decision map, unique editorial introduction, *one* designated ranking page per query cluster.
- `/guides/[slug]/` **keyword-targeted buying guide** (4–6 products, substantive ranking logic and original comparison).
- `/reviews/[brand-model]/` canonical **model review reused** in multiple guides (no variant/colour clones).
- `/compare/[a]-vs-[b]/` only where unique comparison intent and useful distinctions exist.
- `/setups/[job-or-buyer]/` complete working kitchen/coffee/baking setup, including accessories and budget.
- `/tools/build-your-kitchen/` later-stage decision wizard; use actual dimensions and buyer requirements, no invented availability.
- `/research-methodology/`, `/affiliate-disclosure/`, `/about/`, `/contact/`, `/privacy/`, `/editorial-policy/`.

## Proposed initial launch footprint — quality-gated
Launch **six high-intent guides**, 25–35 verified canonical products, six complete setup pages, **up to 8** distinct head-to-head comparisons with genuine differentiated analysis, and 25–35 substantial individual reviews *only after all product verification gates*. Stage the next 10–14 guides and another 25–35 products after QA. The sitemap is the source of truth; these are **targets, not completed assets**. Never bulk-publish thin/unresearched pages.

**Opening guide slate:** `best-espresso-machines-under-500`, `best-air-fryer-toaster-oven-combos`, `best-stand-mixers-for-bread-dough`, `best-countertop-nugget-ice-makers`, `best-vacuum-sealers-for-meat`, `best-blenders-for-protein-shakes`. Next batch includes `best-espresso-machines-for-beginners`, `best-espresso-machines-under-1000` (UNMEASURED, confirm), `best-chamber-vacuum-sealers-for-home-use`, `best-mini-food-processors`, `best-small-rice-cookers`, `best-air-fryers-for-two-people`, `best-electric-kettles-without-plastic`, `best-quiet-blenders`.

## Go/no-go gates
1. Validate US market, 10–20 sampled SERPs and organic ranking feasibility. Never confuse Google Ads "High" paid competition with SEO difficulty.
2. Every compared product: **exact current manufacturer model, verified specs, US configuration, image rights, correct Amazon.com detail listing/ASIN and tracking**; exclude holds. Respect electrical safety/clearance, food-contact and temperature claims.
3. Never invent hands-on testing, lab measurements, ratings, review quotations, prices, warranties, or stock. Prefer attributed, linked **paraphrases** in attractive review insight cards where verbatim reuse rights are absent. Source link and fit to exact model required.
4. Amazon Associates: enroll/register new site, ensure authorised tracking, required Associates disclosure, compliant product imagery and ratings API licensing. Never scrape star ratings; no price/rating fields without appropriately authorised data.
5. Preview on **separate new Vercel project**, preview noindex, test responsive layout/performance/navigation/404s/meta/canonicals/sitemap, then explicit approval before public launch.
6. No changes in this research branch may be merged into TradeGear HQ's production site.

Read `keyword-map.csv`, `architecture.md`, `editorial-standard.md`, `launch-plan.md`, and `source-register.md` before starting implementation.
