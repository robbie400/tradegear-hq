"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProductImage } from "@/lib/product-images";

export function ProductPhoto({ photo, className = "", priority = false, credit = false, linkCredit=true }: {
  photo?: ProductImage; className?: string; priority?: boolean; credit?: boolean; linkCredit?:boolean;
}) {
  const [imageStatus, setImageStatus] = useState<"optimized" | "original" | "failed">("optimized");
  if (!photo) return null;
  const bounds=photo.contentBounds;
  const imageStyle=bounds?{objectFit:"fill" as const,padding:0,width:`${bounds.imageWidth/bounds.width*100}%`,height:`${bounds.imageHeight/bounds.height*100}%`,left:`${-bounds.x/bounds.width*100}%`,top:`${-bounds.y/bounds.height*100}%`,right:"auto",bottom:"auto"}:undefined;
  const picture= imageStatus === "failed" ? <span className="photoFallback">{photo.alt}</span> : imageStatus === "original" ? <img style={imageStyle} src={photo.src} alt={photo.alt} loading={priority ? "eager" : "lazy"} decoding="async" onError={() => setImageStatus("failed")} /> : <Image style={imageStyle} unoptimized={photo.unoptimized} src={photo.src} alt={photo.alt} fill sizes={bounds ? "(max-width: 650px) 150vw, 900px" : className === "comparePhoto" ? "74px" : className === "hubProductPhoto" ? "(max-width: 650px) 90vw, 320px" : className === "" ? "160px" : "(max-width: 650px) 90vw, (max-width: 980px) 45vw, 420px"} priority={priority} onError={() => setImageStatus("original")} />;
  return (
    <figure className={`productPhoto ${className}`}>
      <div className={`productPhotoCanvas ${bounds?"framedProductCanvas":""}`}>
        {bounds ? <div className="productContentFrame" style={{width:`min(94cqw, ${94*bounds.width/bounds.height}cqh)`,aspectRatio:`${bounds.width} / ${bounds.height}`}}>{picture}</div> : picture}
      </div>
      {credit && <figcaption>Product image: {linkCredit ? <a href={photo.sourceUrl} target="_blank" rel="noopener noreferrer">{photo.credit}</a> : photo.credit}. Check the listing for included accessories.</figcaption>}
    </figure>
  );
}
