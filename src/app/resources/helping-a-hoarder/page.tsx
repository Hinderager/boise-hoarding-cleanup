import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { PageCta } from '@/components/PageCta'
import { RelatedCards } from '@/components/RelatedCards'
import { CheckCircle, XCircle } from 'lucide-react'
import { iconFor } from '@/lib/icons'
import { getContentPage } from '@/lib/sanity'

const URL = 'https://boise-hoarding-cleanup.com/resources/helping-a-hoarder'

export const revalidate = 120

export async function generateMetadata(): Promise<Metadata> {
  const doc = await getContentPage('resources/helping-a-hoarder')
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

export default async function HelpingAHoarderPage() {
  const doc = await getContentPage('resources/helping-a-hoarder')

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

          {/* Understanding Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">{doc?.understandHeading}</h2>

            <div className="prose prose-lg max-w-none text-gray-600 mb-8 [&>p]:mb-6">
              {(doc?.understandParas || []).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <p>{doc?.understandIntro}</p>
              <ul>
                {(doc?.understandItems || []).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <VisibleBreadcrumb />
          {/* Do's and Don'ts */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">{doc?.compareHeading}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(doc?.compare || []).map((column) => {
                const good = column.tone === 'good'
                const Icon = good ? CheckCircle : XCircle
                return (
                  <div
                    key={column._key}
                    className={`${good ? 'bg-green-50' : 'bg-red-50'} rounded-xl p-6`}
                  >
                    <h3
                      className={`text-xl font-bold ${
                        good ? 'text-green-800' : 'text-red-800'
                      } mb-4 flex items-center gap-2`}
                    >
                      <Icon className="w-6 h-6" />
                      {column.title}
                    </h3>
                    <ul className="space-y-3">
                      {column.items.map((item, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 ${
                            good ? 'text-green-900' : 'text-red-900'
                          }`}
                        >
                          <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Starting the Conversation */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">{doc?.tipsHeading}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {(doc?.tips || []).map((tip) => {
                const Icon = iconFor(tip.icon)
                return (
                  <div key={tip._key} className="bg-fog rounded-xl p-6">
                    <div className="w-12 h-12 bg-light-blue/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-light-blue" />
                    </div>
                    <h3 className="text-xl font-bold text-gunmetal mb-2">{tip.title}</h3>
                    <p className="text-gray-600">{tip.text}</p>
                  </div>
                )
              })}
            </div>

            <div className="bg-fog rounded-xl p-6">
              <h3 className="text-xl font-bold text-gunmetal mb-4">{doc?.sayTitle}</h3>
              <ul className="space-y-3 text-gray-700">
                {(doc?.sayItems || []).map((item, i) => (
                  <li key={i} className="border-l-4 border-light-blue pl-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* When Professional Help is Needed */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">{doc?.proHeading}</h2>

            <div className="prose prose-lg max-w-none text-gray-600 [&>p]:mb-6">
              <p>{doc?.proIntro}</p>
              <ul>
                {(doc?.proItems || []).map((item) => (
                  <li key={item._key}>
                    <strong>{item.label}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <p>{doc?.proOutro}</p>
            </div>
          </section>

          {/* Taking Care of Yourself */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">{doc?.selfHeading}</h2>

            <div className="bg-fog rounded-xl p-6">
              <p className="text-gray-700 mb-4">{doc?.selfIntro}</p>
              <ul className="space-y-2 text-gray-700">
                {(doc?.selfItems || []).map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <RelatedCards cards={doc?.related} className="mb-12 " />

          <PageCta heading={doc?.pageCtaHeading} body={doc?.pageCtaBody} wide={doc?.ctaWide} />
        </div>
      </div>
    </main>
  )
}
