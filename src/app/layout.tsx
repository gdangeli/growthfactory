import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GrowthFactory — Dein KI Growth Manager",
  description: "Verbinde deinen Shop, erhalte wöchentlich konkrete Wachstums-Empfehlungen. Wie ein Growth Manager — ohne die CHF 8'000/Monat.",
  keywords: ["growth manager", "KI", "e-commerce", "schweiz", "shopify", "wachstum"],
  openGraph: {
    title: "GrowthFactory — Dein KI Growth Manager",
    description: "Verbinde deinen Shop, erhalte wöchentlich konkrete Wachstums-Empfehlungen.",
    url: "https://growthfactory.ch",
    siteName: "GrowthFactory",
    locale: "de_CH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
