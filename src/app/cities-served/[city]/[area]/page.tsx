import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Phone, CheckCircle, MapPin, ArrowRight } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { getArea, getAreaParams } from '@/lib/sanity'

/**
 * One route for all fourteen neighbourhood pages. Markup unchanged from the
 * hand-written versions; only the words come from Sanity.
 */

export const revalidate = 120
export const dynamicParams = true

export async function generateStaticParams() {
  return getAreaParams()
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; area: string }>
}): Promise<Metadata> {
  const { city, area } = await params
  const doc = await getArea(city, area)
  if (!doc) return { title: 'Service area' }
  return {
    title: doc.seoTitle,
    description: doc.seoDescription,
    keywords: doc.keywords,
    alternates: {
      canonical: `https://boise-hoarding-cleanup.com/cities-served/${city}/${area}`,
    },
  }
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ city: string; area: string }>
}) {
  const { city, area } = await params
  const doc = await getArea(city, area)
  if (!doc) notFound()

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gunmetal">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/cities-served" className="hover:text-white">Cities Served</Link>
            <span className="mx-2">/</span>
            <Link href={`/cities-served/${city}`} className="hover:text-white">{doc.cityLabel}</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{doc.breadcrumbLabel || doc.name}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {doc.heroHeading}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mb-6">
            {doc.heroSubheading}
          </p>
          <a
            href="tel:2089435231"
            className="inline-flex items-center gap-2 bg-brand-yellow text-gunmetal px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
          >
            <Phone className="w-5 h-5" />
            (208) 943-5231
          </a>
        </div>
      </section>

      <VisibleBreadcrumb />


      <QuickQuoteBar />

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* About the Neighborhood */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
                {doc.sectionHeading}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                {(doc.bodyParagraphs || []).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Neighborhood Details */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gunmetal mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {doc.landmarksHeading}
                </h3>
                <ul className="space-y-2">
                  {(doc.landmarks || []).map((item) => (
                    <li key={item} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gunmetal mb-4">
                  {doc.streetsHeading}
                </h3>
                <ul className="space-y-2">
                  {(doc.streets || []).map((item) => (
                    <li key={item} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* What We Offer */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gunmetal mb-6">
                {doc.offersHeading}
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {(doc.highlights || []).map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gunmetal rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                {doc.ctaHeading}
              </h3>
              <p className="text-gray-300 mb-6">
                {doc.ctaBody}
              </p>
              <a
                href="tel:2089435231"
                className="inline-flex items-center gap-2 bg-brand-yellow text-gunmetal px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                (208) 943-5231
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Back to City Page */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <Link
            href={`/cities-served/${city}`}
            className="inline-flex items-center gap-2 text-gunmetal font-medium hover:underline"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            {doc.backLabel}
          </Link>
        </div>
      </section>
    </main>
  )
}
