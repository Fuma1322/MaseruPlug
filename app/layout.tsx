import './globals.css';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

import { ToastProvider } from './ToastProvider';
import { Toaster } from '@/components/ui/sonner';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mplug.com.ls'),

  title: {
    default: 'MaseruPlug | Find Local Businesses & Services in Maseru, Lesotho',
    template: '%s | MaseruPlug',
  },

  description:
    'Find plumbers, nail technicians, tattoo artists, barbers, salons, piercing studios and other trusted local businesses in Maseru and across Lesotho. Discover businesses, view profiles and connect directly.',

  keywords: [
    // Brand & core discovery
    'MaseruPlug',
    'businesses in Lesotho',
    'businesses in Maseru',
    'local businesses Lesotho',
    'local services Lesotho',
    'services in Maseru',
    'find businesses in Lesotho',
    'find local businesses',
    'business directory Lesotho',
    'business directory Maseru',
    'local service providers Lesotho',
    'service providers in Lesotho',
    'small businesses in Lesotho',

    // Plumbing — strong Search Console signal
    'plumbers near me',
    'plumber near me',
    'plumbers in Lesotho',
    'plumbers in Maseru',
    'professional plumber near me',
    'plumbing companies in Lesotho',
    'plumbing services Maseru',

    // Nails — strong Search Console signal
    'nails in Maseru',
    'nail technician near me',
    'nail tech near me',
    'nail tech Maseru',
    'nail salon near me',
    'nail salons in Maseru',
    'nail technicians in Lesotho',
    'polygel nails near me',
    'nail polish Maseru',

    // Tattoo & piercing — strong Search Console signal
    'tattoo artists in Lesotho',
    'tattoo artists in Maseru',
    'tattoo shops in Lesotho',
    'tattoo shops in Maseru',
    'tattoo Matala',
    'Matala tattoo',
    'piercing shops near me',
    'body piercing near me',
    'belly button piercing near me',
    'body piercing Maseru',

    // Barbers & hair — strong Search Console signal
    'barber shop near me',
    'barbershop near me',
    'barber shops near me',
    'barber near me',
    'local barber shop',
    'barbers in Maseru',
    'barbershops in Lesotho',
    'hairdresser near me',
    'hairdressers in Maseru',
    'salon near me',
    'salons near me',
    'salon near me for men',
    'hair salons in Maseru',
    'mini twists near me',
    'retwist near me',
    'wig wash and style near me',
    'threading near me',

    // Beauty
    'beauty studio Maseru',
    'beauty services Maseru',
    'beauty service providers',
    'beauty salons in Lesotho',
    'makeup artist near me',
    'male pedicure near me',

    // Other existing MaseruPlug categories
    'carpenters in Lesotho',
    'welders in Lesotho',
    'crochet businesses in Lesotho',
  ],

  authors: [
    {
      name: 'Tankiso Fuma',
    },
    {
      name: 'Lemohang Makintane',
    },
  ],

  creator: 'Tankiso Fuma',

  applicationName: 'MaseruPlug',

  category: 'Business Directory',

  alternates: {
    canonical: 'https://mplug.com.ls',
  },

  openGraph: {
    title: 'MaseruPlug — Find Local Businesses & Services in Maseru, Lesotho',

    description:
      'Discover plumbers, nail technicians, tattoo artists, barbers, salons, piercing studios and other local businesses in Maseru and across Lesotho.',

    url: 'https://mplug.com.ls',

    siteName: 'MaseruPlug',

    locale: 'en_US',

    type: 'website',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MaseruPlug — Find Local Businesses & Services in Lesotho',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'MaseruPlug | Find Local Businesses & Services in Lesotho',

    description:
      'Discover trusted plumbers, nail technicians, tattoo artists, barbers, salons and other local businesses in Maseru and across Lesotho.',

    images: '/og-image.png',
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  other: {
    'geo.region': 'LS',
    'geo.placename': 'Maseru, Lesotho',
    'geo.position': '-29.3158;27.4869',
    ICBM: '-29.3158, 27.4869',
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(inter.variable, poppins.variable)}>
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
