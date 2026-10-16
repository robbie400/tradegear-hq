import { affiliateUrl } from "@/lib/affiliate";
import { ProductRating } from "./ProductRating";
import { FeedbackAvatar } from "./FeedbackAvatar";
import type {ProductFeedback as FeedbackRecord} from "@/lib/product-feedback";
import { getProductFeedbacks } from "@/lib/product-feedback";
import styles from "./ProductFeedback.module.css";

export function ProductFeedback({ trade, brand, model, productId, amazonUrl, showRating=true, verifiedFeedback }: {
  trade: string; brand: string; model: string; productId?: string; amazonUrl:string; showRating?:boolean; verifiedFeedback?:FeedbackRecord[];
}) {
  const rating = showRating ? <ProductRating trade={trade} brand={brand} model={model} amazonUrl={amazonUrl} compact tone="light" /> : null;
  const feedbacks = verifiedFeedback ?? getProductFeedbacks(trade, brand, model, productId);
  if (!feedbacks.length) return rating;
  const automotive=trade==='automotive-mechanics';
  return (
    <>{rating}{automotive && <div className={styles.ownerHeading}><span className={styles.eyebrow}>FROM OWNERS &amp; USERS</span><h2>In their own words</h2><p>Selected feedback from the linked sources, with the useful context kept in view.</p></div>}{feedbacks.map(feedback=><aside key={`${feedback.productId}/${feedback.author}`} className={`${styles.card}${automotive ? ` ${styles.automotiveCard}` : ''}`} aria-label={`Customer feedback for ${brand} ${model}`} data-feedback-product={feedback.productId}>
      <div className={styles.heading}>
        <span className={styles.eyebrow}>{automotive ? `${brand} ${model} · USER PERSPECTIVE` : 'FROM THE TOOL COMMUNITY'}</span>
      </div>
      <div className={styles.body}>
        <FeedbackAvatar key={feedback.productId} initials={feedback.avatar} src={feedback.portrait?.src} />
        <div className={styles.copy}>
          {feedback.quote ? <blockquote className={styles.pullQuote}>“{feedback.quote}”</blockquote> : <p className={styles.summary}>{feedback.summary}</p>}
          {automotive && feedback.quote && <p className={styles.ownerContext}>{feedback.summary}</p>}
          <div className={styles.person}><strong>{feedback.author}</strong><span>{feedback.context}</span></div>
        </div>
      </div>
      <div className={styles.footer}>
        {automotive ? <a className={styles.sourceLink} href={feedback.url} target="_blank" rel="noopener noreferrer">Source: {feedback.source} ↗</a> : <span className={styles.match}>{feedback.match === "Tool family" ? "Tool-family discussion" : "Product discussion"}</span>}
        <a href={affiliateUrl(amazonUrl, trade)} data-trade={trade} data-product={`${brand} ${model}`} target="_blank" rel="sponsored nofollow noopener noreferrer">View this tool on Amazon ↗</a>
      </div>
      <details className={styles.notes}>
        <summary>About this feedback</summary>
        <p>{feedback.quote ? "Short quotation of customer feedback" : "Summary of customer feedback"} from {feedback.source}. Individual experiences may differ.</p>
        {verifiedFeedback && <p><a href={feedback.url} target="_blank" rel="noopener noreferrer">Read the source feedback</a>. {feedback.caveat}</p>}
        {feedback.portrait && <p>Reviewer photo: <a href={feedback.portrait.sourceUrl} target="_blank" rel="noopener noreferrer">{feedback.portrait.credit}</a>.</p>}
        {feedback.match === "Tool family" && <p>This discussion concerns the tool family; the model or supplied accessories may differ from the configuration on this page.</p>}
      </details>
    </aside>)}</>
  );
}
