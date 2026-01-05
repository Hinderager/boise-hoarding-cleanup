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
  title: 'Hoarding Cleanup Boise Idaho | Professional Hoarder Cleanout Services',
  description: 'Professional hoarding cleanup services in Boise, Idaho. Compassionate hoarder cleanout, estate cleanout, and clutter removal. Licensed & insured. Same-day service available. Free estimates. Call (208) 943-5231.',
  keywords: [
    'hoarding cleanup Boise',
    'hoarding cleanup Boise Idaho',
    'hoarder cleanout Boise',
    'hoarding cleanup services Boise',
    'hoarding help Boise ID',
    'estate cleanout Boise',
    'clutter removal Boise Idaho',
    'hoarding remediation Boise',
    'compassionate hoarding cleanup Boise',
    'Boise hoarder cleanup services',
  ],
  openGraph: {
    title: 'Hoarding Cleanup Boise Idaho | Professional Hoarder Cleanout',
    description: 'Professional, compassionate hoarding cleanup services in Boise, Idaho. Licensed, insured, and discreet. Same-day service available.',
    url: 'https://boise-hoarding-cleanup.com/cities-served/boise',
  },
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/cities-served/boise',
  },
}

const boiseNeighborhoods = [
  'Downtown Boise',
  'North End',
  'East End',
  'Bench',
  'West Boise',
  'Southeast Boise',
  'Southwest Boise',
  'Harris Ranch',
  'Warm Springs',
  'Boise Highlands',
  'Collister',
  'State Street',
]

export default function BoisePage() {
  return (
    <main>
      <StructuredData city="Boise" />

      <HeroSection
        city="Boise"
        headline="Hoarding Cleanup in Boise, Idaho"
        subheadline="We help Boise families deal with hoarding situations. Respectful service, fair prices."
      />
      <QuickQuoteBar />


      {/* Boise-Specific Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gunmetal mb-6">
              Hoarding Cleanup in Boise
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600 [&>p]:mb-6">
              <p>
                If you&apos;re dealing with a hoarding situation in Boise, we can help. It&apos;s more common than people think, and there&apos;s no shame in asking for assistance.
              </p>

              <p>
                Boise has all kinds of homes—older houses in the North End, newer builds in Southeast Boise, apartments downtown. We&apos;ve done cleanups in all of them.
              </p>

              <p>
                We work with the person living there when possible. When it&apos;s a family member calling on someone&apos;s behalf, we handle that too. Either way, we keep things respectful and low-key.
              </p>

              <h3 className="text-2xl font-bold text-gunmetal mt-8 mb-4">
                What We Do
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
                  <span><strong>Clutter help:</strong> Before things get too bad, we can help get on top of it</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Deep cleaning:</strong> Once everything&apos;s out, we can clean the space so it&apos;s livable</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Sorting:</strong> We help find valuables and important documents before anything gets tossed</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gunmetal mt-8 mb-4">
                Areas We Cover in Boise
              </h3>

              <p>
                We work throughout the city, including:
              </p>
            </div>

            {/* Neighborhoods Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
              {boiseNeighborhoods.map((neighborhood) => (
                <div
                  key={neighborhood}
                  className="flex items-center gap-2 bg-fog px-3 py-2 rounded-lg"
                >
                  <MapPin className="w-4 h-4 text-light-blue flex-shrink-0" />
                  <span className="text-sm text-gunmetal">{neighborhood}</span>
                </div>
              ))}
            </div>

            {/* Neighborhood Pages */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-6">
                Boise Neighborhoods We Serve
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                
                <Link
                  href="/cities-served/boise/north-end"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                >
                  <span className="font-semibold text-dark-blue">North End</span>
                </Link>
                <Link
                  href="/cities-served/boise/bench"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                >
                  <span className="font-semibold text-dark-blue">The Bench</span>
                </Link>
                <Link
                  href="/cities-served/boise/downtown"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                >
                  <span className="font-semibold text-dark-blue">Downtown Boise</span>
                </Link>
                <Link
                  href="/cities-served/boise/harris-ranch"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                >
                  <span className="font-semibold text-dark-blue">Harris Ranch</span>
                </Link>
                <Link
                  href="/cities-served/boise/southeast-boise"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                >
                  <span className="font-semibold text-dark-blue">Southeast Boise</span>
                </Link>
                <Link
                  href="/cities-served/boise/west-boise"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                >
                  <span className="font-semibold text-dark-blue">West Boise</span>
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 p-6 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need Help in Boise?
              </h3>
              <p className="text-gray-300 mb-6">
                Give us a call. We&apos;ll talk through your situation and give you a free estimate.
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
