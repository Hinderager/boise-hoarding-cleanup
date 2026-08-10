import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { PageCta } from '@/components/PageCta'
import { RelatedCards } from '@/components/RelatedCards'
import { RichProse } from '@/components/RichProse'
import { iconFor } from '@/lib/icons'
import { getContentPage } from '@/lib/sanity'

const URL = 'https://boise-hoarding-cleanup.com/about-us/understanding-hoarding'

export const revalidate = 120

export async function generateMetadata(): Promise<Metadata> {
  const doc = await getContentPage('about-us/understanding-hoarding')
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

export default async function AboutHoardingPage() {
  const doc = await getContentPage('about-us/understanding-hoarding')

  return (
    <main className="pt-20">
      <VisibleBreadcrumb />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gunmetal mb-6">
              {doc?.pageHeading}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{doc?.pageLead}</p>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {(doc?.quickFacts || []).map((fact) => {
              const Icon = iconFor(fact.icon)
              return (
                <div key={fact._key} className="bg-fog rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-light-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-light-blue" />
                  </div>
                  <h3 className="font-bold text-gunmetal mb-2">{fact.title}</h3>
                  <p className="text-sm text-gray-600">{fact.text}</p>
                </div>
              )
            })}
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none text-gray-600 [&>p]:mb-6">
            <RichProse blocks={doc?.richBlocks} />

            {/* External Resources */}
            <div className="bg-fog rounded-xl p-6 mt-8 not-prose">
              <h3 className="text-lg font-bold text-gunmetal mb-4">{doc?.linksTitle}</h3>
              <ul className="space-y-2 text-sm">
                {(doc?.links || []).map((link) => (
                  <li key={link._key}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-blue underline hover:text-light-blue"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <RelatedCards cards={doc?.related} className="mt-12 " />

          <PageCta
            heading={doc?.pageCtaHeading}
            body={doc?.pageCtaBody}
            wide={doc?.ctaWide}
            className="mt-12 "
          />
        </div>
      </div>
    </main>
  )
}
