import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Phone, CheckCircle } from 'lucide-react'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { iconFor } from '@/lib/icons'
import { getServicePage, getServiceSlugs, type ServiceSection } from '@/lib/sanity'

/**
 * One route for all four service pages.
 *
 * The markup below is exactly what the four hand-written files had — the four
 * pages were never the same shape, so a section says which kind of body it
 * carries rather than the route assuming one. Only the words come from Sanity.
 */

export const revalidate = 120
export const dynamicParams = true

export async function generateStaticParams() {
  const slugs = await getServiceSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const doc = await getServicePage(slug)
  if (!doc) return { title: 'Service' }

  return {
    title: doc.metaTitle,
    description: doc.metaDescription,
    alternates: { canonical: `https://boise-hoarding-cleanup.com/services/${slug}` },
  }
}

const H2 = 'text-3xl font-bold text-gunmetal mb-6'

function Callout({ section }: { section: ServiceSection }) {
  const c = section.callout
  if (!c) return null
  const Icon = iconFor(c.icon)
  const warning = c.tone === 'warning'

  return (
    <div
      className={`${
        warning ? 'bg-amber-50 border-amber-500' : 'bg-blue-50 border-light-blue'
      } border-l-4 p-6 rounded-r-lg mb-8`}
    >
      <div className="flex items-start gap-3">
        <Icon
          className={`w-6 h-6 ${warning ? 'text-amber-600' : 'text-light-blue'} flex-shrink-0 mt-0.5`}
        />
        <div>
          <h3 className={`font-bold ${warning ? 'text-amber-900' : 'text-gunmetal'} mb-2`}>
            {c.title}
          </h3>
          <p className={warning ? 'text-amber-800' : 'text-gray-700'}>{c.text}</p>
        </div>
      </div>
    </div>
  )
}

function SectionBody({ section }: { section: ServiceSection }) {
  const prose = `prose prose-lg max-w-none text-gray-600 ${section.spaced ? 'mb-8 ' : ''}[&>p]:mb-6`

  if (section.kind === 'paras') {
    return (
      <div className={prose}>
        {(section.paras || []).map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    )
  }

  if (section.kind === 'bullets') {
    return (
      <div className={prose}>
        <ul>
          {(section.bullets || []).map((item) => (
            <li key={item._key}>{item.text}</li>
          ))}
        </ul>
      </div>
    )
  }

  if (section.kind === 'checkGrid') {
    return (
      <div className={`grid md:grid-cols-2 gap-4${section.spaced ? ' mb-8' : ''}`}>
        {(section.items || []).map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    )
  }

  if (section.kind === 'stepCards') {
    return (
      <div className="space-y-6">
        {(section.steps || []).map((step) => (
          <div key={step._key} className="bg-fog rounded-xl p-6">
            <h3 className="text-xl font-bold text-gunmetal mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.text}</p>
          </div>
        ))}
      </div>
    )
  }

  // numberRows
  return (
    <div className="space-y-4">
      {(section.items || []).map((item, i) => (
        <div key={i} className="flex items-start gap-3 bg-fog rounded-lg p-4">
          <div className="w-6 h-6 bg-light-blue/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-light-blue text-sm font-bold">{i + 1}</span>
          </div>
          <span className="text-gray-700">{item}</span>
        </div>
      ))}
    </div>
  )
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const doc = await getServicePage(slug)
  if (!doc?.pageHeading) notFound()

  return (
    <main className="pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gunmetal mb-6">{doc.pageHeading}</h1>
          <p className="text-xl text-gray-600 mb-12">{doc.pageLead}</p>

          <VisibleBreadcrumb />

          <QuickQuoteBar />

          {(doc.pageSections || []).map((section) => (
            <section key={section._key} className="mb-12">
              <Callout section={section} />
              <h2 className={H2}>{section.heading}</h2>
              <SectionBody section={section} />
            </section>
          ))}

          <div className="p-8 bg-dark-blue rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">{doc.pageCtaHeading}</h3>
            <p className={`text-gray-300 mb-6${doc.ctaWide ? ' max-w-2xl mx-auto' : ''}`}>
              {doc.pageCtaBody}
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
    </main>
  )
}
