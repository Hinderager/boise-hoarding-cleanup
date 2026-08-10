import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { PageCta } from '@/components/PageCta'
import { RelatedCards } from '@/components/RelatedCards'
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react'
import { getContentPage } from '@/lib/sanity'

const URL = 'https://boise-hoarding-cleanup.com/resources/hoarding-signs'

export const revalidate = 120

export async function generateMetadata(): Promise<Metadata> {
  const doc = await getContentPage('resources/hoarding-signs')
  return {
    title: doc?.metaTitle,
    description: doc?.metaDescription,
    keywords: doc?.metaKeywords,
    openGraph: {
      title: doc?.ogTitle,
      description: doc?.ogDescription,
      url: URL,
    },
    alternates: { canonical: URL },
  }
}

export default async function HoardingSignsPage() {
  const doc = await getContentPage('resources/hoarding-signs')

  return (
    <main className="pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gunmetal mb-6">
              {doc?.pageHeading}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{doc?.pageLead}</p>
          </div>

          {/* Warning Signs */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">{doc?.warningSignsHeading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(doc?.warningSigns || []).map((item) => (
                <div key={item._key} className="bg-fog rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-cta-rose flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gunmetal mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <VisibleBreadcrumb />
          {/* Hoarding vs Collecting */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">{doc?.compareHeading}</h2>

            <p className="text-gray-600 mb-6">{doc?.compareIntro}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(doc?.compare || []).map((column) => {
                const good = column.tone === 'good'
                const Icon = good ? CheckCircle : XCircle
                return (
                  <div
                    key={column._key}
                    className={`${
                      good ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                    } border-2 rounded-xl p-6`}
                  >
                    <h3
                      className={`text-xl font-bold ${
                        good ? 'text-green-800' : 'text-red-800'
                      } mb-4 flex items-center gap-2`}
                    >
                      <Icon className="w-6 h-6" />
                      {column.title}
                    </h3>
                    <ul className={`space-y-2 ${good ? 'text-green-900' : 'text-red-900'}`}>
                      {column.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Hoarding Levels */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">{doc?.levelsHeading}</h2>
            <p className="text-gray-600 mb-6">{doc?.levelsIntro}</p>

            <div className="space-y-4">
              {(doc?.levels || []).map((level) => (
                <div key={level._key} className={`${level.color} border-l-4 rounded-r-lg p-4`}>
                  <h3 className="font-bold text-gunmetal">{level.label}</h3>
                  <p className="text-gray-700">{level.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* When to Get Help */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">{doc?.helpHeading}</h2>

            <div className="prose prose-lg max-w-none text-gray-600 [&>p]:mb-6">
              <p>{doc?.helpIntro}</p>
              <ul>
                {(doc?.helpItems || []).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p>{doc?.helpOutro}</p>
            </div>
          </section>

          <RelatedCards cards={doc?.related} className="mb-12 " />

          <PageCta heading={doc?.pageCtaHeading} body={doc?.pageCtaBody} wide={doc?.ctaWide} />
        </div>
      </div>
    </main>
  )
}
