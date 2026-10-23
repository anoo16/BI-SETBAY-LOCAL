import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "BI SETBAY | Dashboard Analisis", description: "Business Intelligence SETBAY berdasarkan data Excel riil" };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="id"><body>{children}</body></html>; }
