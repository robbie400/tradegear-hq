import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";
export const metadata:Metadata={title:{default:"TradeGear HQ | Find the Right Tool for the Job",template:"%s | TradeGear HQ"},description:"Trade-specific tool buying guides for US electricians, plumbers, HVAC technicians and home inspectors."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en-US"><body><Header/><main>{children}</main><Footer/></body></html>}
