import styles from './ProductFeedback.module.css';
// A dated snapshot from the exact product's manufacturer page. Never a site rating.
export function ProductRating({trade,brand,model}:{trade:string;brand:string;model:string}) {
  if (trade !== 'hvac' || brand !== 'Appion' || !model.startsWith('G5Twin')) return null;
  return <aside className={styles.rating} aria-label="Appion customer rating for G5Twin" data-product-rating="appion-g5twin">
    <div><span aria-hidden="true" className={styles.stars}>★★★★★</span> <strong>5 / 5</strong> <span>from 2 customer reviews on Appion</span></div>
    <p>Manufacturer-hosted rating, checked October 7, 2026. A small review sample; ratings can change.</p>
    <a href="https://appiontools.com/g5twin/" target="_blank" rel="noopener noreferrer">View the current rating and reviews ↗</a>
  </aside>;
}
