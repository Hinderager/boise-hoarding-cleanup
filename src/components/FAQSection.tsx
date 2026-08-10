import { FAQ } from '@/components/FAQ'
import { getSiteSettings } from '@/lib/sanity'

/**
 * Server half of the FAQ: reads the questions from Sanity and hands them to
 * the client accordion. Every page that showed the FAQ now uses this, so the
 * list is edited in one place instead of in the component file.
 */
export async function FAQSection() {
  const settings = await getSiteSettings()

  return (
    <FAQ
      faqs={settings?.siteFaqs}
      heading={settings?.faqHeading}
      phone={settings?.sitePhone}
      phoneHref={settings?.sitePhoneHref}
    />
  )
}
