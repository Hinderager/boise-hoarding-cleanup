import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Boise Hoarding Cleanup',
  description: 'Contact us for compassionate hoarding cleanup in Boise and the Treasure Valley. Confidential, judgment-free service. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-hoarding-cleanup.com/contact' },
}

export default function ContactPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gunmetal mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 mb-12">
            Ready to take the first step? We're here to help. Every conversation is confidential.
          </p>

          <div className="bg-blue-50 border-l-4 border-light-blue p-6 rounded-r-lg mb-12">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-light-blue flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gunmetal mb-2">Your Privacy Matters</h3>
                <p className="text-gray-700">
                  All conversations are completely confidential. We use unmarked vehicles and never discuss your situation with anyone except those you authorize.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gunmetal mb-1">Phone</h3>
                  <a href="tel:2085059352" className="text-light-blue text-lg font-semibold hover:underline">(208) 505-9352</a>
                  <p className="text-sm text-gray-600 mt-1">Call or text anytime</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gunmetal mb-1">Email</h3>
                  <a href="mailto:info@topshelfpros.com" className="text-light-blue hover:underline">info@topshelfpros.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gunmetal mb-1">Service Area</h3>
                  <p className="text-gray-600">Boise, Meridian, Nampa, Caldwell, Eagle, and the Treasure Valley</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gunmetal mb-1">Availability</h3>
                  <p className="text-gray-600">Monday - Saturday: 7am - 7pm</p>
                  <p className="text-gray-600">Sunday: By appointment</p>
                  <p className="text-sm text-gray-500 mt-1">We respond to messages within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-fog rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gunmetal mb-4">What to Expect</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gunmetal mb-1">1. Initial Call</h3>
                  <p className="text-sm">We'll ask some basic questions about the situation. You share what you're comfortable sharing.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gunmetal mb-1">2. Free Assessment</h3>
                  <p className="text-sm">We visit the property to assess the scope. This is confidential and no-obligation.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gunmetal mb-1">3. Custom Quote</h3>
                  <p className="text-sm">We provide a detailed estimate based on the specific situation and your needs.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gunmetal mb-1">4. Schedule When Ready</h3>
                  <p className="text-sm">Start when you're ready. No pressure, no judgment.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-dark-blue rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Talk?</h3>
            <p className="text-gray-300 mb-6">The hardest part is making the call. We'll make everything else easier.</p>
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
