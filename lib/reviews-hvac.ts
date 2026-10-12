import { makeReview } from "./review-factory";

export const hvacReviews = [
  makeReview("hvac", "testo-550s-review", {
    title: "Testo 550s Review: A Compact Manifold with a Probe-Based Workflow",
    meta: "Testo 550s review for HVAC technicians: two-way valve block, Bluetooth probes, kit differences and why the vacuum probe must be checked separately.",
    sourceUrl: "https://www.testo.com/en-US/testo-550s/p/0564-5500",
    extraSources: [
      {
        label: "550s kit with temperature clamps and vacuum probe",
        url: "https://www.testo.com/en-US/testo-550s-smart-kit/p/0564-5504-01",
      },
    ],
    intro:
      "The 550s is worth shortlisting if you prefer a smaller two-way manifold and are comfortable choosing the probes around your service workflow. Testo offers several bundles. A model-family name is not proof that the required temperature clamps, vacuum probe or hoses are in the box, so the kit number is part of the buying decision.",
    verdict:
      "Our compact-manifold choice for technicians who want Testo's probe and documentation ecosystem without assuming that every job needs a four-port body. Budget for the complete configuration. For evacuation work, confirm the appropriate vacuum probe is included or purchased separately; do not confuse an evacuation display mode with a built-in micron sensor.",
    bestFor:
      "HVAC technicians who want a compact two-way manifold with a configurable Testo probe and app workflow.",
    avoidIf:
      "A four-port layout is essential to your normal connection routine or you want all measurement capability in one body without accessory choices.",
    pros: [
      "Compact two-way manifold format",
      "Wired and wireless temperature-probe options",
      "Smart App documentation",
      "IP54 protection",
    ],
    cons: [
      "Vacuum measurement depends on the appropriate separate probe",
      "Kit contents vary",
      "Two-way block differs from the four-port alternatives",
    ],
    specs: [
      { label: "Valve block", value: "2-way" },
      {
        label: "Pressure measurement",
        value: "-1 to 60 bar / approximately -15 to 870 psi",
      },
      { label: "Protection", value: "IP54" },
      { label: "Power", value: "4 × AA" },
      { label: "Vacuum", value: "Appropriate separate probe required" },
    ],
    sections: [
      {
        heading: "Compare complete kits, not body prices",
        body: "List the instruments you will use for pressure, line temperature and vacuum before comparing offers. An attractive manifold-only listing may leave important items out of your setup. For existing Testo users, compatible probes already owned can change the calculation. For a first purchase, include storage and the connection accessories needed by the work.",
      },
      {
        heading: "Two-way versus four-way is a workflow choice",
        body: "Our interpretation is that a smaller valve block can suit a technician whose normal connection routine does not require a dedicated additional port. Another technician may prefer a four-way layout. Draw your usual setup before buying, then follow the relevant equipment instructions. More ports do not independently establish better measurement quality.",
      },
      {
        heading: "Be precise about vacuum capability",
        body: "A display that supports evacuation monitoring is only one part of the measurement arrangement. Confirm the actual sensor and its kit inclusion. This distinction matters when comparing the 550s with a manifold that has an integrated micron gauge. Choose based on the system you intend to assemble, rather than a retailer's abbreviated feature heading.",
      },
      {
        heading: "Documentation needs its own routine",
        body: "A connected measurement becomes useful to an office or customer when it is tied to a job and operating conditions. Plan how a report will be labeled and transferred. We have not tested app export or wireless range in buildings, so those are checks to perform on the device and workflow you will actually use.",
      },
      {
        heading: "550s or the Fieldpiece SM480V?",
        body: "Start with the tools and probes you already own, then compare valve layout and vacuum-measurement arrangement. The Fieldpiece's Job Link-oriented design and the Testo probe setup solve related tasks in different ways. Without a controlled field test, we would not rank them by connection reliability, time saved or accuracy in actual service.",
      },
    ],
    faqs: [
      {
        q: "Does every 550s kit include a vacuum probe?",
        a: "No. Testo lists different bundles. The 0564 5504 01 kit includes a 552i vacuum probe; confirm the exact current kit.",
      },
      {
        q: "Is the 550s a four-port manifold?",
        a: "No. It uses a two-way valve block.",
      },
      {
        q: "Can refrigerant software support replace system-specific checks?",
        a: "No. Verify the exact refrigerant, tool configuration and manufacturer instructions for the equipment being serviced.",
      },
    ],
  }),
  makeReview("hvac", "yellow-jacket-titanmax-review", {
    title: "Yellow Jacket TITANMAX Review: A Touchscreen Manifold Workflow",
    meta: "TITANMAX 40881 review: four-way block, touchscreen, external vacuum sensor and data records, replacing the discontinued P51-870 in our shortlist.",
    sourceUrl:
      "https://yellowjacket.com/wp-content/uploads/2026/03/10239-TITANMAX-Digital-Manifold-Spec-Sheet-2026-REV-B.pdf",
    extraSources: [
      {
        label: "P51 manufacturer discontinuation notice",
        url: "https://yellowjacket.com/product/titanmax/",
      },
      {
        label: "TITANMAX operation and logging manual",
        url: "https://yellowjacket.com/wp-content/uploads/2023/12/TITANMAX-User-Manual-RevB-ENGLISH-2025-registered.pdf",
      },
    ],
    intro:
      "The TITANMAX is the current Yellow Jacket touchscreen platform to investigate, rather than the discontinued P51-870 in the original shortlist. This review centers on the 40881 configuration described in the current specification sheet. Its case is a graphical four-way manifold workflow with an external vacuum sensor and a path to logged records.",
    verdict:
      "Our touchscreen-workflow candidate for technicians who want a four-way block and prefer a large graphical interface. It is not automatically the best choice for every technician: consider the complete kit and how you work with the display. We have not tested touch response with gloves, outdoor readability or field battery endurance.",
    bestFor:
      "Technicians who prefer a touchscreen and intend to use the Yellow Jacket or measureQuick documentation workflow.",
    avoidIf:
      "You strongly prefer physical controls, need a smaller basic kit, or will not use the display and record features.",
    pros: [
      "5-inch graphical touchscreen",
      "Four-way valve block",
      "External vacuum sensor in documented 40881 configuration",
      "Onboard records with USB/app transfer",
    ],
    cons: [
      "Touchscreen preference should be evaluated in real use",
      "Complete kit adds equipment to manage",
      "Published protection rating is IP52, not submersible",
    ],
    specs: [
      { label: "Configuration reviewed", value: "TITANMAX 40881" },
      { label: "Interface", value: "5-inch full-color touchscreen" },
      { label: "Valve block", value: "4-way TITAN" },
      { label: "Vacuum", value: "External sensor in documented kit" },
      { label: "Protection", value: "IP52" },
    ],
    sections: [
      {
        heading: "Why the old P51 pick changed",
        body: "The manufacturer marks the old P51-870 variants discontinued and points buyers to TITANMAX. For an existing P51 owner, serviceability and firmware support may still matter. For someone assembling a new kit, we prefer to start with the current platform and an identifiable configuration instead of treating leftover stock as an unqualified premium recommendation.",
      },
      {
        heading: "Buy the interface you will actually use",
        body: "A large screen is only a benefit if the arrangement of information works for you. Think about where the manifold sits, your usual viewing angle and the conditions of the job. Our recommendation is based on the documented interface design. A claim that it is faster or easier than competing meters would need hands-on comparison.",
      },
      {
        heading: "Data logging is a process, not just a feature",
        body: "A useful commissioning record needs a clear job reference and the conditions under which readings were collected. Decide where the record should end up and who needs to read it. A platform with export options can support that plan, but it cannot independently ensure that the information is complete or meaningful.",
      },
      {
        heading: "Check the whole connection arrangement",
        body: "Valve count, supplied sensor and hose configuration should be considered together. Do not infer the contents of a retailer's bundle from this model family alone. Match the seller's exact part number to the manufacturer specification and confirm the components you need. Follow system and instrument instructions for compatibility and operating limits.",
      },
      {
        heading: "Compared with the Fieldpiece and Testo choices",
        body: "Choose among these platforms around your existing tools, display preference and normal service routine. TITANMAX is our touchscreen candidate; the other options remain useful where their ecosystems fit better. We are deliberately not giving an invented performance score or claiming that a more elaborate interface guarantees a more accurate diagnosis.",
      },
    ],
    faqs: [
      {
        q: "Why is P51-870 no longer the recommendation?",
        a: "Yellow Jacket marks the P51-870 variants discontinued and directs buyers toward TITANMAX.",
      },
      {
        q: "Does the reviewed 40881 configuration include a vacuum sensor?",
        a: "The current manufacturer sheet lists an external vacuum sensor with 40881. Confirm the actual seller bundle.",
      },
      {
        q: "Is it a touch-only substitute for understanding the system?",
        a: "No. Calculations and recorded readings still need qualified interpretation and the appropriate service procedure.",
      },
    ],
  }),
  makeReview("hvac", "elitech-emg40v-review", {
    title: "Elitech EMG-40V Review: Check the Bundle and App Workflow",
    meta: "Elitech EMG-40V review: app-connected manifold, graph-based readings, bundle differences and the checks needed before relying on vacuum capability.",
    sourceUrl:
      "https://www.elitechus.com/pages/intelligent-digital-manifold-emg-series",
    extraSources: [
      {
        label: "EMG-40V product configurations",
        url: "https://www.elitechus.com/en-ie/products/elitech-emg-40v-intelligent-4-valves-digital-manifold-with-5-smart-touch-screen",
      },
    ],
    sourceNote:
      "The EMG series page documents the general workflow. Bundle and accessory inclusion were checked on the EMG-40V product page; do not apply these details automatically to EMG-40VPro or other variants.",
    intro:
      "The EMG-40V belongs on a shortlist for a technician interested in Elitech's app and graphical measurement workflow. The model and bundle need care: the original candidate was shortened to EMG-40, while current product listings distinguish EMG-40V configurations. Do not infer included vacuum equipment from the family name alone.",
    verdict:
      "An app-connected alternative worth investigating if the complete configuration matches your jobs. We would confirm the current manual, accessory list and phone compatibility before using price as the deciding factor. The manufacturer describes recording and graph functions, but we have not tested the software, sensor response or field reliability.",
    bestFor:
      "Technicians who want an Elitech app-connected workflow and will verify the exact bundle and operating limits.",
    avoidIf:
      "You need a proven-in-your-kit software ecosystem, dislike touchscreen/app dependence or cannot confirm accessories and compatibility.",
    pros: [
      "App-linked monitoring described by manufacturer",
      "Graph/dial viewing modes",
      "Superheat and subcool calculation workflow",
      "Logging and export features described for the series",
    ],
    cons: [
      "Vacuum accessory inclusion varies by offer",
      "Series specifications should not be mixed across generations",
      "No hands-on software or measurement performance test here",
    ],
    specs: [
      { label: "Model scope", value: "EMG-40V; not EMG-40VPro" },
      { label: "Layout", value: "4-valve configuration" },
      { label: "Viewing", value: "Device and Elitech app" },
      {
        label: "Display modes",
        value: "Dial and curve/graph modes documented for series",
      },
      {
        label: "Vacuum",
        value: "Confirm transmitter and bundle before purchase",
      },
    ],
    sections: [
      {
        heading: "Resolve the model name first",
        body: "Search results may use a family name rather than the precise configuration. Make a note of the full model and supplied accessories before comparing the price with another manifold. A low-cost body and a complete measurement package are different purchases. For this shortlist we identify the EMG-40V, without merging in claims for a newer Pro variant.",
      },
      {
        heading: "A graph is useful only when the question is clear",
        body: "Our buying interpretation is that a graphical record can help a technician review a change over time. Decide what problem that record must answer before prioritizing the feature. A graph cannot validate the setup, establish correct probe placement or interpret the equipment condition by itself. Those remain parts of the professional service process.",
      },
      {
        heading: "Confirm the vacuum sensor separately",
        body: "The manufacturer sells configuration options, so a headline reference to a micron gauge must be checked against the contents of the exact offer. Ask which sensor is supplied and which instructions apply. Do not assume a pressure display provides the vacuum-measurement arrangement needed by your work. If the bundle is unclear, resolve it before ordering.",
      },
      {
        heading: "Evaluate the app on your own device",
        body: "An app can add another place to see and store readings, but it also becomes part of the kit to maintain. Check installation permissions on a work phone and the transfer format required by the office. We have not tested a live connection. A manufacturer's description of connectivity is not a compatibility guarantee for every phone.",
      },
      {
        heading: "What would make this the right alternative?",
        body: "It should solve a concrete requirement at a sensible complete-kit cost. If you already own compatible equipment in a different ecosystem, moving platforms may create more work than it removes. If no app features will be used, consider a simpler setup. We would choose on workflow fit and verified configuration rather than an unsupported compact or budget label.",
      },
    ],
    faqs: [
      {
        q: "Is EMG-40 the exact model name used here?",
        a: "The shortlist now specifies EMG-40V. Check that your listing is for that configuration, rather than another EMG variant.",
      },
      {
        q: "Is the vacuum transmitter always included?",
        a: "Do not assume it is. Elitech lists multiple options; confirm the seller's exact contents.",
      },
      {
        q: "Have you tested the Elitech app?",
        a: "No. This recommendation evaluates manufacturer-documented capability and the purchase checks a technician should make.",
      },
    ],
  }),
  makeReview("hvac", "cps-blackmax-bmd200a-review", {
    title: "CPS BLACKMAX BMD200A Review: An Exact Model for a Connected Kit",
    meta: "CPS BMD200A BLACKMAX review: four-valve layout, wired clamps, CPS Link Pro/measureQuick and what is included versus separately purchased.",
    sourceUrl:
      "https://www.cpsproducts.com/product/bmd200a-blackmax-wireless-digital-manifold/",
    intro:
      "BLACKMAX is a product family, not a sufficiently precise model for a useful review. This shortlist now uses the current BMD200A, a four-valve connected manifold supplied with wired temperature clamps. Its strongest reason to investigate is fit with a CPS-oriented kit, rather than a vague comparison with every digital manifold sold under the BLACKMAX name.",
    verdict:
      "Our CPS-ecosystem candidate for technicians wanting a configurable display and connected readings. The supplied temperature clamps are wired; wireless clamps are a separate purchase. We would also check the required vacuum gauge arrangement separately. This is a research-based selection, without live app pairing or independent field-performance measurements.",
    bestFor:
      "Technicians building around CPS tools or a compatible measureQuick workflow who want an identifiable current manifold configuration.",
    avoidIf:
      "You assume the kit includes wireless clamps and every vacuum accessory, or are choosing purely on a BLACKMAX family-name listing.",
    pros: [
      "Exact current BMD200A kit identity",
      "Configurable display layouts",
      "CPS Link Pro and measureQuick connection documented",
      "Wired clamps and protective case in listed kit",
    ],
    cons: [
      "Wireless temperature clamps sold separately",
      "Confirm the vacuum-gauge setup separately",
      "Changing ecosystems may add cost for an existing tool kit",
    ],
    specs: [
      {
        label: "Layout",
        value: "4 valves; three 1/4-inch ports and one 3/8-inch vacuum port",
      },
      { label: "Protection", value: "IP54" },
      { label: "Power", value: "3 × AA alkaline" },
      {
        label: "Included temperature equipment",
        value: "Two BTM100 wired clamps",
      },
      { label: "Apps", value: "CPS Link Pro; measureQuick" },
    ],
    sections: [
      {
        heading: "Why model specificity matters",
        body: "A product-family search can mix different valve blocks, generations and accessory sets. Choose the exact model first, then compare equivalent kits. The BMD200A gives this page a defined subject. Do not apply its specifications to an older MD50 or MD100 merely because both are called BLACKMAX. That would create a misleading recommendation.",
      },
      {
        heading: "Wired clamps are not wireless clamps",
        body: "The manifold's connectivity and its supplied temperature accessories are separate facts. Our buying interpretation is that a wired arrangement can still suit a technician's normal setup, but someone expecting wireless sensors needs a different budget. Establish which part of the connection you actually want to remove before buying more components.",
      },
      {
        heading: "Match the platform to the existing kit",
        body: "If you already have compatible CPS equipment, investigate whether the current configuration reduces duplicated purchases. If you use another ecosystem, make a list of what would have to change. A connected manifold should simplify a repeat task; it should not be chosen merely because it can pair with an additional app.",
      },
      {
        heading: "Display preference is personal until tested",
        body: "The documented screen layouts are a reason to inspect the interface before purchase. Consider how you want pressure and temperature information grouped. We have not measured readability or task completion times, so we cannot claim the interface produces faster diagnoses. Judge the arrangement against your own work rather than relying on a feature label.",
      },
      {
        heading: "Check the separate measurement requirements",
        body: "A vacuum port is a connection, not proof that every required sensor is included. Verify the kit's actual accessories and manual before planning evacuation work. Likewise, refrigerant-profile support does not independently validate hoses or the service method. Choose the complete arrangement for the equipment, with operating limits confirmed from current documentation.",
      },
    ],
    faqs: [
      {
        q: "Which BLACKMAX model is reviewed?",
        a: "The BMD200A kit. The generic family name in the initial shortlist has been replaced with this exact model.",
      },
      {
        q: "Does the kit contain wireless temperature clamps?",
        a: "CPS lists two wired BTM100 clamps; wireless clamps are sold separately.",
      },
      {
        q: "Does a vacuum port mean a vacuum gauge is included?",
        a: "No. Confirm the required gauge and actual kit contents separately.",
      },
    ],
  }),
];
