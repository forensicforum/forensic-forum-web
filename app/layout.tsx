import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Forensic Forum",
  description: "Cultivating the Next Generation of Forensic Speech & Debate Leaders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* This is the magic line that paints the whole app dark charcoal */}
      <body className={`${inter.className} min-h-screen bg-[#12161A] text-white font-sans flex flex-col justify-between`}>
        
        <Header />
        
        {children}
        
        <Footer />
        
      </body>
    </html>
  );
}