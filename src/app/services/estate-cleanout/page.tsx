import { Metadata } from 'next'
import { Phone, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Estate Cleanout Services Boise | Compassionate Estate Cleanup',
  description: 'Professional estate cleanout services in Boise. Respectful handling of family belongings after a loss. We donate and preserve what matters. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-hoarding-cleanup.com/services/estate-cleanout' },
}

export default function EstateCleanoutPage() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gunmetal mb-6">Estate Cleanout Services</h1>
          <p className="text-xl text-gray-600 mb-12">
            Losing a loved one is hard enough. When their home was affected by hoarding, the cleanup can feel overwhelming. We handle it with the care and respect your family deserves.
          </p>

          <section className="mb-12">
            <div className="bg-blue-50 border-l-4 border-light-blue p-6 rounded-r-lg mb-8">
              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-light-blue flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gunmetal mb-2">We Understand</h3>
                  <p className="text-gray-700">
                    We know this isn't just stuff—these were your loved one's belongings. We take time to sort carefully and preserve items that matter to your family.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gunmetal mb-6">How We Help Families</h2>
            <div className="prose prose-lg max-w-none text-gray-600 [&>p]:mb-6">
              <p>
                Estate cleanouts after hoarding require special care. We work with your family to identify valuable items, family heirlooms, and important documents. Everything else is handled with respect.
              </p>
              <p>
                We can coordinate with estate attorneys, real estate agents, and other professionals involved in settling the estate. Our goal is to make this process as easy as possible for you.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">What We Do</h2>
            <div className="space-y-4">
              {[
                'Carefully sort through all belongings',
                'Identify and preserve valuables and heirlooms',
                'Locate important documents and papers',
                'Donate usable items to local charities',
                'Dispose of remaining items responsibly',
                'Clean and sanitize the entire property',
                'Prepare the home for sale or rental',
                'Work on your timeline and schedule'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-fog rounded-lg p-4">
                  <div className="w-6 h-6 bg-light-blue/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-light-blue text-sm font-bold">{index + 1}</span>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Working With Families</h2>
            <div className="prose prose-lg max-w-none text-gray-600 [&>p]:mb-6">
              <p>
                We've helped many families through this process. We understand you're dealing with grief and stress. We handle the heavy lifting—literally and figuratively—so you can focus on what matters.
              </p>
              <p>
                Family members can be present during the cleanout or we can handle it independently. Either way, we keep you updated and consult with you about any questions that come up.
              </p>
            </div>
          </section>

          <div className="p-8 bg-dark-blue rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Need Help With an Estate?</h3>
            <p className="text-gray-300 mb-6">We're here to help during this difficult time. Call us to discuss how we can assist your family.</p>
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
