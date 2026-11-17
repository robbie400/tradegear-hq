"use client";
import {usePathname} from "next/navigation";
import Link from "@/components/SiteLink";
import styles from "./MarketSwitch.module.css";

export function MarketSwitch(){
  const path=usePathname();
  const uk=path==="/uk" || path.startsWith("/uk/");
  const counterpart=path==="/electricians/best-clamp-meters-for-electricians" ? "/uk/clamp-meters"
    : path==="/electricians/best-fish-tapes-for-electricians" ? "/uk/cable-routing-rods" : "/uk";
  const us=path==="/uk/clamp-meters" ? "/electricians/best-clamp-meters-for-electricians"
    : path==="/uk/cable-routing-rods" ? "/electricians/best-fish-tapes-for-electricians" : "/";
  return <div className={styles.switch} role="group" aria-label="Tool marketplace">
    <span className={styles.hint}>Click for {uk ? "US" : "UK"} tools</span>
    <Link href={us} className={styles.button} aria-label="US tools" aria-current={!uk ? "true" : undefined}><span aria-hidden="true">🇺🇸</span> US</Link>
    <Link href={counterpart} className={styles.button} aria-label="UK tools" aria-current={uk ? "true" : undefined}><span aria-hidden="true">🇬🇧</span> UK</Link>
  </div>;
}
