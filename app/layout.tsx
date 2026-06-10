// app/layout.tsx

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
    default: "MaseruPlug — Discover Trusted Businesses In Maseru",
    template: "%s | MaseruPlug",
  },

  description:
    "MaseruPlug helps people in Lesotho discover trusted local businesses including nail techs, salons, plumbers, electricians, mechanics, welders, and more.",

  keywords: [
    "Maseru businesses",
    "Lesotho businesses",
    "Maseru directory",
    "business directory Lesotho",
    "nail techs in Maseru",
    "salons in Maseru",
    "plumbers in Maseru",
    "electricians in Maseru",
    "tattoo parlours in Maseru",
    "lash technicians in Maseru",
    "mechanics in Maseru",
    "barbers in Maseru",
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
        url: "/hero4.png",
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

    images: ["/hero4.png"],
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