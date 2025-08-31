import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Agung Cahyo Prasetyo",
  description:  "Portofolio digital dan karya dari Agung Cahyo Prasetyo, front-end developer dan penulis konten reflektif.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${ovo.variable}`}>
  <body className="antialiased bg-light">

        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
