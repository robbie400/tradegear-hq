import styles from './ProductFeedback.module.css';
import {getProductRating} from '@/lib/product-ratings';
export function ProductRating({trade,brand,model}:{trade:string;brand:string;model:string}) {
  const r=getProductRating(trade,brand,model);if(!r)return null;
  return <aside className={styles.rating} aria-label={`${r.source} customer rating ${r.value} out of 5 for ${brand} ${r.modelNumber}`} data-product-rating={r.productId}>
    <div><span aria-hidden="true" className={styles.fractionalStars}><span>★★★★★</span><span className={styles.starFill} style={{width:`${r.value/5*100}%`}}>★★★★★</span></span><strong>{r.value} / 5</strong><span>from {r.count.toLocaleString('en-US')} customer reviews on {r.source}</span></div>
    <p>{r.note} Checked {new Intl.DateTimeFormat('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'}).format(new Date(`${r.checkedDate}T00:00:00Z`))}.</p>
    <a href={r.url} target="_blank" rel="noopener noreferrer">View the current rating and reviews ↗</a>
  </aside>;
}
