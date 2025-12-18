import { Metadata } from 'next'
import Link from 'next/link'
import { HelpCircle, Heart, AlertTriangle, ListChecks } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hoarding Cleanup Resources | Boise Hoarding Cleanup',
  description: 'Helpful resources about hoarding disorder, cleanup process, and supporting loved ones. Free information from Boise Hoarding Cleanup.',
  alternates: { canonical: 'https://boise-hoarding-cleanup.com/resources' },
}

export default function ResourcesPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gunmetal mb-6">Resources</h1>
        <p className="text-xl text-gray-600 mb-12">Helpful information about hoarding and the cleanup process.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/resources/hoarding-signs" className="bg-fog rounded-xl p-6 hover:shadow-lg transition-all">
            <AlertTriangle className="w-10 h-10 text-light-blue mb-4" />
            <h2 className="text-xl font-bold text-gunmetal mb-2">Signs of Hoarding</h2>
            <p className="text-gray-600">How to recognize if someone has a hoarding problem.</p>
          </Link>
          <Link href="/resources/helping-a-hoarder" className="bg-fog rounded-xl p-6 hover:shadow-lg transition-all">
            <Heart className="w-10 h-10 text-light-blue mb-4" />
            <h2 className="text-xl font-bold text-gunmetal mb-2">Helping a Hoarder</h2>
            <p className="text-gray-600">What to do (and what not to do) when a loved one hoards.</p>
          </Link>
          <Link href="/resources/cleanup-process" className="bg-fog rounded-xl p-6 hover:shadow-lg transition-all">
            <ListChecks className="w-10 h-10 text-light-blue mb-4" />
            <h2 className="text-xl font-bold text-gunmetal mb-2">Cleanup Process</h2>
            <p className="text-gray-600">What to expect during a professional hoarding cleanup.</p>
          </Link>
          <Link href="/resources/faq" className="bg-fog rounded-xl p-6 hover:shadow-lg transition-all">
            <HelpCircle className="w-10 h-10 text-light-blue mb-4" />
            <h2 className="text-xl font-bold text-gunmetal mb-2">FAQ</h2>
            <p className="text-gray-600">Common questions about hoarding cleanup services.</p>
          </Link>
        </div>
      </div>
    </main>
  )
}
