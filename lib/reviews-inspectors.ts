import { makeReview } from "./review-factory";
export const inspectorReviews = [
  makeReview("home-inspectors", 1, {
    title: "HIKMICRO B01 Review: Thermal Detail Without a Phone",
    meta: "Research-based HIKMICRO B01 review: native thermal resolution, standalone operation, documentation tradeoffs and alternatives for home inspectors.",
    sourceUrl:
      "https://www.hikmicrotech.com/en_us/industrial-products/b-series-handheld-thermal-imager/",
    extraSources: [
      {
        label: "B01 manufacturer data sheet",
        url: "https://webassets.hikmicrotech.com/global/asset/92932843d2fc43d6ad8eba1cff6fe906.pdf",
      },
    ],
    sourceNote:
      "This review covers B01. The range page also covers other models; do not assume that all B-series visual-camera and fusion features belong to B01.",
    intro:
      "The HIKMICRO B01 is the standalone option to consider when native thermal detail matters more than a pocket-camera format. Its 256 × 192 detector provides more thermal sampling points than the FLIR C5. That is a specification comparison, not a finding from side-by-side field testing.",
    verdict:
      "Shortlist B01 for a dedicated thermal instrument with a useful detector resolution. Compare C5 if its visible-image context and reporting workflow matter more than the B01's higher native pixel count. Either camera still needs an inspector to interpret and document what the image shows.",
    bestFor:
      "Inspectors who want a separate thermal instrument and prioritize native thermal detail.",
    avoidIf:
      "Integrated visible-photo context is essential, or you expect every B-series feature on B01.",
    pros: [
      "256 × 192 native thermal detector",
      "Own display; independent of a phone",
      "Wi-Fi connectivity",
      "Dedicated instrument for repeated scanning",
    ],
    cons: [
      "B-series marketing covers several different models",
      "Images need location and inspection context",
      "Higher resolution does not identify an anomaly's cause",
    ],
    specs: [
      { label: "Model", value: "B01, not B01S or B20" },
      {
        label: "Native thermal resolution",
        value: "256 × 192 / 49,152 pixels",
      },
      { label: "Format", value: "Standalone handheld" },
      { label: "Connectivity", value: "Wi-Fi" },
    ],
    sections: [
      {
        heading: "Why native resolution matters",
        body: "More detector sampling points can preserve more spatial information in a surface pattern. That may help when comparing a small area with its surroundings, but it does not let the camera see through walls. Distance, surface properties and temperature contrast still influence the result. Enhanced saved-image dimensions are not additional detector pixels.",
      },
      {
        heading: "A separate instrument during an inspection",
        body: "B01 leaves your phone available for calls, ordinary photographs and notes while you scan. The tradeoff is another device to charge and an image-transfer routine to learn. Decide how images will reach your report before choosing solely from a detector specification. We have not tested the current app or its performance on specific phones.",
      },
      {
        heading: "B01 versus C5",
        body: "B01 has 256 × 192 native thermal resolution compared with C5's 160 × 120. C5 adds a visible camera, MSX outlines and its Ignite transfer workflow. These solve different problems: thermal spatial detail versus helping a report reader recognize the object. We have not measured comparative image quality or inspection outcomes.",
      },
      {
        heading: "Anomalies need confirmation",
        body: "A temperature pattern is a reason to investigate, not proof of a leak, missing insulation or an electrical defect. Record the location and conditions and use a suitable second instrument or specialist assessment to establish the cause. A thermal camera complements an inspection rather than replacing the inspector's scope or judgment.",
      },
      {
        heading: "What to check before buying",
        body: "Confirm the exact B01 model, supplied accessories and current supported software. Avoid borrowing visible-camera features from a B20 listing or specifications from B01S. If ordinary photographs are central to your reports, plan how to pair them with thermal captures so every finding remains identifiable later.",
      },
    ],
    faqs: [
      {
        q: "Is 256 × 192 the screen resolution?",
        a: "Here it describes the native thermal detector. Display and enhanced saved-image resolutions are separate specifications.",
      },
      {
        q: "Should I choose B01 or C5?",
        a: "Favor B01 for native thermal detail in a standalone format. Favor C5 if its visual context and documentation workflow fit your reports better.",
      },
      {
        q: "Can it identify moisture through a wall?",
        a: "No. It observes surface temperatures. Confirm suspected moisture independently rather than treating an image as a moisture measurement.",
      },
    ],
  }),
  makeReview("home-inspectors", 2, {
    title: "Klein TI250 Review: A Simple Standalone Thermal Camera",
    meta: "Klein TI250 research review: current thermal pixels, standalone use, reporting limits and hardware-version checks before purchase.",
    sourceUrl:
      "https://www.kleintools.com/catalog/thermal-imagers/rechargeable-thermal-imaging-camera-over-19200-pixels",
    sourceNote:
      "The current page advertises over 19,200 thermal pixels. Older TI250 documentation differs; confirm the supplied hardware version rather than mixing specifications across generations.",
    intro:
      "Klein TI250 suits buyers who want a dedicated screen and simple thermal viewing without attaching a sensor to a phone. The current manufacturer page advertises over 19,200 thermal pixels. Older documentation differs, so check the version offered rather than relying on the model name alone.",
    verdict:
      "TI250 belongs on a shortlist for straightforward spot checks and independent thermal viewing. Compare B01 and C5 if higher native resolution, visible-photo context or a documentation workflow is the main reason for buying. It is our simple standalone option rather than a premium recommendation.",
    bestFor:
      "Inspectors and maintenance users who prefer simple standalone thermal viewing.",
    avoidIf:
      "You need visible-camera context, advanced report integration or guaranteed specifications from an older listing.",
    pros: [
      "Dedicated display",
      "USB-rechargeable format",
      "Adjustable emissivity",
      "Selectable thermal palettes",
    ],
    cons: [
      "Current and older TI250 specifications differ",
      "Display pixels are not thermal detector pixels",
      "Less documentation-oriented than visible-plus-thermal options",
    ],
    specs: [
      { label: "Thermal pixels", value: "Over 19,200 on current product page" },
      { label: "Display", value: "2.4-inch TFT" },
      {
        label: "Published temperature range",
        value: "−4 to 752°F / −20 to 400°C",
      },
      { label: "Emissivity", value: "Adjustable" },
      { label: "Power", value: "USB rechargeable" },
    ],
    sections: [
      {
        heading: "The appeal of simplicity",
        body: "An independent viewer avoids a phone attachment and connector fit problem. That is useful for brief checks during a larger inspection. Simple viewing does not automatically make it a good report camera: consider how you will identify, store and export each finding. We have not tested capture speed or export reliability.",
      },
      {
        heading: "Confirm the sensor version",
        body: "A high-resolution display cannot create thermal measurements that the detector did not capture. Compare native sensor information, and distinguish the current TI250 page from older manuals. Ask the seller to identify the supplied hardware if pixel count affects your decision; an older offer should not be evaluated with newer specifications.",
      },
      {
        heading: "What adjustable emissivity helps with",
        body: "Surfaces emit and reflect infrared energy differently. Adjustable emissivity is useful, but a setting alone does not eliminate reflections or guarantee a correct reading on shiny metal. Follow the manual and interpret patterns in context. The displayed temperature is evidence to assess, not an automatic diagnosis.",
      },
      {
        heading: "Where it fits in an inspection kit",
        body: "Use a thermal viewer to locate patterns worth a closer look and document the room, surface and conditions. Pair thermal findings with ordinary photographs so a report reader knows what was inspected. For suspected water intrusion, use an appropriate moisture assessment; the camera does not measure moisture content.",
      },
      {
        heading: "When another camera fits better",
        body: "B01 offers a higher native detector count; C5 emphasizes integrated visual context and transfer. A supported Android user may prefer TC001's phone workflow. Those are different approaches to capture and reporting. Decide which routine you need before choosing from a price or product-tier label.",
      },
    ],
    faqs: [
      {
        q: "How many thermal pixels does TI250 have?",
        a: "The current Klein page advertises over 19,200. Older documentation differs, so confirm the version supplied by your seller.",
      },
      {
        q: "Is TI250 a phone attachment?",
        a: "No. It is a standalone rechargeable imager with its own display.",
      },
      {
        q: "Does a cold area prove a leak?",
        a: "No. Temperature differences have several possible causes and need further investigation.",
      },
    ],
  }),
  makeReview("home-inspectors", 3, {
    title: "TOPDON TC001 Review: Thermal Imaging for Android Users",
    meta: "TOPDON TC001 research review: 256 × 192 native resolution, Android and Windows compatibility, phone power and inspection workflow tradeoffs.",
    sourceUrl: "https://la.topdon.com/products/tc001",
    extraSources: [
      {
        label: "Manufacturer device compatibility chart",
        url: "https://web-file.topdon.com/topdon-web/information_download/TC001-Product-Compatibility-Chart.pdf",
      },
    ],
    intro:
      "TOPDON TC001 makes sense when a compatible Android phone is already central to your inspection routine. Its 256 × 192 detector connects through USB-C and draws power from the host. It exchanges the independence of a separate camera for a compact sensor and app-based capture.",
    verdict:
      "Consider TC001 for a supported Android setup you can verify before purchase. Native resolution is a strength on paper, but the phone, connector and app are part of the instrument. Choose a standalone camera if thermal imaging must stay available while your phone handles other tasks.",
    bestFor:
      "Android users who prefer app-based capture and can validate their exact device.",
    avoidIf:
      "You use an iPhone, want a separate display and battery or cannot confirm compatibility.",
    pros: [
      "256 × 192 native thermal detector",
      "Compact attachment",
      "Powered by the host",
      "Manufacturer supports Android and Windows workflows",
    ],
    cons: [
      "Not an iPhone model",
      "Uses the phone's battery and port",
      "Device, software and case clearance need checking",
    ],
    specs: [
      { label: "Native thermal resolution", value: "256 × 192" },
      { label: "Published refresh rate", value: "25 Hz" },
      {
        label: "Platforms",
        value: "Compatible Android devices and Windows computers",
      },
      { label: "Connection", value: "USB-C" },
      { label: "Power", value: "Host device; no camera battery" },
    ],
    sections: [
      {
        heading: "Compatibility comes first",
        body: "A USB-C socket does not prove compatibility. TOPDON identifies TC001 for Android and Windows, not iPhone. Check its device chart and software requirements against your exact hardware. We have not tested current app versions or every handset. A return policy is useful when device support determines whether the instrument can work.",
      },
      {
        heading: "The phone becomes part of the tool",
        body: "The phone supplies the display, interface and power. This removes a separate camera battery but consumes phone charge. A protective case may obstruct the connector. Think about holding the combination, taking ordinary photographs and switching to notes before assuming that smaller hardware simplifies an entire inspection.",
      },
      {
        heading: "Native resolution and interpretation",
        body: "The 256 × 192 detector has more sampling points than C5 or TG165-X. That alone does not establish better temperature accuracy or inspection outcomes. Surface reflections, distance and conditions still matter. We have not measured comparative image quality, accuracy or software stability in field use.",
      },
      {
        heading: "A reporting routine to verify",
        body: "Phone-based capture can sit close to the notes and photographs you already collect. Check whether you can consistently identify and export the images into your report system. Standard TC001 and TC001 Plus are distinct products; do not assume additional imaging hardware from a Plus listing belongs to this model.",
      },
      {
        heading: "TC001 versus a standalone camera",
        body: "Choose TC001 when a supported phone workflow is an advantage and shared power is acceptable. B01 provides a separate instrument with the same native detector dimensions. C5 offers integrated visible-image context and its documentation system. Choose the routine that fits your day rather than the largest pixel number alone.",
      },
    ],
    faqs: [
      {
        q: "Will TC001 work on a USB-C iPhone?",
        a: "The manufacturer lists Android and Windows support. Do not infer iPhone support from the connector; select a model explicitly supported for your device.",
      },
      {
        q: "Does it have a battery?",
        a: "No. It draws power from the connected host device.",
      },
      {
        q: "Is TC001 the same as TC001 Plus?",
        a: "No. Check the exact model and features rather than borrowing specifications from another variant.",
      },
    ],
  }),
  makeReview("home-inspectors", 4, {
    title: "FLIR TG165-X Review: Spot Checks With Thermal Context",
    meta: "FLIR TG165-X research review covering 80 × 60 thermal resolution, MSX, spot temperature measurement and its limits for home inspection.",
    sourceUrl:
      "https://support.flir.com/dsdownload/assets/87501-0101-en-us.html",
    extraSources: [
      {
        label: "FLIR product page",
        url: "https://www.flir.com/products/tg165-x/",
      },
    ],
    intro:
      "FLIR TG165-X is a spot-check instrument that adds a thermal view to a temperature-measurement task. It combines an 80 × 60 detector, MSX visual outlines and a laser-guided measurement area. The grip format suits targeted checks; its detector has fewer pixels than the other cameras in this shortlist.",
    verdict:
      "Consider TG165-X for targeted temperature checks with recognizable visual outlines. Compare C5 or B01 if detailed building scans and inspection reports are the main task. MSX adds context, not additional measured thermal pixels.",
    bestFor:
      "Targeted temperature checks where a grip format and visual outline suit the task.",
    avoidIf:
      "Fine thermal detail, broad building surveys or report-focused capture is your priority.",
    pros: [
      "MSX visual outlines",
      "Laser indicates spot measurement area",
      "Standalone grip format",
      "IP54 housing rating",
    ],
    cons: [
      "80 × 60 detector limits native thermal detail",
      "MSX does not increase thermal resolution",
      "Spot measurement does not describe every temperature in the image",
    ],
    specs: [
      { label: "Native thermal resolution", value: "80 × 60 / 4,800 pixels" },
      { label: "Spot distance ratio", value: "24:1" },
      {
        label: "Published temperature range",
        value: "−13 to 572°F / −25 to 300°C",
      },
      { label: "Display", value: "2.4-inch" },
      { label: "Housing", value: "IP54" },
    ],
    sections: [
      {
        heading: "A spot-check tool first",
        body: "TG165-X helps compare a target area with its surrounding thermal pattern. This differs from collecting detailed images across a building envelope. Its laser identifies the spot measurement area; follow the manual's distance and target-size guidance. A small distant target can be mixed with the background in a spot reading.",
      },
      {
        heading: "What MSX adds",
        body: "MSX overlays visible outlines so an object is easier to recognize. That can make a saved image more understandable. It does not add thermal measurements: the detector remains 80 × 60, even if the display and overlay make the scene look more detailed. Compare native detector pixels separately from visual enhancement.",
      },
      {
        heading: "Limits for property inspection",
        body: "Lower resolution is a reason to compare another model when subtle patterns or small distant details are central to your work. Record conditions and location and confirm suspected causes. Thermal imaging does not measure moisture content or prove an electrical defect from color alone. We have not tested comparative accuracy or image quality.",
      },
      {
        heading: "TG165-X versus C5",
        body: "Both use MSX. C5 has a 160 × 120 native thermal detector, a pocket format and Ignite transfer features. TG165-X emphasizes a grip and spot measurement with 80 × 60 thermal resolution. For report-led home inspection, C5's documentation workflow is the more relevant reason to compare them.",
      },
      {
        heading: "Check the X suffix",
        body: "TG165, TG165-X and other TG-series cameras have different specifications. Confirm the exact model and supplied accessories. Decide whether this will be a targeted measurement tool or your main survey camera before evaluating retailer offers. We have not independently tested the claimed housing protection or laser visibility.",
      },
    ],
    faqs: [
      {
        q: "Does MSX increase thermal resolution?",
        a: "No. It adds visible outlines. Native thermal resolution remains 80 × 60 pixels.",
      },
      {
        q: "What does 24:1 describe?",
        a: "The spot temperature measurement's distance-to-spot relationship, not detector resolution. Follow the manual for target sizing.",
      },
      {
        q: "Is this our main report-camera recommendation?",
        a: "It is our spot-check option. Compare C5 for documentation and B01 for greater native thermal detail.",
      },
    ],
  }),
];
