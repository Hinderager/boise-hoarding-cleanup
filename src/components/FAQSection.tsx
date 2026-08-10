import { FAQ } from '@/components/FAQ'
import { FaqSchema } from '@/components/FaqSchema'
import { getSiteSettings } from '@/lib/sanity'

/**
 * Server half of the FAQ: reads the questions from Sanity and hands them to
 * the client accordion. Every page that showed the FAQ now uses this, so the
 * list is edited in one place instead of in the component file.
 *
 * It emits the FAQPage schema too, from the same array — that way the markup
 * Google reads and the questions a visitor sees cannot describe different
 * things, which is exactly what had gone wrong.
 */
export async function FAQSection() {
  const settings = await getSiteSettings()

  return (
    <>
      <FaqSchema faqs={settings?.siteFaqs} />
      <FAQ
        faqs={settings?.siteFaqs}
        heading={settings?.faqHeading}
        phone={settings?.sitePhone}
        phoneHref={settings?.sitePhoneHref}
      />
    </>
  )
}
