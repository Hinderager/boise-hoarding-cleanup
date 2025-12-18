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
  title: 'Hoarding Cleanup Garden City Idaho | Professional Hoarder Cleanout',
  description: 'Professional hoarding cleanup services in Garden City, Idaho. Compassionate hoarder cleanout and clutter removal. Licensed & insured. Same-day service available. Call (208) 505-9352.',
  keywords: [
    'hoarding cleanup Garden City',
    'hoarding cleanup Garden City Idaho',
    'hoarder cleanout Garden City',
    'hoarding cleanup services Garden City',
    'clutter removal Garden City Idaho',
    'hoarding help Garden City ID',
    'compassionate hoarding cleanup Garden City',
  ],
  openGraph: {
    title: 'Hoarding Cleanup Garden City Idaho | Professional Hoarder Cleanout',
    description: 'Professional, compassionate hoarding cleanup services in Garden City, Idaho. Licensed, insured, and discreet.',
    url: 'https://boise-hoarding-cleanup.com/cities-served/garden-city',
  },
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/cities-served/garden-city',
  },
}

export default function GardenCityPage() {
  return (
    <main>
      <StructuredData city="Garden City" />

      <HeroSection
        city="Garden City"
        headline="Hoarding Cleanup in Garden City, Idaho"
        subheadline="We help Garden City families deal with hoarding situations. Respectful service, fair prices."
      />

      <SchedulingForm city="Garden City" />

      {/* Garden City-Specific Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gunmetal mb-6">
              Hoarding Cleanup in Garden City
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600 [&>p]:mb-6">
              <p>
                Garden City is a tight-knit community just outside Boise. If you're dealing with a hoarding situation here, you're not alone. We've helped families all over the Treasure Valley, including Garden City, get their homes back.
              </p>

              <p>
                Whether it's a small house near Glenwood Street or a property along the river, we work in all types of homes. We know Garden City has a mix of older homes and newer builds, and we've seen all kinds of situations.
              </p>

              <p>
                We keep things low-key and respectful. If you're the person living there, we'll work with you at your pace. If you're calling on behalf of a family member, we'll coordinate with everyone involved.
              </p>

              <h3 className="text-2xl font-bold text-gunmetal mt-8 mb-4">
                What We Do in Garden City
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
                  <span><strong>Clutter help:</strong> Before things get too overwhelming, we can help you get on top of it</span>
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
                Why Garden City Residents Choose Us
              </h3>

              <p>
                Garden City is close to Boise, which means we can get to you quickly—often same-day or next-day service. We're familiar with the area, the neighborhoods, and the types of homes here.
              </p>

              <p>
                We've worked with landlords, property managers, and families throughout Garden City. Whether it's a rental situation, a probate cleanout, or helping an elderly parent, we've seen it all.
              </p>

              <p>
                Our team is licensed, insured, and trained to handle hoarding situations with care. We don't judge. We just help.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 p-6 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need Help in Garden City?
              </h3>
              <p className="text-gray-300 mb-6">
                Give us a call. We'll talk through your situation and give you a free estimate.
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
