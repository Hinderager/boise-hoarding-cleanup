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
  title: 'Hoarding Cleanup Nampa Idaho | Hoarder Cleanout Services Canyon County',
  description: 'Professional hoarding cleanup services in Nampa, Idaho and Canyon County. Compassionate hoarder cleanout, estate cleanout, and clutter removal. Licensed & insured. Same-day service. Call (208) 505-9352.',
  keywords: [
    'hoarding cleanup Nampa',
    'hoarding cleanup Nampa Idaho',
    'hoarder cleanout Nampa',
    'hoarding cleanup services Nampa ID',
    'hoarding help Nampa',
    'estate cleanout Nampa Idaho',
    'Canyon County hoarding cleanup',
    'clutter removal Nampa',
    'Nampa hoarder cleanup',
  ],
  openGraph: {
    title: 'Hoarding Cleanup Nampa Idaho | Canyon County Hoarder Cleanout',
    description: 'Professional, compassionate hoarding cleanup services in Nampa, Idaho. Licensed, insured, and discreet. Same-day service available.',
    url: 'https://boise-hoarding-cleanup.com/nampa',
  },
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/nampa',
  },
}

const nampaAreas = [
  'Downtown Nampa',
  'North Nampa',
  'South Nampa',
  'West Nampa',
  'Ridgecrest',
  'Birch Lane',
  'Garrity Boulevard',
  'Northside',
  'Lakeview',
  'Karcher Road Area',
  'Star Road Area',
  'Canyon Springs',
]

export default function NampaPage() {
  return (
    <main>
      <StructuredData city="Nampa" />

      <HeroSection
        city="Nampa"
        headline="Hoarding Cleanup in Nampa, Idaho"
        subheadline="We help Nampa and Canyon County families with hoarding situations. No judgment, just help."
      />

      <SchedulingForm city="Nampa" />

      {/* Nampa-Specific Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gunmetal mb-6">
              Hoarding Cleanup in Nampa
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600 [&>p]:mb-6">
              <p>
                Nampa&apos;s a big city with all kinds of homes—older places downtown, newer builds out by the mall, rural properties on the edges. We&apos;ve done hoarding cleanups in all of them.
              </p>

              <p>
                Hoarding affects people from all backgrounds. It&apos;s not about being messy or lazy. It&apos;s usually tied to something deeper, and we get that. Our job is to help, not to judge.
              </p>

              <p>
                We work with the person living there when we can. Sometimes it&apos;s a family member calling because mom or dad needs help. Sometimes it&apos;s a landlord dealing with a rental property. We handle all of it.
              </p>

              <h3 className="text-2xl font-bold text-gunmetal mt-8 mb-4">
                What We Do
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Full cleanouts:</strong> We clear the whole place, sort through it, and haul everything away</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Rental cleanouts:</strong> For landlords dealing with hoarding tenants</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Rural properties:</strong> We work outside city limits too—farms, acreages, whatever</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Downsizing help:</strong> When an older parent needs to move somewhere smaller</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Donations:</strong> We donate usable stuff locally. Less goes to the landfill that way</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gunmetal mt-8 mb-4">
                Areas We Cover in Nampa
              </h3>

              <p>
                We work throughout Nampa and Canyon County:
              </p>
            </div>

            {/* Areas Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
              {nampaAreas.map((area) => (
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
                Need Help in Nampa?
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
            <Link href="/cities-served/meridian" className="text-dark-blue underline hover:text-light-blue font-medium">
              Meridian
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
