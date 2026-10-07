import {inspectorProductImages} from "./inspector-product-images";
import {inspectorImageAliases} from "./inspector-catalog";
import {hvacProductImages,hvacImageAliases} from './hvac-product-images';
import {plumberProductImages,plumberImageAliases} from './plumber-product-images';
// Product photos sourced from the linked manufacturer or retailer pages, checked October 5, 2026.
// Never derive image URLs from Amazon listings or substitute a related model.
export type ProductImage = { src: string; sourceUrl: string; alt: string; credit: string; unoptimized?: boolean };
export const productImages: Record<string, ProductImage> = {
  "fluke-117": {
    "src": "https://media.fluke.com/e55511c8-92e6-46b2-b9ae-b108002dd7fa_product_slideshow_main.jpg",
    "sourceUrl": "https://www.fluke.com/en/product/electrical-testing/digital-multimeters/fluke-117",
    "alt": "Fluke 117 Electrician's Multimeter",
    "credit": "Fluke"
  },
  "fluke-115": {
    "src": "https://media.fluke.com/8a32f731-a3c4-446b-ad0f-b108002ad62f_product_slideshow_main.jpg",
    "sourceUrl": "https://www.fluke.com/en-us/product/electrical-testing/digital-multimeters/fluke-115",
    "alt": "Fluke 115 Compact True-RMS Digital Multimeter",
    "credit": "Fluke"
  },
  "klein-mm720": {
    "src": "https://data.kleintools.com/sites/all/product_assets/png/klein/mm720.png",
    "sourceUrl": "https://www.kleintools.com/catalog/multimeters/digital-multimeter-trms-auto-ranging-1000v-temp-low-impedance",
    "alt": "Klein Tools MM720 TRMS Auto-Ranging Multimeter",
    "credit": "Klein"
  },
  "klein-mm450": {
    "src": "https://data.kleintools.com/sites/all/product_assets/png/klein/mm450_c.png",
    "sourceUrl": "https://www.kleintools.com/catalog/multimeters/slim-digital-multimeter-trms-auto-ranging-600v-temp",
    "alt": "Klein Tools MM450 Slim TRMS Multimeter",
    "credit": "Klein"
  },
  "southwire-14090t": {
    "src": "https://www.contractortool.com/cdn/shop/products/51aTxNWtO5L_330x500.jpg?v=1762289957",
    "sourceUrl": "https://www.contractortool.com/products/southwire-multimeter-auto-techpro-14090t",
    "alt": "Southwire 14090T TechnicianPRO Bluetooth Multimeter",
    "credit": "Contractor Tool Supply"
  },
  "fluke-323": {
    "src": "https://media.fluke.com/c0eacec0-218d-47a2-9ca4-b108002e0817_product_slideshow_main.jpg",
    "sourceUrl": "https://www.fluke.com/en-us/product/electrical-testing/clamp-meters/fluke-323",
    "alt": "Fluke 323 True-RMS Clamp Meter",
    "credit": "Fluke"
  },
  "fluke-325": {
    "src": "https://media.fluke.com/f713fa00-6533-4029-96ce-b108002e0aa5_product_slideshow_main.jpg",
    "sourceUrl": "https://www.fluke.com/en-us/product/electrical-testing/clamp-meters/fluke-325",
    "alt": "Fluke 325 True-RMS Clamp Meter",
    "credit": "Fluke"
  },
  "klein-cl390": {
    "src": "https://data.kleintools.com/sites/all/product_assets/png/klein/cl390.png",
    "sourceUrl": "https://www.kleintools.com/catalog/clamp-meters/acdc-digital-clamp-meter-trms-auto-ranging-400-amp",
    "alt": "Klein Tools CL390 TRMS AC/DC Clamp Meter",
    "credit": "Klein Tools"
  },
  "klein-cl810": {
    "src": "https://data.kleintools.com/sites/all/product_assets/png/klein/cl810.png",
    "sourceUrl": "https://www.kleintools.com/catalog/clamp-meters/600a-acdc-auto-ranging-trms-clamp-meter-worklight",
    "alt": "Klein Tools CL810 TRMS Clamp Meter with Worklight",
    "credit": "Klein Tools"
  },
  "klein-cl220": {
    "src": "https://data.kleintools.com/sites/all/product_assets/png/klein/cl220_b.png",
    "sourceUrl": "https://www.kleintools.com/catalog/clamp-meters/digital-clamp-meter-ac-auto-ranging-400-amp-temp",
    "alt": "Klein Tools CL220 AC Clamp Meter with Temperature",
    "credit": "Klein Tools"
  },
  "klein-ncvt-3p": {
    "src": "https://data.kleintools.com/sites/all/product_assets/png/klein/ncvt3p.png",
    "sourceUrl": "https://www.kleintools.com/catalog/electrical-testers/dual-range-non-contact-voltage-tester-flashlight-12-1000v-ac",
    "alt": "Klein Tools NCVT-3P Dual-Range Voltage Tester",
    "credit": "Klein"
  },
  "fluke-1ac-ii": {
    "src": "https://media.fluke.com/094de3ad-1989-4152-8c2a-b108002b034e_product_slideshow_main.jpg",
    "sourceUrl": "https://www.fluke.com/en-us/product/electrical-testing/basic-testers/fluke-1ac-ii",
    "alt": "Fluke 1AC II VoltAlert",
    "credit": "Fluke"
  },
  "klein-ncvt-1p": {
    "src": "https://data.kleintools.com/sites/all/product_assets/png/klein/ncvt1p.png",
    "sourceUrl": "https://www.kleintools.com/catalog/electrical-testers/non-contact-voltage-tester-pen-50-1000v-ac",
    "alt": "Klein Tools NCVT-1P Voltage Tester",
    "credit": "Klein Tools"
  },
  "klein-et60": {
    "src": "https://data.kleintools.com/sites/all/product_assets/png/klein/et60.png",
    "sourceUrl": "https://www.kleintools.com/catalog/electrical-testers/electronic-acdc-voltage-tester-12-600v",
    "alt": "Klein Tools ET60 Electronic AC/DC Voltage Tester",
    "credit": "Klein Tools"
  },
  "fluke-t5-600": {
    "src": "https://media.fluke.com/1d1f5018-0f9b-42aa-9262-b108002c582d_product_slideshow_main.jpg",
    "sourceUrl": "https://www.fluke.com/en-us/product/electrical-testing/basic-testers/fluke-t5-600",
    "alt": "Fluke T5-600 Electrical Tester",
    "credit": "Fluke"
  },
  "klein-et310": {
    "src": "https://data.kleintools.com/sites/all/product_assets/png/klein/et310_c.png",
    "sourceUrl": "https://www.kleintools.com/catalog/electrical-testers/digital-circuit-breaker-finder-gfci-outlet-tester",
    "alt": "Klein Tools ET310 Digital Circuit Breaker Finder",
    "credit": "Klein"
  },
  "klein-et350": {
    "src": "https://data.kleintools.com/sites/all/product_assets/png/klein/et350_c.png",
    "sourceUrl": "https://www.kleintools.com/catalog/electrical-testers/4-1-digital-circuit-breaker-finder",
    "alt": "Klein Tools ET350 4-in-1 Circuit Breaker Finder",
    "credit": "Klein Tools"
  },
  "ideal-61-534": {
    "src": "https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/61-534-1.jpg",
    "sourceUrl": "https://www.supplyhouse.com/Ideal-61-534-Digital-Breaker-Finder-with-GFCI",
    "alt": "IDEAL 61-534 Digital Circuit Breaker Finder",
    "credit": "SupplyHouse"
  },
  "extech-cb10": {
    "src": "https://www.extech.com/netx-assets/cb10-front-01/?quality=80&width=1500",
    "sourceUrl": "https://www.flir.com/en-in/products/cb10/",
    "alt": "Extech CB10 Circuit Breaker Finder",
    "credit": "Extech"
  },
  "southwire-41210s": {
    "src": "https://www.contractortool.com/cdn/shop/products/31WV-WKRnCL_500x500.jpg?v=1762290092",
    "sourceUrl": "https://www.contractortool.com/products/southwire-tools-equipment-41210s-circuit-breaker-finder-kit-with-gfci-test",
    "alt": "Southwire 41210S Circuit Breaker Finder Kit",
    "credit": "Contractor Tool Supply"
  },
  "klein-et450": {
    "src": "https://data.kleintools.com/sites/all/product_assets/png/klein/et450.png",
    "sourceUrl": "https://www.kleintools.com/catalog/electrical-testers/advanced-electrical-circuit-breaker-finder-and-wire-tracer-kit-and-case",
    "alt": "Klein Tools ET450 Advanced Circuit Tracer Kit",
    "credit": "Klein"
  },
  "fluke-2052": {
    "src": "https://media.fluke.com/de32bd7b-73a5-4c15-94d8-b307013058f0_product_slideshow_main.jpg",
    "sourceUrl": "https://www.fluke.com/en-us/product/building-infrastructure/wire-tracers/2052",
    "alt": "Fluke 2052 Advanced Wire Tracer Kit",
    "credit": "Fluke"
  },
  "fluke-2062": {
    "src": "https://media.fluke.com/0776b280-f4d2-4569-9975-b30701306985_product_slideshow_main.jpg",
    "sourceUrl": "https://www.fluke.com/en-us/product/building-infrastructure/wire-tracers/2062",
    "alt": "Fluke 2062 Advanced Pro Wire Tracer Kit",
    "credit": "Fluke"
  },
  "amprobe-at6020": {
    "src": "https://res.cloudinary.com/iwh/image/upload/q_auto%2Cg_center%2Cw_350/assets/1/26/Amprobe_AT-6020_Advanced_Wire_Tracer_Kit.jpg",
    "sourceUrl": "https://www.tequipment.net/Amprobe/AT-6020/Wire-Tracers/",
    "alt": "Amprobe AT-6020 Advanced Wire Tracer Kit",
    "credit": "TEquipment"
  },
  "amprobe-at6030": {
    "src": "https://media.fluke.com/ed0e0711-282a-47e2-95be-b108002abf7d_product_slideshow_main.jpg",
    "sourceUrl": "https://www.fluke.com/en-us/product/building-infrastructure/wire-tracers/at-6030",
    "alt": "Amprobe AT-6030 Advanced Wire Tracer Kit",
    "credit": "Fluke / Amprobe"
  },
  "klein-rt250": {
    "src": "https://data.kleintools.com/sites/all/product_assets/png/klein/rt250_c.png",
    "sourceUrl": "https://www.kleintools.com/catalog/electrical-testers/gfci-receptacle-tester-lcd",
    "alt": "Klein Tools RT250 GFCI Receptacle Tester with LCD",
    "credit": "Klein"
  },
  "klein-rt210": {
    "src": "https://data.kleintools.com/sites/all/product_assets/png/klein/rt210_b.png",
    "sourceUrl": "https://www.kleintools.com/catalog/electrical-testers/gfci-outlet-tester",
    "alt": "Klein Tools RT210 GFCI Outlet Tester",
    "credit": "Klein Tools"
  },
  "klein-rt390": {
    "src": "https://data.kleintools.com/sites/all/product_assets/png/klein/rt390_b.png",
    "sourceUrl": "https://www.kleintools.com/catalog/electrical-testers/circuit-analyzer",
    "alt": "Klein Tools RT390 Circuit Analyzer",
    "credit": "Klein Tools"
  },
  "fluke-st120": {
    "src": "https://media.fluke.com/1ab7c0f2-924b-41cd-8dc1-b108002f2d57_product_slideshow_main.jpg",
    "sourceUrl": "https://www.fluke.com/en-us/product/electrical-testing/basic-testers/fluke-st120",
    "alt": "Fluke ST120 GFCI Socket Tester",
    "credit": "Fluke"
  },
  "ideal-61-501": {
    "src": "https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/61-501-3.jpg",
    "sourceUrl": "https://www.supplyhouse.com/Ideal-61-501-GFI-Receptacle-Tester",
    "alt": "IDEAL 61-501 GFCI Receptacle Tester",
    "credit": "SupplyHouse"
  },
  "klein-11055": {
    "src": "https://data.kleintools.com/sites/all/product_assets/png/klein/11055ep.png",
    "sourceUrl": "https://www.kleintools.com/catalog/combination-cutting-tools/solid-and-stranded-copper-wire-stripper-and-cutter",
    "alt": "Klein Tools 11055 Klein-Kurve Wire Stripper/Cutter",
    "credit": "Klein"
  },
  "klein-11061": {
    "src": "https://data.kleintools.com/sites/all/product_assets/png/klein/11061.png",
    "sourceUrl": "https://www.kleintools.com/catalog/combination-cutting-tools/wire-stripper-and-cutter-self-adjusting",
    "alt": "Klein Tools 11061 Self-Adjusting Wire Stripper/Cutter",
    "credit": "Klein Tools"
  },
  "klein-11063w": {
    "src": "https://data.kleintools.com/sites/all/product_assets/png/klein/11063w.png",
    "sourceUrl": "https://www.kleintools.com/catalog/combination-cutting-tools/katapult-wire-stripper-and-cutter-solid-and-stranded-wire",
    "alt": "Klein Tools 11063W Katapult Wire Stripper/Cutter",
    "credit": "Klein Tools"
  },
  "knipex-13728": {
    "src": "https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/13-72-8-3.jpg",
    "sourceUrl": "https://www.supplyhouse.com/Knipex-13-72-8-8-Forged-Wire-Stripper-w-Comfort-Grip-Handle",
    "alt": "KNIPEX 13 72 8 WireStripper",
    "credit": "SupplyHouse"
  },
  "ideal-45-092": {
    "src": "https://hausoftools.com/cdn/shop/products/45-092.jpg?v=1660888409&width=1080",
    "sourceUrl": "https://hausoftools.com/products/ideal-45-092-stripmaster-wire-stripper-10-22-awg",
    "alt": "IDEAL 45-092 Stripmaster 10–22 AWG",
    "credit": "Haus of Tools"
  },
  "klein-j2000-9ne": {
    "src": "https://data.kleintools.com/sites/all/product_assets/png/klein/j20009ne.png",
    "sourceUrl": "https://www.kleintools.com/catalog/high-leverage-side-cutting-pliers/linemans-pliers-9-inch-journeyman-handle",
    "alt": "Klein Tools J2000-9NE Journeyman Lineman’s Pliers",
    "credit": "Klein"
  },
  "knipex-0912240": {
    "src": "https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/09-12-0240-3.jpg",
    "sourceUrl": "https://www.supplyhouse.com/Knipex-09-12-240-9-1-2-High-Leverage-Linemans-Pliers-New-England-w-Comfort-Grip-w-Tape-Puller-Crimper",
    "alt": "KNIPEX 09 12 240 Lineman’s Pliers",
    "credit": "SupplyHouse"
  },
  "milwaukee-48226100": {
    "src": "https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/milwaukee-48-22-6100-stock1march2026.jpg",
    "sourceUrl": "https://www.supplyhouse.com/Milwaukee-48-22-6100-9-Comfort-Grip-High-Leverage-Linemans-Pliers-with-Crimper-48-22-6100",
    "alt": "Milwaukee 48-22-6100 Lineman’s Pliers with Crimper",
    "credit": "SupplyHouse"
  },
  "channellock-369": {
    "src": "https://images.salsify.com/image/upload/s--bLHg4ja3--/w_600/kzabm0gdzzzn19tujvcc.webp",
    "sourceUrl": "https://www.channellock.com/product/369/",
    "alt": "CHANNELLOCK 369 XLT Linemen’s Pliers",
    "credit": "CHANNELLOCK"
  },
  "channellock-369cr": {
    "src": "https://images.salsify.com/image/upload/s--kj-BOSJG--/w_600/ced8coarga5awahba27p.webp",
    "sourceUrl": "https://www.channellock.com/product/369cr/",
    "alt": "CHANNELLOCK 369CR XLT Linemen’s Pliers with Crimper",
    "credit": "CHANNELLOCK"
  },
  "klein-32288": {
    "src": "https://data.kleintools.com/sites/all/product_assets/png/klein/32288_b.png",
    "sourceUrl": "https://www.kleintools.com/catalog/electricians-tool-sets/8-1-insulated-interchangeable-screwdriver-set",
    "alt": "Klein Tools 32288 Insulated Interchangeable Screwdriver Set",
    "credit": "Klein"
  },
  "klein-32500hd": {
    "src": "https://data.kleintools.com/sites/all/product_assets/png/klein/32500hd_c.png",
    "sourceUrl": "https://www.kleintools.com/catalog/multi-bit-nut-drivers/impact-rated-multi-bit-screwdrivernut-driver-11-1",
    "alt": "Klein Tools 32500HD Impact-Rated 11-in-1 Driver",
    "credit": "Klein Tools"
  },
  "wiha-28345": {
    "src": "https://www.wihatools.com/cdn/shop/files/wjbse4q1tjopoh3gedft_1800x.jpg?v=1776759886",
    "sourceUrl": "https://www.wihatools.com/products/insulated-pocketmax-slimline-multi-driver-set-6-piece",
    "alt": "Wiha 28345 Insulated PocketMax SlimLine",
    "credit": "Wiha"
  },
  "knipex-002012v02": {
    "src": "https://cdn-reichelt.de/bilder/web/xxl_ws/D320%2FKN_00_20_12_V02_01.png?type=ProductXxl",
    "sourceUrl": "https://www.reichelt.com/ie/en/shop/product/vde_screwdriver_set_slotted_phillips_-230709",
    "alt": "KNIPEX 00 20 12 V02 VDE Screwdriver Set",
    "credit": "Reichelt"
  },
  "wera-27ra": {
    "src": "https://cpcireland.farnell.com/productimages/large/en_GB/TL24907-40.jpg",
    "sourceUrl": "https://cpcireland.farnell.com/wera/05051517001/ratchet-s-driver-with-bits-27/dp/TL24907",
    "alt": "Wera Kraftform Kompakt 27 RA 1",
    "credit": "CPC / Farnell"
  },
  "milwaukee-2505-20": {
    "src": "https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/2505-20-new-main.jpg",
    "sourceUrl": "https://www.supplyhouse.com/Milwaukee-2505-20-M12-Fuel-12V-Lithium-Ion-4-in-1-Installation-3-8-Drill-Driver-Tool-Only",
    "alt": "Milwaukee 2505-20 M12 FUEL Installation Drill/Driver",
    "credit": "SupplyHouse"
  },
  "milwaukee-3404-20": {
    "src": "https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/3404-20milwaukee01.jpg",
    "sourceUrl": "https://www.supplyhouse.com/Milwaukee-3404-20-M12-FUEL-1-2-Hammer-Drill-Driver",
    "alt": "Milwaukee 3404-20 M12 FUEL Hammer Drill/Driver",
    "credit": "SupplyHouse"
  },
  "milwaukee-2904-20": {
    "src": "https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/2904-20-2.jpg",
    "sourceUrl": "https://www.supplyhouse.com/Milwaukee-2904-20-M18-FUEL-1-2-Hammer-Drill-Driver",
    "alt": "Milwaukee 2904-20 M18 FUEL Hammer Drill/Driver",
    "credit": "SupplyHouse"
  },
  "dewalt-dcd805b": {
    "src": "https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/stanleyblackdeckerdcd805b3.jpg",
    "sourceUrl": "https://www.supplyhouse.com/Stanley-DCD805B-20V-MAX-XR-Brushless-Cordless-1-2-Hammer-Drill-Driver-Tool-Only",
    "alt": "DeWalt DCD805B 20V MAX XR Hammer Drill/Driver",
    "credit": "SupplyHouse"
  },
  "makita-xph14z": {
    "src": "https://www.acmetools.com/dw/image/v2/BHBS_PRD/on/demandware.static/-/Sites-acme-catalog-m-en/default/dw934ccb99/images/images/catalog/product/088381729307/makita-18v-lxt-12in-hammer-driver-drill-bare-tool-xph14z.jpg",
    "sourceUrl": "https://www.acmetools.com/makita-18v-lxt-1-2in-hammer-driver-drill-bare-tool-xph14z/088381729307.html",
    "alt": "Makita XPH14Z 18V LXT Hammer Driver-Drill",
    "credit": "Acme Tools"
  },
  "milwaukee-3453-20": {
    "src": "https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/3453-20milwaukee01.jpg",
    "sourceUrl": "https://www.supplyhouse.com/Milwaukee-3453-20-M12-FUEL-1-4-Hex-Impact-Driver",
    "alt": "Milwaukee 3453-20 M12 FUEL 1/4-inch Hex Impact Driver",
    "credit": "SupplyHouse"
  },
  "milwaukee-2953-20": {
    "src": "https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/2953-20-3.jpg",
    "sourceUrl": "https://www.supplyhouse.com/Milwaukee-2953-20-M18-FUEL-1-4-Hex-Impact-Driver?msockid=3cd2ffe9fb8162863ec7e97bfa4c636e",
    "alt": "Milwaukee 2953-20 M18 FUEL 1/4-inch Hex Impact Driver",
    "credit": "SupplyHouse"
  },
  "dewalt-dcf850b": {
    "src": "https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/dcf850b-5.jpg",
    "sourceUrl": "https://www.supplyhouse.com/Dewalt-DCF850B-Atomic-20V-MAX-1-4-Cordless-Brushless-3-Speed-Impact-Driver-Tool-Only",
    "alt": "DeWalt DCF850B ATOMIC 3-Speed Impact Driver",
    "credit": "SupplyHouse"
  },
  "dewalt-dcf860b": {
    "src": "https://www.contractortool.com/cdn/shop/files/Ecomm_Large-DCF860B_1_530x530.jpg?v=1762285127",
    "sourceUrl": "https://www.contractortool.com/products/dewalt-dcf860b-20v-max-xr-1-4-in-3-speed-brushless-high-torque-impact-driver-tool-only",
    "alt": "DeWalt DCF860B XR 3-Speed Impact Driver",
    "credit": "Contractor Tool Supply"
  },
  "makita-xdt19z": {
    "src": "https://toolup.com/cdn/shop/files/Makita-XDT19Z_01_62e974cf-c9e5-4bdf-9570-71349c4a75d7.jpg?v=1758726331&width=1500",
    "sourceUrl": "https://toolup.com/products/makita-xdt19z-18v-lxt-lithium-ion-brushless-cordless-quick-shift-mode-4-speed-impact-driver-tool-only-1",
    "alt": "Makita XDT19Z 18V LXT 4-Speed Impact Driver",
    "credit": "Toolup"
  },
  "klein-56331": {
    "src": "https://data.kleintools.com/sites/all/product_assets/hires/klein/56331_photo.jpg",
    "sourceUrl": "https://www.kleintools.com/catalog/fish-tapes/steel-fish-tape-18-inch-x-50-foot",
    "alt": "Klein Tools 56331 Steel Fish Tape, 50-Foot",
    "credit": "Klein Tools"
  },
  "klein-56380": {
    "src": "https://data.kleintools.com/sites/all/product_assets/png/klein/56380.png",
    "sourceUrl": "https://www.kleintools.com/catalog/fish-tapes/multi-groove-fiberglass-fish-tape-spiral-steel-leader-100-foot",
    "alt": "Klein Tools 56380 Fiberglass Fish Tape, 100-Foot",
    "credit": "Klein Tools"
  },
  "milwaukee-48224165": {
    "src": "https://www.milwaukeetool.com/--/web-images/sc/3eca971d4f2a4774b1ce5fcbd5da3aae?hash=acf20465316ab856aae3c1eb7efda677&lang=en",
    "sourceUrl": "https://www.milwaukeetool.com/products/details/100-polyester-fish-tape-with-nonconductive-tip/48-22-4165",
    "alt": "Milwaukee 48-22-4165 Polyester Fish Tape, 100-Foot",
    "credit": "Milwaukee Tool"
  },
  "southwire-ftsp45-125nct": {
    "src": "https://www.acmetools.com/dw/image/v2/BHBS_PRD/on/demandware.static/-/Sites-acme-catalog-m-en/default/dw9b077463/images/images/catalog/product/032886964657/southwire-simpull-fish-tape-45mm-125-non-conductive-tip-large-case-ftsp45-125nct.jpg",
    "sourceUrl": "https://www.acmetools.com/southwire-simpull-fish-tape-45mm-125-non-conductive-tip-large-case-ftsp45-125nct/032886964657.html",
    "alt": "Southwire FTSP45-125NCT SIMpull Fish Tape",
    "credit": "Acme Tools"
  },
  "milwaukee-48224152": {
    "src": "https://assets.unilogcorp.com/187/ITEM/IMG/103101242.jpg",
    "sourceUrl": "https://www.outdoorsupplyhardware.com/2802880/product/milwaukee-48-22-4152",
    "alt": "Milwaukee 48-22-4152 Mid-Flex Fish Stick Kit",
    "credit": "Outdoor Supply Hardware"
  },
  "milwaukee-2367-20": {
    "src": "https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/2367-20-5.jpg",
    "sourceUrl": "https://www.supplyhouse.com/Milwaukee-2367-20-M12-Rover-Service-Repair-Flood-Light-w-USB-Charging",
    "alt": "Milwaukee 2367-20 M12 ROVER Service & Repair Flood Light",
    "credit": "SupplyHouse"
  },
  "milwaukee-2351-20": {
    "src": "https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/2351-20-3.jpg",
    "sourceUrl": "https://www.supplyhouse.com/Milwaukee-2351-20-M12-LED-Stick-Light-Tool-Only",
    "alt": "Milwaukee 2351-20 M12 Stick Light",
    "credit": "SupplyHouse"
  },
  "dewalt-dcl050": {
    "src": "https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/dcl050dewalt01mar25.jpg",
    "sourceUrl": "https://www.supplyhouse.com/Dewalt-DCL050-20V-Max-Lithium-Ion-LED-Hand-Held-Area-Light",
    "alt": "DeWalt DCL050 20V MAX Hand-Held Area Light",
    "credit": "SupplyHouse"
  },
  "makita-dml811": {
    "src": "https://www.acmetools.com/dw/image/v2/BHBS_PRD/on/demandware.static/-/Sites-acme-catalog-m-en/default/dwfe239a9e/images/images/catalog/product/088381888271/makita-18v-lxt-lithium-ion-cordlesscorded-work-light-bare-tool-dml811.jpg",
    "sourceUrl": "https://www.acmetools.com/makita-18v-lxt-lithium-ion-cordless-corded-work-light-bare-tool-dml811/088381888271.html",
    "alt": "Makita DML811 18V LXT Corded/Cordless Work Light",
    "credit": "Acme Tools"
  },
  "streamlight-siege-44931": {
    "src": "https://www.streamlight.com/images/default-source/product-large-images/the-siege/the-siege_1.jpg?Status=Master&sfvrsn=e59e7f3_23",
    "sourceUrl": "https://www.streamlight.com/products/detail/the-siege",
    "alt": "Streamlight The Siege 44931 Lantern",
    "credit": "Streamlight"
  },
  "veto-tech-pac": {
    "src": "https://vetopropac.com/wp-content/uploads/2017/10/TechPac_600x830_1.jpg",
    "sourceUrl": "https://vetopropac.com/product/tech-pac/",
    "alt": "Veto Pro Pac TECH PAC Tool Backpack",
    "credit": "Veto"
  },
  "klein-55421bp14": {
    "src": "https://data.kleintools.com/sites/all/product_assets/png/klein/55421bp-14_b.png",
    "sourceUrl": "https://www.kleintools.com/catalog/tool-backpacks/tradesman-pro-tool-bag-backpack-39-pockets-black-14-inch",
    "alt": "Klein Tools 55421BP14 Tradesman Pro Backpack",
    "credit": "Klein Tools"
  },
  "klein-62800bp": {
    "src": "https://data.kleintools.com/sites/all/product_assets/png/klein/62800bp.png",
    "sourceUrl": "https://www.kleintools.com/catalog/tool-backpacks/tradesman-pro-xl-tool-bag-backpack-40-pockets",
    "alt": "Klein Tools 62800BP Tradesman Pro XL Backpack",
    "credit": "Klein Tools"
  },
  "milwaukee-48228200": {
    "src": "https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/48-22-8200-10.jpg",
    "sourceUrl": "https://www.supplyhouse.com/Milwaukee-48-22-8200-Jobsite-Backpack",
    "alt": "Milwaukee 48-22-8200 Jobsite Backpack",
    "credit": "SupplyHouse"
  },
  "clc-1134": {
    "src": "https://d3cacd5apmg13r.cloudfront.net/userfiles/ad/medium/clc01134-1_1078.jpg",
    "sourceUrl": "https://www.aih.com/Brands/CLCreg/Catalog/Hand-Tools/Tool-Storage/Tool-Bags-And-Totes/CLC01134",
    "alt": "CLC 1134 Deluxe Tool Backpack",
    "credit": "AIH"
  }
};
const aliases: Record<string, string> = {
  "Fluke 117 Electrician's Multimeter": "fluke-117",
  "Fluke 115 Compact True-RMS Digital Multimeter": "fluke-115",
  "Klein Tools MM720 TRMS Auto-Ranging Multimeter": "klein-mm720",
  "Klein Tools MM450 Slim TRMS Multimeter": "klein-mm450",
  "Southwire 14090T TechnicianPRO Bluetooth Multimeter": "southwire-14090t",
  "Fluke 323 True-RMS Clamp Meter": "fluke-323",
  "Fluke 325 True-RMS Clamp Meter": "fluke-325",
  "Klein Tools CL390 TRMS AC/DC Clamp Meter": "klein-cl390",
  "Klein Tools CL810 TRMS Clamp Meter with Worklight": "klein-cl810",
  "Klein Tools CL220 AC Clamp Meter with Temperature": "klein-cl220",
  "Klein Tools NCVT-3P Dual-Range Voltage Tester": "klein-ncvt-3p",
  "Fluke 1AC II VoltAlert": "fluke-1ac-ii",
  "Klein Tools NCVT-1P Voltage Tester": "klein-ncvt-1p",
  "Klein Tools ET60 Electronic AC/DC Voltage Tester": "klein-et60",
  "Fluke T5-600 Electrical Tester": "fluke-t5-600",
  "Klein Tools ET310 Digital Circuit Breaker Finder": "klein-et310",
  "Klein Tools ET350 4-in-1 Circuit Breaker Finder": "klein-et350",
  "IDEAL 61-534 Digital Circuit Breaker Finder": "ideal-61-534",
  "Extech CB10 Circuit Breaker Finder": "extech-cb10",
  "Southwire 41210S Circuit Breaker Finder Kit": "southwire-41210s",
  "Klein Tools ET450 Advanced Circuit Tracer Kit": "klein-et450",
  "Fluke 2052 Advanced Wire Tracer Kit": "fluke-2052",
  "Fluke 2062 Advanced Pro Wire Tracer Kit": "fluke-2062",
  "Amprobe AT-6020 Advanced Wire Tracer Kit": "amprobe-at6020",
  "Amprobe AT-6030 Advanced Wire Tracer Kit": "amprobe-at6030",
  "Klein Tools RT250 GFCI Receptacle Tester with LCD": "klein-rt250",
  "Klein Tools RT210 GFCI Outlet Tester": "klein-rt210",
  "Klein Tools RT390 Circuit Analyzer": "klein-rt390",
  "Fluke ST120 GFCI Socket Tester": "fluke-st120",
  "IDEAL 61-501 GFCI Receptacle Tester": "ideal-61-501",
  "Klein Tools 11055 Klein-Kurve Wire Stripper/Cutter": "klein-11055",
  "Klein Tools 11061 Self-Adjusting Wire Stripper/Cutter": "klein-11061",
  "Klein Tools 11063W Katapult Wire Stripper/Cutter": "klein-11063w",
  "KNIPEX 13 72 8 WireStripper": "knipex-13728",
  "IDEAL 45-092 Stripmaster 10–22 AWG": "ideal-45-092",
  "Klein Tools J2000-9NE Journeyman Lineman’s Pliers": "klein-j2000-9ne",
  "KNIPEX 09 12 240 Lineman’s Pliers": "knipex-0912240",
  "Milwaukee 48-22-6100 Lineman’s Pliers with Crimper": "milwaukee-48226100",
  "CHANNELLOCK 369 XLT Linemen’s Pliers": "channellock-369",
  "CHANNELLOCK 369CR XLT Linemen’s Pliers with Crimper": "channellock-369cr",
  "Klein Tools 32288 Insulated Interchangeable Screwdriver Set": "klein-32288",
  "Klein Tools 32500HD Impact-Rated 11-in-1 Driver": "klein-32500hd",
  "Wiha 28345 Insulated PocketMax SlimLine": "wiha-28345",
  "KNIPEX 00 20 12 V02 VDE Screwdriver Set": "knipex-002012v02",
  "Wera Kraftform Kompakt 27 RA 1": "wera-27ra",
  "Milwaukee 2505-20 M12 FUEL Installation Drill/Driver": "milwaukee-2505-20",
  "Milwaukee 3404-20 M12 FUEL Hammer Drill/Driver": "milwaukee-3404-20",
  "Milwaukee 2904-20 M18 FUEL Hammer Drill/Driver": "milwaukee-2904-20",
  "DeWalt DCD805B 20V MAX XR Hammer Drill/Driver": "dewalt-dcd805b",
  "Makita XPH14Z 18V LXT Hammer Driver-Drill": "makita-xph14z",
  "Milwaukee 3453-20 M12 FUEL 1/4-inch Hex Impact Driver": "milwaukee-3453-20",
  "Milwaukee 2953-20 M18 FUEL 1/4-inch Hex Impact Driver": "milwaukee-2953-20",
  "DeWalt DCF850B ATOMIC 3-Speed Impact Driver": "dewalt-dcf850b",
  "DeWalt DCF860B XR 3-Speed Impact Driver": "dewalt-dcf860b",
  "Makita XDT19Z 18V LXT 4-Speed Impact Driver": "makita-xdt19z",
  "Klein Tools 56331 Steel Fish Tape, 50-Foot": "klein-56331",
  "Klein Tools 56380 Fiberglass Fish Tape, 100-Foot": "klein-56380",
  "Milwaukee 48-22-4165 Polyester Fish Tape, 100-Foot": "milwaukee-48224165",
  "Southwire FTSP45-125NCT SIMpull Fish Tape": "southwire-ftsp45-125nct",
  "Milwaukee 48-22-4152 Mid-Flex Fish Stick Kit": "milwaukee-48224152",
  "Milwaukee 2367-20 M12 ROVER Service & Repair Flood Light": "milwaukee-2367-20",
  "Milwaukee 2351-20 M12 Stick Light": "milwaukee-2351-20",
  "DeWalt DCL050 20V MAX Hand-Held Area Light": "dewalt-dcl050",
  "Makita DML811 18V LXT Corded/Cordless Work Light": "makita-dml811",
  "Streamlight The Siege 44931 Lantern": "streamlight-siege-44931",
  "Veto Pro Pac TECH PAC Tool Backpack": "veto-tech-pac",
  "Klein Tools 55421BP14 Tradesman Pro Backpack": "klein-55421bp14",
  "Klein Tools 62800BP Tradesman Pro XL Backpack": "klein-62800bp",
  "Milwaukee 48-22-8200 Jobsite Backpack": "milwaukee-48228200",
  "CLC 1134 Deluxe Tool Backpack": "clc-1134"
};
Object.assign(productImages, plumberProductImages, hvacProductImages, inspectorProductImages);
Object.assign(aliases, plumberImageAliases, hvacImageAliases, inspectorImageAliases);
export function getProductImage(key: string | undefined): ProductImage | undefined {
  if (!key) return undefined;
  return productImages[key.replace(/-review$/, "")] || productImages[aliases[key]];
}
