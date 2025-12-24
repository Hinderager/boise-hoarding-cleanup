'use client'

import Script from 'next/script'

export function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_ID || 'G-581QKP6ZE5'
  const GA_ADS_ID = process.env.NEXT_PUBLIC_GA_ADS_ID || 'G-46RY05JDNS'
  const GOOGLE_ADS_ID = 'AW-11134633087'

  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
          gtag('config', '${GA_ADS_ID}');
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
    </>
  )
}
