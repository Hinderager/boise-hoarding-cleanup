import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hoarding Cleanup FAQ | Common Questions Answered',
  description: 'Frequently asked questions about hoarding cleanup services in Boise. Get answers about cost, timeline, process, and privacy.',
  alternates: { canonical: 'https://boise-hoarding-cleanup.com/resources/faq' },
}

const faqs = [
  {
    question: 'How much does hoarding cleanup cost?',
    answer: 'It depends on the size of the space and how severe the hoarding is. We provide free estimates after seeing the property. Most jobs range from a few thousand to tens of thousands of dollars. We\'ll give you an honest assessment before you commit to anything.'
  },
  {
    question: 'How long does cleanup take?',
    answer: 'Some jobs take a day. Others take a week or more. It depends on the amount of stuff, size of the space, and how much sorting needs to happen. We work as fast as we can while still being thorough and respectful.'
  },
  {
    question: 'Do I need to be there during cleanup?',
    answer: 'That\'s up to you. Some people want to be involved in every decision. Others prefer we handle it independently. We can work either way. Whatever makes you most comfortable is what we\'ll do.'
  },
  {
    question: 'What happens to all the stuff?',
    answer: 'Items in good condition go to local charities. Things that can be recycled are recycled. Everything else is disposed of properly at the appropriate facilities. We try to keep as much out of landfills as possible.'
  },
  {
    question: 'Is this confidential?',
    answer: 'Completely. We use unmarked vehicles and never discuss your situation with anyone you haven\'t authorized. We understand privacy is important, especially with hoarding situations.'
  },
  {
    question: 'Do you work with therapists?',
    answer: 'Yes. If you\'re working with a therapist who specializes in hoarding disorder, we\'re happy to coordinate with them. Many families find this helpful. The therapist can provide emotional support while we handle the physical cleanup.'
  },
  {
    question: 'What if there are biohazards?',
    answer: 'We\'re equipped to handle biohazardous materials safely. This includes human or animal waste, contaminated food, pests, and mold. We follow proper protocols and dispose of everything according to regulations.'
  },
  {
    question: 'Can you help find important documents?',
    answer: 'Yes. We sort carefully and set aside anything that looks important - documents, photos, valuables, etc. We can help you locate specific items if we know what to look for.'
  },
  {
    question: 'Do you clean and sanitize after removing items?',
    answer: 'Absolutely. Once everything\'s removed, we thoroughly clean and sanitize the space. That includes floors, walls, surfaces - whatever needs it. The goal is to make the space truly livable again.'
  },
  {
    question: 'What if the person doesn\'t want help?',
    answer: 'That\'s really common and really hard. We can\'t force anyone to accept help. Sometimes involving a therapist or having multiple family conversations helps. Other times people need to hit a crisis point before they\'re ready. We\'re here when they are.'
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'We understand this is expensive. We can often work out payment arrangements. Call us to discuss your specific situation and what might be possible.'
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes. We\'re fully licensed and insured for your protection and ours. We can provide proof of insurance if needed.'
  }
]

export default function FAQPage() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gunmetal mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 mb-12">
            Common questions about hoarding cleanup. Don't see your question? Give us a call.
          </p>

          <div className="space-y-6 mb-12">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-fog rounded-xl p-6">
                <h2 className="text-xl font-bold text-gunmetal mb-3">{faq.question}</h2>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="p-8 bg-dark-blue rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-gray-300 mb-6">We're happy to answer anything you want to know. Give us a call.</p>
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
