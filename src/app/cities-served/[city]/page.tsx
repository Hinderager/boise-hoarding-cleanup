import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, MapPin, Phone } from 'lucide-react'
import { HeroSection } from '@/components/HeroSection'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { ServiceProcess } from '@/components/ServiceProcess'
import { FAQSection } from '@/components/FAQSection'
import { StructuredData } from '@/components/StructuredData'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { getCity, getCitySlugs } from '@/lib/sanity'

/**
 * One route for all nine city pages. The markup is exactly what the
 * hand-written pages had — only the words come from Sanity now, so the office
 * can edit a city page without a deploy.
 */

export const revalidate = 120
export const dynamicParams = true

export async function generateStaticParams() {
  const slugs = await getCitySlugs()
  return slugs.map((city) => ({ city }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>
}): Promise<Metadata> {
  const { city } = await params
  const doc = await getCity(city)
  if (!doc) return { title: 'Service area' }

  const url = `https://boise-hoarding-cleanup.com/cities-served/${city}`
  return {
    title: doc.seoTitle,
    description: doc.seoDescription,
    keywords: doc.keywords,
    openGraph: {
      title: doc.ogTitle || doc.seoTitle,
      description: doc.ogDescription || doc.seoDescription,
      url,
    },
    alternates: { canonical: url },
  }
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params
  const doc = await getCity(city)
  if (!doc) notFound()

  return (
    <main>
      <StructuredData city={doc.name} />

      <HeroSection
        city={doc.name}
        headline={doc.heroHeading || ''}
        subheadline={doc.heroSubheading || ''}
      />
      <VisibleBreadcrumb />

      <QuickQuoteBar />

      {/* City-Specific Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gunmetal mb-6">
              {doc.sectionHeading}
            </h2>

            {/* Rendered in document order — the pages are not a fixed shape. */}
            <div className="prose prose-lg max-w-none text-gray-600 [&>p]:mb-6">
              {(doc.content || []).map((block) => {
                if (block._type === 'headingBlock') {
                  return (
                    <h3 key={block._key} className="text-2xl font-bold text-gunmetal mt-8 mb-4">
                      {block.text}
                    </h3>
                  )
                }
                if (block._type === 'checklistBlock') {
                  return (
                    <ul key={block._key} className="space-y-3">
                      {(block.items || []).map((item) => (
                        <li key={item._key} className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>{item.label}</strong> {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )
                }
                return <p key={block._key}>{block.text}</p>
              })}
            </div>

            {/* Neighborhoods Grid */}
            {(doc.coverageAreas || []).length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
                {doc.coverageAreas!.map((neighborhood) => (
                  <div
                    key={neighborhood}
                    className="flex items-center gap-2 bg-fog px-3 py-2 rounded-lg"
                  >
                    <MapPin className="w-4 h-4 text-light-blue flex-shrink-0" />
                    <span className="text-sm text-gunmetal">{neighborhood}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Neighborhood Pages */}
            {(doc.neighborhoodLinks || []).length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-dark-blue mb-6">
                  {doc.neighborhoodHeading}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {doc.neighborhoodLinks!.map((n) => (
                    <Link
                      key={n._key}
                      href={`/cities-served/${city}/${n.slug}`}
                      className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                    >
                      <span className="font-semibold text-dark-blue">{n.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-10 p-6 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                {doc.ctaHeading}
              </h3>
              <p className="text-gray-300 mb-6">
                {doc.ctaBody}
              </p>
              <a
                href="tel:2089435231"
                className="inline-flex items-center gap-2 bg-brand-yellow text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                (208) 943-5231
              </a>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <ServiceProcess />
      <FAQSection />

      {/* Related City Links */}
      {(doc.nearbyCities || []).length > 0 && (
        <section className="py-12 bg-fog">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gunmetal mb-6 text-center">
              Also Serving Nearby Cities
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {doc.nearbyCities!.map((c) => (
                <Link
                  key={c._key}
                  href={`/cities-served/${c.slug}`}
                  className="text-dark-blue underline hover:text-light-blue font-medium"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
