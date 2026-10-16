import {guides,hubs,getHub} from './data';
import {automotiveEnabled,automotiveProducts,automotivePhoto,automotiveTrade} from './automotive-catalog';
import {getReview} from './reviews';
import {getProductImage} from './product-images';
import {normalizeToolSearch} from './tool-search';
import {getApprenticeEssentialsForTrade} from './apprentice-essentials';

export function getToolDirectory(trade:string){
  const hub=getHub(trade);
  if(!hub)return undefined;
  const categories=guides.filter(g=>g.trade===trade);
  if(trade===automotiveTrade && automotiveEnabled){
    const names=[...new Set(automotiveProducts.map(p=>p.category))];
    return {hub,categories,groups:names.map((name,i)=>({name,slug:`automotive-${i}`})),essentials:[],products:automotiveProducts.map(p=>({id:p.id,brand:p.brand,model:p.model,role:p.name,amazonUrl:p.amazonUrl,cluster:p.category,categorySlug:categories.find(g=>g.products.some(x=>x.productId===p.id))!.slug,groupAnchor:automotiveProducts.find(x=>x.category===p.category)?.id===p.id?`tools-automotive-${names.indexOf(p.category)}`:undefined,searchText:normalizeToolSearch(`${p.brand} ${p.model} ${p.name} ${p.category} ${p.familyIds.join(' ')} ${p.advice}`),detailHref:`/automotive-mechanics/products/${p.id}/`,detailLabel:'Read product buying notes →',intro:p.intro,photo:automotivePhoto(p)}))};
  }
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
  const essentials=getApprenticeEssentialsForTrade(trade).map(product=>({
    ...product,
    searchText:normalizeToolSearch(`${product.brand} ${product.model} ${product.name} ${product.familyId} ${product.aliases.join(' ')} apprentice essentials starter kit`),
  }));
  return {hub,categories,groups,products,essentials};
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
    for(const product of directory.essentials){
      const existing=items.get(product.id);
      if(existing){
        existing.trades.push(hub.name);
        existing.searchText+=` ${normalizeToolSearch(hub.name)}`;
      }else{
        items.set(product.id,{id:product.id,name:`${product.brand} ${product.model} — ${product.name}`,href:`/${hub.slug}/tools/#essential-${product.id}`,trades:[hub.name],searchText:`${product.searchText} ${normalizeToolSearch(hub.name)}`});
      }
    }
  }
  return [...items.values()];
}
