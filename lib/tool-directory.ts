import {guides,getHub} from './data';
import {getReview} from './reviews';
import {getProductImage} from './product-images';
import {normalizeToolSearch} from './tool-search';

export function getToolDirectory(trade:string){
  const hub=getHub(trade);
  if(!hub)return undefined;
  const categories=guides.filter(g=>g.trade===trade);
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
  return {hub,categories,products};
}
