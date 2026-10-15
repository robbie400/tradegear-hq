/** Read-only integration surface for the separately developed planner. No planner UI or rules. */
import {guides} from './data';
import {automotiveEnabled,automotiveProducts,automotiveTrade} from './automotive-catalog';
import {affiliateUrl} from './affiliate';
import {apprenticeEssentials,type TradeSlug} from './apprentice-essentials';

export type ToolkitCatalogueProduct = {
  id:string;
  kind:'catalogue'|'essential';
  brand:string;
  model:string;
  name:string;
  familyIds:readonly string[];
  trades:readonly string[];
  advice:string;
  amazon:{url:string;status:'matched'|'model-mismatch'|'existing-destination'};
  placements:readonly {trade:string;guideHref:string;detailHref:string}[];
};

// Explicit capabilities, not a blanket claim that every item in a comparison has the same role.
// This makes the existing tape reusable across trades without adding records or reviews.
const sharedFamilies:Record<string,{familyIds:string[];trades:TradeSlug[]}>= {
  'stanley-33-725':{familyIds:['tape-measure'],trades:['electricians','plumbers','hvac','carpenters','home-inspectors']},
};

export function getToolkitProducts():ToolkitCatalogueProduct[] {
  const products=new Map<string,ToolkitCatalogueProduct>();
  for(const guide of guides){
    for(const [index,product] of guide.products.entries()){
      const id=product.productId || product.reviewSlug?.replace(/-review$/,'') || `${guide.slug}-${index+1}`;
      const placement={trade:guide.trade,guideHref:`/${guide.trade}/${guide.slug}/`,detailHref:guide.trade===automotiveTrade ? `/automotive-mechanics/products/${id}/` : product.reviewSlug ? `/reviews/${product.reviewSlug}/` : `/${guide.trade}/${guide.slug}/#pick-${index+1}`};
      const existing=products.get(id);
      if(existing){
        products.set(id,{...existing,trades:[...new Set([...existing.trades,guide.trade])],placements:[...existing.placements,placement]});
      }else{
        const shared=sharedFamilies[id];
        products.set(id,{id,kind:'catalogue',brand:product.brand,model:product.model,name:`${product.brand} ${product.model}`,familyIds:shared?.familyIds || [],trades:[...new Set([guide.trade,...shared?.trades || []])],advice:product.assessment?.intro || product.role,amazon:{url:product.url,status:'existing-destination'},placements:[placement]});
      }
    }
  }
  for(const product of apprenticeEssentials){
    const crossTrade=products.get(product.id);
    if(crossTrade){
      if(!crossTrade.trades.includes(automotiveTrade))throw new Error(`Duplicate toolkit product ID: ${product.id}`);
      products.set(product.id,{...crossTrade,kind:'essential',brand:product.brand,model:product.model,name:product.name,familyIds:[...new Set([...crossTrade.familyIds,product.familyId])],trades:[...new Set([...crossTrade.trades,...product.trades])],advice:product.advice,amazon:product.amazon,placements:[...crossTrade.placements,...product.trades.map(trade=>({trade,guideHref:`/${trade}/tools/#tools-apprentice-essentials`,detailHref:`/${trade}/tools/#essential-${product.id}`}))]});
      continue;
    }
    products.set(product.id,{id:product.id,kind:'essential',brand:product.brand,model:product.model,name:product.name,familyIds:[product.familyId],trades:product.trades,advice:product.advice,amazon:product.amazon,placements:product.trades.map(trade=>({trade,guideHref:`/${trade}/tools/#tools-apprentice-essentials`,detailHref:`/${trade}/tools/#essential-${product.id}`}))});
  }
  if(automotiveEnabled)for(const product of automotiveProducts){
    const current=products.get(product.id)!;
    // Automotive lookups use this exact offer; other trades keep their established record.
    products.set(product.id,{...current,familyIds:[...new Set([...current.familyIds,...product.familyIds])],trades:[...new Set([...current.trades,automotiveTrade])]});
  }
  return [...products.values()];
}
export function getToolkitProductById(id:string){return getToolkitProducts().find(product=>product.id===id);}
export function getToolkitProductsByFamily(familyId:string,trade?:string){
  return getToolkitProducts().filter(product=>product.familyIds.includes(familyId) && (!trade || product.trades.includes(trade)));
}
export function getToolkitProductsForTrade(trade:string){return getToolkitProducts().filter(product=>product.trades.includes(trade));}
export function getToolkitPurchaseUrl(id:string,trade:string){
  const product=getToolkitProductById(id);
  if(!product || !product.trades.includes(trade) || product.amazon.status==='model-mismatch')return undefined;
  const automotive=automotiveEnabled && trade===automotiveTrade ? automotiveProducts.find(p=>p.id===id):undefined;
  return affiliateUrl(automotive?.amazonUrl || product.amazon.url,trade);
}
