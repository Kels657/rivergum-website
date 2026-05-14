import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rivergumservices.com.au"),
  title: "Window & Exterior Cleaning Eastern Suburbs Sydney | Rivergum Services",
  description:
    "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing across Sydney's Eastern Suburbs. Rivergum Services — fully insured, locally owned. Get a free quote today.",
  verification: {
    google: "cu4H9gaZXcZ-Vf76cqVwuJeFqu2ElvbmnoK4COrJatQ",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Rivergum Services",
  description:
    "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing across Sydney's Eastern Suburbs. Fully insured, locally owned.",
  telephone: "0439 881 460",
  email: "admin@rivergumservices.com.au",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Eastern Suburbs",
    addressRegion: "NSW",
    postalCode: "2000",
    addressCountry: "AU",
  },
  areaServed: [
    "Bondi", "Coogee", "Randwick", "Vaucluse", "Rose Bay", "Double Bay",
    "Surry Hills", "Paddington", "Woollahra", "Maroubra", "Bronte",
    "Tamarama", "Waverley", "Bellevue Hill",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Exterior Cleaning Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Window Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Window Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Solar Panel Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gutter Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pressure Washing" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
