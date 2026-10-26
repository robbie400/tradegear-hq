import {canonicalPath} from '@/lib/site-urls';
import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {automotiveEnabled,automotiveProducts,getAutomotiveProduct} from '@/lib/automotive-catalog';
import {getAutomotiveReview} from '@/lib/automotive-reviews';
import {AutomotiveProductPage} from '@/components/Automotive';
export function generateStaticParams(){return automotiveEnabled?automotiveProducts.map(p=>({product:p.id})):[];}
export async function generateMetadata({params}:{params:Promise<{product:string}>}):Promise<Metadata>{const {product}=await params;const p=getAutomotiveProduct(product);return p?{title:getAutomotiveReview(p).title,description:getAutomotiveReview(p).meta,robots:process.env.NEXT_PUBLIC_INDEX_SITE==='true'?{index:true,follow:true}:{index:false,follow:false},alternates:{canonical:canonicalPath(`/automotive-mechanics/products/${p.id}/`)}}:{};}
export default async function Page({params}:{params:Promise<{product:string}>}){const {product}=await params;const p=getAutomotiveProduct(product);if(!automotiveEnabled||!p)notFound();return <AutomotiveProductPage product={p}/>;}
