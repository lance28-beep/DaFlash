import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "DAPLASH Delivery – Naga | Your Reliable Delivery Partner",
    template: "%s | DAPLASH Delivery"
  },
  description: "DAPLASH Delivery – Naga: Your reliable delivery partner in Naga City. Fast, secure, and affordable delivery services for businesses and individuals. Experience excellence in every delivery.",
  keywords: [
    "DAPLASH delivery",
    "delivery service Naga City",
    "package delivery",
    "courier service",
    "fast delivery",
    "reliable delivery",
    "Philippines delivery",
    "DAPLASH Naga",
    "delivery partner"
  ],
  authors: [{ name: "DAPLASH Team" }],
  creator: "DAPLASH",
  publisher: "DAPLASH",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://daflash.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://daflash.com", // Replace with your actual domain
    title: "DAPLASH Delivery – Naga | Your Reliable Delivery Partner",
    description: "DAPLASH Delivery – Naga: Your reliable delivery partner in Naga City. Fast, secure, and affordable delivery services for businesses and individuals.",
    siteName: "DAPLASH Delivery",
    images: [
      {
        url: "/placeholder-logo.png", // You can replace this with a proper OG image
        width: 1200,
        height: 630,
        alt: "DAPLASH Delivery Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DAPLASH Delivery – Naga | Your Reliable Delivery Partner",
    description: "DAPLASH Delivery – Naga: Your reliable delivery partner in Naga City. Fast, secure, and affordable delivery services.",
    images: ["/placeholder-logo.png"], // You can replace this with a proper Twitter image
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
  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/favicon_io/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/favicon_io/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicon_io/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
