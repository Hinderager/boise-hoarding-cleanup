import { Metadata } from 'next'
import { Phone, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Biohazard Cleanup Boise | Safe Contamination Removal',
  description: 'Professional biohazard cleanup for hoarding situations in Boise. Certified, safe removal of contaminated materials. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-hoarding-cleanup.com/services/biohazard' },
}

export default function BiohazardPage() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gunmetal mb-6">Biohazard Cleanup Services</h1>
          <p className="text-xl text-gray-600 mb-12">
            Some hoarding situations involve biological hazards that require specialized cleanup. We're trained and equipped to handle these situations safely and thoroughly.
          </p>

          <section className="mb-12">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-amber-900 mb-2">Safety First</h3>
                  <p className="text-amber-800">
                    Our team is trained in proper biohazard handling procedures and uses appropriate personal protective equipment. Your safety and ours is our top priority.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gunmetal mb-6">What We Handle</h2>
            <div className="prose prose-lg max-w-none text-gray-600 [&>p]:mb-6">
              <ul>
                <li>Human waste and bodily fluids</li>
                <li>Animal waste and urine contamination</li>
                <li>Mold and mildew remediation</li>
                <li>Pest infestations and cleanup</li>
                <li>Contaminated food and organic matter</li>
                <li>Medical waste disposal</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Our Process</h2>
            <div className="space-y-6">
              <div className="bg-fog rounded-xl p-6">
                <h3 className="text-xl font-bold text-gunmetal mb-2">Assessment</h3>
                <p className="text-gray-600">
                  We identify all biological hazards and develop a comprehensive cleanup plan.
                </p>
              </div>
              <div className="bg-fog rounded-xl p-6">
                <h3 className="text-xl font-bold text-gunmetal mb-2">Safe Removal</h3>
                <p className="text-gray-600">
                  All contaminated materials are removed following proper safety protocols and regulations.
                </p>
              </div>
              <div className="bg-fog rounded-xl p-6">
                <h3 className="text-xl font-bold text-gunmetal mb-2">Sanitization</h3>
                <p className="text-gray-600">
                  Affected areas are thoroughly cleaned, disinfected, and deodorized to restore safety.
                </p>
              </div>
              <div className="bg-fog rounded-xl p-6">
                <h3 className="text-xl font-bold text-gunmetal mb-2">Proper Disposal</h3>
                <p className="text-gray-600">
                  All biohazardous materials are disposed of according to local and federal regulations.
                </p>
              </div>
            </div>
          </section>

          <div className="p-8 bg-dark-blue rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Need Biohazard Cleanup?</h3>
            <p className="text-gray-300 mb-6">We handle these situations discreetly and professionally. Call us for immediate assistance.</p>
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
