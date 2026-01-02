import { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { ServiceProcess } from '@/components/ServiceProcess'
import { FAQ } from '@/components/FAQ'
import { StructuredData } from '@/components/StructuredData'
import { CheckCircle, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Hoarding Cleanup Kuna Idaho | Professional Hoarder Cleanout Services',
  description: 'Professional hoarding cleanup services in Kuna, Idaho. Compassionate hoarder cleanout and clutter removal. Licensed & insured. Same-day service available. Call (208) 943-5231.',
  keywords: [
    'hoarding cleanup Kuna',
    'hoarding cleanup Kuna Idaho',
    'hoarder cleanout Kuna',
    'hoarding cleanup services Kuna',
    'clutter removal Kuna Idaho',
    'hoarding help Kuna ID',
    'compassionate hoarding cleanup Kuna',
  ],
  openGraph: {
    title: 'Hoarding Cleanup Kuna Idaho | Professional Hoarder Cleanout',
    description: 'Professional, compassionate hoarding cleanup services in Kuna, Idaho. Licensed, insured, and discreet.',
    url: 'https://boise-hoarding-cleanup.com/cities-served/kuna',
  },
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/cities-served/kuna',
  },
}

export default function KunaPage() {
  return (
    <main>
      <StructuredData city="Kuna" />

      <HeroSection
        city="Kuna"
        headline="Hoarding Cleanup in Kuna, Idaho"
        subheadline="We help Kuna families deal with hoarding situations. Respectful service, fair prices."
      />
      <QuickQuoteBar />


      {/* Kuna-Specific Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gunmetal mb-6">
              Hoarding Cleanup in Kuna
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600 [&>p]:mb-6">
              <p>
                Kuna is a growing community south of Boise with a mix of rural properties and newer subdivisions. If you're dealing with a hoarding situation in Kuna, we can help.
              </p>

              <p>
                We've worked in homes all over Kuna—from older ranch-style houses to newer developments off Deer Flat Road. Whether you've got acreage or a standard residential lot, we've seen all kinds of properties.
              </p>

              <p>
                Hoarding situations are more common than people think, and there's no shame in asking for help. We work with the person living there when possible, and we're happy to coordinate with family members who are trying to help.
              </p>

              <h3 className="text-2xl font-bold text-gunmetal mt-8 mb-4">
                What We Do in Kuna
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Full cleanouts:</strong> We clear everything out, sort through it, and haul it away</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Estate cleanouts:</strong> When a loved one passes and leaves behind a difficult situation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Rural property cleanouts:</strong> Barns, outbuildings, sheds, and acreage cleanup</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Deep cleaning:</strong> Once everything's out, we can clean the space so it's livable again</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Sorting:</strong> We help find valuables and important documents before anything gets tossed</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gunmetal mt-8 mb-4">
                Why Kuna Residents Choose Us
              </h3>

              <p>
                Kuna is a bit more spread out than Boise, and we know that. We've got the trucks and equipment to handle larger properties, outbuildings, and situations where there's a lot of ground to cover.
              </p>

              <p>
                We're familiar with the area and can get to Kuna quickly—usually same-day or next-day service. We've worked with families, property managers, and landlords throughout Kuna and the surrounding area.
              </p>

              <p>
                Our team is licensed, insured, and experienced with hoarding situations. We don't judge, and we don't gossip. We just show up, do the work, and leave the property clean.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 p-6 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need Help in Kuna?
              </h3>
              <p className="text-gray-300 mb-6">
                Give us a call. We'll talk through your situation and give you a free estimate.
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
      </section>

      <WhyChooseUs />
      <ServiceProcess />
      <FAQ />

      {/* Related City Links */}
      <section className="py-12 bg-fog">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gunmetal mb-6 text-center">
            Also Serving Nearby Cities
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cities-served/boise" className="text-dark-blue underline hover:text-light-blue font-medium">
              Boise
            </Link>
            <Link href="/cities-served/meridian" className="text-dark-blue underline hover:text-light-blue font-medium">
              Meridian
            </Link>
            <Link href="/cities-served/nampa" className="text-dark-blue underline hover:text-light-blue font-medium">
              Nampa
            </Link>
            <Link href="/cities-served/caldwell" className="text-dark-blue underline hover:text-light-blue font-medium">
              Caldwell
            </Link>
            <Link href="/cities-served/eagle" className="text-dark-blue underline hover:text-light-blue font-medium">
              Eagle
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
