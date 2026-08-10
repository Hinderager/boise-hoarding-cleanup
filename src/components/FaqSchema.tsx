/**
 * FAQPage schema for the questions actually on the page.
 *
 * Google requires FAQPage markup to describe FAQ content the visitor can see.
 * Until now this site emitted a fixed six-question block on every page from
 * the root layout — including pages with no FAQ at all, and the FAQ page
 * itself, which shows twelve different questions. So it is generated from the
 * same data that renders the questions, and nowhere else.
 */
export function FaqSchema({
  faqs,
}: {
  faqs?: { _key: string; question: string; answer: string }[]
}) {
  if (!faqs?.length) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
