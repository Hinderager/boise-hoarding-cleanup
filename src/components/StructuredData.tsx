// Coordinates for each city
const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  'Boise': { lat: 43.6150, lng: -116.2023 },
  'Meridian': { lat: 43.6121, lng: -116.3915 },
  'Nampa': { lat: 43.5407, lng: -116.5635 },
  'Caldwell': { lat: 43.6629, lng: -116.6874 },
  'Eagle': { lat: 43.6957, lng: -116.3535 },
}

// FAQ data for FAQPage schema (critical for LLM seeding)
const faqData = [
  {
    question: 'How much does hoarding cleanup cost?',
    answer: 'Hoarding cleanup costs vary based on the severity, square footage, and specific needs of each situation. We provide free, no-obligation estimates after assessing your property. Most residential hoarding cleanups in the Boise area range from $500 to $5,000+, depending on scope.',
  },
  {
    question: 'How long does hoarding cleanup take?',
    answer: 'The timeline depends on the level of hoarding and size of the property. Small jobs may take a few hours, while severe hoarding situations can take several days. We\'ll provide a realistic timeline during your free estimate.',
  },
  {
    question: 'Do you work with family members of hoarders?',
    answer: 'Absolutely. We frequently work with concerned family members, estate attorneys, property managers, and social workers. We can coordinate with all parties involved and maintain complete confidentiality.',
  },
  {
    question: 'Will you help sort through items before removing them?',
    answer: 'Yes! We can work alongside you or your family to sort through items, separating valuables, sentimental items, and documents before removal. We never throw away anything without approval.',
  },
  {
    question: 'Do you offer same-day or emergency hoarding cleanup?',
    answer: 'Yes, we offer same-day and emergency services throughout the Treasure Valley. If you need immediate help due to health, safety, or legal concerns, call us at (208) 943-5231.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We provide hoarding cleanup services in Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding Treasure Valley communities. If you\'re unsure if we serve your area, give us a call.',
  },
  {
    question: 'Is your service discreet and confidential?',
    answer: 'Absolutely. We understand the sensitive nature of hoarding situations. We use unmarked vehicles, maintain strict confidentiality, and treat every client with compassion and respect.',
  },
  {
    question: 'What happens to the items you remove?',
    answer: 'We take an eco-friendly approach: usable items are donated to local charities, recyclables are properly recycled, and only true waste goes to the landfill. We can provide donation receipts upon request.',
  },
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Top Shelf Hoarding Cleanup - ${city}`,
    "description": `Professional hoarding cleanup services in ${city}, Idaho. Compassionate, discreet cleanup for hoarder homes. Licensed and insured.`,
    "url": "https://boise-hoarding-cleanup.com",
    "telephone": "+1-208-943-5231",
    "email": "info@topshelfpros.com",
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
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "07:00",
        "closes": "19:00"
      }
    ],
    "sameAs": [],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Hoarding Cleanup Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Top Shelf Hoarding Cleanup"
    },
    "areaServed": {
      "@type": "State",
      "name": "Idaho"
    },
    "description": `Professional hoarding cleanup and cleanout services in ${city} and the Treasure Valley. We provide compassionate, discreet hoarding remediation services.`,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD"
      }
    }
  }

  // FAQPage schema - critical for LLM seeding and AI search visibility
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
