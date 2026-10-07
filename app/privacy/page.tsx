import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy & Cookies", description: "How TradeGear HQ uses optional analytics cookies and affiliate links.",
  alternates: { canonical: "/privacy/" },
};
export default function PrivacyPage() {
  return <article className="shell" style={{maxWidth:800,paddingTop:48,paddingBottom:64}}>
    <h1>Privacy & cookies</h1>
    <p>TradeGear HQ publishes tool buying guides and affiliate links. This page explains the optional analytics used on this website.</p>
    <h2>Optional Google Analytics</h2>
    <p>If you accept analytics, Google Analytics 4 records visits, pages viewed, device and browser information, approximate location, and interactions such as clicks to Amazon. Analytics cookies distinguish visits. We do not send names, email addresses or contact-form details as custom analytics events.</p>
    <p>The Google Analytics tag is blocked until you accept. Advertising consent remains disabled. You can decline and use the website normally, or change your choice using Cookie settings at the bottom of the page. Withdrawing consent stops future collection; it does not erase data already collected.</p>
    <p>We store your cookie preference in your browser so you do not need to choose on every page. Your browser settings can also clear cookies and local storage.</p>
    <p>Learn <a href="https://policies.google.com/technologies/partner-sites" rel="noopener noreferrer" target="_blank">how Google uses information from sites that use its services</a>, or use the <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener noreferrer" target="_blank">Google Analytics opt-out browser add-on</a>.</p>
    <h2>Hosting and affiliate links</h2>
    <p>Vercel hosts this website and processes requests and technical logs to deliver and secure the site. If you follow an Amazon link, Amazon handles your visit under its own privacy and cookie policies. Affiliate links contain our associate tracking tag, and qualifying purchases may earn us a commission.</p>
    <h2>Contact</h2>
    <p>For questions about this website’s analytics, contact <a href="mailto:robbie@aigen.ie">robbie@aigen.ie</a>.</p>
  </article>;
}
