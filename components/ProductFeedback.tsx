import { ProductRating } from "./ProductRating";
import { getProductFeedback, canShowFeedback } from "@/lib/product-feedback";
import styles from "./ProductFeedback.module.css";

export function ProductFeedback({ trade, brand, model, productId }: {
  trade: string; brand: string; model: string; productId?: string;
}) {
  const rating = <ProductRating trade={trade} brand={brand} model={model} />;
  const feedback = getProductFeedback(trade, brand, model, productId);
  if (!feedback || !canShowFeedback(feedback)) return rating;
  return (
    <>{rating}<aside className={styles.card} aria-label={`Customer feedback for ${brand} ${model}`} data-feedback-product={feedback.productId}>
      <div className={styles.heading}>
        <span className={styles.eyebrow}>FROM THE TOOL COMMUNITY</span>
        <span className={styles.draft}>{feedback.sourceConfirmed ? "Customer experience · source linked" : "Draft · source check pending"}</span>
      </div>
      <div className={styles.body}>
        <span className={styles.avatar} aria-hidden="true">
          {feedback.avatar || <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H7l-4 3v-7A7.5 7.5 0 1 1 20 11.5Z"/><path d="M8 10h8M8 14h5"/></svg>}
        </span>
        <div className={styles.copy}>
          <p className={styles.summary}>{feedback.summary}</p>
          <div className={styles.person}><strong>{feedback.author}</strong><span>{feedback.context}</span></div>
        </div>
      </div>
      <div className={styles.footer}>
        <span className={styles.match}>{feedback.match === "Tool family" ? "Family-level feedback" : "Exact-model source"}</span>
        <a href={feedback.url} target="_blank" rel="noopener noreferrer">Read on {feedback.source} ↗</a>
      </div>
      <details className={styles.notes}>
        <summary>About this feedback</summary>
        <p>Editorial paraphrase of source feedback, not a direct quotation or an endorsement of TradeGear HQ. {feedback.sourceConfirmed ? "The original source and displayed reviewer name were checked. This is feedback about the tool, not a review submitted to this website." : "The original comment still needs confirmation; this research card appears only in preview."}</p>
        <p>{feedback.caveat}</p>
      </details>
    </aside></>
  );
}
