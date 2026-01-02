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
  title: 'Hoarding Cleanup Caldwell Idaho | Hoarder Cleanout Services Canyon County',
  description: 'Professional hoarding cleanup services in Caldwell, Idaho. Compassionate hoarder cleanout, estate cleanout, and clutter removal in Canyon County. Licensed & insured. Same-day service. Call (208) 943-5231.',
  keywords: [
    'hoarding cleanup Caldwell',
    'hoarding cleanup Caldwell Idaho',
    'hoarder cleanout Caldwell',
    'hoarding cleanup services Caldwell ID',
    'hoarding help Caldwell',
    'estate cleanout Caldwell Idaho',
    'Canyon County hoarding cleanup',
    'clutter removal Caldwell',
    'Caldwell hoarder cleanup',
    'property cleanout Caldwell',
  ],
  openGraph: {
    title: 'Hoarding Cleanup Caldwell Idaho | Canyon County Hoarder Cleanout',
    description: 'Professional, compassionate hoarding cleanup services in Caldwell, Idaho. Licensed, insured, and discreet. Same-day service available.',
    url: 'https://boise-hoarding-cleanup.com/caldwell',
  },
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/caldwell',
  },
}

const caldwellAreas = [
  'Downtown Caldwell',
  'West Caldwell',
  'East Caldwell',
  'North Caldwell',
  'South Caldwell',
  'Ustick Road Area',
  'Cleveland Boulevard',
  'Middleton Road Area',
  'Farmway Road',
  'Lake Lowell Area',
  'Karcher Road',
  'Indiana Avenue',
]

export default function CaldwellPage() {
  return (
    <main>
      <StructuredData city="Caldwell" />

      <HeroSection
        city="Caldwell"
        headline="Hoarding Cleanup in Caldwell, Idaho"
        subheadline="We help Caldwell families tackle hoarding situations. Respectful service, fair prices."
      />

      <SchedulingForm city="Caldwell" />

      {/* Caldwell-Specific Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gunmetal mb-6">
              Hoarding Cleanup in Caldwell
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600 [&>p]:mb-6">
              <p>
                Caldwell has a mix of older homes in town and rural properties outside the city limits. We&apos;ve done hoarding cleanups in both—small houses, big farmhouses, outbuildings full of stuff. Whatever the situation, we can help.
              </p>

              <p>
                A lot of folks in Caldwell have lived in the same place for years. Sometimes decades of accumulation builds up. That&apos;s okay. We&apos;re not here to judge—we&apos;re here to help clear things out so people can get their space back.
              </p>

              <p>
                We work with the homeowner when possible. When it&apos;s a family member calling because a parent needs help, we handle that too. Either way, we keep things respectful and quiet.
              </p>

              <h3 className="text-2xl font-bold text-gunmetal mt-8 mb-4">
                What We Do
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Full cleanouts:</strong> We clear the house, sort through everything, and haul it off</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Farm properties:</strong> Barns, sheds, outbuildings—we can clear those too</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Estate cleanouts:</strong> When someone passes and leaves behind a difficult situation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Rental cleanouts:</strong> For landlords dealing with a property left full of stuff</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Garage cleanouts:</strong> Packed garages and storage areas, cleared out</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gunmetal mt-8 mb-4">
                Areas We Cover in Caldwell
              </h3>

              <p>
                We work throughout Caldwell and Canyon County:
              </p>
            </div>

            {/* Areas Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
              {caldwellAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 bg-fog px-3 py-2 rounded-lg"
                >
                  <MapPin className="w-4 h-4 text-light-blue flex-shrink-0" />
                  <span className="text-sm text-gunmetal">{area}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 p-6 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need Help in Caldwell?
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
            <Link href="/cities-served/eagle" className="text-dark-blue underline hover:text-light-blue font-medium">
              Eagle
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
