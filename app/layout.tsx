import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gbemisola Oladetoun | Software Engineer",
  description: "Software Engineer, Speaker, and Tech Community Leader. Building modern web applications with React, Next.js, Vue.js, and Web3 technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-black text-accent`}>
        <Header />
        <main className="min-h-screen pt-[73px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
