import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Own A Plot — Premium Managed Land Ventures",
  description:
    "Thoughtfully planned land ventures designed for tomorrow's growth. Discover verified ventures, transparent ownership, and a life closer to nature.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans text-body antialiased">
        <Navbar />
        <Reveal>
          <main>{children}</main>
        </Reveal>
        <Footer />
      </body>
    </html>
  );
}
