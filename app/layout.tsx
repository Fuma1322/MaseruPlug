import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import { ToastProvider } from "./ToastProvider";
import { Toaster } from "@/components/ui/sonner";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mplug.com.ls"),

  title: {
    default:
    "MaseruPlug | Find Trusted Local Businesses & Services In Lesotho",
    template: "%s | MaseruPlug",
  },

  description:
  "Find trusted nail technicians, tattoo artists, carpenters, welders, plumbers, salons, and other local businesses across Lesotho. MaseruPlug connects customers with verified service providers.",

  other: {
    "geo.region": "LS",
    "geo.placename": "Maseru, Lesotho",
    "geo.position": "-29.3158;27.4869",
    "ICBM": "-29.3158, 27.4869",
  },

  keywords: [
  "find businesses in Lesotho",
  "local services Lesotho",
  "Maseru businesses",
  "nail technicians in Lesotho",
  "tattoo artists in Lesotho",
  "carpenters in Lesotho",
  "crochet businesses in Lesotho",
  "welders in Lesotho",
  "small businesses in Lesotho",
  "business directory Lesotho",
  "MaseruPlug",
],

  authors: [
    {
      name: "Tankiso Fuma",
    },
    {
      name: "Lemohang Makintane",
    },
  ],

  creator: "Tankiso Fuma",

  applicationName: "MaseruPlug",

  category: "Business Directory",

  alternates: {
    canonical: "https://mplug.com.ls",
  },

  openGraph: {
    title: "MaseruPlug — Discover Trusted Businesses In Maseru",
    description:
      "Find trusted businesses and services in Maseru, Lesotho.",

    url: "https://mplug.com.ls",

    siteName: "MaseruPlug",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MaseruPlug",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "MaseruPlug",

    description:
      "Discover trusted businesses and local services in Maseru, Lesotho.",

    images: ["/og-image.png"],
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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(inter.variable, poppins.variable)}
    >
      <body className="min-h-screen bg-white font-sans antialiased">
        <ToastProvider />

        {children}

        <Toaster />

        <SpeedInsights />

        <GoogleAnalytics gaId="G-PRHPVD5WW6" />
      </body>
    </html>
  );
}