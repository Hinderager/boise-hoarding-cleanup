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
  title: 'Hoarding Cleanup Eagle Idaho | Discreet Hoarder Cleanout Services',
  description: 'Professional hoarding cleanup services in Eagle, Idaho. Discreet, compassionate hoarder cleanout for Eagle residents. Estate cleanout and clutter removal. Licensed & insured. Call (208) 943-5231.',
  keywords: [
    'hoarding cleanup Eagle',
    'hoarding cleanup Eagle Idaho',
    'hoarder cleanout Eagle',
    'hoarding cleanup services Eagle ID',
    'hoarding help Eagle',
    'estate cleanout Eagle Idaho',
    'discreet hoarding cleanup Eagle',
    'clutter removal Eagle',
    'Eagle hoarder cleanup',
    'Eagle foothills hoarding cleanup',
  ],
  openGraph: {
    title: 'Hoarding Cleanup Eagle Idaho | Discreet Hoarder Cleanout',
    description: 'Professional, discreet hoarding cleanup services in Eagle, Idaho. Licensed, insured, and compassionate. Same-day service available.',
    url: 'https://boise-hoarding-cleanup.com/eagle',
  },
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/eagle',
  },
}

const eagleAreas = [
  'Downtown Eagle',
  'North Eagle',
  'South Eagle',
  'Eagle Foothills',
  'Floating Feather',
  'Banbury Meadows',
  'Dry Creek',
  'Hidden Springs',
  'Avimor',
  'Eagle Island',
  'Linder Road Area',
  'State Street Corridor',
]

export default function EaglePage() {
  return (
    <main>
      <StructuredData city="Eagle" />

      <HeroSection
        city="Eagle"
        headline="Hoarding Cleanup in Eagle, Idaho"
        subheadline="We help Eagle families tackle hoarding situations. Discreet service, fair prices."
      />
      <QuickQuoteBar />

      {/* Eagle-Specific Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gunmetal mb-6">
              Hoarding Cleanup in Eagle
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600 [&>p]:mb-6">
              <p>
                Eagle&apos;s got a lot of nice homes. Big homes, too. And hoarding doesn&apos;t discriminate based on neighborhood or income. We&apos;ve helped families in Eagle who never thought they&apos;d need this kind of service.
              </p>

              <p>
                Privacy matters here. We use unmarked trucks—no company logos on the sides. The neighbors don&apos;t need to know your business.
              </p>

              <p>
                Whether you&apos;re dealing with your own situation or calling about a parent who needs help, we handle it with respect. No judgment, no lectures. Just practical help getting things cleared out.
              </p>

              <h3 className="text-2xl font-bold text-gunmetal mt-8 mb-4">
                What We Do
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Full cleanouts:</strong> We clear everything, sort through it, and haul it away. Unmarked trucks.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Large properties:</strong> We&apos;re used to bigger Eagle homes. Doesn&apos;t faze us.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Garages and shops:</strong> Packed workshops and storage buildings, cleared out</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Downsizing help:</strong> When it&apos;s time to move somewhere smaller</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Pre-sale prep:</strong> Need to sell but the house is packed? We can help.</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gunmetal mt-8 mb-4">
                Areas We Cover in Eagle
              </h3>

              <p>
                We work throughout Eagle and the surrounding area:
              </p>
            </div>

            {/* Areas Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
              {eagleAreas.map((area) => (
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
                Need Help in Eagle?
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
          </div>
        </div>
      </section>
    </main>
  )
}
