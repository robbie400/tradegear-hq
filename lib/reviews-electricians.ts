import { makeReview } from "./review-factory";

export const electricianReviews = [
  makeReview("electricians", 1, {
    title: "Fluke 115 Review: A General-Purpose Meter or the 117?",
    meta: "Fluke 115 buying advice for electricians: True-RMS, CAT III 600 V, the differences from the 117, and when a simpler service meter makes sense.",
    sourceUrl:
      "https://www.fluke.com/en-us/product/electrical-testing/digital-multimeters/fluke-115",
    intro:
      "Choose the Fluke 115 if you want a conventional True-RMS service meter and already carry separate voltage-screening equipment. Choose the 117 when its integrated VoltAlert and AutoVolt/LoZ functions are central to your work. The 115's attraction is a focused measurement tool, rather than a long list of connected features.",
    verdict:
      "Our research-based pick for technicians who value a straightforward meter and do not need the 117's electrician-specific additions. Compare the actual offers for both before buying: a simpler feature set does not automatically mean better value. For residential service calls, the decision is whether those extra functions will remove a real inconvenience from your day.",
    bestFor:
      "Electricians and maintenance technicians who already have a separate voltage tester and want a general-purpose handheld meter.",
    avoidIf:
      "You specifically want integrated non-contact voltage detection, AutoVolt selection or the 117's low-impedance voltage mode.",
    pros: [
      "True-RMS AC voltage and current",
      "Clear 6,000-count display",
      "Min/Max/Average recording",
      "Focused conventional service-meter controls",
    ],
    cons: [
      "Missing the 117's integrated VoltAlert and AutoVolt/LoZ voltage features",
      "Not a clamp meter or insulation tester",
      "Check the price difference before treating it as a value pick",
    ],
    specs: [
      { label: "Voltage", value: "AC/DC to 600 V" },
      { label: "Safety category", value: "CAT III 600 V" },
      { label: "Display", value: "6,000 counts" },
      { label: "Current", value: "AC/DC to 10 A; manual limits apply" },
      { label: "AC measurement", value: "True-RMS" },
    ],
    sections: [
      {
        heading: "Start with the measurements you actually make",
        body: "Write down your last few diagnostic jobs before choosing a meter. If they mostly involved checking supply voltage, tracing an open connection and comparing resistance readings on isolated equipment, a conventional meter may be enough. If ambiguous induced voltages regularly consume your time, the decision should give greater weight to a suitable low-impedance function.",
      },
      {
        heading: "Fluke 115 versus Fluke 117",
        body: "The shared meter family does not make the two models interchangeable. The 117 adds integrated VoltAlert screening and AutoVolt/LoZ voltage functions; those are the reason to choose it. Our buying judgment is that an existing kit matters: buying another screening function has less value if a separate tool already does that job well.",
      },
      {
        heading: "Where it fits in a service-call bag",
        body: "Treat the 115 as the general measurement instrument in the kit. Pair the meter with tools chosen for the other parts of the call, including lighting, circuit identification and safe isolation. A crowded bag is not automatically a better bag; clear roles for each instrument make it easier to recognize when the current tool is the wrong one.",
      },
      {
        heading: "Current measurement is a separate buying decision",
        body: "A handheld multimeter's current input is not a substitute for a clamp around a conductor. For load-related diagnosis, choose the current-measurement method appropriate to the equipment and work procedure. Do not select this meter merely because the current range appears large on a specification sheet. Think about how often you actually need that measurement.",
      },
      {
        heading: "What would make us choose something else?",
        body: "We would start elsewhere for higher-category work, specialist insulation testing or a need for wireless records. We would also choose the 117 if its added functions justify the difference in the current offer. There is no hands-on durability assessment here: this recommendation is a comparison of documented capability and the intended use case.",
      },
    ],
    faqs: [
      {
        q: "Is the Fluke 115 True-RMS?",
        a: "Yes. Fluke specifies True-RMS AC voltage and current measurement.",
      },
      {
        q: "Does the 115 have the 117's VoltAlert function?",
        a: "No. The integrated non-contact voltage screening is a reason to choose the 117 instead.",
      },
      {
        q: "Should an electrician choose the 115 or 117?",
        a: "Choose around the work: the 115 for general measurement, the 117 when its extra screening and low-impedance voltage functions solve a recurring problem.",
      },
    ],
  }),
  makeReview("electricians", 2, {
    title: "Klein MM720 Review: Higher CAT Ratings, LoZ and Temperature",
    meta: "Klein MM720 review for electricians: True-RMS, CAT IV 600 V / CAT III 1000 V, LoZ, temperature measurement, and why it replaces our older MM600 pick.",
    sourceUrl:
      "https://www.kleintools.com/catalog/multimeters/digital-multimeter-trms-auto-ranging-1000v-temp-low-impedance",
    extraSources: [
      {
        label: "MM600 manufacturer page and replacement notice",
        url: "https://www.kleintools.com/catalog/multimeters/digital-multimeter-auto-ranging-1000v",
      },
    ],
    intro:
      "The MM720 is the current Klein alternative to consider when you need broader documented capability than a basic 600 V meter. It combines True-RMS, low-impedance voltage measurement and temperature capability. We replaced the older MM600 in this shortlist because Klein marks it out of production and identifies the MM720 as the newer model.",
    verdict:
      "A sensible shortlist option when safety category, temperature and LoZ are requirements rather than extras. It earns its place through that combination, not an unsupported 'premium' label. A higher category rating must still match the complete setup, including leads, accessories and workplace procedures; it is not permission to tackle equipment outside your competence.",
    bestFor:
      "Electricians wanting a documented CAT IV 600 V / CAT III 1000 V meter with temperature and low-impedance functions.",
    avoidIf:
      "Your main priority is the smallest pocket meter, or you need specialist logging, insulation testing or clamp-based current measurement.",
    pros: [
      "True-RMS and LoZ capability",
      "Higher documented category ratings",
      "Temperature measurement with included thermocouple",
      "Reverse-contrast 6,000-count display",
    ],
    cons: [
      "IP42 is not an outdoor waterproof rating",
      "Broader capability can be unnecessary for a simple service kit",
      "Current inputs still require the correct fused measurement setup",
    ],
    specs: [
      { label: "Safety", value: "CAT IV 600 V / CAT III 1000 V" },
      { label: "Voltage range", value: "Up to 1000 V AC/DC" },
      { label: "Display", value: "6,000 counts" },
      { label: "Protection", value: "IP42; manufacturer 2 m drop rating" },
      { label: "Power", value: "2 × AAA" },
    ],
    sections: [
      {
        heading: "Why we changed the MM600 recommendation",
        body: "A recommendation should not stay frozen just because a product was popular when a spreadsheet was written. For a new purchase, current documentation and an identifiable model are useful starting points. Owners of an MM600 may have different priorities, but this shortlist is primarily for buyers choosing their next tool, so we use its manufacturer-designated successor.",
      },
      {
        heading: "Choose the safety category before the feature list",
        body: "The voltage printed on a meter and its measurement category answer different questions. Specify the environment you need to work in before deciding between meters. The category of the complete measurement setup can be limited by an accessory. Brand familiarity and a large display cannot compensate for an unsuitable instrument or damaged leads.",
      },
      {
        heading: "When the extra functions earn their place",
        body: "Our buying interpretation is that temperature and low-impedance capability are most useful when your jobs repeatedly call for them. If a separate instrument already covers temperature work, do not count that function twice when weighing value. If you seldom encounter a difficult voltage reading, portability or display preference may matter more to you.",
      },
      {
        heading: "A useful upgrade from a basic meter",
        body: "An apprentice should first establish the requirements of the employer or training program. A professional buying a replacement should list the missing capability of the old tool. That is a better reason to upgrade than a blanket assumption that every electrician needs the broadest meter. Keep specialist instruments on their own buying list.",
      },
      {
        heading: "Compare it with the two Fluke options",
        body: "The 117 is our everyday service choice; the 115 suits a simpler general measurement role. The MM720 is worth investigating when its additional category and temperature capability aligns with your jobs. These are different fits rather than a laboratory ranking. We have not carried out side-by-side response-time, lead-quality or accuracy testing.",
      },
    ],
    faqs: [
      {
        q: "Is the MM720 the replacement for the MM600?",
        a: "Klein's MM600 page identifies the MM720 as the newer model and marks the MM600 out of production.",
      },
      {
        q: "Does the MM720 have LoZ?",
        a: "Yes. Klein lists a low-impedance mode for ghost or stray voltage investigation.",
      },
      {
        q: "Is it waterproof?",
        a: "Klein specifies IP42. Choose a different protection level if the work environment requires it.",
      },
    ],
  }),
  makeReview("electricians", 3, {
    title: "Klein MM450 Review: A Slim Meter for a Smaller Service Kit",
    meta: "Klein MM450 buying advice: slim TRMS format, automatic backlighting, temperature capability, CAT III 600 V and the tradeoffs against a larger meter.",
    sourceUrl:
      "https://www.kleintools.com/catalog/multimeters/slim-digital-multimeter-trms-auto-ranging-600v-temp",
    intro:
      "The MM450 makes most sense when carrying the instrument is part of the problem you want to solve. Its slim body and reverse-contrast display distinguish it from the larger options here. It still offers True-RMS measurement and temperature capability, but its CAT III 600 V rating should be checked against the job before portability becomes the deciding factor.",
    verdict:
      "Our pocket-format choice for a light residential or building-maintenance kit. The reason to choose it is convenience, not an assumed ability to outperform a larger meter. If you need the MM720's higher documented category rating or LoZ function, prioritize that requirement instead. If the meter will always live in a large bag, the slimmer format may matter less.",
    bestFor:
      "Electricians and maintenance technicians who want a slim, easily carried meter for appropriate building-work measurements.",
    avoidIf:
      "You require higher measurement categories, specifically need LoZ, or want a connected logging instrument.",
    pros: [
      "Slim profile",
      "True-RMS AC measurement",
      "Display backlight adjusts with ambient light",
      "Temperature function and included thermocouple",
    ],
    cons: [
      "CAT III 600 V does not cover every work environment",
      "Pocket shape is not a substitute for protection in the bag",
      "Not the pick for a required LoZ function",
    ],
    specs: [
      { label: "Safety", value: "CAT III 600 V" },
      { label: "Display", value: "4,000 counts; reverse contrast" },
      { label: "Voltage", value: "Up to 600 V AC/DC" },
      { label: "Power", value: "2 × AAA" },
      { label: "Manufacturer drop rating", value: "2 m / 6.6 ft" },
    ],
    sections: [
      {
        heading: "Buy for how you carry the kit",
        body: "A tool that gets left in the vehicle has little value on a quick call. Consider where you want the meter to live and how you protect it, rather than comparing dimensions in isolation. Our interpretation is that a slimmer instrument can suit technicians carrying a smaller first-trip kit, provided the required measurement capability is still covered.",
      },
      {
        heading: "Display convenience without an accuracy claim",
        body: "Klein documents ambient-light adjustment for the backlight. We regard that as a convenience to investigate, not evidence that the display is best in every situation. Before committing to a meter for daily work, consider your preferred viewing angle and how easily you can read it in your usual position. We have not tested that here.",
      },
      {
        heading: "A secondary meter versus a main meter",
        body: "A compact backup and a primary diagnostic tool may be different purchases. For a backup, overlapping the essential capability of your main meter can be useful. For a primary meter, list the jobs it must cover independently. Do not buy on pocket size and discover later that another instrument is always needed for a common measurement.",
      },
      {
        heading: "Where the smaller format stops helping",
        body: "Some service calls need a clamp meter, an insulation tester or a tool chosen for a different category environment. Carrying a small multimeter does not remove those requirements. Keep the selection focused on role: this option belongs in a general measurement discussion, rather than being presented as a universal replacement for electrical test equipment.",
      },
      {
        heading: "MM450 or MM720?",
        body: "Choose the slim format when it is the advantage you will use every day. Investigate the MM720 when its broader documented capability is the reason for buying. If neither solves a problem with your existing kit, replacing a working meter may not be the next priority. Tool purchases should follow the jobs, not the order of a comparison table.",
      },
    ],
    faqs: [
      {
        q: "Is the MM450 True-RMS?",
        a: "Yes. Klein identifies it as an auto-ranging TRMS meter.",
      },
      {
        q: "Is the MM450 an HVAC-only meter?",
        a: "No. It includes temperature capability, but its slim general-purpose design can suit electrical and maintenance work within its rating.",
      },
      {
        q: "Can I use the test leads' rating as the meter rating?",
        a: "No. Check the instrument and complete accessory setup; a higher-rated lead does not upgrade the meter.",
      },
    ],
  }),
  makeReview("electricians", 4, {
    title: "Southwire 14090T Review: Bluetooth Records and a Rugged Housing",
    meta: "Southwire 14090T TechnicianPRO review: Bluetooth/MApp, True-RMS, Low Z, IP67 and the checks to make before choosing it for logging readings.",
    sourceUrl:
      "https://www.southwire.com/tools-equipment/test-measurement/14090t-multimeter-techpro-trms-bt/p/63018440",
    intro:
      "The Southwire 14090T is worth investigating when recording and sharing readings matters alongside normal measurement. Southwire documents Bluetooth operation with its MApp software, True-RMS, Low Z and an IP67 enclosure. Its buying case is a connected service workflow; if you only need to read a number at the equipment, those additions may not justify the extra setup.",
    verdict:
      "A research shortlist choice for technicians who want a record of measurements and a documented protected enclosure. Before buying specifically for Bluetooth, check the current app on the phone you will actually use. We have verified the manufacturer's stated features, not live app behavior, pairing reliability or compatibility with every current operating system.",
    bestFor:
      "Maintenance technicians who need to record or share readings and will check phone/app compatibility before purchase.",
    avoidIf:
      "You prefer a fully phone-independent workflow or cannot confirm that the app works on your current device.",
    pros: [
      "Manufacturer-documented Bluetooth recording and sharing",
      "True-RMS and Low Z functions",
      "IP67 enclosure rating",
      "Backlit controls and an integrated work light",
    ],
    cons: [
      "Connected workflow depends on a compatible app and phone",
      "Extra functions add setup compared with a simple meter",
      "No live pairing or software testing performed for this review",
    ],
    specs: [
      { label: "Safety", value: "CAT IV 600 V / CAT III 1000 V; UL listed" },
      { label: "Protection", value: "IP67" },
      { label: "Connected features", value: "Bluetooth with Southwire MApp" },
      { label: "AC measurement", value: "True-RMS" },
      { label: "Ghost-voltage function", value: "Low Z" },
    ],
    sections: [
      {
        heading: "Decide what the measurement record is for",
        body: "A saved number is only useful if it can be connected to the equipment and fault being investigated. Think about whether the record is for a customer report, repeat visits or internal maintenance history. Our recommendation depends on having a reason to record. Otherwise a conventional instrument and an appropriate note may be the simpler workflow.",
      },
      {
        heading: "Check the app before buying the hardware",
        body: "A manufacturer's feature description is not the same as a demonstration on your device. Look at the available app, required permissions and whether you can export the information in a useful form. For an employer-managed phone, confirm that the software can be installed. These checks should happen before connected functionality becomes the main reason to purchase.",
      },
      {
        heading: "Ruggedness is a documented rating, not our field test",
        body: "The enclosure specification is a useful comparison point, but this review does not establish long-term performance under repeated site use. Protect the instrument, inspect leads and follow its operating restrictions. We would avoid translating an ingress rating into a claim that electrical testing in wet conditions is safe; those are separate issues.",
      },
      {
        heading: "How it differs from a Fluke 117",
        body: "The buying choice is mainly about workflow. The 117 offers electrician-oriented local functions in a familiar handheld format. The Southwire adds the prospect of connected records. Choose the tool that removes a recurring obstacle rather than rewarding whichever has the longer feature list. Both still need to be selected for the actual measurement environment.",
      },
      {
        heading: "What to confirm with the seller",
        body: "Check that the listing is for the 14090T, not a nearby Southwire model with a similar case. Confirm the included accessories, seller support and current app availability. We would not promise a software workflow solely from an older product listing. If you cannot complete those checks, make the purchase on its standalone capability or choose another instrument.",
      },
    ],
    faqs: [
      {
        q: "Does the 14090T support Bluetooth?",
        a: "Southwire documents Bluetooth viewing, recording and sharing through MApp. Current device compatibility should be checked separately.",
      },
      {
        q: "Does it have a low-impedance function?",
        a: "Yes. Southwire lists Low Z alongside True-RMS.",
      },
      {
        q: "Have you tested the app or waterproofing?",
        a: "No. This is a research-based buying review of manufacturer-documented features and their fit with a technician's workflow.",
      },
    ],
  }),
];
