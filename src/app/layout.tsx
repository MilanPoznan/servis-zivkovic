import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Autoservis i Šlep Služba Živković",
  telephone: "+381655703879",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Beograd",
    addressRegion: "Beograd",
    addressCountry: "RS",
  },
  description:
    "Šlep služba i autoservis u Beogradu. Slepamo vaše vozilo direktno u naš servis. Klima servis. Dostupni 0-24.",
  openingHours: "Mo-Su 00:00-24:00",
  areaServed: "Beograd i okolina",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Usluge",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Šlep služba Beograd",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Autoservis Beograd – mehanička radionica",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Klima servis automobila Beograd",
        },
      },
    ],
  },
};

export const metadata: Metadata = {
  title: "Šlep Služba Beograd | Autoservis Živković – 065 570 3879",
  description:
    "Šlep služba i autoservis Beograd – Živković. Slepamo vaš auto direktno u naš servis. Dostupni 0-24. Klima servis automobila. Pozovite 065 570 3879.",
  openGraph: {
    title: "Šlep Služba Beograd | Autoservis Živković – 065 570 3879",
    description:
      "Šlep služba i autoservis Beograd – Živković. Slepamo vaš auto direktno u naš servis. Dostupni 0-24. Klima servis.",
    locale: "sr_RS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${barlowCondensed.variable} ${inter.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
