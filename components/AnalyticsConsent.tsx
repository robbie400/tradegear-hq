"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";

type Choice = "accepted" | "declined";
type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};
const consentKey = "tradegear-analytics-consent";
const ownerKey = "tradegear-analytics-owner";

export function AnalyticsConsent() {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const enabled = process.env.NEXT_PUBLIC_INDEX_SITE === "true" && !!id && /^G-[A-Z0-9]+$/.test(id);
  const [choice, setChoice] = useState<Choice | null>(null);
  const [ready, setReady] = useState(false);
  const [settings, setSettings] = useState(false);
  const [ownerExcluded, setOwnerExcluded] = useState(false);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const owner = params.get("_owner");
      if (owner === "1") {
        localStorage.setItem(ownerKey, "1");
        params.delete("_owner");
        window.history.replaceState(null, "", window.location.pathname + (params.toString() ? `?${params.toString()}` : "") + window.location.hash);
      } else if (owner === "0") {
        localStorage.removeItem(ownerKey);
        params.delete("_owner");
        window.history.replaceState(null, "", window.location.pathname + (params.toString() ? `?${params.toString()}` : "") + window.location.hash);
      }
      const isOwner = localStorage.getItem(ownerKey) === "1";
      setOwnerExcluded(isOwner);
      const saved = localStorage.getItem(consentKey);
      if (saved === "accepted" || saved === "declined") setChoice(saved);
    } catch { /* A visitor can still choose without persistent storage. */ }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!enabled || ownerExcluded || choice !== "accepted" || !id) return;
    const w = window as AnalyticsWindow;
    w.dataLayer = w.dataLayer || [];
    // Google processes the standard gtag arguments queue.
    w.gtag = w.gtag || function () {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer!.push(arguments);
    };
    if (!document.getElementById("tradegear-ga-configured")) {
      const marker = document.createElement("meta");
      marker.id = "tradegear-ga-configured";
      document.head.appendChild(marker);
      w.gtag("consent", "default", {
        analytics_storage: "granted", ad_storage: "denied",
        ad_user_data: "denied", ad_personalization: "denied",
      });
      w.gtag("js", new Date());
      w.gtag("config", id, { allow_google_signals: false, allow_ad_personalization_signals: false });
    }
    const track = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(link instanceof HTMLAnchorElement)) return;
      const url = new URL(link.href);
      if (url.hostname !== "amazon.com" && !url.hostname.endsWith(".amazon.com")) return;
      w.gtag?.("event", "affiliate_click", {
        retailer: "Amazon", link_domain: url.hostname,
        page_path: window.location.pathname,
        trade: link.dataset.trade || "other",
        product_name: (link.dataset.product || "Unknown tool").slice(0, 100),
        affiliate_tag: url.searchParams.get("tag") || "",
        transport_type: "beacon",
      });
    };
    document.addEventListener("click", track);
    return () => document.removeEventListener("click", track);
  }, [choice, enabled, id, ownerExcluded]);

  function choose(next: Choice) {
    try { localStorage.setItem(consentKey, next); } catch { /* Optional persistence. */ }
    if (choice === "accepted" && next === "declined") {
      (window as AnalyticsWindow).gtag?.("consent", "update", { analytics_storage: "denied" });
      for (const item of document.cookie.split(";")) {
        const name = item.trim().split("=")[0];
        if (name !== "_ga" && !name.startsWith("_ga_")) continue;
        for (const domain of ["", window.location.hostname, `.${window.location.hostname}`]) {
          document.cookie = `${name}=; Max-Age=0; path=/;${domain ? ` domain=${domain};` : ""}`;
        }
      }
      window.location.reload();
      return;
    }
    setChoice(next);
    setSettings(false);
  }

  if (!enabled || !ready || ownerExcluded) return null;
  return <>
    {choice === "accepted" && <Script id="tradegear-google-analytics" src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />}
    <button className="analytics-settings" onClick={() => setSettings(true)}>Cookie settings</button>
    {(choice === null || settings) && <section className="analytics-consent" aria-label="Analytics cookie preferences">
      <div><b>Your privacy choices</b><p>Optional Google Analytics cookies help us understand page visits and Amazon link clicks. You can browse without accepting them. <Link href="/privacy/">Privacy & cookies</Link></p></div>
      <div className="analytics-actions"><button onClick={() => choose("declined")}>Decline analytics</button><button onClick={() => choose("accepted")}>Accept analytics</button></div>
    </section>}
  </>;
}
