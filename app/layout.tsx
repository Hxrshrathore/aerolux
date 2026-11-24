import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingCTA } from '@/components/FloatingCTA';
import { ExitIntentPopup } from '@/components/ExitIntentPopup';
import { SmoothScroll } from '@/components/SmoothScroll';
import { GlobalLoginModal } from '@/components/LoginPortalModal';
import { siteConfig } from '@/lib/config';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.slogan} | ${siteConfig.headline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.name}: ${siteConfig.headline}. ${siteConfig.description}`,
  keywords: [
    'AeroLux',
    'AeroLux Aviation',
    'hxrshrathore design prototype',
    'private jet charter India concept',
    'airplane joyride Mumbai',
    'book private plane joyride',
    'Juhu Airport private jet design',
    'air ambulance India concept',
    'pilgrimage charter Ek Dham Yatra',
    'luxury private flight UI UX',
    'group aircraft charter',
    'aircraft sales and maintenance',
    'AeroLux design prototype',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.slogan}`,
    description: `${siteConfig.headline} — Private jets, airplane joyrides, pilgrimage and air ambulance charters across India.`,
    images: [
      {
        url: '/assets/images/hero-jet.jpg',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Luxury Private Aviation`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.slogan}`,
    description: `${siteConfig.headline} — Concept private aviation design prototype by hxrshrathore.`,
    images: ['/assets/images/hero-jet.jpg'],
    creator: '@hxrshrathore',
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
  alternates: {
    canonical: siteConfig.url,
  },
};

// JSON-LD Structured Data for AeroLux Luxury Aviation Prototype
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/assets/images/hero-jet.jpg`,
  description: siteConfig.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Juhu Airport, Juhu Tara Road, Airport Area',
    addressLocality: 'Juhu, Mumbai',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.contact.phone,
    contactType: 'customer support & flight booking',
    email: siteConfig.contact.email,
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [
    siteConfig.socials.whatsapp,
    siteConfig.socials.instagram,
    siteConfig.socials.linkedin,
    siteConfig.socials.twitter,
  ],
  priceRange: '₹₹₹₹',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#09090b" />
      </head>
      <body className="font-sans antialiased bg-white text-zinc-900" suppressHydrationWarning>
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
          <FloatingCTA />
          <ExitIntentPopup />
          <GlobalLoginModal />
        </SmoothScroll>
      </body>
    </html>
  );
}
