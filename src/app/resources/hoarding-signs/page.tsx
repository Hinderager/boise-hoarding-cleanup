import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Signs of Hoarding Disorder | How to Recognize Hoarding',
  description: 'Learn how to recognize the signs and symptoms of hoarding disorder. Understanding warning signs helps you know when professional help is needed.',
  keywords: [
    'signs of hoarding',
    'hoarding symptoms',
    'hoarding warning signs',
    'how to tell if someone is a hoarder',
    'hoarding disorder symptoms',
    'hoarding red flags',
    'is my parent a hoarder',
    'hoarding vs collecting',
    'levels of hoarding',
  ],
  openGraph: {
    title: 'Signs of Hoarding Disorder | Recognize the Warning Signs',
    description: 'Learn how to recognize the signs and symptoms of hoarding disorder to help yourself or a loved one.',
    url: 'https://boise-hoarding-cleanup.com/resources/hoarding-signs',
  },
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/resources/hoarding-signs',
  },
}

const warningSigns = [
  {
    sign: 'Can\'t throw things away',
    description: 'Gets really upset at the idea of discarding things—even stuff that seems worthless',
  },
  {
    sign: 'Rooms you can\'t use',
    description: 'Bedrooms, kitchens, or living areas buried in stuff to the point they\'re unusable',
  },
  {
    sign: 'Always bringing more stuff in',
    description: 'Can\'t pass up a sale, free stuff, or "deals." Always finding something that might be useful',
  },
  {
    sign: 'Never has people over',
    description: 'Stopped inviting family or friends because of embarrassment about the house',
  },
  {
    sign: 'Treats objects like they have feelings',
    description: 'Strong emotional attachment to things that most people would consider ordinary',
  },
  {
    sign: 'Doesn\'t see it as a problem',
    description: 'Doesn\'t recognize how bad it\'s gotten. Genuinely doesn\'t see the clutter the same way',
  },
  {
    sign: 'No organization system',
    description: 'Things piled everywhere with no rhyme or reason. Can\'t find stuff when needed',
  },
  {
    sign: 'Worried about running out',
    description: 'Keeps things "just in case" and gets anxious about not having enough of something',
  },
]

const hoardingLevels = [
  {
    level: 'Level 1 - Mild',
    description: 'Some clutter but you can still get around. No smells or hygiene problems.',
    color: 'bg-green-100 border-green-500',
  },
  {
    level: 'Level 2 - Moderate',
    description: 'One room pretty much unusable. Maybe some smells. Cleaning has been neglected.',
    color: 'bg-yellow-100 border-yellow-500',
  },
  {
    level: 'Level 3 - Significant',
    description: 'Multiple rooms unusable. Stuff visible outside the house. Maybe some pests.',
    color: 'bg-orange-100 border-orange-500',
  },
  {
    level: 'Level 4 - Severe',
    description: 'Structural damage, hazardous stuff, bad ventilation, pet waste, or bug infestations.',
    color: 'bg-red-100 border-red-500',
  },
  {
    level: 'Level 5 - Extreme',
    description: 'No working utilities, human or animal waste, major structural damage, fire hazards.',
    color: 'bg-red-200 border-red-700',
  },
]

export default function HoardingSignsPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gunmetal mb-6">
              Signs of Hoarding
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How do you know if someone has a hoarding problem? Here are the warning signs to look for.
            </p>
          </div>

          {/* Warning Signs */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Warning Signs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {warningSigns.map((item, index) => (
                <div key={index} className="bg-fog rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-cta-rose flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gunmetal mb-1">{item.sign}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Hoarding vs Collecting */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Hoarding vs. Collecting</h2>

            <p className="text-gray-600 mb-6">
              Lots of people collect things. That&apos;s normal. Here&apos;s how you can tell the difference between a collector and a hoarder.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Collecting (Normal)
                </h3>
                <ul className="space-y-2 text-green-900">
                  <li>Stuff is organized and displayed nicely</li>
                  <li>They&apos;re proud of their collection</li>
                  <li>The house still works like a house</li>
                  <li>They&apos;ll happily show you their stuff</li>
                  <li>They&apos;re picky about what they add</li>
                  <li>Could sell or give things away if needed</li>
                </ul>
              </div>

              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <XCircle className="w-6 h-6" />
                  Hoarding (Problem)
                </h3>
                <ul className="space-y-2 text-red-900">
                  <li>Stuff is piled everywhere, no organization</li>
                  <li>The accumulation causes stress, not joy</li>
                  <li>Rooms can&apos;t be used anymore</li>
                  <li>They&apos;re ashamed and won&apos;t let people in</li>
                  <li>Can&apos;t say no to free stuff or sales</li>
                  <li>Gets really upset about throwing anything away</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Hoarding Levels */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">How Bad Is It? The 5 Levels</h2>
            <p className="text-gray-600 mb-6">
              Professionals use a scale to figure out how severe hoarding is. This helps decide what kind of help is needed.
            </p>

            <div className="space-y-4">
              {hoardingLevels.map((level, index) => (
                <div key={index} className={`${level.color} border-l-4 rounded-r-lg p-4`}>
                  <h3 className="font-bold text-gunmetal">{level.level}</h3>
                  <p className="text-gray-700">{level.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* When to Get Help */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">When Should You Get Help?</h2>

            <div className="prose prose-lg max-w-none text-gray-600 [&>p]:mb-6">
              <p>
                It&apos;s probably time to bring in professionals if:
              </p>
              <ul>
                <li>Rooms can&apos;t be used for what they&apos;re meant for</li>
                <li>There are safety problems—fire hazards, blocked exits, tripping risks</li>
                <li>Neighbors or the landlord are complaining</li>
                <li>Health is being affected by the living conditions</li>
                <li>Relationships are suffering because of the hoarding</li>
                <li>There&apos;s an eviction notice or code violation</li>
                <li>Need to sell or move and the house isn&apos;t ready</li>
              </ul>
              <p>
                The sooner you deal with it, the easier it is. Don&apos;t wait until it&apos;s an emergency. There&apos;s no shame in asking for help.
              </p>
            </div>
          </section>

          {/* Related Pages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Link href="/about-us/understanding-hoarding" className="group bg-fog rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gunmetal mb-2 flex items-center gap-2">
                What is Hoarding?
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-gray-600">Learn what hoarding is and why it happens.</p>
            </Link>
            <Link href="/resources/helping-a-hoarder" className="group bg-fog rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gunmetal mb-2 flex items-center gap-2">
                How to Help Someone Who Hoards
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-gray-600">What to do (and what not to do) when a loved one hoards.</p>
            </Link>
          </div>

          {/* CTA */}
          <div className="p-8 bg-dark-blue rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Seeing These Signs? We Can Help.
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We do hoarding cleanups in Boise and the Treasure Valley. Free estimates. No judgment.
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
    </main>
  )
}
