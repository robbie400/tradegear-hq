import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";
import "./workflow.css";
import "./editorial.css";
import { siteUrl } from "@/components/Editorial";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TradeGear HQ | Find the Right Tool for the Job",
    template: "%s | TradeGear HQ",
  },
  description:
    "Trade-specific tool buying guides for US electricians, plumbers, HVAC technicians and home inspectors.",
  robots:
    process.env.NEXT_PUBLIC_INDEX_SITE === "true"
      ? { index: true, follow: true }
      : { index: false, follow: false },
  alternates: { canonical: "/" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
