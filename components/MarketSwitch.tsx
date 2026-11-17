"use client";
import {usePathname} from "next/navigation";
import Link from "@/components/SiteLink";
import styles from "./MarketSwitch.module.css";

export function MarketSwitch(){
  const path=usePathname();
  const uk=path==="/uk" || path.startsWith("/uk/");
  const pairs = [
    ["/electricians/best-clamp-meters-for-electricians", "/uk/clamp-meters"],
    ["/electricians/best-fish-tapes-for-electricians", "/uk/cable-routing-rods"],
    ["/plumbers/best-tubing-cutters-for-plumbers", "/uk/copper-pipe-cutters"],
  ];
  const pair = pairs.find(([us, uk]) => path === us || path === uk);
  if (!pair) return null;
  const [us, counterpart] = pair;
  return <div className={styles.switch} role="group" aria-label="Tool marketplace">
    <span className={styles.hint}>Click for {uk ? "US" : "UK"} tools</span>
    <Link href={us} className={`${styles.button} ${styles.us}`} aria-label="US tools" aria-current={!uk ? "true" : undefined}>US</Link>
    <Link href={counterpart} className={`${styles.button} ${styles.uk}`} aria-label="UK tools" aria-current={uk ? "true" : undefined}>UK</Link>
  </div>;
}
