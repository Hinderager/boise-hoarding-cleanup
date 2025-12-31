import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Home, Building2, Droplet, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hoarding Cleanup Services Boise | Professional Cleanup',
  description: 'Compassionate hoarding cleanup services in Boise, Idaho. Residential, commercial, biohazard, and estate cleanup. Judgment-free service. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-hoarding-cleanup.com/services' },
}

const serviceCategories = [
  { name: 'Residential Hoarding Cleanup', href: '/services/residential', icon: Home, description: 'Complete home hoarding cleanup with compassion and respect' },
  { name: 'Commercial Property Cleanup', href: '/services/commercial', icon: Building2, description: 'Business and rental property hoarding situations' },
  { name: 'Biohazard Cleanup', href: '/services/biohazard', icon: Droplet, description: 'Safe removal of biological hazards and contaminated materials' },
  { name: 'Estate Cleanout Services', href: '/services/estate-cleanout', icon: Briefcase, description: 'Full estate cleanouts with care for family belongings' },
]

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gunmetal mb-6">Our Hoarding Cleanup Services</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          We provide professional, compassionate hoarding cleanup services throughout the Treasure Valley. Every situation is different, and we treat each one with the care and respect it deserves.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {serviceCategories.map((category) => (
            <Link key={category.href} href={category.href} className="group bg-fog rounded-xl p-6 hover:shadow-lg transition-all border border-gray-200">
              <div className="w-14 h-14 bg-light-blue/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-light-blue group-hover:text-white transition-colors">
                <category.icon className="w-7 h-7 text-light-blue group-hover:text-white" />
              </div>
              <h2 className="text-xl font-bold text-gunmetal mb-2">{category.name}</h2>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <span className="inline-flex items-center text-light-blue font-semibold group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
