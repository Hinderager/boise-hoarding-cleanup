'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

// FAQ data used for both UI and structured data
export const faqs = [
  {
    question: 'How do you handle hoarding cleanup differently than regular junk removal?',
    answer: 'Hoarding cleanup requires a compassionate, patient approach. We understand that every item may have emotional significance. We work with you or your family member to make decisions about what to keep, donate, or discard. We never throw anything away without permission, and we go at a pace that feels comfortable.'
  },
  {
    question: 'Will you judge me or my loved one?',
    answer: 'Absolutely not. Hoarding is a recognized mental health condition, not a character flaw. Our team is trained to approach every situation with empathy and professionalism. We\'ve seen it all, and we\'re here to help—not judge.'
  },
  {
    question: 'How quickly can you start a hoarding cleanup?',
    answer: 'For most situations, we can schedule an assessment within 24-48 hours. For emergencies like evictions or code violations, we offer same-day or next-day service. The actual cleanup timeline depends on the size and severity of the situation.'
  },
  {
    question: 'Do you use unmarked trucks?',
    answer: 'Yes. We understand that privacy is important. Our vehicles are unmarked so neighbors won\'t know why we\'re there. Your situation stays confidential.'
  },
  {
    question: 'What happens to the items you remove?',
    answer: 'We sort everything carefully. Items in good condition go to donation centers. Recyclables are recycled. We only send to the landfill what truly can\'t be salvaged. We can provide documentation of donations for tax purposes if needed.'
  },
  {
    question: 'How much does hoarding cleanup cost?',
    answer: 'Every situation is different. Cost depends on the size of the space, amount of items, any hazardous materials, and the level of cleaning needed. We provide free, no-obligation estimates. Many cleanups in our area range from $500 for smaller spaces to $5,000+ for severe situations.'
  },
  {
    question: 'Can the homeowner be present during the cleanup?',
    answer: 'Yes, if they want to be. Some people prefer to be involved in decisions about their belongings. Others find it easier to step away and let us handle it. Either approach is fine—we follow the homeowner\'s lead.'
  }
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-12 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>
          <span className="text-dark-blue">Frequently Asked Questions</span>
        </h2>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 border-gray-200 last:border-b-0">
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-6 text-left transition-colors hover:bg-gray-50"
              >
                <span className="text-xl md:text-2xl font-bold text-dark-blue pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-dark-blue flex-shrink-0 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-gray-700 text-lg leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-4 justify-center mt-12">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow">
            <a href="tel:2085059352">
              <span className="md:hidden">Call Now</span>
              <span className="hidden md:inline">(208) 505-9352</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
