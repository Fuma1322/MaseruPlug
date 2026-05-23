import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "MaseruPlug - Discover Businesses in Maseru, Lesotho",
    template: "%s | MaseruPlug",
  },
  description:
    "MaseruPlug is the #1 local business directory in Maseru, Lesotho. Discover restaurants, shops, services, and trusted local businesses near you.",
  keywords: [
    "Maseru businesses",
    "Lesotho directory",
    "restaurants in Maseru",
    "shops in Maseru",
    "local services Lesotho",
    "MaseruPlug",
    "business directory Lesotho",
  ],
  authors: [{ name: "MaseruPlug" }],
  creator: "Tankiso Fuma & Lemohang Makintane",
  metadataBase: new URL("https://maseru-plug.vercel.app"),
  openGraph: {
    title: "MaseruPlug - Discover Businesses in Maseru",
    description:
      "Find the best local businesses and services in Maseru, Lesotho.",
    url: "https://maseru-plug.vercel.app",
    siteName: "MaseruPlug",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MaseruPlug",
    description:
      "Discover local businesses in Maseru, Lesotho with MaseruPlug.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
