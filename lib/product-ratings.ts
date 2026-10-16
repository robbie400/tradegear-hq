import automotiveRatings from './automotive-ratings.json';
import final25Ratings from './carpenter-final25-ratings.json';
import batch25Ratings from './carpenter-batch25-ratings.json';
import october14Ratings from './product-ratings-oct14.json';
import remainingOctober14Ratings from './product-ratings-remaining-oct14.json';
import batch30Ratings from './carpenter-batch30-ratings.json';
export type SourceRating={productId:string;trade:string;brand:string;modelNumber:string;value:number;count:number;countDisplay?:string;source:string;url:string;checkedDate:string;note:string};
export const productRatings:SourceRating[]=[
  ...remainingOctober14Ratings,
  ...october14Ratings,
  {"productId":"klein-mm720","trade":"electricians","brand":"Klein Tools","modelNumber":"MM720","value":4.5,"count":93,"source":"Lowe's","url":"https://www.lowes.com/pd/Klein-Tools-Digital-Multimeter-TRMS-Auto-Ranging-1000V-Temp-Low-Impedance/5014305523","checkedDate":"2026-10-16","note":"Exact MM720 retailer-page customer rating checked October 16, 2026. A dated Lowe\u2019s snapshot, not an Amazon rating or TradeGear HQ test score. The retailer controls review grouping, syndication and incentives; ratings and counts can change."},
  {"productId":"klein-ncvt-3p","trade":"electricians","brand":"Klein Tools","modelNumber":"NCVT-3P","value":3.6,"count":22,"source":"Lowe's","url":"https://www.lowes.com/pd/Klein-Tools-NCVT3P-Dual-Range-Non-Contact-Voltage-Tester-with-Flashlight-12-1000V-AC-CAT-IV-1000V/8869307","checkedDate":"2026-10-16","note":"Exact NCVT3P retailer-page customer rating checked October 16, 2026. NCVT3P is the manufacturer\u2019s unhyphenated identifier for NCVT-3P; this is not NCVT-3PR, NCVT-3R or a kit. A dated Lowe\u2019s snapshot, not an Amazon rating or TradeGear HQ test score. Review grouping, syndication and incentives are controlled by the retailer; scores and counts can change."},
  {"productId":"fluke-117","trade":"electricians","brand":"Fluke","modelNumber":"117","value":4.8,"count":99,"source":"Fluke","url":"https://www.fluke.com/en-us/product/electrical-testing/digital-multimeters/fluke-117","checkedDate":"2026-10-16","note":"Exact Fluke 117 manufacturer-page customer rating checked October 16, 2026. A dated manufacturer-hosted snapshot, not an Amazon rating or TradeGear HQ test score. The manufacturer controls review grouping, syndication and incentives; ratings and counts can change."},
  ...batch30Ratings,
  ...batch25Ratings,
  ...final25Ratings,
  {
    "productId": "dewalt-dcs590b",
    "trade": "carpenters",
    "modelNumber": "DCS590B",
    "brand": "DeWalt",
    "value": 4.1,
    "count": 34,
    "source": "DeWalt",
    "url": "https://www.dewalt.com/en-us/product/dcs590b/20v-max-xr-brushless-cordless-7-14-circular-saw-tool-only",
    "checkedDate": "2026-10-12",
    "note": "Customer rating on this model's manufacturer page. Some source reviews may cover kit variants; supplied accessories can differ."
  },
  {
    "productId": "dewalt-dwe575sb",
    "trade": "carpenters",
    "modelNumber": "DWE575SB",
    "brand": "DeWalt",
    "value": 4.5,
    "count": 32,
    "source": "DeWalt",
    "url": "https://www.dewalt.com/en-us/product/dwe575sb/7-14-lightweight-circular-saw-contractor-bag-tool-only",
    "checkedDate": "2026-10-12",
    "note": "Customer rating on this model's manufacturer page. Some source reviews may cover kit variants; supplied accessories can differ."
  },
  {
    "productId": "skil-5280-01",
    "trade": "carpenters",
    "modelNumber": "5280-01",
    "brand": "SKIL",
    "value": 4.5,
    "count": 332,
    "source": "SKIL",
    "url": "https://www.skil.com/products/120v-circular-saw-laser-5280-01",
    "checkedDate": "2026-10-12",
    "note": "Customer rating on this model's manufacturer page. Some source reviews may cover kit variants; supplied accessories can differ."
  },
  {
    "productId": "milwaukee-2834-20",
    "trade": "carpenters",
    "modelNumber": "2834-20",
    "brand": "Milwaukee",
    "value": 4.6,
    "count": 130,
    "source": "Milwaukee Tool",
    "url": "https://www.milwaukeetool.com/products/details/m18-fuel-7-1-4-circular-saw-tool-only/2834-20",
    "checkedDate": "2026-10-12",
    "note": "Customer rating on this model's manufacturer page. Some source reviews may cover kit variants; supplied accessories can differ."
  },
  {
    "productId": "dewalt-dws780",
    "trade": "carpenters",
    "modelNumber": "DWS780",
    "brand": "DeWalt",
    "value": 4.3,
    "count": 170,
    "source": "DeWalt",
    "url": "https://www.dewalt.com/en-us/product/dws780/12-double-bevel-sliding-compound-miter-saw",
    "checkedDate": "2026-10-12",
    "note": "Customer rating on this model's manufacturer page. Some source reviews may cover kit variants; supplied accessories can differ."
  },
  {
    "productId": "dewalt-dws715",
    "trade": "carpenters",
    "modelNumber": "DWS715",
    "brand": "DeWalt",
    "value": 4.5,
    "count": 51,
    "source": "DeWalt",
    "url": "https://www.dewalt.com/en-us/product/dws715/12-15a-single-bevel-compound-miter-saw",
    "checkedDate": "2026-10-12",
    "note": "Customer rating on this model's manufacturer page. Some source reviews may cover kit variants; supplied accessories can differ."
  },
  {
    "productId": "bosch-gcm12sd",
    "trade": "carpenters",
    "modelNumber": "GCM12SD",
    "brand": "Bosch",
    "value": 4.1,
    "count": 266,
    "source": "Bosch",
    "url": "https://www.boschtools.com/us/en/products/gcm12sd-060166501C",
    "checkedDate": "2026-10-12",
    "note": "Customer rating on this model's manufacturer page. Some source reviews may cover kit variants; supplied accessories can differ."
  },
  {
    "productId": "milwaukee-2505-20",
    "trade": "carpenters",
    "modelNumber": "2505-20",
    "brand": "Milwaukee",
    "value": 4.7,
    "count": 1546,
    "source": "Milwaukee Tool",
    "url": "https://www.milwaukeetool.com/2505-20",
    "checkedDate": "2026-10-12",
    "note": "Customer rating on this model's manufacturer page. Some source reviews may cover kit variants; supplied accessories can differ."
  },
  {
    "productId": "milwaukee-3404-20",
    "trade": "carpenters",
    "modelNumber": "3404-20",
    "brand": "Milwaukee",
    "value": 4.7,
    "count": 136,
    "source": "Milwaukee Tool",
    "url": "https://www.milwaukeetool.com/3404-20",
    "checkedDate": "2026-10-12",
    "note": "Customer rating on this model's manufacturer page. Some source reviews may cover kit variants; supplied accessories can differ."
  },
  {
    "productId": "milwaukee-2904-20",
    "trade": "carpenters",
    "modelNumber": "2904-20",
    "brand": "Milwaukee",
    "value": 4.8,
    "count": 603,
    "source": "Milwaukee Tool",
    "url": "https://www.milwaukeetool.com/2904-20",
    "checkedDate": "2026-10-12",
    "note": "Customer rating on this model's manufacturer page. Some source reviews may cover kit variants; supplied accessories can differ."
  },
  {
    "productId": "dewalt-dcd805b",
    "trade": "carpenters",
    "modelNumber": "DCD805B",
    "brand": "DeWalt",
    "value": 4.5,
    "count": 37,
    "source": "DeWalt",
    "url": "https://www.dewalt.com/en-us/product/dcd805b/20v-max-xr-brushless-cordless-12-hammer-drilldriver-tool-only",
    "checkedDate": "2026-10-12",
    "note": "Customer rating on this model's manufacturer page. Some source reviews may cover kit variants; supplied accessories can differ."
  },
  {
    "productId": "milwaukee-3453-20",
    "trade": "carpenters",
    "modelNumber": "3453-20",
    "brand": "Milwaukee",
    "value": 4.8,
    "count": 450,
    "source": "Milwaukee Tool",
    "url": "https://www.milwaukeetool.com/3453-20",
    "checkedDate": "2026-10-12",
    "note": "Customer rating on this model's manufacturer page. Some source reviews may cover kit variants; supplied accessories can differ."
  },
  {
    "productId": "milwaukee-2953-20",
    "trade": "carpenters",
    "modelNumber": "2953-20",
    "brand": "Milwaukee",
    "value": 4.7,
    "count": 633,
    "source": "Milwaukee Tool",
    "url": "https://www.milwaukeetool.com/2953-20",
    "checkedDate": "2026-10-12",
    "note": "Customer rating on this model's manufacturer page. Some source reviews may cover kit variants; supplied accessories can differ."
  },
  {
    "productId": "dewalt-dcf850b",
    "trade": "carpenters",
    "modelNumber": "DCF850B",
    "brand": "DeWalt",
    "value": 4.1,
    "count": 40,
    "source": "DeWalt",
    "url": "https://www.dewalt.com/en-us/product/dcf850b/atomic-20v-max-14-3-speed-brushless-impact-driver-tool-only",
    "checkedDate": "2026-10-12",
    "note": "Customer rating on this model's manufacturer page. Some source reviews may cover kit variants; supplied accessories can differ."
  },
  {
    "productId": "dewalt-dcf860b",
    "trade": "carpenters",
    "modelNumber": "DCF860B",
    "brand": "DeWalt",
    "value": 4.8,
    "count": 62,
    "source": "DeWalt",
    "url": "https://www.dewalt.com/en-us/product/dcf860b/20v-max-xr-brushless-cordless-3-speed-high-torque-14-impact-driver-tool-only",
    "checkedDate": "2026-10-12",
    "note": "Customer rating on this model's manufacturer page. Some source reviews may cover kit variants; supplied accessories can differ."
  },
  {
    "productId": "makita-xsh03z",
    "trade": "carpenters",
    "brand": "Makita",
    "modelNumber": "XSH03Z",
    "value": 4.9,
    "count": 21,
    "source": "Acme Tools",
    "url": "https://www.acmetools.com/makita-18v-lxt-lithium-ion-brushless-cordless-6-1-2-in-circular-saw-tool-only-xsh03z/088381684378.html",
    "checkedDate": "2026-10-12",
    "note": "Retailer-hosted model-page rating; a dated snapshot, not an Amazon rating or independent test score."
  },
  {
    "productId": "makita-ls1019l",
    "trade": "carpenters",
    "brand": "Makita",
    "modelNumber": "LS1019L",
    "value": 4.4,
    "count": 43,
    "source": "Acme Tools",
    "url": "https://www.acmetools.com/makita-10in-dual-bevel-sliding-compound-miter-saw-with-laser-ls1019l/088381843980.html",
    "checkedDate": "2026-10-12",
    "note": "Retailer-hosted model-page rating; a dated snapshot, not an Amazon rating or independent test score."
  },
  {
    "productId": "makita-xph14z",
    "trade": "carpenters",
    "brand": "Makita",
    "modelNumber": "XPH14Z",
    "value": 4.7,
    "count": 10,
    "source": "Acme Tools",
    "url": "https://www.acmetools.com/makita-18v-lxt-1-2in-hammer-driver-drill-bare-tool-xph14z/088381729307.html",
    "checkedDate": "2026-10-12",
    "note": "Retailer-hosted model-page rating; a dated snapshot, not an Amazon rating or independent test score."
  },
  {
    "productId": "makita-xdt20z",
    "trade": "carpenters",
    "brand": "Makita",
    "modelNumber": "XDT20Z",
    "value": 4.7,
    "count": 3,
    "source": "Acme Tools",
    "url": "https://www.acmetools.com/makita-18v-lxt-lithium-ion-brushless-cordless-quick-shift-mode-4-speed-impact-driver-bare-tool-xdt20z/S0000000080053.html",
    "checkedDate": "2026-10-12",
    "note": "Retailer-hosted model-page rating; a dated snapshot, not an Amazon rating or independent test score."
  }
];
productRatings.push({productId:'appion-g5twin',trade:'hvac',brand:'Appion',modelNumber:'G5Twin',value:5,count:2,source:'Appion',url:'https://appiontools.com/g5twin/',checkedDate:'2026-10-07',note:'Manufacturer-hosted rating. A small review sample; ratings can change.'});
productRatings.push(...automotiveRatings);
export function getProductRating(trade:string,brand:string,model:string){const matches=productRatings.filter(r=>r.brand===brand&&(model===r.modelNumber||model.startsWith(r.modelNumber+' ')));return matches.find(r=>r.trade===trade)||(trade==='automotive-mechanics'?undefined:matches[0]);}
