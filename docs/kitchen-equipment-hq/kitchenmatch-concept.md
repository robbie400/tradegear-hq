# KitchenMatch: the cook-first differentiation blueprint
**Status:** Product/design proposal, research-only branch. Do not deploy.

## Positioning
**"Tell us what you cook. We'll help you build the right kitchen."**
Rather than another review-only shopping blog, the site is a two-layer **cook-to-equipment decision system**:
1. Search entry: highly specific buying guides for measured long-tail keywords, product reviews, head-to-head comparisons, high-quality evergreen information.
2. Personalised entry: visitors start with the **meal, task, output, people, time, space, workflow and budget**, and receive a **Kitchen Blueprint**: a right-sized equipment shortlist, honest disqualifications, alternatives, setup budget, fit warning, guide and review deep links.

**Differentiation that genuinely improves decisions**: user can enter *"I bake 2 sourdough loaves twice a week in a small apartment with a $500 total budget"* and get a different equipment decision than *"I bake 30 loaves daily for a licensed bakery"*. Two shoppers seeing the same product should get personalised "Why it fits/doesn't fit", not generic "Best Overall".

## Market lanes (two-axis navigation — NOT six disconnected sites)
**Axis A: who cooks?**
- **Home cooks**: families, couples, solo/small spaces.
- **Home bakers**: bread/sourdough, cakes, cookies and pastry; includes small side-business but discuss limits of home appliances.
- **Coffee enthusiasts**: espresso, pour-over and home coffee bars.
- **Meal preppers**: weekly meal batching, freezer food organisation; avoid unsubstantiated food safety.
- **Entertainers**: weekend hosts, outdoor cooking, ice and drinks.
- **Professional / commercial kitchens**: cafés, small catering, pop-ups, restaurant prep kitchens, bakery production. **Separate dedicated equipment, commercial electrical supply and health-code/cleanability requirements. Do not recommend residential appliances as commercial by default.**

**Axis B: what task?** Espresso and beverages; baking/mixing; air-frying/roasting; blending/chopping; food preservation; rice/one-pot; ice/drinks; prep/assembly. **Third axis = constraints**: budget, portions per batch, cooking frequency, usable counter footprint + rear/top clearance, available electrical supply, storage, cleaning tolerance, owned equipment, noise/maintenance, repair support.

The grid drives recommendations and interlinking; *user-group pages are not thin copies of category guides.* If no distinct intent or unique research, user group can filter an existing guide without an indexable duplicate URL.

## The signature tool: KitchenMatch Fit Finder
### V1 — useful, rules-based (no opaque model necessary)
Six plain-language steps:
1. **Who cooks here?** (Home, home baker, coffee, meal prep, pro kitchen).
2. **What do you want to make?** (e.g. bread dough, espresso milk drinks, crispy batch dinners, smoothies, ice for parties).
3. **How much at a time?** (people/servings or pounds/quarts/batches).
4. **Space & power**: counter width/depth/height, overhead clearance; 120V domestic vs commercial power options; link to measuring guide; skip allowed.
5. **Budget**: equipment-only vs *complete workable setup*, a currency-neutral range displayed as US dollars for US audience; no real-time Amazon price unless authorised data.
6. **What's more important?** (speed, lower noise, clean-up, durability/service, capacity, compactness, easy learning, precision); "I already own" inventory.

Outputs:
- **Your Kitchen Blueprint**: 1 recommended **type of equipment**, up to 3 verified model candidates (not an algorithmic winner without documented selection criteria), model-specific "why it fits" + "why you might skip", comparison matrix, complete setup essentials (not 10 unnecessary products), total budget bands subject to price checks, counter-fit status **Fits / Check clearance / Doesn't fit** only from verified dimensions and submitted measurements, source notes and link to one canonical keyword guide for more.
- **One clear budget reality check**: e.g. "$500 machine-only doesn't include a capable espresso grinder, accessories, water treatment" — no fictitious prices.
- **Optional alternate**: "Keep your current blender; add only a mini food processor" when goals don't justify duplicate gear.
- **Decision sheet**: copy/share/print without account; save profile only on explicit consent; no intrusive onboarding.
- An **explainable decision**: Criteria -> manufacturer evidence -> trade-off -> linked source / review. No unverifiable AI rankings.

### V2 — differentiated "Countertop Fit" tool
If visitor enters counter measurements, model dimensions and manufacturer clearance data, show a side-by-side **2D top-down footprint**, outlet location (voltage cautions), optional door/swing/lid clearance where documented, grouped setups fit/overflow. Disclaim physical room layout and safety. Do NOT guarantee fit without missing clearance data. Can have generated printable shopping+measurement checklist. May later add optional photo-assisted visualisation, but **not required for MVP**.

### V3 — "Kitchen Coach" conversational interface
A calm, helpful, **clearly labelled virtual equipment adviser** that asks sensible follow-ups ("How many loaves? Is $500 just for the mixer? Do you already have a scale?") and uses the deterministic catalogue/filter/evidence graph to answer. Must not impersonate a human chef, pretend to have culinary certifications or invent hands-on testing. Reserve direct expert quotes / professional endorsements for **genuine sourced interviews** with permission and contextual attribution. Offer a **Chef's View** insight card as synthesis of published professional guidance until interviews exist, labelled "Editorial insight, research-based", not "Chef Sarah told us".
Use optional voice later; fast static initial UX preferred for SEO/indexing and accessibility.

## Examples of user journeys
### Espresso
Search "best espresso machine under 500" -> guide of 4–5 verified machines -> optional "Find my setup" prompt -> asks if they have a grinder, drink style and countertop -> 2–3 products *plus* grinder/scale/tamper necessity -> explains why integrated grinder may exceed true total budget -> linked reviews and exact verified Amazon destinations.
### Bread
Search "best stand mixer for bread dough" -> query asks loaves/batch and breads/week -> manufacturer-documented dough capacity and duty caveats -> 4 mixers in comparison -> **"home baking vs small-bakery production"** fork; pro user gets commercial prerequisites and a *different* research catalogue rather than a false one-size-fits-all recommendation.
### Weeknight dinners
Search "best air fryer toaster oven combo" -> asks portions, basket/tray preference, clearance, cleaning tolerance -> fits a small-footprint oven vs basket appliance -> explicitly says when *existing regular oven + basic air fryer* is the smarter buy.
### Commercial coffee shop
"I run a café producing 80 milk drinks/day" -> branch into commercial equipment, service, water connection, maintenance, electrical requirements; Amazon-only inventory might be inappropriate. Prioritise genuine specialist commercial referral networks or supplier relationships after validation, not forced Amazon product links.

## SEO treatment
Fit Finder at `/tools/kitchenmatch/` is discoverable from homepage and each guide, but output pages are **not thousands of indexable programmatic landing pages**. Canonical, authored SEO pages live at `/guides/`, `/reviews/`, `/compare/` and `/setups/`. Personalised result URLs, if shareable, are noindex with privacy-safe tokenisation or query params and do not expose addresses or personal data. Maintain content/keyword map, one canonical guide per intent.

## Conversion without pressure
The buyer does not need to click Amazon to get value: fit verdict, comparison, honest disadvantages, setup list. Integrate small, clear contextual tracked Amazon.com CTAs only for exact verified models. Do not mislead about availability, dynamic prices or an Amazon relationship.

## Measurement
Events: `kitchenmatch_start`, `profile_completed`, `model_shortlist_view`, `guide_open`, `review_open`, `affiliate_click` (no personal details). Evaluate usefulness first (completion & helpfulness), then organic rankings, then attributed earnings.

## MVP acceptance criteria
For 3 anchor flows (espresso under $500, air fryer toaster combo, bread stand mixer), generate different shortlists for at least 3 meaningfully distinct users each. Show explainable decisions, trade-offs, excluded products with reason, manufacturer data/source links and honest price/fit unknown states. No invented rating, review, chef commentary or dimensions. Mobile-first, keyboard/voiceover accessible, no login needed. Even without purchase, visitor leaves with an actionable decision sheet.
