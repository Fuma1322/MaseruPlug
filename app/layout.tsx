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

  openGraph: {
    title: "MaseruPlug | Discover Trusted Businesses in Maseru",
    description:
      "Find trusted local businesses and services in Maseru, Lesotho with MaseruPlug.",
    url: "https://maseru-plug.vercel.app",
    siteName: "MaseruPlug",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero4.png",
        width: 1200,
        height: 630,
        alt: "MaseruPlug - Local Business Directory",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MaseruPlug | Local Businesses in Maseru",
    description:
      "Discover trusted local services and businesses in Maseru, Lesotho.",
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
      className={cn(inter.variable, poppins.variable)}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-white text-[#111111]">
        <ToastProvider />

        {children}

        <Toaster />

        <SpeedInsights />

        <GoogleAnalytics gaId="G-PRHPVD5WW6" />
      </body>
    </html>
  );
}