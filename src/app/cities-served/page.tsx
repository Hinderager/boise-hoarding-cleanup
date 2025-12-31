import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hoarding Cleanup Service Areas | Boise Hoarding Cleanup',
  description: 'Professional hoarding cleanup serving Boise, Meridian, Nampa, Caldwell, Eagle, and the Treasure Valley. Compassionate, judgment-free service. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-hoarding-cleanup.com/cities-served' },
}

const cities = [
  {
    "name": "Boise",
    "slug": "boise",
    "county": "Ada County"
  },
  {
    "name": "Meridian",
    "slug": "meridian",
    "county": "Ada County"
  },
  {
    "name": "Nampa",
    "slug": "nampa",
    "county": "Canyon County"
  },
  {
    "name": "Caldwell",
    "slug": "caldwell",
    "county": "Canyon County"
  },
  {
    "name": "Eagle",
    "slug": "eagle",
    "county": "Ada County"
  }
]

export default function CitiesServedPage() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gunmetal mb-6">Service Areas</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          We provide compassionate hoarding cleanup services throughout the Treasure Valley. From Boise to Caldwell and everywhere in between, we're here to help.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Link key={city.slug} href={`/cities-served/${city.slug}`} className="group bg-fog rounded-xl p-6 hover:shadow-lg transition-all border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-light-blue/10 rounded-full flex items-center justify-center group-hover:bg-light-blue transition-colors">
                  <MapPin className="w-6 h-6 text-light-blue group-hover:text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gunmetal group-hover:text-light-blue">{city.name}</h2>
                  <p className="text-gray-600">{city.county}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
