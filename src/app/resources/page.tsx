import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import Link from 'next/link'
import { iconFor } from '@/lib/icons'
import { getIndexPage } from '@/lib/sanity'

export const revalidate = 120

export async function generateMetadata(): Promise<Metadata> {
  const doc = await getIndexPage('resources')
  return {
    title: doc?.metaTitle,
    description: doc?.metaDescription,
    alternates: { canonical: 'https://boise-hoarding-cleanup.com/resources' },
  }
}

export default async function ResourcesPage() {
  const doc = await getIndexPage('resources')

  return (
    <main className="pt-20">
      <VisibleBreadcrumb />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gunmetal mb-6">{doc?.pageHeading}</h1>
        <p className="text-xl text-gray-600 mb-12">{doc?.pageLead}</p>

        <div className="grid md:grid-cols-2 gap-6">
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
      </div>
    </main>
  )
}
