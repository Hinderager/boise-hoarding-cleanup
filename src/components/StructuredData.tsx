import { getCityNames, getSiteSettings } from '@/lib/sanity'

/** Where the business actually is. */
const BOISE = { lat: 43.615, lng: -116.2023 }

/**
 * One business, described once, on every page.
 *
 * Until now the city pages rendered a second copy of this with
 * `addressLocality` and `geo` set to that city — so the Meridian page told
 * Google the business is located in Meridian. It is one Boise company serving
 * the valley, and there is no Meridian address. Cities it covers belong in
 * `areaServed`, which is what that property is for; claiming an address in
 * each one invents branches that do not exist.
 *
 * Opening hours and the rating come from Sanity so the schema cannot drift
 * away from what the footer, contact page and map card say — which is exactly
 * what had happened: five spots, five different answers.
 */
export async function StructuredData() {
  const [settings, cities] = await Promise.all([getSiteSettings(), getCityNames()])

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Boise Hoarding Cleanup`,
    "description": `Professional hoarding cleanup services in Boise, Idaho. Compassionate, discreet cleanup for hoarder homes. Licensed and insured.`,
    "url": "https://boise-hoarding-cleanup.com",
    "telephone": "+1-208-943-5231",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Boise",
      "addressRegion": "ID",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BOISE.lat,
      "longitude": BOISE.lng
    },
    // Every city with a page, so the two cannot disagree.
    "areaServed": (cities || []).map((name) => ({
      "@type": "City",
      "name": name,
      "addressRegion": "ID"
    })),
    "serviceType": [
      "Hoarding Cleanup",
      "Hoarder Cleanout",
      "Estate Cleanout",
      "Property Cleanout",
      "Clutter Removal",
      "Junk Removal"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": settings?.hoursDays,
        "opens": settings?.hoursOpens,
        "closes": settings?.hoursCloses
      }
    ],
    "sameAs": [],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": settings?.reviewRating?.toFixed(1),
      "reviewCount": String(settings?.reviewCount)
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Hoarding Cleanup Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Boise Hoarding Cleanup"
    },
    "areaServed": {
      "@type": "State",
      "name": "Idaho"
    },
    "description": `Professional hoarding cleanup and cleanout services in Boise and the Treasure Valley. We provide compassionate, discreet hoarding remediation services.`
  }

  // No FAQPage here. It belongs to whichever page actually shows an FAQ, and
  // is emitted by FaqSchema from the same data that renders the questions.
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}
