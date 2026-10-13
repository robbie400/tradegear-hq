import batch25Feedback from './carpenter-batch25-feedback.json';
import batch30Feedback from './carpenter-batch30-feedback.json';
import type {ProductFeedback} from './product-feedback';
import {carpenterCatalogGuides} from './carpenter-catalog';
import {productRatings} from './product-ratings';

type Entry=[string,string,string,string,boolean?];
const entries:Entry[]=[
  ['dewalt-dcs590b','Broglin','Customer review · self-described builder/remodeler · source labels incentivized','Finds cordless movement convenient and describes easier everyday cutting.'],
  ['dewalt-dcs590b','red9r','Customer review · source labels giveaway entry','Is generally happy with the saw but reports difficulty obtaining the dust-extraction adapter described in the documentation.'],
  ['dewalt-dwe575sb','MisterBigDave','Customer review · self-described advanced DIY user','Reports clean finish cuts with a separate 60-tooth blade and likes the brake, cord and adjustment arrangement.'],
  ['dewalt-dwe575sb','Bob77','Customer review · self-described advanced DIY user','Likes the balance and handling but found the front plate obstructed the marked line on structural-lumber crosscuts and returned the saw.'],
  ['skil-5280-01','Joshua87','Manufacturer-hosted customer review','Uses it for occasional cuts and praises adjustment, straight cutting and its performance on thicker stock.'],
  ['skil-5280-01','Chuck luthier','Manufacturer-hosted customer review','Reports a positive project result after changing to a plywood blade, highlighting the importance of the blade as well as the saw.'],
  ['milwaukee-2834-20','LA36','Customer review · self-described owner/operator','Likes the freedom to move around the jobsite without a cord and describes a positive experience on a deck project.'],
  ['milwaukee-2834-20','Curt h30','Customer review · self-described lead crew member','Reports that the saw stopped starting after limited use. This is one owner’s fault report rather than a measured reliability rate.'],
  ['makita-xsh03z','ian57','Retailer-hosted customer review','Describes daily use and finds the smaller saw sufficient for most of their tasks, while suggesting a larger saw for the remaining work.'],
  ['makita-xsh03z','G1','Retailer-hosted customer review','Is buying another for trim work and values the carrying weight and cutting capability; their earlier saw had a damaged plate after a drop.'],
  ['dewalt-dws715','adamdrun','Customer review · homeowner/DIY context · source labels incentivized','Chose a quality first miter saw without every upgrade and describes straightforward setup and consistent cuts across projects.'],
  ['dewalt-dws715','Bojib','Customer review · advanced DIY context · source labels incentivized','Finds the saw a useful step up from a hand saw and miter box, while acknowledging that the 12-inch size exceeded some of their initial needs.'],
  ['dewalt-dws780','Tony80','Customer review · woodworking context · source labels incentivized','Describes nearly three years of jobsite use and especially likes the XPS cutline feature.'],
  ['dewalt-dws780','Bussard','Customer review · woodworking context · source labels incentivized','Used it during a large bookcase project and values repeatable shelf cuts and fitting trim.'],
  ['bosch-gcm12sd','DB68','Customer review · self-described advanced DIY user','Values the cutting capacity and articulated arm because the saw can sit close to a wall in their setup.'],
  ['bosch-gcm12sd','clH55','Manufacturer-hosted customer review','Likes the small-shop layout after adjusting setup and alignment, but is dissatisfied with the supplied dust-collection attachment.'],
  ['makita-ls1019l','GUILLERMO','Retailer-hosted customer review','Particularly appreciates the soft start compared with saws that react more abruptly at startup.'],
  ['makita-ls1019l','Iowaboy43','Retailer-hosted customer review','Reports three years of use and values the rail layout when positioning the saw near a wall.'],
  ['makita-ls1019l','R R','Retailer-hosted customer review','Describes disappointing wide-board cut alignment on two units and a further replacement being awaited.'],
  ['milwaukee-2505-20','D.Davies','Customer review · self-described long-time cabinet installer · originally posted on the kit','Values the tool’s versatility for cabinet and maintenance work after many years of installing kitchens.',true],
  ['milwaukee-2505-20','PSOSCOTT','Customer review · self-described owner/operator','Keeps it for offset and right-angle cabinet access but finds its power insufficient for some larger furniture fasteners.'],
  ['milwaukee-3404-20','K C Z','Customer review · self-described owner/operator · originally posted on the kit','Likes using the smaller drill for furniture assembly and a few holes instead of always carrying a full-size drill.',true],
  ['milwaukee-2904-20','R Fair','Customer review · self-described operations manager','Reports a positive experience with the drill’s power and considers the purchase good value for their work.'],
  ['dewalt-dcd805b','Nate 85','Manufacturer-hosted customer review · source labels incentivized','Likes the compact format, balance with their chosen battery and adjustable work light.'],
  ['makita-xph14z','Patricia','Retailer-hosted customer review','Praises the available power while noting that the tool feels somewhat heavy.'],
  ['makita-xph14z','BuilderBob','Retailer-hosted customer review','Describes a substantial, comfortable drilling tool and prefers it for longer drilling sessions.'],
  ['milwaukee-3453-20','Etools','Customer review · self-described field/shop worker','Likes the smaller format when they would prefer not to carry the M18 version.'],
  ['milwaukee-3453-20','ALC HMS LLC','Customer review · self-described owner/operator','Finds the compact driver useful for service work in confined areas.'],
  ['milwaukee-2953-20','Papadawg98','Customer review · self-described field/shop worker','Uses it for suitable driving tasks and likes the operating modes, while keeping a separate drill for holes.'],
  ['milwaukee-2953-20','mdk625','Customer review · self-described operations manager','Reports dependable use and likes how it fits with their other Milwaukee power tools.'],
  ['dewalt-dcf850b','wushdishmeen','Customer review · self-described advanced DIY user','Values the compact body, fast bit changes and selectable speeds for their range of fastening work.'],
  ['dewalt-dcf850b','Leoso','Customer review · self-described builder/remodeler','Reports shaft wobble that made the driver unsuitable for their intended use shortly after purchase.'],
  ['dewalt-dcf860b','Alternative wood designs','Manufacturer-hosted customer review · source labels incentivized','Likes the three-speed selection and adjustable lighting and prefers it to their earlier DeWalt impact driver.'],
  ['dewalt-dcf860b','BamX2','Manufacturer-hosted customer review · source labels incentivized','Finds the speed controls usable and values the brighter lighting and extended light setting.'],
  ['makita-xdt20z','Daniel','Retailer-hosted customer review','Reports effective wood-screw driving on a first project but describes a learning curve with the sensitive trigger.'],
  ['makita-xdt20z','Helge','Retailer-hosted customer review','Is pleased with the purchase and wishes they had bought the driver earlier.'],
];
const foundationFeedback:ProductFeedback[]=entries.map(([id,author,context,summary,family])=>{
  const p=carpenterCatalogGuides.flatMap(g=>g.products).find(p=>p.productId===id);
  const rating=productRatings.find(r=>r.trade==='carpenters'&&r.productId===id);
  if(!p||!rating)throw new Error(`Missing carpenter feedback match: ${id}`);
  return {productId:id,trade:'carpenters',brand:p.brand,modelNumber:p.model.split(' ')[0],author,avatar:author.split(/\s+/).map(v=>v[0]).join('').slice(0,2).toUpperCase(),context,summary,source:rating.source,url:rating.url,match:family?'Tool family':'Exact model',permission:'pending',sourceConfirmed:true,caveat:'Original source and displayed author confirmed October 12, 2026. Paraphrased individual experience; identity, trade qualification and purchase are not independently verified. No reviewer portrait was supplied.'};
});

export const carpenterFeedback:ProductFeedback[]=[...foundationFeedback,...batch30Feedback as ProductFeedback[],...batch25Feedback as ProductFeedback[]];
