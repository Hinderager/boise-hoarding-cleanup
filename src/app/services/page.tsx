import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { iconFor } from '@/lib/icons'
import { getIndexPage } from '@/lib/sanity'

export const revalidate = 120

export async function generateMetadata(): Promise<Metadata> {
  const doc = await getIndexPage('services')
  return {
    title: doc?.metaTitle,
    description: doc?.metaDescription,
    alternates: { canonical: 'https://boise-hoarding-cleanup.com/services' },
  }
}

export default async function ServicesPage() {
  const doc = await getIndexPage('services')

  return (
    <main className="pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gunmetal mb-6">{doc?.pageHeading}</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">{doc?.pageLead}</p>

          <VisibleBreadcrumb />


          <QuickQuoteBar />

        <div className="grid md:grid-cols-2 gap-8">
          {(doc?.cards || []).map((card) => {
            const Icon = iconFor(card.icon)
            return (
              <Link key={card._key} href={card.href} className="group bg-fog rounded-xl p-6 hover:shadow-lg transition-all border border-gray-200">
                <div className="w-14 h-14 bg-light-blue/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-light-blue group-hover:text-white transition-colors">
                  <Icon className="w-7 h-7 text-light-blue group-hover:text-white" />
                </div>
                <h2 className="text-xl font-bold text-gunmetal mb-2">{card.title}</h2>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <span className="inline-flex items-center text-light-blue font-semibold group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}
