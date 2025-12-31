import { Metadata } from 'next'
import Link from 'next/link'
import { Brain, Heart, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Boise Hoarding Cleanup',
  description: 'Learn about our compassionate hoarding cleanup services in Boise. We understand hoarding disorder and treat every situation with respect and care.',
  alternates: { canonical: 'https://boise-hoarding-cleanup.com/about-us' },
}

export default function AboutUsPage() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gunmetal mb-6">About Us</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          We're not just a cleanup company. We're people who understand that hoarding is a mental health challenge, not a character flaw.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link href="/about-us/understanding-hoarding" className="bg-fog rounded-xl p-6 hover:shadow-lg transition-all">
            <Brain className="w-10 h-10 text-light-blue mb-4" />
            <h2 className="text-xl font-bold text-gunmetal mb-2">Understanding Hoarding</h2>
            <p className="text-gray-600">Learn what hoarding is and why professional help matters.</p>
          </Link>
          <Link href="/about-us/why-choose-us" className="bg-fog rounded-xl p-6 hover:shadow-lg transition-all">
            <Heart className="w-10 h-10 text-light-blue mb-4" />
            <h2 className="text-xl font-bold text-gunmetal mb-2">Why Choose Us</h2>
            <p className="text-gray-600">What makes our approach different and compassionate.</p>
          </Link>
          <Link href="/about-us/testimonials" className="bg-fog rounded-xl p-6 hover:shadow-lg transition-all">
            <Star className="w-10 h-10 text-light-blue mb-4" />
            <h2 className="text-xl font-bold text-gunmetal mb-2">Testimonials</h2>
            <p className="text-gray-600">Hear from families we've helped.</p>
          </Link>
        </div>

        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gunmetal mb-6">Our Approach</h2>
          <div className="prose prose-lg max-w-none text-gray-600 [&>p]:mb-6">
            <p>
              We started this service because we saw a need for hoarding cleanup that actually understands hoarding. Too many companies treat it like any other junk removal job. It's not.
            </p>
            <p>
              Hoarding is complicated. It's tied to mental health, trauma, and personal history. You can't just haul everything away and call it done. That doesn't help anyone, and it often makes things worse.
            </p>
            <p>
              Our team is trained to work with compassion. We take time to understand each situation. We coordinate with therapists and family members when needed. We preserve what matters and dispose of the rest properly.
            </p>
            <p>
              This work requires patience, empathy, and real understanding. That's what we bring to every job.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
