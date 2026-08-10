import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { PageCta } from '@/components/PageCta'
import { CheckCircle } from 'lucide-react'
import { getContentPage } from '@/lib/sanity'

export const revalidate = 120

export async function generateMetadata(): Promise<Metadata> {
  const doc = await getContentPage('about-us/why-choose-us')
  return {
    title: doc?.metaTitle,
    description: doc?.metaDescription,
    alternates: { canonical: 'https://boise-hoarding-cleanup.com/about-us/why-choose-us' },
  }
}

export default async function WhyChooseUsPage() {
  const doc = await getContentPage('about-us/why-choose-us')

  return (
    <main className="pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gunmetal mb-6">{doc?.pageHeading}</h1>
          <p className="text-xl text-gray-600 mb-12">{doc?.pageLead}</p>

          <div className="space-y-8 mb-12">
            {(doc?.reasons || []).map((reason) => (
              <div key={reason._key} className="bg-fog rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-bold text-gunmetal mb-2">{reason.title}</h2>
                    <p className="text-gray-600">{reason.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">{doc?.goodHeading}</h2>
            <div className="prose prose-lg max-w-none text-gray-600 [&>p]:mb-6">
              <p>{doc?.goodIntro}</p>
              <ul>
                {(doc?.goodItems || []).map((item) => (
                  <li key={item._key}>
                    <strong>{item.label}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <p>{doc?.goodOutro}</p>
            </div>
          </section>

          <VisibleBreadcrumb />

          <PageCta heading={doc?.pageCtaHeading} body={doc?.pageCtaBody} />
        </div>
      </div>
    </main>
  )
}
