import type { MetadataRoute } from "next";
export default function robots():MetadataRoute.Robots{const live=process.env.NEXT_PUBLIC_INDEX_SITE==="true";return{rules:live?{userAgent:"*",allow:"/"}:{userAgent:"*",disallow:"/"}}}
