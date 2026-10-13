import styles from './ProductFeedback.module.css';
import {affiliateUrl} from '@/lib/affiliate';
import {getProductRating} from '@/lib/product-ratings';
export function ProductRating({trade,brand,model,amazonUrl,compact=false,tone="dark"}:{trade:string;brand:string;model:string;amazonUrl:string;compact?:boolean;tone?:"dark"|"light"}) {
  const r=getProductRating(trade,brand,model);
  if(!r)return <aside className={compact ? `${styles.compactRating} ${tone === "light" ? styles.lightRating : ""}` : styles.rating} aria-label={`Customer reviews for ${brand} ${model}`} data-amazon-reviews={`${trade}/${brand}/${model}`}>
    <div className={compact ? styles.compactRatingRow : undefined}><span aria-hidden="true" className={styles.unratedStars}>☆☆☆☆☆</span><a href={affiliateUrl(amazonUrl,trade)} data-trade={trade} data-product={`${brand} ${model}`} target="_blank" rel="sponsored nofollow noopener noreferrer">See customer reviews on Amazon ↗</a></div>
  </aside>;
  const countText=r.countDisplay || r.count.toLocaleString('en-US');
  const checked=new Intl.DateTimeFormat('en-US',{month:'short',day:'numeric',year:'numeric',timeZone:'UTC'}).format(new Date(`${r.checkedDate}T00:00:00Z`));
  const stars=<span aria-hidden="true" className={styles.fractionalStars}><span>★★★★★</span><span className={styles.starFill} style={{width:`${r.value/5*100}%`}}>★★★★★</span></span>;
  if(compact)return <aside className={`${styles.compactRating} ${tone === "light" ? styles.lightRating : ""}`} aria-label={`${r.source} customer rating ${r.value} out of 5 for ${brand} ${r.modelNumber}`} data-product-rating={r.productId}>
    <div className={styles.compactRatingRow}><strong>{r.value.toFixed(1)}</strong>{stars}<a href={affiliateUrl(amazonUrl,trade)} data-trade={trade} data-product={`${brand} ${model}`} target="_blank" rel="sponsored nofollow noopener noreferrer" aria-label={`View ${brand} ${model} on Amazon; displayed rating from ${r.source}`} title={`View this tool on Amazon. Rating shown is from ${r.source}.`}>({countText}) ↗</a></div>
    <span className={styles.ratingSource}>{r.source} customer rating · Checked {checked}</span>
    <details className={styles.ratingDetails}><summary>About this rating</summary><p>{r.note}</p></details>
  </aside>;
  return <aside className={styles.rating} aria-label={`${r.source} customer rating ${r.value} out of 5 for ${brand} ${r.modelNumber}`} data-product-rating={r.productId}>
    <div>{stars}<strong>{r.value} / 5</strong><span>from {countText} customer reviews on {r.source}</span></div>
    <p>{r.note} Checked {new Intl.DateTimeFormat('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'}).format(new Date(`${r.checkedDate}T00:00:00Z`))}.</p>
    <a href={affiliateUrl(amazonUrl,trade)} data-trade={trade} data-product={`${brand} ${model}`} target="_blank" rel="sponsored nofollow noopener noreferrer">View this tool on Amazon ↗</a>
  </aside>;
}
