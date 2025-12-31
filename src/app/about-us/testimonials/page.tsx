import { Metadata } from 'next'
import { Phone, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Testimonials | Boise Hoarding Cleanup',
  description: 'Read testimonials from families we\'ve helped with hoarding cleanup in Boise and the Treasure Valley. Real stories from real people.',
  alternates: { canonical: 'https://boise-hoarding-cleanup.com/about-us/testimonials' },
}

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Boise',
    rating: 5,
    text: 'My mother had been struggling with hoarding for years. I was so worried about calling someone because I didn\'t want her to feel judged. The team was incredibly kind and patient with her. They let her make decisions and never rushed her. The house looks amazing now, and she\'s actually keeping it clean. Thank you.'
  },
  {
    name: 'David P.',
    location: 'Meridian',
    rating: 5,
    text: 'As a property manager, I\'ve dealt with some tough situations. This was one of the worst. The team handled everything professionally and got the unit cleaned out faster than I expected. They documented everything, which was helpful for our records. Highly recommend.'
  },
  {
    name: 'Jennifer K.',
    location: 'Nampa',
    rating: 5,
    text: 'We needed help cleaning out my dad\'s house after he passed. He had been a hoarder for as long as I could remember. The team was so respectful of his belongings and helped us find important documents and family photos we thought were lost forever. They made a really hard time a little easier.'
  },
  {
    name: 'Michael R.',
    location: 'Caldwell',
    rating: 5,
    text: 'I never thought I\'d need this kind of help, but here we were. The team didn\'t make me feel bad about the state of my house. They just got to work and helped me make decisions about what to keep. The house is livable again. I can have my kids visit now. Life changing.'
  },
  {
    name: 'Linda S.',
    location: 'Eagle',
    rating: 5,
    text: 'Working with them was the best decision. They coordinated with my sister\'s therapist and involved the whole family in a respectful way. The cleanup took a few days, but they were patient and thorough. My sister is doing so much better now. Thank you for understanding that this was about more than just cleaning.'
  }
]

export default function TestimonialsPage() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gunmetal mb-6">What People Say</h1>
          <p className="text-xl text-gray-600 mb-12">
            We've helped families throughout the Treasure Valley. Here are some of their stories.
          </p>

          <div className="space-y-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-fog rounded-xl p-6 border-l-4 border-light-blue">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="text-sm">
                  <p className="font-bold text-gunmetal">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          <section className="bg-blue-50 border-l-4 border-light-blue p-6 rounded-r-lg mb-12">
            <h2 className="text-xl font-bold text-gunmetal mb-3">Why We Share These Stories</h2>
            <p className="text-gray-700">
              Hoarding can feel isolating. We share these testimonials so you know you're not alone. Other people have been where you are, and things got better. Recovery is possible, and we're here to help.
            </p>
          </section>

          <div className="p-8 bg-dark-blue rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Start Your Own Recovery Story</h3>
            <p className="text-gray-300 mb-6">We're here to help you or your loved one. Call us for a confidential conversation.</p>
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
    </main>
  )
}
