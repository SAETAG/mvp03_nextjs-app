import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "A modern web application built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground flex flex-col min-h-screen`}>
        <Header /> {/* ✅ すべてのページに共通のヘッダー */}
        <main className="flex-grow p-4">{children}</main> {/* ✅ 各ページの内容がここに入る */}
        <Footer /> {/* ✅ すべてのページに共通のフッター */}
      </body>
    </html>
  );
}
