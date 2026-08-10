import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { PageCta } from '@/components/PageCta'
import { FaqSchema } from '@/components/FaqSchema'
import { getContentPage } from '@/lib/sanity'

export const revalidate = 120

export async function generateMetadata(): Promise<Metadata> {
  const doc = await getContentPage('resources/faq')
  return {
    title: doc?.metaTitle,
    description: doc?.metaDescription,
    alternates: { canonical: 'https://boise-hoarding-cleanup.com/resources/faq' },
  }
}

export default async function FAQPage() {
  const doc = await getContentPage('resources/faq')

  return (
    <main className="pt-20">
      {/* This page's own twelve questions — not the ten in the accordion. */}
      <FaqSchema faqs={doc?.faqs} />
      <VisibleBreadcrumb />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gunmetal mb-6">{doc?.pageHeading}</h1>
          <p className="text-xl text-gray-600 mb-12">{doc?.pageLead}</p>

          <div className="space-y-6 mb-12">
            {(doc?.faqs || []).map((faq) => (
              <div key={faq._key} className="bg-fog rounded-xl p-6">
                <h2 className="text-xl font-bold text-gunmetal mb-3">{faq.question}</h2>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <PageCta heading={doc?.pageCtaHeading} body={doc?.pageCtaBody} />
        </div>
      </div>
    </main>
  )
}
