"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./ProductFeedback.module.css";

export function FeedbackAvatar({ initials, src }: { initials: string; src?: string }) {
  const [failed, setFailed] = useState(false);
  return <span className={styles.avatar} aria-hidden="true">
    {src && !failed ? <Image src={src} alt="" width={54} height={54} className={styles.portrait} unoptimized loading="lazy" referrerPolicy="no-referrer" onError={() => setFailed(true)} /> :
      initials || <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H7l-4 3v-7A7.5 7.5 0 1 1 20 11.5Z"/><path d="M8 10h8M8 14h5"/></svg>}
  </span>;
}
