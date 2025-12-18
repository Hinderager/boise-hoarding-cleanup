import { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'
import { SchedulingForm } from '@/components/SchedulingForm'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { ServiceProcess } from '@/components/ServiceProcess'
import { FAQ } from '@/components/FAQ'
import { StructuredData } from '@/components/StructuredData'
import { CheckCircle, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hoarding Cleanup Meridian Idaho | Hoarder Cleanout Services',
  description: 'Professional hoarding cleanup services in Meridian, Idaho. Compassionate hoarder cleanout, estate cleanout, and clutter removal. Licensed & insured. Same-day service. Free estimates. Call (208) 505-9352.',
  keywords: [
    'hoarding cleanup Meridian',
    'hoarding cleanup Meridian Idaho',
    'hoarder cleanout Meridian',
    'hoarding cleanup services Meridian ID',
    'hoarding help Meridian',
    'estate cleanout Meridian Idaho',
    'clutter removal Meridian',
    'hoarding remediation Meridian',
    'Meridian hoarder cleanup',
  ],
  openGraph: {
    title: 'Hoarding Cleanup Meridian Idaho | Professional Hoarder Cleanout',
    description: 'Professional, compassionate hoarding cleanup services in Meridian, Idaho. Licensed, insured, and discreet. Same-day service available.',
    url: 'https://boise-hoarding-cleanup.com/meridian',
  },
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/meridian',
  },
}

const meridianNeighborhoods = [
  'Ten Mile',
  'Lochsa Falls',
  'Paramount',
  'Tuscany',
  'Silverstone',
  'South Meridian',
  'Ustick Road Area',
  'Downtown Meridian',
  'The Village',
  'Heritage Commons',
  'Spurwing',
  'Victory Road Area',
]

export default function MeridianPage() {
  return (
    <main>
      <StructuredData city="Meridian" />

      <HeroSection
        city="Meridian"
        headline="Hoarding Cleanup in Meridian, Idaho"
        subheadline="We help Meridian families tackle hoarding situations. Respectful service, fair prices."
      />

      <SchedulingForm city="Meridian" />

      {/* Meridian-Specific Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gunmetal mb-6">
              Hoarding Cleanup in Meridian
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600 [&>p]:mb-6">
              <p>
                Meridian&apos;s growing fast. Lots of new neighborhoods, lots of families. And some of those families are dealing with hoarding situations they need help with.
              </p>

              <p>
                We&apos;ve worked in homes throughout Meridian—from the newer subdivisions off Ten Mile to the established areas near downtown. Every situation is different, and we approach each one the same way: with patience and without judgment.
              </p>

              <p>
                If you&apos;re calling about a family member, that&apos;s common. We work with adult children, spouses, and sometimes social workers. We can coordinate with everyone involved and keep things private.
              </p>

              <h3 className="text-2xl font-bold text-gunmetal mt-8 mb-4">
                What We Do
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Full cleanouts:</strong> We clear the whole house, sort through everything, and haul it off</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Garage cleanouts:</strong> A lot of hoarding starts in the garage. We can clear it out</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Estate cleanouts:</strong> When someone passes and leaves behind a tough situation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Pre-sale prep:</strong> Need to sell a house that&apos;s packed? We can get it ready</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Deep cleaning:</strong> Once everything&apos;s out, we can clean so it&apos;s livable again</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gunmetal mt-8 mb-4">
                Areas We Cover in Meridian
              </h3>

              <p>
                We work throughout Meridian, including:
              </p>
            </div>

            {/* Neighborhoods Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
              {meridianNeighborhoods.map((neighborhood) => (
                <div
                  key={neighborhood}
                  className="flex items-center gap-2 bg-fog px-3 py-2 rounded-lg"
                >
                  <MapPin className="w-4 h-4 text-light-blue flex-shrink-0" />
                  <span className="text-sm text-gunmetal">{neighborhood}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 p-6 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need Help in Meridian?
              </h3>
              <p className="text-gray-300 mb-6">
                Give us a call. We&apos;ll talk through your situation and give you a free estimate.
              </p>
              <a
                href="tel:2085059352"
                className="inline-flex items-center gap-2 bg-brand-yellow text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                (208) 505-9352
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
