import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What to Expect During a Professional Hoarding Cleanup',
  description: 'Wondering what happens during a professional hoarding cleanup? We walk you through the entire process from initial consultation to final cleaning.',
  keywords: [
    'hoarding cleanup process',
    'what to expect hoarding cleanup',
    'professional hoarding cleanup',
    'hoarding cleanup steps',
    'how hoarding cleanup works',
  ],
  openGraph: {
    title: 'What to Expect During a Professional Hoarding Cleanup',
    description: 'We walk you through the entire hoarding cleanup process from initial consultation to final cleaning.',
    url: 'https://boise-hoarding-cleanup.com/blog/what-to-expect-hoarding-cleanup',
  },
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/blog/what-to-expect-hoarding-cleanup',
  },
}

const steps = [
  {
    phase: 'Step 1',
    title: 'You Call Us',
    description: 'We talk about your situation over the phone. How big is the place? How bad is it? Any special concerns? This call is free and you\'re not committing to anything.',
  },
  {
    phase: 'Step 2',
    title: 'We Come Look',
    description: 'We schedule a time to see the property in person. We figure out how much work it is, spot any safety issues, and talk through how we\'d approach it. Then we give you a quote.',
  },
  {
    phase: 'Step 3',
    title: 'We Plan It Out',
    description: 'Before we start, we work with you to figure out what can\'t be thrown away—important papers, valuables, sentimental stuff. We also line up dumpsters and supplies.',
  },
  {
    phase: 'Step 4',
    title: 'The Actual Cleanup',
    description: 'We go through the property sorting everything: keep, donate, recycle, trash. We work at a pace that makes sense. If the homeowner wants to be involved, they can be.',
  },
  {
    phase: 'Step 5',
    title: 'Deep Cleaning',
    description: 'Once everything\'s out, we clean the place. Floors, walls, surfaces. Deal with any smells. Make it actually livable again.',
  },
  {
    phase: 'Step 6',
    title: 'After',
    description: 'We can connect you with ongoing support—organizing help, therapists who specialize in hoarding, that kind of thing.',
  },
]

export default function BlogPost() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-dark-blue underline hover:text-light-blue mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="bg-light-blue/10 text-light-blue text-sm font-medium px-3 py-1 rounded-full">
                Cleanup Process
              </span>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  November 15, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  7 min read
                </span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gunmetal mb-6">
              What Actually Happens During Hoarding Cleanup
            </h1>

            <p className="text-xl text-gray-600">
              Never been through this before? Here&apos;s what to expect, step by step.
            </p>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none [&>p]:mb-6">
            <p>
              If you&apos;ve never hired someone for hoarding cleanup, you probably have questions. Will they judge the house? Will my stuff get thrown away without asking? How long does this take?
            </p>

            <p>
              Knowing what&apos;s coming can help. Here&apos;s how it actually works.
            </p>

            <h2>How It Goes</h2>

            {steps.map((step, index) => (
              <div key={index} className="my-6 border-l-4 border-light-blue pl-6">
                <span className="text-light-blue font-bold text-sm">{step.phase}</span>
                <h3 className="text-xl font-bold text-gunmetal mt-1 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-0">{step.description}</p>
              </div>
            ))}

            <h2>What Makes a Good Cleanup Service</h2>

            <p>
              Not every company does this right. Here&apos;s what you should look for:
            </p>

            <ul>
              <li className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span><strong>No judgment:</strong> They understand this is a mental health thing, not a character flaw</span>
              </li>
              <li className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span><strong>They ask first:</strong> Nothing gets thrown away without permission</span>
              </li>
              <li className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span><strong>Discreet:</strong> Unmarked trucks, confidential</span>
              </li>
              <li className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span><strong>Donate when possible:</strong> Not everything goes to the dump</span>
              </li>
              <li className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span><strong>Goes at your pace:</strong> Not rushing through it</span>
              </li>
            </ul>

            <h2>How Long Does This Take?</h2>

            <p>
              It depends on a few things:
            </p>

            <ul>
              <li><strong>Size:</strong> Small apartment vs. big house makes a difference</li>
              <li><strong>How bad it is:</strong> Mild hoarding might take hours. Severe could take days.</li>
              <li><strong>Involvement:</strong> If the homeowner wants to help sort, it takes longer (but can be worth it)</li>
              <li><strong>Special problems:</strong> Biohazards, pests, structural stuff add time</li>
            </ul>

            <p>
              Most jobs in the Boise area take 1-5 days. We&apos;ll give you a realistic estimate when we see the place.
            </p>

            <h2>What Does It Cost?</h2>

            <p>
              Depends on the scope. Square footage, how much stuff, disposal fees, cleaning needed. In our area, most residential jobs run $500 for smaller cleanouts up to $5,000+ for severe situations.
            </p>

            <p>
              We give you a detailed quote after we see the property. No surprises. Payment plans available for bigger jobs.
            </p>

            <h2>Taking the First Step</h2>

            <p>
              If you or someone you know needs help, give us a call. The first consultation is free and confidential. We&apos;ll answer questions, explain how it works, and help you figure out your options. No pressure.
            </p>
          </article>

          {/* CTA */}
          <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Talk?
            </h3>
            <p className="text-gray-300 mb-6">
              Free consultations. We&apos;ll answer your questions.
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
