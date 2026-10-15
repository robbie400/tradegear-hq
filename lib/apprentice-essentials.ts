/** Approved first batch only. No prices or customer ratings imported. */
export type TradeSlug = 'electricians' | 'plumbers' | 'hvac' | 'carpenters' | 'home-inspectors';
export type ApprenticeEssential = {
  id: string;
  familyId: string;
  brand: string;
  model: string;
  name: string;
  trades: readonly TradeSlug[];
  aliases: readonly string[];
  advice: string;
  manufacturerUrl: string;
  imageStatus: 'awaiting-permission' | 'permission-established' | 'publisher-directed-permission-unconfirmed';
  image?: {src: string; alt: string; sourceUrl: string; rightsBasis?: string; rightsNote?: string};
  amazon: {
    asin: string;
    url: string;
    status: 'matched' | 'model-mismatch';
    checkedAt: string;
    verificationNote: string;
  };
};
export const apprenticeEssentials: readonly ApprenticeEssential[] = [
  {
    "id": "klein-935rb",
    "familyId": "magnetic-torpedo-level",
    "brand": "Klein Tools",
    "model": "935RB",
    "name": "8-inch magnetic torpedo level",
    "trades": [
      "electricians",
      "plumbers",
      "hvac"
    ],
    "aliases": [
      "pocket level",
      "spirit level",
      "conduit level"
    ],
    "advice": "Four angle vials, rare-earth magnets and a V-groove suit conduit and pipe layout. Use it for short runs and local alignment; it does not replace a longer level for broad surfaces.",
    "manufacturerUrl": "https://www.kleintools.com/catalog/level-measuring-tools/torpedo-billet-level-rare-earth-magnet",
    "imageStatus": "publisher-directed-permission-unconfirmed",
    "image": {
      "src": "https://media.kleintools.io/images/original/klein/935rb_c.jpg",
      "alt": "Klein Tools 935RB product photograph",
      "sourceUrl": "https://www.kleintools.com/catalog/level-measuring-tools/torpedo-billet-level-rare-earth-magnet",
      "rightsNote": "Publisher requested display of this manufacturer photograph on 2026-10-15 without waiting for permission. Manufacturer reuse permission remains unconfirmed; no licence is asserted."
},
    "amazon": {
      "asin": "B01MF9N8FE",
      "url": "https://www.amazon.com/dp/B01MF9N8FE?tag=robbieom0e-20",
      "status": "matched",
      "checkedAt": "2026-10-15",
      "verificationNote": "Exact model and package checked on Amazon.com; price and availability are not published."
    }
  },
  {
    "id": "crescent-ac210vs",
    "familyId": "adjustable-wrench",
    "brand": "Crescent",
    "model": "AC210VS",
    "name": "10-inch adjustable wrench",
    "trades": [
      "electricians",
      "plumbers",
      "hvac"
    ],
    "aliases": [
      "crescent wrench",
      "spanner"
    ],
    "advice": "The 10-inch wrench has a documented 1-5/16-inch jaw opening and SAE/metric scales. Check the length required by the employer list and adjust the jaw closely to the fastener before use.",
    "manufacturerUrl": "https://www.crescenttool.com/all-tools/wrenches-pliers-drivers/adjustable-wrenches/ac210vs-10-adjustable-wrench-carded",
    "imageStatus": "publisher-directed-permission-unconfirmed",
    "image": {
      "src": "https://www.crescenttool.com/sites/crescenttool/files/styles/large/public/pim_images/CRS_AC210VS_IMG-MAIN.jpg?itok=LQ9MsHSH",
      "alt": "Crescent AC210VS product photograph",
      "sourceUrl": "https://www.crescenttool.com/all-tools/wrenches-pliers-drivers/adjustable-wrenches/ac210vs-10-adjustable-wrench-carded",
      "rightsNote": "Publisher requested display of this manufacturer photograph on 2026-10-15 without waiting for permission. Manufacturer reuse permission remains unconfirmed; no licence is asserted."
},
    "amazon": {
      "asin": "B00002N5L1",
      "url": "https://www.amazon.com/dp/B00002N5L1?tag=robbieom0e-20",
      "status": "matched",
      "checkedAt": "2026-10-15",
      "verificationNote": "Exact model and package checked on Amazon.com; price and availability are not published."
    }
  },
  {
    "id": "dewalt-dpg94-1c",
    "familyId": "safety-glasses",
    "brand": "DEWALT",
    "model": "DPG94-1C",
    "name": "Dominator clear-lens safety glasses",
    "trades": [
      "electricians",
      "plumbers",
      "hvac",
      "carpenters",
      "home-inspectors"
    ],
    "aliases": [
      "PPE",
      "eye protection",
      "protective eyewear"
    ],
    "advice": "Radians documents clear lenses, a full frame and Z87.1+ impact protection for this variant. Check fit and the worksite eyewear requirement; tinted or mirrored variants are separate choices.",
    "manufacturerUrl": "https://www.radians.com/products/composite-dewalt-dpg94-dominator-hardware-protective-eyewear",
    "imageStatus": "publisher-directed-permission-unconfirmed",
    "image": {
      "src": "https://images.salsify.com/image/upload/s--uyDGQdrW--/w_636%2Cq_65/fl_attachment/ptebxxssjo5waazzk36i.jpg",
      "alt": "DEWALT DPG94-1C product photograph",
      "sourceUrl": "https://www.radians.com/products/composite-dewalt-dpg94-dominator-hardware-protective-eyewear",
      "rightsNote": "Publisher requested display of this manufacturer photograph on 2026-10-15 without waiting for permission. Manufacturer reuse permission remains unconfirmed; no licence is asserted."
},
    "amazon": {
      "asin": "B002IVTX8E",
      "url": "https://www.amazon.com/dp/B002IVTX8E?tag=robbieom0e-20",
      "status": "model-mismatch",
      "checkedAt": "2026-10-15",
      "verificationNote": "The approved ASIN currently identifies DPG94-1D / DPG94-1D-CLEAR, not DPG94-1C. Purchase link withheld pending exact-model confirmation."
    }
  },
  {
    "id": "bucket-boss-50200",
    "familyId": "carpenter-tool-belt",
    "brand": "Bucket Boss",
    "model": "50200",
    "name": "Builder’s two-bag tool belt",
    "trades": [
      "carpenters"
    ],
    "aliases": [
      "nail apron",
      "tool pouch",
      "carpenter belt"
    ],
    "advice": "Two large pouches and adjustable positioning provide a straightforward starting belt. Check waist fit and whether the layout holds the employer-required tools; suspenders are a separate purchase.",
    "manufacturerUrl": "https://bucketboss.com/products/builders-tool-belt",
    "imageStatus": "publisher-directed-permission-unconfirmed",
    "image": {
      "src": "https://bucketboss.com/cdn/shop/files/50200_1.jpg?v=1683123724&width=1080",
      "alt": "Bucket Boss 50200 product photograph",
      "sourceUrl": "https://bucketboss.com/products/builders-tool-belt",
      "rightsNote": "Publisher requested display of this manufacturer photograph on 2026-10-15 without waiting for permission. Manufacturer reuse permission remains unconfirmed; no licence is asserted."
},
    "amazon": {
      "asin": "B00GK4TZ2E",
      "url": "https://www.amazon.com/dp/B00GK4TZ2E?tag=robbieom0e-20",
      "status": "matched",
      "checkedAt": "2026-10-15",
      "verificationNote": "Exact model and package checked on Amazon.com; price and availability are not published."
    }
  },
  {
    "id": "pica-3030",
    "familyId": "marking-pencil",
    "brand": "Pica",
    "model": "3030",
    "name": "Pica-Dry refillable construction pencil",
    "trades": [
      "carpenters",
      "electricians"
    ],
    "aliases": [
      "carpenter pencil",
      "marking pencil",
      "deep hole marker"
    ],
    "advice": "The refillable 2.8 mm marker has a clip holster and integrated sharpener. It suits marking through recesses and on varied materials; choose the lead for the surface and distinguish pencil-only from refill bundles.",
    "manufacturerUrl": "https://pica-marker.com/en/heroes/pica-dry-marker/",
    "imageStatus": "permission-established",
    "image": {
      "src": "/images/essentials/pica-3030.webp",
      "alt": "Pica 3030 Pica-Dry pencil shown in its green holster and out of the holster",
      "sourceUrl": "https://pica-marker.com/wp-content/uploads/2026/06/3030_Dry.zip",
      "rightsBasis": "Pica official downloads page explicitly states all data packages can be used for both web and print. 3030_Dry_Hero-1_Open_Closed.png from the model-specific data pack; checked 2026-10-15. https://pica-marker.com/en/downloads/"
    },
    "amazon": {
      "asin": "B002X7Y90U",
      "url": "https://www.amazon.com/dp/B002X7Y90U?tag=robbieom0e-20",
      "status": "matched",
      "checkedAt": "2026-10-15",
      "verificationNote": "Exact model and package checked on Amazon.com; price and availability are not published."
    }
  },
  {
    "id": "klein-31430",
    "familyId": "hacksaw",
    "brand": "Klein Tools",
    "model": "31430",
    "name": "12-inch high-tension hacksaw",
    "trades": [
      "electricians",
      "plumbers"
    ],
    "aliases": [
      "metal saw",
      "manual saw",
      "hand saw"
    ],
    "advice": "The current frame includes 12-inch and 6-inch bi-metal blades and supports tool-free jab-saw conversion. It covers common manual cutting needs without buying a power saw; confirm the blade suits the material.",
    "manufacturerUrl": "https://www.kleintools.com/catalog/hand-saws/high-tension-hacksaw-0",
    "imageStatus": "publisher-directed-permission-unconfirmed",
    "image": {
      "src": "https://media.kleintools.io/images/original/klein/31430.jpg",
      "alt": "Klein Tools 31430 product photograph",
      "sourceUrl": "https://www.kleintools.com/catalog/hand-saws/high-tension-hacksaw-0",
      "rightsNote": "Publisher requested display of this manufacturer photograph on 2026-10-15 without waiting for permission. Manufacturer reuse permission remains unconfirmed; no licence is asserted."
},
    "amazon": {
      "asin": "B0F1Z2RS83",
      "url": "https://www.amazon.com/dp/B0F1Z2RS83?tag=robbieom0e-20",
      "status": "matched",
      "checkedAt": "2026-10-15",
      "verificationNote": "Exact model and package checked on Amazon.com; price and availability are not published."
    }
  },
  {
    "id": "klein-d228-8",
    "familyId": "diagonal-cutting-pliers",
    "brand": "Klein Tools",
    "model": "D228-8",
    "name": "8-inch high-leverage diagonal cutters",
    "trades": [
      "electricians",
      "hvac"
    ],
    "aliases": [
      "wire cutters",
      "side cutters",
      "diagonal pliers"
    ],
    "advice": "Short jaws and beveled cutting edges suit close wire cutting. Check the permitted material and use de-energized-work procedures; these plastic-dipped handles are explicitly not insulated.",
    "manufacturerUrl": "https://www.kleintools.com/catalog/diagonal-cutting-pliers/diagonal-cutting-pliers-high-leverage-8-inch",
    "imageStatus": "publisher-directed-permission-unconfirmed",
    "image": {
      "src": "https://media.kleintools.io/images/original/klein/d2288_mb.jpg",
      "alt": "Klein Tools D228-8 product photograph",
      "sourceUrl": "https://www.kleintools.com/catalog/diagonal-cutting-pliers/diagonal-cutting-pliers-high-leverage-8-inch",
      "rightsNote": "Publisher requested display of this manufacturer photograph on 2026-10-15 without waiting for permission. Manufacturer reuse permission remains unconfirmed; no licence is asserted."
},
    "amazon": {
      "asin": "B0000302VW",
      "url": "https://www.amazon.com/dp/B0000302VW?tag=robbieom0e-20",
      "status": "matched",
      "checkedAt": "2026-10-15",
      "verificationNote": "Exact model and package checked on Amazon.com; price and availability are not published."
    }
  },
  {
    "id": "klein-d203-8",
    "familyId": "needle-nose-pliers",
    "brand": "Klein Tools",
    "model": "D203-8",
    "name": "8-inch needle-nose side-cutting pliers",
    "trades": [
      "electricians",
      "hvac"
    ],
    "aliases": [
      "long nose pliers",
      "needle nose",
      "wire looping"
    ],
    "advice": "A slim head and extended handles suit gripping and looping in confined spaces. Side cutters provide another preparation function, but the tool is not an insulated model or a substitute for every diagonal-cutting task.",
    "manufacturerUrl": "https://www.kleintools.com/catalog/standard-side-cutting-pliers/pliers-needle-nose-side-cutters-8-inch",
    "imageStatus": "publisher-directed-permission-unconfirmed",
    "image": {
      "src": "https://media.kleintools.io/images/original/klein/d2038.jpg",
      "alt": "Klein Tools D203-8 product photograph",
      "sourceUrl": "https://www.kleintools.com/catalog/standard-side-cutting-pliers/pliers-needle-nose-side-cutters-8-inch",
      "rightsNote": "Publisher requested display of this manufacturer photograph on 2026-10-15 without waiting for permission. Manufacturer reuse permission remains unconfirmed; no licence is asserted."
},
    "amazon": {
      "asin": "B0000302WQ",
      "url": "https://www.amazon.com/dp/B0000302WQ?tag=robbieom0e-20",
      "status": "matched",
      "checkedAt": "2026-10-15",
      "verificationNote": "Exact model and package checked on Amazon.com; price and availability are not published."
    }
  },
  {
    "id": "milwaukee-48-22-2502",
    "familyId": "magnetic-nut-driver-set",
    "brand": "Milwaukee",
    "model": "48-22-2502",
    "name": "Two-piece SAE magnetic nut-driver set",
    "trades": [
      "electricians",
      "hvac"
    ],
    "aliases": [
      "nut drivers",
      "1/4 inch",
      "5/16 inch",
      "HollowCore"
    ],
    "advice": "The two-piece set covers 1/4-inch and 5/16-inch sizes, with magnetic heads and through-shafts. It is a focused HVAC starting choice when those sizes match the course list; wider size coverage can wait.",
    "manufacturerUrl": "https://www.milwaukeetool.com/products/details/2pc-sae-hollowcore-magnetic-nut-driver-set/48-22-2502",
    "imageStatus": "publisher-directed-permission-unconfirmed",
    "image": {
      "src": "https://www.milwaukeetool.com/--/web-images/sc/35338647cf414215bc32a54276e5b50c?hash=d528a4cf7d4cf36cca441b9140a7773a&lang=en&w=200&h=200",
      "alt": "Milwaukee 48-22-2502 product photograph",
      "sourceUrl": "https://www.milwaukeetool.com/products/details/2pc-sae-hollowcore-magnetic-nut-driver-set/48-22-2502",
      "rightsNote": "Publisher requested display of this manufacturer photograph on 2026-10-15 without waiting for permission. Manufacturer reuse permission remains unconfirmed; no licence is asserted."
},
    "amazon": {
      "asin": "B00KQQTLD0",
      "url": "https://www.amazon.com/dp/B00KQQTLD0?tag=robbieom0e-20",
      "status": "matched",
      "checkedAt": "2026-10-15",
      "verificationNote": "Exact model and package checked on Amazon.com; price and availability are not published."
    }
  },
  {
    "id": "wiss-m3r",
    "familyId": "aviation-snips",
    "brand": "Crescent Wiss",
    "model": "M3R",
    "name": "Straight-cut aviation snips",
    "trades": [
      "hvac",
      "plumbers",
      "carpenters"
    ],
    "aliases": [
      "tin snips",
      "metal shears",
      "sheet metal"
    ],
    "advice": "Yellow handles identify the straight-cut model, which also handles slight curves. It is a sensible first sheet-metal cutter where required; a program specifying left and right cutters needs separate models.",
    "manufacturerUrl": "https://www.crescenttool.com/all-tools/cutting-material-removal/cutting/snips/m3r-9-34-compound-action-straight-left-and-right-cut-snips",
    "imageStatus": "publisher-directed-permission-unconfirmed",
    "image": {
      "src": "https://www.crescenttool.com/sites/crescenttool/files/styles/large/public/pim_images/CRS_M3R_IMG_MAIN_01.jpg?itok=UjFjppit",
      "alt": "Crescent Wiss M3R product photograph",
      "sourceUrl": "https://www.crescenttool.com/all-tools/cutting-material-removal/cutting/snips/m3r-9-34-compound-action-straight-left-and-right-cut-snips",
      "rightsNote": "Publisher requested display of this manufacturer photograph on 2026-10-15 without waiting for permission. Manufacturer reuse permission remains unconfirmed; no licence is asserted."
},
    "amazon": {
      "asin": "B00002N5KQ",
      "url": "https://www.amazon.com/dp/B00002N5KQ?tag=robbieom0e-20",
      "status": "matched",
      "checkedAt": "2026-10-15",
      "verificationNote": "Exact model and package checked on Amazon.com; price and availability are not published."
    }
  },
  {
    "id": "streamlight-66118",
    "familyId": "inspection-flashlight",
    "brand": "Streamlight",
    "model": "66118",
    "name": "Stylus Pro AAA inspection penlight",
    "trades": [
      "home-inspectors",
      "electricians"
    ],
    "aliases": [
      "pocket flashlight",
      "inspection torch",
      "handheld light"
    ],
    "advice": "A narrow penlight with a removable clip keeps a close-inspection light in a pocket. AAA power avoids buying into a tool battery platform; it complements a work light rather than illuminating a whole crawlspace.",
    "manufacturerUrl": "https://www.streamlight.com/products/detail/stylus-pro",
    "imageStatus": "publisher-directed-permission-unconfirmed",
    "image": {
      "src": "https://www.streamlight.com/images/default-source/product-large-images/stylus-pro/stylus-pro_2.jpg?Status=Master&sfvrsn=b3dac9f3_22",
      "alt": "Streamlight 66118 product photograph",
      "sourceUrl": "https://www.streamlight.com/products/detail/stylus-pro",
      "rightsNote": "Publisher requested display of this manufacturer photograph on 2026-10-15 without waiting for permission. Manufacturer reuse permission remains unconfirmed; no licence is asserted."
},
    "amazon": {
      "asin": "B07KLSG5JG",
      "url": "https://www.amazon.com/dp/B07KLSG5JG?tag=robbieom0e-20",
      "status": "matched",
      "checkedAt": "2026-10-15",
      "verificationNote": "Listing title and UPC 080926661189 match manufacturer item 66118 (black). Amazon's generic part-number field conflicts; identity corroborated against the manufacturer's part-number sheet."
    }
  }
];
export function getApprenticeEssentialById(id: string) {
  return apprenticeEssentials.find(product => product.id === id);
}
export function getApprenticeEssentialsByFamily(familyId: string) {
  return apprenticeEssentials.filter(product => product.familyId === familyId);
}
export function getApprenticeEssentialsForTrade(trade: string) {
  return apprenticeEssentials.filter(product => product.trades.some(value => value === trade));
}

