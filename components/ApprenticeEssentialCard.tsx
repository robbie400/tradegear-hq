import {affiliateUrl} from '@/lib/affiliate';
import Image from 'next/image';
import type {ApprenticeEssential} from '@/lib/apprentice-essentials';
import styles from './ApprenticeEssentialCard.module.css';

export function ApprenticeEssentialCard({product,trade}:{product:ApprenticeEssential;trade:string}) {
  const canBuy=product.amazon.status==='matched';
  return <article id={`essential-${product.id}`} className={styles.card} data-essential-id={product.id}>
    {product.image && <figure className={styles.photo}><Image src={product.image.src} alt={product.image.alt} width={1000} height={306} sizes="(max-width: 650px) 75vw, (max-width: 980px) 40vw, 28vw"/><figcaption>Photo: {product.brand}</figcaption></figure>}
    <div className={styles.top}>
      {!product.image &&
      <div className={styles.placeholder} aria-label="Product photo unavailable">
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="m24 7 16 9v17l-16 9-16-9V16l16-9Z"/><path d="m8 16 16 9 16-9M24 25v17M16 11.5l16 9"/></svg>
      </div>}
      <div><span className={styles.brand}>{product.brand} · {product.model}</span><h3>{product.name}</h3></div>
    </div>
    <p className={styles.advice}>{product.advice}</p>
    {canBuy ? <a className={styles.buy} href={affiliateUrl(product.amazon.url,trade)} target="_blank" rel="sponsored nofollow noopener noreferrer" data-trade={trade} data-product={`${product.brand} ${product.model}`} data-product-id={product.id}>View on Amazon <span aria-hidden="true">↗</span></a> : <p className={styles.pending}>Exact Amazon model being checked. Purchase link coming once confirmed.</p>}
  </article>;
}
