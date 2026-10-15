# Automotive Mechanics — research shortlist and launch plan

Prepared 2026-10-15 on `research/automotive-mechanics-100`, based on production commit `31cce5495d0239a160b7e6339345ad631e8b4bfa`.

## Decision to review

Create the sixth TradeGear HQ trade at proposed route `/automotive-mechanics`, using the existing hub, workflow, comparison, standalone assessment and tool-directory components. Target **100 distinct automotive product placements**, released as **50 + 50**, with **20 buying guides** and **10 workflows**.

This is a **candidate shortlist and editorial architecture**, not a completed 100-product listing audit or permission to publish. Manufacturer sources or catalogue references have been located for every candidate. Exact specification extraction, lifecycle, US Amazon listing identity, images and feedback still require the publication checks below. No new product is marked approved or ready to publish. No site code has changed.

The pasted category allocation totals 105, not 100. This proposal adjusts diagnostics (8→7), torque (7→6), socket sets (8→7), wrench sets (6→5) and safety (5→4). All 18 original subject areas remain represented.

## Allocation

| Category | Batch 1 | Batch 2 | Total |
|---|---:|---:|---:|
| Diagnostics | 7 | 0 | 7 |
| Electrical | 6 | 0 | 6 |
| Torque | 6 | 0 | 6 |
| Sockets | 7 | 0 | 7 |
| Ratchets | 5 | 0 | 5 |
| Wrenches | 5 | 0 | 5 |
| Power tools | 6 | 0 | 6 |
| Brake tools | 6 | 0 | 6 |
| Suspension | 0 | 6 | 6 |
| Lifting | 0 | 6 | 6 |
| Fluids | 0 | 6 | 6 |
| Oil filters | 0 | 5 | 5 |
| Cooling | 0 | 5 | 5 |
| Tyres and wheels | 0 | 5 | 5 |
| Engine service | 0 | 5 | 5 |
| Inspection | 2 | 3 | 5 |
| Storage | 0 | 5 | 5 |
| Workshop safety | 0 | 4 | 4 |
| **Total** | **50** | **50** | **100** |

Batch 1: core diagnostics, low-voltage electrical work, fastening, access and brake-service choices, plus the existing penlight and the M12 underhood light. Batch 2 fills lifting, fluid service, oil filters, cooling, tyre/TPMS, engine diagnosis, storage and safety coverage, plus three further inspection choices.

Do not describe the first 50 as a complete workshop or complete brake/wheel kit. Existing shop lifts, safe support, air supplies, service information, adapters and PPE can be necessary even where an affiliate product has not yet been researched. Do not add empty comparisons or imply missing equipment is optional. First-batch buying guides C01–C10 can publish when independently complete; the two early inspection records can have substantive standalone pages while C18 stays in draft until its comparison is complete.

## Product research files

- [candidates.csv](./candidates.csv): all 100 models, batch, family, intended use, variant checks and source status.
- [candidates.json](./candidates.json): machine-readable planning records, including future comparison/workflow associations.
- [editorial-plan.json](./editorial-plan.json): the 20 guide definitions and 10 workflows.
- [sources.json](./sources.json): manufacturer source URLs used for the initial screen.

**Evidence levels:** 59 model-specific source pages were located; 40 are supported at catalogue/family-reference level; one reuses an existing essential record requiring a current recheck. “Located” does not mean every specification has been read and verified. Sources do not establish image reuse permission, professional suitability for every reader, current availability or Amazon eligibility.

## Twenty buying guides

### C01 — OBD2 code readers: engine/emissions access versus four-system access

engine-only versus ABS/SRS/transmission coverage; no promise of universal diagnosis. Candidates: Autel AL519; Autel AL629; FOXWELL NT301.

### C02 — Bidirectional scan tools: handheld, wired tablet or wireless tablet

VIN-level active tests, subscription terms, region, secure gateway, CAN FD and DoIP. Candidates: Autel MX808S; Autel MK900-BT; Innova 5610; Innova 5160RS.

### C03 — Automotive electrical test tools: meter, powered probe or battery tester

complementary diagnostic roles; never present these as equivalent substitutes. Candidates: Fluke 88V/A Kit; Power Probe PP3LS01; Clore Automotive BA9.

### C04 — Jump starter versus battery charger: choose for the fault

starting support versus recharging; battery chemistry, voltage, environment and package. Candidates: NOCO GB40; NOCO GB70; NOCO GENIUS5.

### C05 — Mechanic torque wrenches: inch-pound, service and wheel ranges

split recommendations by range, direction and fastener; no universal wheel-torque setting. Candidates: TEKTON 24320; TEKTON TRQ21101; TEKTON 24335; TEKTON 24340; GEARWRENCH 85062M; GEARWRENCH 85077.

### C06 — Mechanic socket sets: hand drive, impact and universal access

subtables for hand-drive and impact sockets; exact kit contents, skips, drive and reach. Candidates: GEARWRENCH 80300P; GEARWRENCH 80550P; GEARWRENCH 84935N; GEARWRENCH 84918N; SUNEX 2569; SUNEX 3342; TEKTON SKT15311.

### C07 — Ratchets, extensions and breaker bars for service access

complementary roles and access; powered and hand-drive limitations. Candidates: GEARWRENCH 81206T; GEARWRENCH 81264T; GEARWRENCH 81212XP; TEKTON SBH00224; TEKTON SHA91005.

### C08 — Mechanic wrench sets: metric, SAE, flare-nut and long reach

do not label SAE sets suitable for metric fittings; compare within role. Candidates: GEARWRENCH 9416; GEARWRENCH 9533N; GEARWRENCH 81916; GEARWRENCH 81906; GEARWRENCH 85998.

### C09 — Cordless mechanic tools: stubby, mid/high torque and powered ratchets

separate tool classes and battery platforms; complete usable kit cost rather than bare-tool price. Candidates: Milwaukee 2967-20; Milwaukee 2962-20; Milwaukee 2562-20; Milwaukee 2567-20; DEWALT DCF891B; DEWALT DCF900B.

### C10 — Brake service tools: piston retraction, lining checks and bleeding

task-led groups; EPB procedure and ABS bleeding support separate. Candidates: Lisle 25750; Lisle 24300; Lisle 81850; Lisle 28600; Mityvac MV6840; Mityvac MV6830.

### C11 — Suspension and steering tools by service operation

vehicle and adapter compatibility, press versus separator versus puller; exclude generic spring-compressor advice. Candidates: OTC 7249; OTC 6295; OTC 6297; OTC 6575; OTC 4579; OTC 6007.

### C12 — Floor jacks and jack stands: clearance, support and capacity basis

separate lifting from supporting; exact manual, pair/individual capacity, saddle and recall check. Candidates: Arcan A20018; SUNEX 6602LP; Torin BIG RED T43002; Torin BIG RED T43004; ESCO 10498-PAIR; Pro-Lift T-6903D.

### C13 — Fluid service equipment: extraction, filling and containment

fluid-specific materials, temperatures, contamination control and exact adapters. Candidates: Mityvac MV7201; Mityvac MV7300; Mityvac MV6412A; Lisle 17922; Lisle 19752; Lisle 19722.

### C14 — Oil filter tools: spin-on wrenches versus cartridge cap tools

filter diameter, cap geometry, engine and socket size; current design versus old reviews. Candidates: Lisle 63600; Lisle 63250; Motivx Tools MX2320; Motivx Tools MX2326; Lisle 13270.

### C15 — Cooling-system tools: pressure test, vacuum refill and controlled flushing

pressure limits and adapters; distinguish finding a fault from filling a system. Candidates: Lisle 24980; Mityvac MV4560; Mityvac MV4533; OTC 7991; Lisle 60900.

### C16 — Tyre and wheel service tools: pressure, valve cores and TPMS

gauge resolution versus accuracy; exact pressure range and TPMS vehicle coverage. Candidates: Astro Pneumatic 3018; Milton S-506; Milton S-921; Autel TS508WF; Lisle 18810.

### C17 — Engine test tools: compression, leakage, vacuum and fuel pressure

supported engines/adapters and diagnostic limits; distinguish low-pressure fuel from GDI/diesel. Candidates: OTC 5606; OTC 5609; OTC 5613; OTC 5630; Lisle 51450.

### C18 — Mechanic inspection lights and cameras by access need

penlight, hazardous-location flashlight, rechargeable light, underhood bar and camera are distinct roles. Candidates: Streamlight 66118; Streamlight 68750; Streamlight 74751; Milwaukee 2125-20; Bosch GIC5-27C.

### C19 — Mechanic storage: portable box, service cart or rolling workstation

weight, tool retention, drawer loads, footprint, mobility and delivered package. Candidates: GEARWRENCH 83151; GEARWRENCH 83169; SUNEX 8057XTR; SUNEX 8019B; GEARWRENCH GWMP100.

### C20 — Workshop safety equipment: select for the assessed hazard

task-specific protection, US markings, fit, extinguisher siting and chock limits; no kit makes all work safe. Candidates: DEWALT DPG94-1C; 3M PELTOR X4A; First Alert PRO5; MaxxHaul 70472.


These are task-led buying guides. Where tools have different purposes, use separate groups and explain complementary roles; do not rank a charger against a jump starter, a penlight against a camera, or a circuit probe against a battery tester as interchangeable products. “Best” labels require an explicit task, evidence and limitations.

## Ten original workflows

### W01 — Automotive apprentice starter toolkit

Proposed slug: `automotive-apprentice-starter-toolkit`. Stage purchases against employer requirements and tools already owned. Mark alternatives and optional upgrades; do not recommend buying every listed model.

Buying-guide links: C05, C06, C07, C08, C18, C20.

### W02 — Vehicle diagnostics buying plan

Proposed slug: `vehicle-diagnostics-toolkit`. Choose functions against the vehicles serviced; include live-data interpretation, service-information access and update costs.

Buying-guide links: C01, C02, C03, C18.

### W03 — Battery and no-start electrical diagnosis

Proposed slug: `battery-no-start-diagnostics-toolkit`. Distinguish testing, starting support, charging and fault diagnosis. Restrict to documented conventional low-voltage applications.

Buying-guide links: C03, C04, C18.

### W04 — Wheel removal and refitting equipment plan

Proposed slug: `wheel-removal-refitting-toolkit`. Lifting/support and vehicle torque requirements remain prerequisites. Do not claim impact settings establish final wheel torque.

Buying-guide links: C05, C06, C07, C09, C12, C16, C20.

### W05 — Brake service toolkit

Proposed slug: `brake-service-toolkit`. Separate push-back, screw-in and EPB calipers; match bleeding method and adapters. Manufacturer procedures remain authoritative.

Buying-guide links: C02, C05, C06, C08, C10, C12, C18, C20.

### W06 — Routine servicing and oil-change toolkit

Proposed slug: `routine-service-oil-change-toolkit`. Engine/filter-specific tools, clean filling, capture and disposal. Clearly distinguish filter wrench types and clean/used fluid containers.

Buying-guide links: C05, C06, C12, C13, C14, C18, C20.

### W07 — Suspension and steering service equipment

Proposed slug: `suspension-steering-toolkit`. Vehicle adapter coverage and stored-energy hazards; no generic coil-spring or strut-disassembly instructions.

Buying-guide links: C05, C06, C07, C09, C11, C12, C20.

### W08 — Cooling-system diagnosis and refill toolkit

Proposed slug: `cooling-system-service-toolkit`. Separate pressure testing, leak investigation, flushing and vacuum refill; use cool-system and vehicle-specific procedures.

Buying-guide links: C13, C15, C18, C20.

### W09 — Engine mechanical diagnosis toolkit

Proposed slug: `engine-mechanical-diagnostics-toolkit`. Select tests by the diagnostic question, engine type and adapters; state what results do and do not establish.

Buying-guide links: C01, C02, C03, C17, C18.

### W10 — Workshop and mobile-mechanic setup

Proposed slug: `mechanic-workshop-mobile-setup`. Compare existing shop infrastructure with mobile requirements: power, air, lighting, secure transport, surfaces and storage.

Buying-guide links: C03, C04, C09, C12, C13, C18, C19, C20.


Each workflow needs its own job constraints, purchase priorities, existing-tool questions, dependencies, alternatives and omissions. Link authoritative service information where appropriate. These are equipment selection guides, not substitutes for OEM repair procedures or training.

## Original product-page standard

Follow the established carpenter review structure and research-based disclosure. Each standalone assessment must add model-specific value: intended job and user, exact supplied package, relevant specifications with sources, practical tradeoffs, unsuitable uses, complete power/adapter requirements and meaningful alternatives. Do not turn 100 candidate rows into 100 templated paragraphs or claim hands-on testing.

Use the existing photo-led layout, concise pros/cons, comparison navigation, search and directory. Give every product a stable canonical ID and tool-family IDs. Record capability attributes separately (drive, range, units, power platform, voltage, adapter and vehicle fit) rather than stuffing incompatible choices into one generic “mechanic tool” family. Preserve existing review/guide counts until actual qualifying content exists.

## Shared records and planner boundary

Two candidates already exist: `streamlight-66118` and `dewalt-dpg94-1c`. Reuse those records; do not create duplicate products or full reviews simply to add a trade association. This leaves 98 potential new canonical records. Other matching must use brand **and** exact model, not partial-number searches: SUNEX 3342 is not Jorgensen 33424, and OTC 5606 is not Klein 56062.

Extend the read-only shared catalogue integration when the hub is implemented, including trade/family retrieval and preservation of any purchase hold. Proposed IDs in the research file must be reconciled with the live catalogue again before implementation. Do not modify the separately developed planner application or its `feature/apprentice-tool-list-mvp` branch.

## Amazon.com and ratings

Preserve the existing `affiliateUrl` helper and tracking configuration. During implementation, add an explicit automotive trade-tag configuration following the current architecture; do not assume a new trade automatically gets the right tag. Retain `robbieom0e-20` where it is the approved existing destination tag.

Current official US commission table lists Automotive at 4.5% and Tools at 3%. Classification of the purchased item determines the actual rate; the shortlist is not a claim that every tool earns 4.5%. Source: https://affiliate-program.amazon.com/help/node/topic/GRXPHT8U84RAYDXZ

No new ASIN has been asserted in this candidate pass. Ninety-eight candidates have blank ASINs deliberately. The Streamlight retains its previously matched ASIN **B07KLSG5JG**, to be rechecked. DEWALT DPG94-1C retains the known **B002IVTX8E model-mismatch hold**; it must not receive a live purchase link unless an exact match is established. A search URL, family listing, kit alternative or reseller title is not an exact-model verification.

Before each product is implemented, record Amazon.com ASIN, canonical destination, exact title/model/variant, US package, source and check time. Recheck immediately before release. Never invent prices, stock, stars or review counts.

Keep the existing rating-strip design, but populate new Amazon stars only through a verified permitted Amazon data route and its current caching/display requirements. Existing hand-entered snapshots elsewhere do not establish permission for new snapshots. If that route is unavailable, show the source-labelled permitted manufacturer rating if available, or the existing neutral “See customer reviews on Amazon” link with no numeric score. Do not repurpose a manufacturer's rating as an Amazon rating, or present family-aggregated reviews as exact-variant evidence.

Official sources to check for implementation:
- https://affiliate-program.amazon.com/help/operating/participation/
- https://affiliate-program.amazon.com/help/operating/policies
- https://affiliate-program.amazon.com/creatorsapi/docs/en-us/introduction
- https://affiliate-program.amazon.com/creatorsapi/docs/en-us/license-agreement

## User feedback and pull quotes

Add useful feedback where exact-model evidence exists; do not require a quote on every page. Record original source URL, displayed author, date checked, precise model or family match, incentive/verification label and quotation text or faithful paraphrase. Keep quotes brief and within source permissions and quotation limits. Include material caveats and critical experiences where relevant. No invented reviewer names, credentials, portraits, purchases or workshop experience. Manufacturer marketing claims are not user testimonials.

This pass has **not captured or approved new customer quotations or rating snapshots**. That is an implementation research requirement, not a completed deliverable disguised by empty placeholders.

## Photographs

Every published product card/page should have a clean, exact-model product image. Record the model/colour, kit contents, source URL, image URL and reuse basis separately. Public accessibility is not a licence. Do not reuse the decorative images pasted in the brief as licensed assets.

The existing Streamlight and DEWALT images have manufacturer-permission-unconfirmed provenance under the publisher's earlier explicit direction; reuse does not convert them into licensed images. New photographs require an appropriate documented basis or explicit publisher handling consistent with the project's instructions. If unavailable, hold that product's image-dependent page for review and report the missing asset; do not silently deliver another photo-less finished batch or generate fake exact-tool photographs.

## Automotive-specific verification

- Scanners: identify US region and exact generation; check VIN/system/function coverage, active tests versus coding, update terms, ongoing use after expiry, secure gateways and separately charged access.
- Electrical: conventional low-voltage scope; do not imply a general meter/probe kit qualifies anyone for EV high-voltage work.
- Power tools: exact drive/anvil and bare tool versus kit; compatible battery, charger and impact-rated accessories; manufacturer torque claims labelled, not our measurements.
- Torque: in-lb versus ft-lb, calibrated directions, accuracy working range, service/recalibration and adapter effects. Use the vehicle's specified value; never publish one universal wheel torque.
- Lifting: exact model/manual, per-stand versus per-pair rating, minimum/maximum height, saddle/vehicle support compatibility, surface and US recall check. A broad recall search is not model clearance; final recall checks remain open. A jack lifts and a suitably selected support system supports.
- Brakes: push-back versus wind-back versus EPB service mode; correct bleeding pressure/adapter, brake-fluid compatibility and scan-tool-dependent ABS procedures.
- Fluid/cooling/engine: exact adapters and permitted fluids, temperatures and pressures; capture/disposal; distinguish gasoline compression and low-pressure fuel tools from diesel or direct-injection high-pressure applications.
- PPE: source the exact US specification and fit; NRR is not an overseas SNR number. Fire equipment and chocks need application-specific planning. Work gloves remain outside this shortlist.

Initial research already caught important model/role traps: GEARWRENCH 80550 versus 80550P, newer 81212XP versus older P, Mityvac MV6412 versus MV6412A, Arcan A20018 versus old ALJ3T, Lisle 51450 (damper puller) and 60900 (heater-core backflush tool), and Milton S-506 versus S-506D. Do not copy an old title into a new variant record.

## Release sequence and acceptance

1. Review/approve the candidate structure and first-batch priorities. Shortlist entries can be removed or replaced only with explicit editorial approval; do not silently substitute a mismatched listing.
2. Complete exact-model US manufacturer/manual and Amazon checks for batch 1. Source every image and any rating/feedback actually displayed. If a hold remains, state it rather than filling the space with an unapproved alternative.
3. Build the automotive hub and verified first 50 on a separate development branch using existing components. Add substantive individual reviews only for new records, appropriate shared placements, original comparisons and populated workflows.
4. Run catalogue/affiliate/link/count checks, lint/typecheck/build, duplicate-ID checks, search discoverability, image loading and desktop/mobile route checks. Record actual mobile verification separately from CSS assumptions.
5. Push a Vercel preview for the owner's approval. No merge or production release until that preview is approved.
6. Complete the second 50 under the same process, preserving first-batch routes and shared IDs.

**Current status:** research branch only; zero new automotive website pages published; no Vercel preview yet because implementation is awaiting structure/shortlist review. All 100 remain candidates. Exact Amazon checks, new image licences/assets, new ratings/quotes, final technical source extraction and lifting recall clearance are outstanding.
