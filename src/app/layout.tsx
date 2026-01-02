import type { Metadata, Viewport } from 'next'
import { Montserrat, Oswald } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StructuredData } from '@/components/StructuredData'

import { QuoteFormProvider } from '@/context/QuoteFormContext'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '600', '700'],
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://boise-hoarding-cleanup.com'),
  title: {
    default: 'Hoarding Cleanup Services Boise | Professional Hoarder Cleanout Idaho',
    template: '%s | Hoarding Cleanup Boise',
  },
  description: 'Compassionate hoarding cleanup services in Boise, Meridian, Nampa, Caldwell & Eagle Idaho. We help families dealing with hoarding disorder through supportive, professional cleanout services. Licensed & insured. Same-day service available. Call (208) 943-5231.',
  keywords: [
    'hoarding cleanup Boise',
    'hoarder cleanout Boise Idaho',
    'hoarding cleanup services Meridian',
    'hoarder help Nampa',
    'hoarding cleanup near me',
    'estate cleanout Caldwell',
    'property cleanout Eagle Idaho',
    'hoarding remediation Treasure Valley',
    'compassionate hoarding cleanup',
    'clutter removal services Idaho',
    'thorough cleaning services Boise',
    'hoarder house cleanup',
  ],
  authors: [{ name: 'Boise Hoarding Cleanup' }],
  openGraph: {
    title: 'Hoarding Cleanup Services | Boise, Meridian, Nampa Idaho',
    description: 'Non-judgmental hoarding cleanup services in the Treasure Valley. We help families navigate difficult situations with compassion and respect. Licensed, insured, and discreet. Same-day service available.',
    url: 'https://boise-hoarding-cleanup.com',
    siteName: 'Top Shelf Hoarding Cleanup',
    locale: 'en_US',
    type: 'website',
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
    canonical: 'https://boise-hoarding-cleanup.com',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="48x48" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <StructuredData />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${montserrat.variable} ${oswald.variable} font-sans antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-581QKP6ZE5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-581QKP6ZE5');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '533217938868618');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{display:'none'}}
            src="https://www.facebook.com/tr?id=533217938868618&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <QuoteFormProvider>
          <Header />
          {children}
          <Footer />
        </QuoteFormProvider>
      </body>
    </html>
  )
}
