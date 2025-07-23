import { Outfit, Ovo, } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700" ]
});

const ovo = Ovo({

  subsets: ["latin"], weight: ['400']
});

export const metadata = {
  title: "Agung Cahyo Prasetyo",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${ovo.className} antialiased bg-light`}
      >
        <Navbar/>
        {children}
        <Footer/>
        <Analytics/>
      </body>
    </html>
  );
}
