import { ProductRating } from "./ProductRating";
import { FeedbackAvatar } from "./FeedbackAvatar";
import { getProductFeedback } from "@/lib/product-feedback";
import styles from "./ProductFeedback.module.css";

export function ProductFeedback({ trade, brand, model, productId }: {
  trade: string; brand: string; model: string; productId?: string;
}) {
  const rating = <ProductRating trade={trade} brand={brand} model={model} />;
  const feedback = getProductFeedback(trade, brand, model, productId);
  if (!feedback) return rating;
  return (
    <>{rating}<aside className={styles.card} aria-label={`Customer feedback for ${brand} ${model}`} data-feedback-product={feedback.productId}>
      <div className={styles.heading}>
        <span className={styles.eyebrow}>FROM THE TOOL COMMUNITY</span>
      </div>
      <div className={styles.body}>
        <FeedbackAvatar key={feedback.productId} initials={feedback.avatar} src={feedback.portrait?.src} />
        <div className={styles.copy}>
          <p className={styles.summary}>{feedback.summary}</p>
          <div className={styles.person}><strong>{feedback.author}</strong><span>{feedback.context}</span></div>
        </div>
      </div>
      <div className={styles.footer}>
        <span className={styles.match}>{feedback.match === "Tool family" ? "Tool-family discussion" : "Product discussion"}</span>
        <a href={feedback.url} target="_blank" rel="noopener noreferrer">Read on {feedback.source} ↗</a>
      </div>
      <details className={styles.notes}>
        <summary>About this feedback</summary>
        <p>Summary of feedback from the linked source. Individual experiences may differ.</p>
        {feedback.portrait && <p>Reviewer photo: <a href={feedback.portrait.sourceUrl} target="_blank" rel="noopener noreferrer">{feedback.portrait.credit}</a>.</p>}
        {feedback.match === "Tool family" && <p>This discussion concerns the tool family; the model or supplied accessories may differ from the configuration on this page.</p>}
      </details>
    </aside></>
  );
}
