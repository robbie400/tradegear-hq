export type ProductFeedback = {
  productId: string;
  trade: "electricians" | "plumbers";
  brand: string;
  modelNumber: string;
  author: string;
  avatar: string;
  context: string;
  source: string;
  url: string;
  summary: string;
  match: "Exact model" | "Tool family";
  caveat: string;
  permission: "pending";
};

// Research candidates, not approved testimonials. Summaries are editorial
// paraphrases, never words attributed as a direct quotation to the reviewer.
export const productFeedback: ProductFeedback[] = [
  { productId: "fluke-117", trade: "electricians", brand: "Fluke", modelNumber: "117", author: "MJPD29", avatar: "MJ", context: "Forum member · self-described practising electrician", source: "ElectriciansForums", url: "https://www.electriciansforums.net/threads/multimeter-recommendations.196634/page-4", summary: "Describes the Fluke 117 as a meter that meets their everyday needs without an excessive outlay.", match: "Exact model", caveat: "Original post #47 and its current permalink still need confirmation; the paginated thread has moved.", permission: "pending" },
  { productId: "fluke-115", trade: "electricians", brand: "Fluke", modelNumber: "115", author: "Community member", avatar: "", context: "Owner discussion · communications and low-voltage work", source: "r/electricians", url: "https://www.reddit.com/r/electricians/comments/150tdrr/", summary: "An owner reports nearly ten years of using a Fluke 115 for communications and low-voltage work.", match: "Exact model", caveat: "Search extract only. Username and original comment permalink need confirmation.", permission: "pending" },
  { productId: "fluke-t5-600", trade: "electricians", brand: "Fluke", modelNumber: "T5-600", author: "Community member", avatar: "", context: "Owner discussion · long-term use", source: "r/askanelectrician", url: "https://www.reddit.com/r/askanelectrician/comments/w53wo3/", summary: "An owner reports using the T5-600 daily for five years.", match: "Exact model", caveat: "Search extract only. Username and original comment permalink need confirmation; occupation is not established.", permission: "pending" },
  { productId: "klein-11055", trade: "electricians", brand: "Klein Tools", modelNumber: "11055", author: "Community member", avatar: "", context: "Owner discussion · wire stripping", source: "r/Tools", url: "https://www.reddit.com/r/Tools/comments/1e55gkh/", summary: "An owner strongly prefers the 11055 and reports owning three pairs, while also noting loose grips and a latch that can snag.", match: "Exact model", caveat: "Search extract only. Username and original comment permalink need confirmation.", permission: "pending" },
  { productId: "milwaukee-2505-20", trade: "electricians", brand: "Milwaukee", modelNumber: "2505-20", author: "Community member", avatar: "", context: "Owner discussion · tight spaces and cabinet installation", source: "r/MilwaukeeTool", url: "https://www.reddit.com/r/MilwaukeeTool/comments/1w1r6yv/been_eyeing_an_installation_driver_for_a_while/", summary: "An owner describes the installation driver as their regular choice for tight spaces and cabinet installation.", match: "Tool family", caveat: "The discussion concerns a kit. This page lists the bare tool; exact package and commenter identity need confirmation.", permission: "pending" },
  { productId: "klein-et310", trade: "electricians", brand: "Klein Tools", modelNumber: "ET310", author: "Tony Carrick", avatar: "TC", context: "Published hands-on assessment · editorial tester", source: "Bob Vila", url: "https://www.bobvila.com/articles/klein-et310-circuit-breaker-finder-review/", summary: "Carrick describes hands-on outlet-to-breaker testing and straightforward operation, with limits on supported circuits and a prescan step.", match: "Exact model", caveat: "A publisher's test assessment, not an owner testimonial or verified electrician endorsement. Full source and reuse permission need confirmation.", permission: "pending" },
  { productId: "fluke-323", trade: "electricians", brand: "Fluke", modelNumber: "323", author: "McGowan", avatar: "MC", context: "Manufacturer-hosted customer feedback · electrician school", source: "Fluke", url: "https://www.fluke.com/en/product/electrical-testing/clamp-meters/fluke-323?bvrrp=6594-en_US%2Freviews%2Fproduct%2F2%2F1627862892596.htm", summary: "The reviewer describes buying this meter for electrician school, offering a student-use perspective.", match: "Exact model", caveat: "Search extract only. Original review needs confirmation; this does not establish a professional qualification.", permission: "pending" },
  { productId: "knipex-8701250", trade: "plumbers", brand: "KNIPEX", modelNumber: "87 01 250", author: "u/Negative-Flounder-73", avatar: "NF", context: "Community member · self-described plumbing worker", source: "r/Tools", url: "https://www.reddit.com/r/Tools/comments/1vfzsdj/water_pump_pliers_whats_your_favorite_brand/", summary: "Reports daily use of Cobra pliers at work and values the push-button adjustment.", match: "Tool family", caveat: "Cobra-family feedback. The exact 250 mm size and handle variant are not established by this comment.", permission: "pending" },
  { productId: "knipex-8603250", trade: "plumbers", brand: "KNIPEX", modelNumber: "86 03 250", author: "u/justabigdummy9", avatar: "JD", context: "Community member · self-described maintenance worker", source: "r/KnipexOfficial", url: "https://www.reddit.com/r/KnipexOfficial/comments/1tx4i70/some_one_convince_me_these_would_be_nice_to_have/", summary: "Replaced a similarly sized adjustable wrench with the 86 03 250 and also uses it for gripping and straightening damaged metal. Notes that it is not the right tool for every situation.", match: "Exact model", caveat: "Maintenance experience, not a confirmed plumber qualification. Other contributors raise access and bulk concerns.", permission: "pending" },
  { productId: "knipex-8801250", trade: "plumbers", brand: "KNIPEX", modelNumber: "88 01 250", author: "u/Beer_Is_So_Awesome", avatar: "BA", context: "Community member · comparative owner feedback", source: "r/Tools", url: "https://www.reddit.com/r/Tools/comments/1vfzsdj/water_pump_pliers_whats_your_favorite_brand/", summary: "Describes Alligator pliers as a considerable improvement over earlier groove-joint pliers, while preferring Cobra's adjustment and jaw capacity.", match: "Tool family", caveat: "Alligator-family feedback; size and handle variant are not established. Occupation is unknown.", permission: "pending" },
  { productId: "knipex-903102", trade: "plumbers", brand: "KNIPEX", modelNumber: "90 31 02", author: "Community member", avatar: "", context: "Thread author · self-described plumber", source: "r/Tools", url: "https://www.reddit.com/r/Tools/comments/1ejut8l/", summary: "Describes using TubiX cutters on copper and brass tubing and finding their positioning mechanism easier than another quick-adjust cutter.", match: "Tool family", caveat: "Several TubiX sizes appear in the thread. Exact 90 31 02 model, username and original comment need confirmation.", permission: "pending" },
  { productId: "milwaukee-2771-20", trade: "plumbers", brand: "Milwaukee", modelNumber: "2771-20", author: "Scott Strollo", avatar: "SS", context: "Published hands-on review · service plumber per author biography", source: "Pro Tool Reviews", url: "https://www.protoolreviews.com/milwaukee-m18-transfer-pump-review/", summary: "Strollo's hands-on review highlights cordless convenience, self-priming and simple operation when moving water.", match: "Exact model", caveat: "Published in January 2017, covering the bare pump and a kit. Follow current manufacturer instructions for permitted liquids; historical pricing and applications are not current guidance.", permission: "pending" },
  { productId: "ridgid-k6p", trade: "plumbers", brand: "RIDGID", modelNumber: "K-6P", author: "Persistent", avatar: "P", context: "Retailer-hosted customer feedback · homeowner", source: "SupplyHouse", url: "https://www.supplyhouse.com/Ridgid-56658-RIDGID-K-6P-Toilet-Auger-w-Bulb-Head", summary: "Describes clearing a blockage with the K-6P after plunging had not resolved it.", match: "Exact model", caveat: "Search extract only. Original review needs confirmation. A homeowner's experience does not guarantee the same result on another blockage.", permission: "pending" },
];

export function getProductFeedback(trade: string, brand: string, model: string, productId?: string) {
  const id = productId?.replace(/-review$/, "");
  return productFeedback.find((entry) => entry.trade === trade && entry.brand === brand &&
    (entry.productId === id || model === entry.modelNumber || model.startsWith(`${entry.modelNumber} `)));
}

// Fail closed: pending entries cannot render in a production build, even if
// someone accidentally merges the preview branch. No ratings/schema added.
export function showFeedbackDrafts() {
  return process.env.VERCEL_ENV === "preview" ||
    (process.env.NODE_ENV === "development" && process.env.VERCEL_ENV !== "production");
}
