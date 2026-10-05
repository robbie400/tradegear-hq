# Plumbing expansion — release status, 5 October 2026

Implementation is ready for preview review. It is not signed off for launch.

## Content

- Plumbing: 19 guides, 95 distinct products, eight job kits and 17 new standalone reviews, preserving the five existing plumbing camera reviews.
- Electricians: all 14 guides, 70 products, 70 product photos and eight job kits retained.
- Added plumbing comparisons cover pipe wrenches, gripping pliers, copper and plastic cutters, PEX crimping and expansion, press tools, small-drain snakes, toilet augers, professional drain machines, sewer cameras, moisture meters, thermal cameras, faucet access, wet/dry vacuums, pumps, bags and headlamps.
- Costly specialist options include RIDGID SeeSnake systems and K-60/K-750/K9-204+ machines, Milwaukee SWITCH PACK and sewer inspection equipment, RIDGID RP 251/RP 115 and Milwaukee/DeWalt press equipment. Assessments distinguish the application, package and separately required accessories.
- Exact lead-product photos cover all 19 plumbing guides. There are 41 plumbing product photos; 54 secondary candidates still lack individual imagery. No different models share an image URL.
- Corrected Fluke 117's mismatched Amazon ASIN from B01IH41CUW (15B+) to B000O3LUEI (117). The tagged destination and stock remain unverified.
- Corrected the DEPSTECH DS520 source from a replacement-cable page to the camera page.
- Each page retains one visible affiliate disclosure in the footer. Existing image fallbacks, reviews, navigation and prelaunch noindex remain.

## Verification

Run these from the repository root:

```sh
npm run build
node scripts/validate-catalog.cjs
python3 scripts/validate-built-pages.py
python3 scripts/validate-server-routes.py
```

The build and TypeScript checks pass. Rendered-page verification covers 107 pages, all 64 pre-existing routes, 2,595 internal links, metadata, canonical URLs, noindex, structured data, anchor targets and affiliate markup. Production HTTP checks pass for all 109 generated routes including robots and sitemap, plus four expected 404s. Catalogue checks cover unique products, corresponding review models and destinations, plumbing kit references, exact lead-image coverage, configured image hosts and duplicate image URLs.

The live electrician hub and multimeter guide were visually checked at a 1363 × 936 desktop viewport. Those checks concern the current live version, not the unpublished expansion. New-page desktop browser testing and both trades' mobile browser testing are pending: the local browser cannot start in this environment, and the available cloud-browser controls do not expose viewport resizing.

## External-link and stock gates

`product-link-audit.json` lists every one of the 165 plumbing/electrician guide products, its affiliate URL, source URL, image coverage and current verification status. `source-link-evidence.json` records retrieved or unsuccessful source-page checks; an unsuccessful fetch does not establish that a site is broken.

All 165 tagged Amazon product destinations were submitted for verification. None returned usable responses. Most are model-specific search links, so an exact purchasable listing and stock have **not** been established. Successful URL parsing and affiliate tags do not prove an Amazon listing works. Manufacturer or retailer availability must not be substituted for Amazon stock.

Before launch: replace provisional searches with verified matching listings, record the selected package and seller, check current stock for every product in both trades, finish secondary imagery, and complete desktop/mobile browser checks of the expanded pages. Stock is time-sensitive and must be checked again near launch.

Production publication is held under the user's instruction to complete browser checks before pushing. A preview deployment is needed for the remaining browser review; do not enable indexing or mark the release verified while these gates remain open.
