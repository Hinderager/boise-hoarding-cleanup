import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import Link from 'next/link'
import { iconFor } from '@/lib/icons'
import { getContentPage } from '@/lib/sanity'

export const revalidate = 120

export async function generateMetadata(): Promise<Metadata> {
  const doc = await getContentPage('about-us')
  return {
    title: doc?.metaTitle,
    description: doc?.metaDescription,
    alternates: { canonical: 'https://boise-hoarding-cleanup.com/about-us' },
  }
}

export default async function AboutUsPage() {
  const doc = await getContentPage('about-us')

  return (
    <main className="pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gunmetal mb-6">{doc?.pageHeading}</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">{doc?.pageLead}</p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {(doc?.cards || []).map((card) => {
            const Icon = iconFor(card.icon)
            return (
              <Link key={card._key} href={card.href} className="bg-fog rounded-xl p-6 hover:shadow-lg transition-all">
                <Icon className="w-10 h-10 text-light-blue mb-4" />
                <h2 className="text-xl font-bold text-gunmetal mb-2">{card.title}</h2>
                <p className="text-gray-600">{card.description}</p>
              </Link>
            )
          })}
        </div>

        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gunmetal mb-6">{doc?.approachHeading}</h2>
          <div className="prose prose-lg max-w-none text-gray-600 [&>p]:mb-6">
            {(doc?.approachParas || []).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>
      <VisibleBreadcrumb />
      </div>
    </main>
  )
}
