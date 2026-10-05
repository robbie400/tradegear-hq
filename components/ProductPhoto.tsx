"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProductImage } from "@/lib/product-images";

export function ProductPhoto({ photo, className = "", priority = false, credit = false }: {
  photo?: ProductImage; className?: string; priority?: boolean; credit?: boolean;
}) {
  const [imageStatus, setImageStatus] = useState<"optimized" | "original" | "failed">("optimized");
  if (!photo) return null;
  return (
    <figure className={`productPhoto ${className}`}>
      <div className="productPhotoCanvas">
        {imageStatus === "failed" ? <span className="photoFallback">{photo.alt}</span> : imageStatus === "original" ? <img src={photo.src} alt={photo.alt} loading={priority ? "eager" : "lazy"} decoding="async" onError={() => setImageStatus("failed")} /> :
          <Image src={photo.src} alt={photo.alt} fill sizes={className === "comparePhoto" ? "74px" : className === "hubProductPhoto" ? "(max-width: 650px) 90vw, 320px" : className === "" ? "160px" : "(max-width: 650px) 90vw, (max-width: 980px) 45vw, 420px"} priority={priority} onError={() => setImageStatus("original")} />}
      </div>
      {credit && <figcaption>Product image: <a href={photo.sourceUrl} target="_blank" rel="noopener noreferrer">{photo.credit}</a>. Check the listing for included accessories.</figcaption>}
    </figure>
  );
}
