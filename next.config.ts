import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: { remotePatterns: [
    ...["www.protoolreviews.com", "yellowjacket.com", "www.elitechus.com", "www.inficon.com", "resources.fieldpiece.com", "static.testo.com", "accutools.com", "cdn11.bigcommerce.com", "www.jbind.com", "navacglobal.com", "www.robinair.com", "www.protimeter.com", "generaltools.com", "shop.wagnermeters.com", "www.topdon.us", "wildblick.shop", "www.flir.com", "assets.craftsman.com", "mobileimages.lowes.com", "www.libertypumps.com", "www.superior-pump.com", "goclc.com", "cdn.shopify.com", "www.petzl.com", "www.iwiss.com", "teslong.com", "images.thdstatic.com", "media.kleintools.io", "depstech.com", "www.crescenttool.com", "web-assets.knipex.com"].map(hostname=>({protocol:"https" as const,hostname})),
  {
    "protocol": "https",
    "hostname": "assets.unilogcorp.com"
  },
  {
    "protocol": "https",
    "hostname": "cdn-reichelt.de"
  },
  {
    "protocol": "https",
    "hostname": "cpcireland.farnell.com"
  },
  {
    "protocol": "https",
    "hostname": "d3501hjdis3g5w.cloudfront.net"
  },
  {
    "protocol": "https",
    "hostname": "d3cacd5apmg13r.cloudfront.net"
  },
  {
    "protocol": "https",
    "hostname": "data.kleintools.com"
  },
  {
    "protocol": "https",
    "hostname": "hausoftools.com"
  },
  {
    "protocol": "https",
    "hostname": "images.salsify.com"
  },
  {
    "protocol": "https",
    "hostname": "media.fluke.com"
  },
  {
    "protocol": "https",
    "hostname": "res.cloudinary.com"
  },
  {
    "protocol": "https",
    "hostname": "toolup.com"
  },
  {
    "protocol": "https",
    "hostname": "vetopropac.com"
  },
  {
    "protocol": "https",
    "hostname": "www.acmetools.com"
  },
  {
    "protocol": "https",
    "hostname": "www.contractortool.com"
  },
  {
    "protocol": "https",
    "hostname": "www.extech.com"
  },
  {
    "protocol": "https",
    "hostname": "www.milwaukeetool.com"
  },
  {
    "protocol": "https",
    "hostname": "www.streamlight.com"
  },
  {
    "protocol": "https",
    "hostname": "www.wihatools.com"
  }
] },
};
export default nextConfig;
