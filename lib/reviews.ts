import {hvacCatalogReviews} from "./hvac-catalog";
import {plumberCatalogReviews} from './plumber-catalog';
import {electricianCatalogReviews} from "./electrician-catalog";
import { guides } from "./data";
import { electricianReviews } from "./reviews-electricians";
import { plumberReviews } from "./reviews-plumbers";
import { hvacReviews } from "./reviews-hvac";
import { inspectorReviews } from "./reviews-inspectors";
export type ReviewSection = { heading: string; body: string };
export type ProductReview = {
  slug: string;
  trade: string;
  tradeName: string;
  guideSlug: string;
  guideTitle: string;
  brand: string;
  model: string;
  title: string;
  meta: string;
  role: string;
  amazonUrl: string;
  sourceUrl: string;
  intro: string;
  verdict: string;
  bestFor: string;
  avoidIf: string;
  pros: string[];
  cons: string[];
  specs: { label: string; value: string }[];
  sections: ReviewSection[];
  faqs: { q: string; a: string }[];
  sourceNote?: string;
  extraSources?: { label: string; url: string }[];
};

const initialReviews: ProductReview[] = [
  {
    slug: "fluke-117-review",
    trade: "electricians",
    tradeName: "Electricians",
    guideSlug: "best-multimeters-for-electricians",
    guideTitle: "Best Multimeters for Electricians",
    brand: "Fluke",
    model: "117 Electrician's Multimeter",
    title: "Fluke 117 Review: Is It the Right Multimeter for Electricians?",
    meta: "A practical review of the Fluke 117 for US electricians, covering True-RMS measurement, non-contact voltage detection, LoZ, safety rating, workflow and tradeoffs.",
    role: "Best Overall",
    amazonUrl:
      "https://www.amazon.com/dp/B000O3LUEI/ref=nosim?tag=robbieom0e-20",
    sourceUrl:
      "https://www.fluke.com/en/product/electrical-testing/digital-multimeters/fluke-117",
    intro:
      "The Fluke 117 is aimed squarely at electricians who want a compact everyday meter for commercial and residential troubleshooting. Its standout combination is True-RMS measurement, built-in non-contact voltage detection, AutoVolt AC/DC selection and a low-impedance LoZ mode designed to reduce misleading ghost-voltage readings.",
    verdict:
      "For an electrician who wants one dependable meter for day-to-day voltage, continuity, resistance, current, capacitance and frequency checks, the Fluke 117 is a very strong all-rounder. It is not the cheapest option, and it does not replace specialist insulation testers, clamp meters or high-end industrial meters, but its safety rating, compact size and electrician-focused features make it an easy recommendation for regular field work.",
    bestFor:
      "Commercial and residential electricians who want a compact True-RMS meter with built-in non-contact voltage detection and LoZ.",
    avoidIf:
      "You mainly need a basic budget meter, need 1000 V CAT-rated industrial capability, or want specialist functions such as insulation-resistance testing.",
    pros: [
      "Integrated non-contact voltage detection",
      "True-RMS AC measurement",
      "LoZ helps suppress ghost-voltage readings",
      "CAT III 600 V safety rating",
      "Compact one-handed format with backlit display",
    ],
    cons: [
      "Costs more than entry-level meters",
      "600 V maximum is enough for most building work but not every industrial application",
      "No built-in clamp for current measurement",
    ],
    specs: [
      { label: "Maximum voltage", value: "600 V" },
      { label: "Safety", value: "CAT III 600 V" },
      { label: "Display", value: "6,000 counts" },
      { label: "AC measurement", value: "True-RMS" },
      { label: "Battery", value: "9 V alkaline" },
      {
        label: "Typical battery life",
        value: "About 400 hours without backlight",
      },
      { label: "Weight", value: "550 g / 1.2 lb" },
      { label: "Warranty", value: "3 years" },
    ],
    sections: [
      {
        heading: "What makes the Fluke 117 electrician-focused?",
        body: "The 117 is not just a generic multimeter with a different label. Fluke combines its integrated VoltAlert non-contact voltage detection with AutoVolt AC/DC selection and LoZ low-input-impedance measurement. In practical troubleshooting, that means you can screen for energized conductors quickly, then switch to a contact measurement while reducing the chance that capacitive coupling creates a misleading voltage reading.",
      },
      {
        heading: "Measurement capability",
        body: "The meter covers the measurements most electricians use regularly: AC/DC voltage, AC/DC current, resistance, continuity, frequency and capacitance. Min/Max/Average recording is useful when a problem is intermittent. The 6,000-count display and True-RMS AC measurement make it suitable for modern electrical loads where waveforms are not always perfectly sinusoidal.",
      },
      {
        heading: "Safety and durability",
        body: "Fluke rates the 117 to CAT III 600 V under IEC 61010 standards. That rating is appropriate for a large amount of building-distribution and fixed-installation work. As with any meter, the correct leads, safe work procedure and category rating matter more than the brand name alone.",
      },
      {
        heading: "Who should buy it?",
        body: "The strongest fit is an electrician who wants a reliable primary handheld meter rather than the cheapest possible option. It makes particular sense for service work, commercial buildings, residential diagnostics and maintenance where fast voltage checks and ghost-voltage rejection matter.",
      },
      {
        heading: "Where does it fall short?",
        body: "The 117 is not a clamp meter, insulation tester or advanced industrial logging meter. If your work regularly involves higher-voltage industrial systems or you need specialized functions, you may need another instrument alongside it. The purchase price is also higher than many competent entry-level meters.",
      },
    ],
    faqs: [
      {
        q: "Is the Fluke 117 True-RMS?",
        a: "Yes. Fluke specifies True-RMS AC voltage and current measurement.",
      },
      {
        q: "Does the Fluke 117 have non-contact voltage detection?",
        a: "Yes. Integrated VoltAlert non-contact voltage detection is one of the features that differentiates the 117 from the general-purpose Fluke 115.",
      },
      {
        q: "What is LoZ used for?",
        a: "LoZ lowers the meter input impedance so induced or capacitively coupled ghost voltages are less likely to appear as a meaningful energized reading.",
      },
      {
        q: "Is the Fluke 117 suitable for residential electricians?",
        a: "Yes. Its feature set is particularly well aligned with residential and commercial electrical troubleshooting, provided the CAT III 600 V rating is appropriate for the task.",
      },
    ],
  },
  {
    slug: "ridgid-micro-ca25-review",
    trade: "plumbers",
    tradeName: "Plumbers",
    guideSlug: "best-inspection-cameras-for-plumbers",
    guideTitle: "Best Inspection Cameras for Plumbers",
    brand: "RIDGID",
    model: "micro CA-25 Handheld Inspection Camera",
    title: "RIDGID micro CA-25 Review for Plumbers",
    meta: "A plumber-focused review of the RIDGID micro CA-25 inspection camera, including its 4-foot fixed cable, 17 mm camera head, waterproofing, screen and real-world limitations.",
    role: "Best Overall",
    amazonUrl:
      "https://www.amazon.com/s?k=RIDGID+micro+CA-25+Handheld+Inspection+Camera&tag=robbieom0e-20",
    sourceUrl:
      "https://www.ridgid.com/hn/en/micro-ca25-digital-inspection-camera",
    intro:
      "The RIDGID micro CA-25 is a straightforward handheld inspection camera designed for short-range visual checks in places you cannot easily see. It uses a fixed 4-foot cable with a 17 mm waterproof camera head, adjustable LEDs and a built-in 2.7-inch color screen, so there is no phone pairing or separate display to set up on a service call.",
    verdict:
      "For plumbers who want a rugged, simple camera for looking behind fixtures, inside wall cavities, under appliances or into short accessible pipe runs, the CA-25 is easy to understand and quick to deploy. Its biggest limitation is equally clear: the 4-foot cable is fixed and not extendable, so this is not a drain-line inspection system for long runs.",
    bestFor:
      "Service plumbers who need fast, short-range visual inspection without relying on a phone or app.",
    avoidIf:
      "You need long drain-line reach, recording to internal storage, a very small probe head, or interchangeable/extendable camera cables.",
    pros: [
      "Self-contained 2.7-inch color screen",
      "Simple controls with no app pairing",
      "Waterproof camera head and cable to 4 feet",
      "Adjustable LEDs for dark cavities",
      "Includes hook, magnet, mirror and protective case",
    ],
    cons: [
      "Fixed 4-foot cable is not extendable",
      "17 mm camera head is larger than many modern borescopes",
      "View-only design is less sophisticated than recording/app-based cameras",
    ],
    specs: [
      { label: "Display", value: "2.7-inch color LCD, 320 × 240" },
      { label: "Camera head", value: "17 mm aluminum" },
      { label: "Cable reach", value: "4 ft / 1.2 m, fixed" },
      { label: "Lighting", value: "4 adjustable LEDs" },
      {
        label: "Waterproofing",
        value: "Camera head and cable waterproof to 4 ft",
      },
      { label: "Image rotation", value: "180°" },
      { label: "Power", value: "4 × AA batteries" },
      { label: "Included accessories", value: "Mirror, hook, magnet, case" },
    ],
    sections: [
      {
        heading: "Why it suits plumbing service work",
        body: "The appeal of the CA-25 is speed. Pull it from the case, switch it on and feed the camera into the area you need to inspect. There is no Wi-Fi network to join and no phone app to configure. That makes it useful for quick diagnostic work where the goal is simply to answer a question such as whether a fitting is leaking behind a panel or what is obstructing a tight cavity.",
      },
      {
        heading: "Camera and reach",
        body: "RIDGID uses a 17 mm camera head on a fixed 4-foot flexible cable. The head includes four adjustable LEDs, and the camera/cable assembly is waterproof to the full 4-foot reach. The size is fine for many service-access situations, but it is much larger than the tiny probes used by some electronics-focused borescopes.",
      },
      {
        heading: "Screen and controls",
        body: "The built-in 2.7-inch 320 × 240 color LCD is modest by current consumer-electronics standards, but it keeps the tool self-contained. Image rotation helps when the probe enters a cavity at an awkward angle, and RCA video output is available if you need to feed a live image to another display.",
      },
      {
        heading: "The key limitation",
        body: "The cable does not extend beyond four feet. That makes the CA-25 a handheld inspection camera, not a sewer or drain camera. Plumbers who need to inspect longer pipe runs should move to a dedicated push-camera or a system with interchangeable longer probes.",
      },
      {
        heading: "Who should buy it?",
        body: "It makes sense for service plumbers, HVAC technicians and maintenance professionals who value a robust self-contained tool for close inspection. If your work is mostly long drain lines, this is the wrong category of camera altogether.",
      },
    ],
    faqs: [
      {
        q: "Can the RIDGID micro CA-25 cable be extended?",
        a: "No. RIDGID specifies a fixed 4-foot cable that is not extendable.",
      },
      {
        q: "Is the camera waterproof?",
        a: "The camera head and cable are waterproof to the 4-foot cable reach. The handheld monitor itself should not be treated as submersible.",
      },
      {
        q: "Does it record video?",
        a: "The CA-25 is primarily a view-only monitor. It does provide video output, but it is not designed like a modern internal-storage recording borescope.",
      },
      {
        q: "Is it suitable for sewer-line inspection?",
        a: "Not for meaningful long runs. Its short fixed cable makes it better for localized service inspection than drain-line surveying.",
      },
    ],
  },
  {
    slug: "fieldpiece-sm480v-review",
    trade: "hvac",
    tradeName: "HVAC Technicians",
    guideSlug: "best-digital-manifolds-for-hvac",
    guideTitle: "Best Digital Manifolds for HVAC",
    brand: "Fieldpiece",
    model: "SM480V SMAN 4-Port Digital Manifold",
    title: "Fieldpiece SM480V Review: Digital Manifold for HVAC Techs",
    meta: "A detailed review of the Fieldpiece SM480V SMAN 4-port digital manifold, covering Job Link wireless integration, data logging, tightness testing, ruggedness and field workflow.",
    role: "Best Overall",
    amazonUrl:
      "https://www.amazon.com/s?k=Fieldpiece+SM480V+SMAN+Digital+Manifold&tag=robbieom0e-20",
    sourceUrl:
      "https://resources.fieldpiece.com/wp-content/uploads/2025/10/Opman-SM480V-v26.pdf",
    intro:
      "SM480V is an older-generation model; Fieldpiece currently lists SM482V and SM382V for new-purchase comparison. The Fieldpiece SM480V is a professional 4-port digital refrigerant manifold built for technicians who want pressure, temperature, vacuum and system calculations in one field-ready platform. It combines a large LCD, IP54-rated construction, data logging and direct wireless integration with Fieldpiece's Job Link ecosystem.",
    verdict:
      "The SM480V is one of the strongest choices for HVAC technicians who already work digitally and want a manifold that can become the center of a broader measurement workflow. Its 4-port layout, wireless range, data logging and temperature-compensated tightness testing make it substantially more capable than a basic digital gauge set, although that capability comes with extra size, cost and complexity.",
    bestFor:
      "Working HVAC/R technicians who want a rugged 4-port manifold with wireless Job Link integration and detailed commissioning/service data.",
    avoidIf:
      "You prefer simple analog gauges, rarely use app-based documentation, or want the lightest and least expensive digital manifold possible.",
    pros: [
      "4-port manifold with integrated micron-gauge workflow",
      "Up to 1,000 ft line-of-sight wireless range",
      "Job Link app integration and reporting",
      "Data logging and temperature-compensated tightness test",
      "IP54 water resistance and rugged overmold construction",
    ],
    cons: [
      "More expensive and bulkier than basic 2-port digital manifolds",
      "Advanced functions take time to learn",
      "Full benefit is greatest when used with the wider Fieldpiece Job Link ecosystem",
    ],
    specs: [
      { label: "Manifold", value: "4-port" },
      { label: "Display", value: "Large LCD" },
      { label: "Maximum manifold pressure", value: "800 psig" },
      { label: "Wireless range", value: "Up to 1,000 ft line of sight" },
      { label: "Water resistance", value: "IP54" },
      { label: "Battery", value: "6 × AA alkaline" },
      {
        label: "Typical battery life",
        value: "About 350 hours without vacuum/backlight/wireless",
      },
      { label: "Weight", value: "4.03 lb / 1.83 kg" },
    ],
    sections: [
      {
        heading: "A manifold built around a digital workflow",
        body: "Fieldpiece designed the SM480V to do more than replace analog needles with numbers. It can display and log system measurements, work with wired thermocouples, exchange readings with compatible wireless Job Link probes and support reporting from the Job Link app. For technicians documenting commissioning or service work, that connectivity is a major part of the value.",
      },
      {
        heading: "4-port layout and field use",
        body: "The four-port design is useful when evacuation and charging workflow matters because it gives the technician a dedicated vacuum path rather than forcing every job through a simpler 2-port arrangement. The rugged overmold, reinforced hook, impact-resistant screen and hermetically sealed sight glass are all aimed at daily service use rather than bench work.",
      },
      {
        heading: "Wireless and documentation",
        body: "Fieldpiece specifies up to 1,000 feet of line-of-sight wireless range. In practice, building materials reduce range, but the system lets a technician step away from equipment while continuing to monitor compatible measurements. The Job Link app can also be used to document readings and create professional reports.",
      },
      {
        heading: "Tightness testing and data logging",
        body: "The SM480V includes a temperature-compensated system tightness test and onboard data logging. Those features are especially useful for technicians who want a repeatable record instead of relying on a snapshot of pressure at one moment.",
      },
      {
        heading: "Who should buy it?",
        body: "The ideal buyer is a professional HVAC/R technician who uses digital measurement every day and values workflow, documentation and integration. If you only need basic pressure readings a few times a month, the SM480V is more tool than you need.",
      },
    ],
    faqs: [
      {
        q: "Is the Fieldpiece SM480V a 4-port manifold?",
        a: "Yes. It is Fieldpiece's 4-port SMAN digital manifold.",
      },
      {
        q: "Does the SM480V connect to the Job Link app?",
        a: "Yes. It sends and receives wireless readings and integrates with Fieldpiece's Job Link System app.",
      },
      {
        q: "How far is the wireless range?",
        a: "Fieldpiece specifies up to 1,000 feet line of sight; real-world range will fall with walls and other obstructions.",
      },
      {
        q: "Is it water resistant?",
        a: "Yes. Fieldpiece describes the SM480V as IP54 water resistant.",
      },
    ],
  },
  {
    slug: "flir-c5-review",
    trade: "home-inspectors",
    tradeName: "Home Inspectors",
    guideSlug: "best-thermal-cameras-for-home-inspectors",
    guideTitle: "Best Thermal Cameras for Home Inspectors",
    brand: "FLIR",
    model: "C5 Compact Thermal Camera",
    title: "FLIR C5 Review for Home Inspectors",
    meta: "A home-inspector-focused review of the FLIR C5, covering 160 × 120 thermal resolution, MSX, 5 MP visual camera, cloud workflow, durability and limitations.",
    role: "Best Overall",
    amazonUrl:
      "https://www.amazon.com/s?k=FLIR+C5+Compact+Thermal+Imaging+Camera&tag=robbieom0e-20",
    sourceUrl: "https://www.flir.com/products/c5",
    intro:
      "The FLIR C5 is a pocket-size thermal camera built for professionals who need to find and document temperature anomalies quickly. For home inspectors, its useful combination is a 160 × 120 radiometric thermal sensor, FLIR MSX image enhancement, a 5 MP visual camera, LED light, touchscreen and built-in Wi-Fi/cloud workflow.",
    verdict:
      "The C5 is a strong professional inspection camera when documentation matters almost as much as finding the anomaly. Its thermal resolution is not high-end by specialist thermography standards, but MSX, a visual camera, cloud connectivity, compact size and rugged IP54/2 m drop design make it practical for routine building inspections. Buyers who need maximum thermal detail should step up to a higher-resolution camera; buyers who only need occasional spot checks may be able to spend less.",
    bestFor:
      "Home inspectors and building professionals who want a compact radiometric thermal camera with easy image documentation and reporting workflow.",
    avoidIf:
      "You need high-resolution thermography for detailed analysis, interchangeable lenses, or the lowest-cost way to add basic thermal capability.",
    pros: [
      "160 × 120 true thermal sensor",
      "MSX adds visible detail to thermal imagery",
      "5 MP visual camera plus LED flashlight",
      "Wi-Fi and FLIR Ignite cloud workflow",
      "IP54 enclosure and 2 m drop rating",
      "Pocket-friendly form factor",
    ],
    cons: [
      "160 × 120 is modest compared with higher-end thermal cameras",
      "Fixed-focus compact platform limits advanced thermography flexibility",
      "Professional price is harder to justify for occasional use",
    ],
    specs: [
      { label: "IR resolution", value: "160 × 120 (19,200 pixels)" },
      { label: "Visual camera", value: "5 MP" },
      { label: "Temperature range", value: "-20 to 400°C / -4 to 752°F" },
      { label: "Thermal sensitivity", value: "<70 mK" },
      { label: "Image modes", value: "IR, visual, MSX, picture-in-picture" },
      { label: "Protection", value: "IP54" },
      { label: "Drop test", value: "2 m / 6.6 ft" },
      { label: "Battery life", value: "About 4 hours" },
    ],
    sections: [
      {
        heading: "Why the C5 works well for home inspections",
        body: "Home inspection is not only about spotting a temperature difference; the inspector also has to explain and document what was found. The C5's combination of radiometric thermal data, a 5 MP visual camera and FLIR's MSX enhancement makes images easier to interpret later than a basic low-cost thermal attachment that only shows a heat map.",
      },
      {
        heading: "Thermal image quality",
        body: "The C5 uses a 160 × 120 detector, giving 19,200 thermal measurement pixels. That is enough for many building-diagnostic tasks such as spotting insulation anomalies, moisture patterns, HVAC distribution differences and overheating components, but it is not comparable with higher-resolution professional cameras used for demanding thermography.",
      },
      {
        heading: "MSX and visual context",
        body: "MSX overlays visible-scene edge detail onto the thermal image. That does not increase the thermal detector resolution, but it can make a report image easier to understand because outlines, labels and physical features remain recognizable.",
      },
      {
        heading: "Documentation workflow",
        body: "The camera can store more than 5,000 images, uses standard JPEG files containing measurement data, and includes Wi-Fi connectivity to FLIR Ignite. For inspectors producing client reports, that workflow can save time compared with manually transferring and matching separate visual and thermal images.",
      },
      {
        heading: "Durability and portability",
        body: "FLIR rates the C5 housing to IP54 and a 2 m drop. The body is small enough to be carried in a pocket, which matters on inspections where a tool left in the vehicle is a tool that does not get used.",
      },
    ],
    faqs: [
      {
        q: "What is the thermal resolution of the FLIR C5?",
        a: "The C5 has a 160 × 120 thermal detector, equal to 19,200 thermal pixels.",
      },
      {
        q: "Does the FLIR C5 save radiometric data?",
        a: "Yes. FLIR states that standard JPEG files contain 14-bit measurement data.",
      },
      {
        q: "What temperature range does it measure?",
        a: "FLIR specifies an object temperature range of -20 to 400°C (-4 to 752°F).",
      },
      {
        q: "Is 160 × 120 enough for a home inspector?",
        a: "For many routine building-diagnostic tasks it can be, especially with MSX and good inspection technique. Inspectors who need finer detail or more advanced thermography may benefit from a higher-resolution camera.",
      },
    ],
  },
];

export const reviews: ProductReview[] = [
  ...initialReviews,
  ...electricianReviews,
  ...electricianCatalogReviews,
  ...plumberReviews,
  ...plumberCatalogReviews,
  ...hvacReviews,
  ...hvacCatalogReviews,
  ...inspectorReviews,
];
for (const review of reviews) {
  const product = guides
    .find((g) => g.trade === review.trade && g.slug === review.guideSlug)
    ?.products.find((p) => p.reviewSlug === review.slug);
  if (product) {
    review.role = product.role;
    review.model = product.model;
    review.amazonUrl = product.url;
  }
}
export function getReview(slug: string) {
  return reviews.find((r) => r.slug === slug);
}
