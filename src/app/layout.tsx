import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lifestyle Furnishers",
    template: "%s | Lifestyle Furnishers",
  },
  description:
    "Discover premium furniture and home décor at Lifestyle Furnishers. Elevate your living spaces with our curated collection of quality furniture.",
  keywords: ["furniture", "home décor", "lifestyle", "premium furniture", "interior design"],
  authors: [{ name: "Lifestyle Furnishers" }],
  creator: "Lifestyle Furnishers",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://lifestyle-furnishers.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://lifestyle-furnishers.com",
    siteName: "Lifestyle Furnishers",
    title: "Lifestyle Furnishers",
    description:
      "Discover premium furniture and home décor at Lifestyle Furnishers. Elevate your living spaces with our curated collection of quality furniture.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lifestyle Furnishers",
    description:
      "Discover premium furniture and home décor at Lifestyle Furnishers. Elevate your living spaces with our curated collection of quality furniture.",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional"
        />
      </head>
      <body className={`${manrope.className} antialiased`}>{children}</body>
    </html>
  );
}
