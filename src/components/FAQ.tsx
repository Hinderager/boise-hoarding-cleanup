'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

// FAQ data used for both UI and structured data
export const faqs = [
  {
    question: 'How much does hoarding cleanup cost?',
    answer: 'Every job is unique. Cost depends on the size of the home, volume of items, type of materials, and any hazards present. We provide free, no-obligation estimates so you know exactly what to expect before we start.'
  },
  {
    question: 'How long does hoarding cleanup take?',
    answer: 'Most projects take 1-5 days depending on the home\'s size and level of accumulation. We work at your pace and can schedule half or full days based on your comfort level.'
  },
  {
    question: 'Will you work with me if I want to be involved in the process?',
    answer: 'Absolutely. We prefer working alongside you so you can make decisions about what stays and what goes. However, if you\'d rather not be present, we can work with your guidance remotely.'
  },
  {
    question: 'Is hoarding cleanup dangerous?',
    answer: 'It can be. Hoarded homes may contain mold, pest infestations, structural hazards, poor air quality, and fire risks. Our trained team knows how to handle these situations safely so you don\'t have to put yourself at risk.'
  },
  {
    question: 'What happens to my belongings?',
    answer: 'Nothing is thrown away without your approval. We help sort items, set aside valuables and keepsakes, donate usable goods to local charities, and recycle what we can. We can provide documentation of donations for tax purposes if needed.'
  },
  {
    question: 'Do you handle biohazard situations?',
    answer: 'Yes. We\'re equipped to handle situations involving mold, animal waste, pest infestations, and other unsanitary conditions following proper safety protocols.'
  },
  {
    question: 'Do you offer financing options?',
    answer: 'Yes. We offer flexible financing to help make our services more affordable. Our team is happy to explain available options so cost doesn\'t become an added burden during an already difficult time.'
  },
  {
    question: 'Can you help a family member who isn\'t ready for cleanup?',
    answer: 'We understand this is sensitive. Building trust comes first. We can work with family members, therapists, or social workers to approach the situation with compassion and patience.'
  },
  {
    question: 'Do you offer ongoing maintenance after the cleanup?',
    answer: 'Yes. Recovery is a journey. We offer follow-up visits—weekly, monthly, or as needed—to help maintain progress and prevent re-accumulation.'
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve Boise, Meridian, Nampa, Caldwell, Eagle, and the entire Treasure Valley. Same-day and emergency services are available for urgent situations.'
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
            <a href="tel:2089435231">
              <span className="md:hidden">Call Now</span>
              <span className="hidden md:inline">(208) 943-5231</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
