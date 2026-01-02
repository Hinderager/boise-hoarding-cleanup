import { Metadata } from 'next'
import { Phone, CheckCircle } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Residential Hoarding Cleanup Boise | Compassionate Home Cleanup',
  description: 'Professional residential hoarding cleanup in Boise. We understand hoarding disorder and treat your home and family with respect. Judgment-free service. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-hoarding-cleanup.com/services/residential' },
}

const benefits = [
  'Compassionate, judgment-free approach',
  'Work at a pace that respects your needs',
  'Proper disposal and donation of items',
  'Coordination with therapists and family',
  'Discreet service with unmarked vehicles',
  'Complete sanitization and cleaning',
  'Before and after documentation',
  'Flexible scheduling options'
]

export default function ResidentialPage() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gunmetal mb-6">Residential Hoarding Cleanup</h1>
          <p className="text-xl text-gray-600 mb-12">
            We provide compassionate hoarding cleanup services for homes throughout the Treasure Valley. We understand this isn't just about cleaning up—it's about helping someone regain control of their living space.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">How We Help</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8 [&>p]:mb-6">
              <p>
                Hoarding cleanup is different from regular junk removal. We've trained our team to understand hoarding disorder and work with compassion. We're not here to judge—we're here to help.
              </p>
              <p>
                We work directly with you or your family member to sort through belongings carefully. Items that should be kept stay. Things that can be donated go to local charities. And everything else is disposed of properly.
              </p>
              <p>
                The goal is to create a safe, livable space while respecting the person's attachment to their belongings. This takes patience, and we have plenty of it.
              </p>
            </div>
          </section>
      <QuickQuoteBar />

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">What You Can Expect</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Our Process</h2>
            <div className="space-y-6">
              <div className="bg-fog rounded-xl p-6">
                <h3 className="text-xl font-bold text-gunmetal mb-2">1. Initial Consultation</h3>
                <p className="text-gray-600">
                  We visit your home to assess the situation. This is completely confidential and judgment-free. We'll discuss your goals and timeline.
                </p>
              </div>
              <div className="bg-fog rounded-xl p-6">
                <h3 className="text-xl font-bold text-gunmetal mb-2">2. Create a Plan</h3>
                <p className="text-gray-600">
                  We work with you to develop a cleanup plan that respects your needs. We can coordinate with therapists or family members if you'd like.
                </p>
              </div>
              <div className="bg-fog rounded-xl p-6">
                <h3 className="text-xl font-bold text-gunmetal mb-2">3. Sort and Remove</h3>
                <p className="text-gray-600">
                  Our team carefully sorts through items with you. We take the time to do it right, not rush through it.
                </p>
              </div>
              <div className="bg-fog rounded-xl p-6">
                <h3 className="text-xl font-bold text-gunmetal mb-2">4. Clean and Sanitize</h3>
                <p className="text-gray-600">
                  Once everything's removed, we thoroughly clean and sanitize the space. You'll have a fresh start.
                </p>
              </div>
            </div>
          </section>

          <div className="p-8 bg-dark-blue rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Take the First Step?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're here to help, not judge. Call us for a confidential conversation about how we can help you or your loved one.
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
