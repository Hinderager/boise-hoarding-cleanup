import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { Phone, Star } from 'lucide-react'
import { getContentPage } from '@/lib/sanity'

export const revalidate = 120

export async function generateMetadata(): Promise<Metadata> {
  const doc = await getContentPage('about-us/testimonials')
  return {
    title: doc?.metaTitle,
    description: doc?.metaDescription,
    alternates: { canonical: 'https://boise-hoarding-cleanup.com/about-us/testimonials' },
  }
}

/**
 * The reviews are genuine Google reviews and the page says so. They live in
 * Sanity now so the office can add new ones, but the rule that governs them is
 * unchanged: only real reviews go on this page, exactly as they were left.
 */
export default async function TestimonialsPage() {
  const doc = await getContentPage('about-us/testimonials')
  const rating = doc?.rating ?? 5
  const total = doc?.totalReviews ?? 0

  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{doc?.pageHeading}</h1>
          <div className="inline-block bg-white rounded-2xl px-8 py-5 shadow-md">
            <div className="flex items-center justify-center gap-2">
              <span className="text-3xl font-bold text-gray-900">{rating.toFixed(1)}</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#fbbc04] text-[#fbbc04]" />
                ))}
              </div>
              <span className="text-gray-600 ml-2">({total} Google reviews)</span>
            </div>
          </div>
        </div>
      </section>

      <VisibleBreadcrumb />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-10">{doc?.reviewsIntro}</p>

            <div className="grid md:grid-cols-2 gap-6">
              {(doc?.reviews || []).map((review) => (
                <div key={review._key} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#fbbc04] text-[#fbbc04]" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">{review.text}</p>
                  <p className="text-sm font-bold text-dark-blue">{review.author}</p>
                  <p className="text-sm text-gray-500">{review.when}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-600 mt-10">
              {doc?.outroPrefix} <strong>{doc?.outroBold}</strong> {doc?.outroSuffix}
            </p>

            <p className="text-gray-600 mt-4">{doc?.outroSecond}</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">{doc?.bookHeading}</h2>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
