import { Metadata } from 'next'
import { Phone, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers - Join Our Moving Team Boise | Now Hiring Movers',
  description: 'Join our commercial moving team in Boise. Competitive pay, steady work, and professional environment. Apply for moving positions today. Call (208) 505-9352.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/about-us/careers',
  },
}

export default function CareersPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">We're looking for reliable, hard-working people to join our commercial moving team.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Open Positions</h2>
            <p>
              We're hiring for commercial moving positions. If you're physically fit, reliable, and
              looking for steady work, we want to talk to you.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg my-8">
              <h3 className="flex items-center gap-2 text-dark-blue mt-0">
                <Briefcase className="w-6 h-6" />
                Commercial Movers
              </h3>
              <p className="mb-4">
                <strong>Location:</strong> Boise, ID<br />
                <strong>Type:</strong> Full-time
              </p>
              <p>
                We need reliable people to help with commercial moving jobs. This includes loading
                and unloading trucks, moving office furniture and equipment, and setting up new
                locations. Work is physical but pays well.
              </p>
              <p className="mb-0">
                <strong>Pay:</strong> Competitive hourly wage based on experience
              </p>
            </div>

            <h2>What We're Looking For</h2>
            <ul>
              <li>Reliable transportation to job sites</li>
              <li>Physically capable of lifting heavy items</li>
              <li>Willing to work some weekends and evenings (commercial moves often happen after hours)</li>
              <li>Good attitude and professional demeanor</li>
              <li>Ability to follow instructions</li>
              <li>No experience required—we'll train you</li>
            </ul>

            <h2>What We Offer</h2>
            <ul>
              <li>Competitive pay</li>
              <li>Steady work (we stay busy year-round)</li>
              <li>Training and skill development</li>
              <li>Professional work environment</li>
              <li>Opportunity for advancement</li>
            </ul>

            <h2>What the Job Actually Involves</h2>
            <p>
              Be honest with yourself—this is physical work. You'll be lifting furniture, carrying
              boxes, loading and unloading trucks. Some days are easier than others. Some moves are
              straightforward, others are complex. But it's steady work with good pay.
            </p>
            <p>
              Commercial moving is different from residential. You're working with businesses, often
              during evenings or weekends. You need to be professional, organized, and careful with
              expensive equipment.
            </p>

            <h2>Is Experience Required?</h2>
            <p>
              No. If you've got a good attitude and you're willing to work hard, we'll train you.
              We'll teach you proper lifting techniques, how to use moving equipment, and how to
              handle different types of furniture and equipment safely.
            </p>
            <p>
              If you do have moving experience or construction/labor experience, that's a plus and
              we'll factor that into your starting pay.
            </p>

            <h2>Room for Advancement</h2>
            <p>
              Good people move up. If you show up on time, work hard, and demonstrate good judgment,
              there are opportunities to become a crew lead or take on more responsibility. We promote
              from within.
            </p>

            <h2>How to Apply</h2>
            <p>
              Call us at <a href="tel:2085059352" className="text-dark-blue font-semibold">(208) 505-9352</a> and
              ask about moving positions. We'll talk about the job, answer your questions, and set up
              a time to meet if it seems like a good fit.
            </p>
            <p>
              You can also stop by our office to fill out an application in person. Just call first
              to make sure someone's available.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Team?</h2>
          <p className="text-xl text-gray-300 mb-8">Call today to learn about open positions.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
