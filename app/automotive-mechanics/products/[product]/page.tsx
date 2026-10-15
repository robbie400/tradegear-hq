import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {automotiveEnabled,automotiveProducts,getAutomotiveProduct} from '@/lib/automotive-catalog';
import {AutomotiveProductPage} from '@/components/Automotive';
export function generateStaticParams(){return automotiveEnabled?automotiveProducts.map(p=>({product:p.id})):[];}
export async function generateMetadata({params}:{params:Promise<{product:string}>}):Promise<Metadata>{const {product}=await params;const p=getAutomotiveProduct(product);return p?{title:`${p.brand} ${p.model}: ${p.name}`,description:p.intro,robots:{index:false,follow:false},alternates:{canonical:`/automotive-mechanics/products/${p.id}/`}}:{};}
export default async function Page({params}:{params:Promise<{product:string}>}){const {product}=await params;const p=getAutomotiveProduct(product);if(!automotiveEnabled||!p)notFound();return <AutomotiveProductPage product={p}/>;}
