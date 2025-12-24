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
  title: 'Hoarding Cleanup Middleton Idaho | Professional Hoarder Cleanout',
  description: 'Professional hoarding cleanup services in Middleton, Idaho. Compassionate hoarder cleanout and clutter removal. Licensed & insured. Same-day service available. Call (208) 943-5231.',
  keywords: [
    'hoarding cleanup Middleton',
    'hoarding cleanup Middleton Idaho',
    'hoarder cleanout Middleton',
    'hoarding cleanup services Middleton',
    'clutter removal Middleton Idaho',
    'hoarding help Middleton ID',
    'compassionate hoarding cleanup Middleton',
  ],
  openGraph: {
    title: 'Hoarding Cleanup Middleton Idaho | Professional Hoarder Cleanout',
    description: 'Professional, compassionate hoarding cleanup services in Middleton, Idaho. Licensed, insured, and discreet.',
    url: 'https://boise-hoarding-cleanup.com/cities-served/middleton',
  },
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/cities-served/middleton',
  },
}

export default function MiddletonPage() {
  return (
    <main>
      <StructuredData city="Middleton" />

      <HeroSection
        city="Middleton"
        headline="Hoarding Cleanup in Middleton, Idaho"
        subheadline="We help Middleton families deal with hoarding situations. Respectful service, fair prices."
      />

      <SchedulingForm city="Middleton" />

      {/* Middleton-Specific Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gunmetal mb-6">
              Hoarding Cleanup in Middleton
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600 [&>p]:mb-6">
              <p>
                Middleton is a small town between Caldwell and Star, with a mix of rural properties and residential neighborhoods. If you're dealing with a hoarding situation in Middleton, we're here to help.
              </p>

              <p>
                We've worked on all kinds of properties in Middleton—from older homes along Main Street to larger acreage properties outside of town. Whether it's a standard house or a property with barns and outbuildings, we can handle it.
              </p>

              <p>
                Hoarding situations happen everywhere, even in small towns like Middleton. There's no shame in asking for help. We work with the person living there when we can, and we're happy to coordinate with family members who are trying to help a loved one.
              </p>

              <h3 className="text-2xl font-bold text-gunmetal mt-8 mb-4">
                What We Do in Middleton
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
                Why Middleton Residents Choose Us
              </h3>

              <p>
                Middleton is a bit more rural, and we know that means properties can be bigger and more spread out. We've got the trucks, equipment, and manpower to handle larger cleanouts, including outbuildings and acreage.
              </p>

              <p>
                We're familiar with the Middleton area and can get there quickly—usually same-day or next-day service. We've worked with families, landlords, and property managers throughout Canyon County and the Treasure Valley.
              </p>

              <p>
                Our team is licensed, insured, and experienced with hoarding situations. We keep things discreet and professional. We don't judge, and we don't make a big scene. We just show up, do the work, and leave the property clean.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 p-6 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need Help in Middleton?
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
