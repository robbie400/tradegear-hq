import type { Metadata } from "next";
export const metadata: Metadata = {
 title: "Privacy & Cookies", description: "How TradeGear HQ handles hosting information and affiliate links.",
 alternates: { canonical: "/privacy/" },
};
export default function PrivacyPage() {
 return <article className="shell" style={{maxWidth:800,paddingTop:48,paddingBottom:64}}>
 <h1>Privacy & cookies</h1>
 <p>TradeGear HQ publishes tool buying guides and affiliate links.</p>
 <h2>Website analytics</h2>
 <p>Google Analytics is disabled on this website. We do not use it to record your visits or Amazon link clicks. Your browser settings can clear cookies and local storage retained from earlier visits.</p>
 <h2>Hosting and affiliate links</h2>
 <p>Vercel hosts this website and processes requests and technical logs to deliver and secure the site. If you follow an Amazon link, Amazon handles your visit under its own privacy and cookie policies. Affiliate links contain our associate tracking tag, and qualifying purchases may earn us a commission.</p>
 <h2>Contact</h2>
 <p>For privacy questions, contact <a href="mailto:robbie@aigen.ie">robbie@aigen.ie</a>.</p>
 </article>;
}
