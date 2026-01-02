import { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'
import { SchedulingForm } from '@/components/SchedulingForm'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { ServiceProcess } from '@/components/ServiceProcess'
import { FAQ } from '@/components/FAQ'
import { StructuredData } from '@/components/StructuredData'
import { CheckCircle, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Hoarding Cleanup Star Idaho | Professional Hoarder Cleanout Services',
  description: 'Professional hoarding cleanup services in Star, Idaho. Compassionate hoarder cleanout and clutter removal. Licensed & insured. Same-day service available. Call (208) 943-5231.',
  keywords: [
    'hoarding cleanup Star',
    'hoarding cleanup Star Idaho',
    'hoarder cleanout Star',
    'hoarding cleanup services Star',
    'clutter removal Star Idaho',
    'hoarding help Star ID',
    'compassionate hoarding cleanup Star',
  ],
  openGraph: {
    title: 'Hoarding Cleanup Star Idaho | Professional Hoarder Cleanout',
    description: 'Professional, compassionate hoarding cleanup services in Star, Idaho. Licensed, insured, and discreet.',
    url: 'https://boise-hoarding-cleanup.com/cities-served/star',
  },
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/cities-served/star',
  },
}

export default function StarPage() {
  return (
    <main>
      <StructuredData city="Star" />

      <HeroSection
        city="Star"
        headline="Hoarding Cleanup in Star, Idaho"
        subheadline="We help Star families deal with hoarding situations. Respectful service, fair prices."
      />

      <SchedulingForm city="Star" />

      {/* Star-Specific Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gunmetal mb-6">
              Hoarding Cleanup in Star
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600 [&>p]:mb-6">
              <p>
                Star is a small, rural community northwest of Boise. If you're dealing with a hoarding situation in Star, we're here to help—no judgment, just results.
              </p>

              <p>
                We've worked on properties all over Star—from larger rural lots with multiple outbuildings to smaller homes in the newer subdivisions. Star's got a mix of older farmhouses and newer construction, and we've seen all kinds of situations.
              </p>

              <p>
                Hoarding is tough to deal with, especially in a small town where everyone knows everyone. We keep things discreet and respectful. Whether you're the person living there or calling on behalf of a family member, we'll work with you at your pace.
              </p>

              <h3 className="text-2xl font-bold text-gunmetal mt-8 mb-4">
                What We Do in Star
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Full cleanouts:</strong> We clear everything out, sort through it, and haul it away</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Rural property cleanouts:</strong> Barns, sheds, outbuildings, and acreage cleanup</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Estate cleanouts:</strong> When a loved one passes and leaves behind a difficult situation</span>
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
                Why Star Residents Choose Us
              </h3>

              <p>
                Star is a bit off the beaten path, but we're familiar with the area and can get there quickly. We've got the equipment to handle larger rural properties and the experience to work in tight spaces in smaller homes.
              </p>

              <p>
                We know Star is a tight-knit community. We're discreet and professional—we don't advertise what we're doing or make a big scene. We show up, do the work, and leave the property clean.
              </p>

              <p>
                Our team is licensed, insured, and trained to handle hoarding situations with compassion. We've worked with families, landlords, and property managers all over the Treasure Valley, including Star.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 p-6 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need Help in Star?
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
      <QuickQuoteBar />

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
