import { Metadata } from 'next'
import { Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hoarding Cleanup Process | What to Expect',
  description: 'Learn what to expect during a professional hoarding cleanup. Step-by-step guide to the cleanup process from assessment to completion.',
  alternates: { canonical: 'https://boise-hoarding-cleanup.com/resources/cleanup-process' },
}

export default function CleanupProcessPage() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gunmetal mb-6">The Cleanup Process</h1>
          <p className="text-xl text-gray-600 mb-12">
            If you've never done this before, you probably have questions about how it works. Here's our step-by-step process.
          </p>

          <section className="space-y-8 mb-12">
            <div className="bg-fog rounded-xl p-6 border-l-4 border-light-blue">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-light-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gunmetal mb-3">Initial Contact</h2>
                  <p className="text-gray-600 mb-3">
                    You call or email us. We ask some basic questions about the situation - how big is the space, how severe is the hoarding, any special concerns like biohazards or deadlines.
                  </p>
                  <p className="text-gray-600">
                    This conversation is confidential and no-pressure. We're just trying to understand what you need.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-fog rounded-xl p-6 border-l-4 border-light-blue">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-light-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gunmetal mb-3">Free On-Site Assessment</h2>
                  <p className="text-gray-600 mb-3">
                    We visit the property to see the situation firsthand. We'll look at every room, check for hazards, and get a sense of the scope of work.
                  </p>
                  <p className="text-gray-600">
                    This is when we can answer your specific questions and you can get a feel for whether we're the right fit. No obligation to move forward.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-fog rounded-xl p-6 border-l-4 border-light-blue">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-light-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gunmetal mb-3">Detailed Estimate</h2>
                  <p className="text-gray-600 mb-3">
                    We provide a written estimate that breaks down the work and cost. We'll explain what's included, how long we think it'll take, and answer any questions.
                  </p>
                  <p className="text-gray-600">
                    Take time to think about it. Talk to family. We're not going anywhere.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-fog rounded-xl p-6 border-l-4 border-light-blue">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-light-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gunmetal mb-3">Create a Plan</h2>
                  <p className="text-gray-600 mb-3">
                    Once you're ready to move forward, we develop a detailed cleanup plan. Which rooms first? What gets saved? Where should donations go? Any special requests?
                  </p>
                  <p className="text-gray-600">
                    If you're working with a therapist, we can include them in this planning stage.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-fog rounded-xl p-6 border-l-4 border-light-blue">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-light-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gunmetal mb-3">The Cleanup Work</h2>
                  <p className="text-gray-600 mb-3">
                    Our team arrives and gets to work. We sort carefully, setting aside items to keep, donate, or dispose of. You can be as involved as you want - participate in decisions or let us handle it.
                  </p>
                  <p className="text-gray-600 mb-3">
                    We work systematically through the space. Important documents, valuables, and sentimental items are identified and set aside safely.
                  </p>
                  <p className="text-gray-600">
                    If we find anything that requires a decision, we'll consult with you before proceeding.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-fog rounded-xl p-6 border-l-4 border-light-blue">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-light-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">6</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gunmetal mb-3">Removal and Disposal</h2>
                  <p className="text-gray-600 mb-3">
                    Items marked for removal are hauled away. Donations go to local charities. Recyclables go to recycling centers. Everything else is disposed of at the appropriate facilities.
                  </p>
                  <p className="text-gray-600">
                    We handle all the logistics. You don't have to make multiple trips or figure out where things go.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-fog rounded-xl p-6 border-l-4 border-light-blue">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-light-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">7</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gunmetal mb-3">Deep Cleaning</h2>
                  <p className="text-gray-600 mb-3">
                    Once everything's removed, we thoroughly clean the space. This includes vacuuming, mopping, wiping down surfaces, and sanitizing as needed.
                  </p>
                  <p className="text-gray-600">
                    If there were biohazards, we use appropriate cleaning solutions and follow safety protocols.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-fog rounded-xl p-6 border-l-4 border-light-blue">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-light-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">8</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gunmetal mb-3">Final Walkthrough</h2>
                  <p className="text-gray-600 mb-3">
                    We walk through the completed space with you. Make sure everything's done to your satisfaction. Address any final concerns.
                  </p>
                  <p className="text-gray-600">
                    We can provide before and after photos if you need documentation for insurance or other purposes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">What Makes Our Process Different</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'We never rush you through decisions',
                'Valuables and important items are protected',
                'We coordinate with other professionals',
                'Complete transparency about what\'s happening',
                'Respect and dignity throughout the process',
                'Thorough cleaning, not just junk removal'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="p-8 bg-dark-blue rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6">The first step is just a phone call. We'll walk you through everything.</p>
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
