import { HeroSection } from '@/components/HeroSection'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { SectionDivider } from '@/components/SectionDivider'
import { ServicesGrid } from '@/components/ServicesGrid'
import { ServicesShowcase } from '@/components/ServicesShowcase'
import { GoogleReviews } from '@/components/GoogleReviews'
import { FAQSection } from '@/components/FAQSection'
import { MapSection } from '@/components/MapSection'
import { getSiteSettings } from '@/lib/sanity'

// Force dynamic rendering to avoid static generation issues
export const revalidate = 0

export default async function Home() {
  const settings = await getSiteSettings()

  return (
    <main>
      <HeroSection />
      <VisibleBreadcrumb />

      <QuickQuoteBar />
      <SectionDivider />
      <ServicesGrid
        services={settings?.homeServices}
        heading={settings?.servicesHeading}
        lead={settings?.servicesLead}
        phone={settings?.sitePhone}
        phoneHref={settings?.sitePhoneHref}
      />
      <ServicesShowcase />
      <GoogleReviews />
      <FAQSection />
      <MapSection />
    </main>
  )
}
