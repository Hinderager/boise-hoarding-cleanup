import { Metadata } from 'next'
import { Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Why Choose Us | Boise Hoarding Cleanup',
  description: 'Learn why families choose our compassionate hoarding cleanup services. We understand hoarding disorder and treat everyone with respect and dignity.',
  alternates: { canonical: 'https://boise-hoarding-cleanup.com/about-us/why-choose-us' },
}

const reasons = [
  {
    title: 'We Actually Understand Hoarding',
    description: 'This isn\'t just junk removal to us. We\'ve trained our team to understand hoarding disorder and work with compassion.'
  },
  {
    title: 'No Judgment, Ever',
    description: 'We\'re not here to judge anyone. We\'re here to help. Every situation is treated with respect and dignity.'
  },
  {
    title: 'We Work at Your Pace',
    description: 'We don\'t rush. Some families need time to make decisions. We understand that and work on your timeline.'
  },
  {
    title: 'Discreet Service',
    description: 'We use unmarked vehicles and work professionally. Your privacy matters to us.'
  },
  {
    title: 'Family Coordination',
    description: 'We work with family members and therapists when appropriate. We\'re part of your support team.'
  },
  {
    title: 'Proper Disposal',
    description: 'Items are donated when possible, recycled when we can, and disposed of properly. We care about doing it right.'
  },
  {
    title: 'Complete Cleanup',
    description: 'We don\'t just haul stuff away. We clean and sanitize the space so it\'s truly livable again.'
  },
  {
    title: 'Local Family Business',
    description: 'We live and work in the Treasure Valley. This is our community, and we care about the people here.'
  }
]

export default function WhyChooseUsPage() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gunmetal mb-6">Why Choose Us</h1>
          <p className="text-xl text-gray-600 mb-12">
            Not all cleanup companies understand hoarding. We do. Here's what makes us different.
          </p>

          <div className="space-y-8 mb-12">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-fog rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-bold text-gunmetal mb-2">{reason.title}</h2>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">What Makes a Good Hoarding Cleanup Company?</h2>
            <div className="prose prose-lg max-w-none text-gray-600 [&>p]:mb-6">
              <p>
                Anyone can haul junk. But working with hoarding situations requires specific skills and understanding. Here's what you should look for:
              </p>
              <ul>
                <li><strong>Training in hoarding disorder:</strong> The team should understand what hoarding is and how it affects people.</li>
                <li><strong>Patience:</strong> This isn't a rush job. Good companies take the time to do it right.</li>
                <li><strong>Compassion:</strong> Look for a company that treats people with respect, not judgment.</li>
                <li><strong>Flexibility:</strong> Every situation is different. The company should adapt to your needs.</li>
                <li><strong>Coordination skills:</strong> They should be able to work with therapists, family members, and other professionals.</li>
                <li><strong>Proper cleanup:</strong> It's not just about removing stuff. The space needs to be cleaned and sanitized.</li>
              </ul>
              <p>
                We built our service around these principles. This is how hoarding cleanup should be done.
              </p>
            </div>
          </section>

          <div className="p-8 bg-dark-blue rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Work With Us?</h3>
            <p className="text-gray-300 mb-6">Call us for a confidential conversation about how we can help.</p>
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
