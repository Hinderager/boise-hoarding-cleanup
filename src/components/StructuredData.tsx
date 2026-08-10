import { getSiteSettings } from '@/lib/sanity'

// Coordinates for each city
const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  'Boise': { lat: 43.6150, lng: -116.2023 },
  'Meridian': { lat: 43.6121, lng: -116.3915 },
  'Nampa': { lat: 43.5407, lng: -116.5635 },
  'Caldwell': { lat: 43.6629, lng: -116.6874 },
  'Eagle': { lat: 43.6957, lng: -116.3535 },
}

export async function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']
  // Opening hours and the rating come from Sanity so the schema Google reads
  // cannot drift away from what the footer, contact page and map card say —
  // which is exactly what had happened: five spots, five different answers.
  const settings = await getSiteSettings()

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Boise Hoarding Cleanup`,
    "description": `Professional hoarding cleanup services in ${city}, Idaho. Compassionate, discreet cleanup for hoarder homes. Licensed and insured.`,
    "url": "https://boise-hoarding-cleanup.com",
    "telephone": "+1-208-943-5231",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": "ID",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": coords.lat,
      "longitude": coords.lng
    },
    "areaServed": [
      { "@type": "City", "name": "Boise", "addressRegion": "ID" },
      { "@type": "City", "name": "Meridian", "addressRegion": "ID" },
      { "@type": "City", "name": "Nampa", "addressRegion": "ID" },
      { "@type": "City", "name": "Caldwell", "addressRegion": "ID" },
      { "@type": "City", "name": "Eagle", "addressRegion": "ID" }
    ],
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
    "description": `Professional hoarding cleanup and cleanout services in ${city} and the Treasure Valley. We provide compassionate, discreet hoarding remediation services.`
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
