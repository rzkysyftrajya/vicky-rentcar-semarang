import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PT.VRN SEMARANG 2025 | Rental Mobil Terpercaya & Murah di Semarang",
  description:
    "Jasa rental mobil terpercaya di Semarang 2025 dengan pengalaman 8+ tahun. Armada lengkap, driver bersertifikat, layanan 24/7. Harga mulai 300rb/hari.",
  keywords: [
    "rental mobil semarang 2025",
    "sewa mobil semarang murah",
    "rental mobil driver semarang",
    "sewa mobil lepas kunci semarang",
  ].join(", "),
  authors: [{ name: "PT.VRN SEMARANG" }],
  creator: "PT.VRN SEMARANG",
  publisher: "PT.VRN SEMARANG",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://cvatsrentcar.com",
    siteName: "PT.VRN SEMARANG",
    title: "PT.VRN SEMARANG 2025 | Rental Mobil Terpercaya & Murah",
    description:
      "Jasa rental mobil terpercaya di Semarang dengan pengalaman 8+ tahun. Armada lengkap, driver bersertifikat, layanan 24/7. Harga mulai 300rb/hari.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=PT.VRN+SEMARANG",
        width: 1200,
        height: 630,
        alt: "PT.VRN SEMARANG - Rental Mobil Terpercaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CV ATS RentCar Medan 2025 | Rental Mobil Terpercaya",
    description:
      "Jasa rental mobil terpercaya di Medan dengan pengalaman 8+ tahun. Harga mulai 300rb/hari.",
    images: [
      "/placeholder.svg?height=630&width=1200&text=CV+ATS+RentCar+Medan",
    ],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://cvatsrentcar.com",
  },
  category: "business",
  generator: "v0.dev",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "PT.VRN SEMARANG",
  alternateName: "PT.VRN SEMARANG",
  description:
    "Jasa rental mobil terpercaya di Semarang dengan pengalaman 8+ tahun.",
  url: "https://cvatsrentcar.com",
  telephone: "+62-852-0726-5558",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Pringgan no 11 gg Bung Boniran",
    addressLocality: "Semarang",
    addressRegion: "Jawa Tengah",
    postalCode: "50100",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-6.9910",
    longitude: "110.4208",
  },
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "Rp 300,000 - Rp 2,500,000",
  image: "/placeholder.svg?height=400&width=600&text=PT.VRN+SEMARANG",
  sameAs: [
    "https://instagram.com/atsrentalmedan_",
    "https://wa.me/6285207265558",
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "-6.9910",
      longitude: "110.4208",
    },
    geoRadius: "200000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Rental Mobil Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rental Mobil Lepas Kunci",
          description: "Sewa mobil tanpa driver untuk kebebasan berkendara",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rental Mobil dengan Driver",
          description:
            "Sewa mobil dengan driver berpengalaman dan bersertifikat",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1000",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://cvatsrentcar.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#7CB342" />
      </head>
      <body
        className={`${inter.className} bg-white text-gray-900 min-h-screen`}
        suppressHydrationWarning
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
