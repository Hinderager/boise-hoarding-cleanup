import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { PageCta } from '@/components/PageCta'
import { CheckCircle } from 'lucide-react'
import { getContentPage } from '@/lib/sanity'

export const revalidate = 120

export async function generateMetadata(): Promise<Metadata> {
  const doc = await getContentPage('resources/cleanup-process')
  return {
    title: doc?.metaTitle,
    description: doc?.metaDescription,
    alternates: { canonical: 'https://boise-hoarding-cleanup.com/resources/cleanup-process' },
  }
}

export default async function CleanupProcessPage() {
  const doc = await getContentPage('resources/cleanup-process')

  return (
    <main className="pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gunmetal mb-6">{doc?.pageHeading}</h1>
          <p className="text-xl text-gray-600 mb-12">{doc?.pageLead}</p>

          <section className="space-y-8 mb-12">
            {(doc?.steps || []).map((step, index) => (
              <div key={step._key} className="bg-fog rounded-xl p-6 border-l-4 border-light-blue">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-light-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gunmetal mb-3">{step.title}</h2>
                    {step.paras.map((para, i) => (
                      <p
                        key={i}
                        className={i < step.paras.length - 1 ? 'text-gray-600 mb-3' : 'text-gray-600'}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>

          <VisibleBreadcrumb />

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">{doc?.gridHeading}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {(doc?.gridItems || []).map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <PageCta heading={doc?.pageCtaHeading} body={doc?.pageCtaBody} />
        </div>
      </div>
    </main>
  )
}
