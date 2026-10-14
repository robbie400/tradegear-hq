import {guides,hubs,getHub} from './data';
import {getReview} from './reviews';
import {getProductImage} from './product-images';
import {normalizeToolSearch} from './tool-search';

export function getToolDirectory(trade:string){
  const hub=getHub(trade);
  if(!hub)return undefined;
  const categories=guides.filter(g=>g.trade===trade);
  const seenGroups=new Set<string>();
  const groups=categories.flatMap(g=>{
    const key=normalizeToolSearch(g.cluster);
    if(seenGroups.has(key))return [];
    seenGroups.add(key);
    return [{slug:g.slug,name:g.cluster}];
  });
  const products=categories.flatMap(g=>g.products.map((p,index)=>{
    const standalone=p.reviewSlug ? getReview(p.reviewSlug) : undefined;
    const id=p.productId || p.reviewSlug?.replace(/-review$/,'') || `${g.slug}-${index+1}`;
    return {id,brand:p.brand,model:p.model,role:p.role,amazonUrl:p.url,cluster:g.cluster,categorySlug:g.slug,
      groupAnchor:index===0 ? `tools-${g.slug}` : undefined,
      searchText:normalizeToolSearch(`${p.brand} ${p.model} ${p.role} ${g.cluster}`),
      detailHref:standalone ? `/reviews/${standalone.slug}/` : `/${trade}/${g.slug}/#pick-${index+1}`,
      detailLabel:standalone ? 'Read full product review →' : 'View tool details & comparison →',
      intro:p.assessment?.intro,
      photo:getProductImage(p.productId || p.reviewSlug || `${p.brand} ${p.model}`)};
  }));
  return {hub,categories,groups,products};
}

export type GlobalToolSearchItem={id:string;name:string;href:string;trades:string[];searchText:string};
export function getGlobalToolSearchItems():GlobalToolSearchItem[]{
  const items=new Map<string,GlobalToolSearchItem>();
  for(const hub of hubs){
    const directory=getToolDirectory(hub.slug);
    if(!directory)continue;
    for(const product of directory.products){
      const existing=items.get(product.id);
      if(existing){
        existing.trades.push(hub.name);
        existing.searchText+=` ${product.searchText} ${normalizeToolSearch(hub.name)}`;
      }else{
        items.set(product.id,{id:product.id,name:`${product.brand} ${product.model}`,href:product.detailHref,trades:[hub.name],searchText:`${product.searchText} ${normalizeToolSearch(hub.name)}`});
      }
    }
  }
  return [...items.values()];
}
