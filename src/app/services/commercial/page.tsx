import { Metadata } from 'next'
import { Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Hoarding Cleanup Boise | Business Property Cleanup',
  description: 'Professional commercial hoarding cleanup for rental properties, businesses, and landlords in Boise. Fast, discreet service. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-hoarding-cleanup.com/services/commercial' },
}

export default function CommercialPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gunmetal mb-6">Commercial Hoarding Cleanup</h1>
          <p className="text-xl text-gray-600 mb-12">
            Property managers and landlords face unique challenges when dealing with hoarding situations. We provide fast, professional cleanup to get your property rent-ready again.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Who We Help</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {['Property managers', 'Landlords', 'Real estate agents', 'Business owners', 'HOA boards', 'Legal representatives'].map((client, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{client}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Our Services Include</h2>
            <div className="prose prose-lg max-w-none text-gray-600 [&>p]:mb-6">
              <ul>
                <li>Complete property cleanout and debris removal</li>
                <li>Biohazard cleanup if needed</li>
                <li>Coordination with legal proceedings</li>
                <li>Documented before/after photos for records</li>
                <li>Fast turnaround to minimize vacancy time</li>
                <li>Proper disposal of all materials</li>
                <li>Final cleaning and sanitization</li>
              </ul>
            </div>
          </section>

          <div className="p-8 bg-dark-blue rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Need a Property Cleaned Out?</h3>
            <p className="text-gray-300 mb-6">We work fast and efficiently to get your property ready for the next tenant.</p>
            <a
              href="tel:2085059352"
              className="inline-flex items-center gap-2 bg-brand-yellow text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
              (208) 505-9352
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
