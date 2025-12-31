import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Phone, AlertTriangle, Shield, Bug, Wind, Flame } from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Health Risks of Hoarding: Why Professional Cleanup Matters',
  description: 'Hoarding creates serious health hazards including mold, pests, fire risks, and more. Learn about the dangers and why professional cleanup is often necessary.',
  keywords: [
    'hoarding health risks',
    'dangers of hoarding',
    'hoarding hazards',
    'why professional hoarding cleanup',
    'hoarding safety risks',
    'hoarding mold pest',
  ],
  openGraph: {
    title: 'The Health Risks of Hoarding: Why Professional Cleanup Matters',
    description: 'Learn about the serious health hazards created by hoarding and why professional cleanup is often necessary.',
    url: 'https://boise-hoarding-cleanup.com/blog/health-risks-hoarding-cleanup',
  },
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/blog/health-risks-hoarding-cleanup',
  },
}

const healthRisks = [
  {
    icon: Wind,
    title: 'Bad Air',
    description: 'Dust, mold spores, and allergens build up over time. Without air circulation, you end up breathing in some nasty stuff.',
    dangers: ['Lung infections', 'Asthma flare-ups', 'Allergic reactions', 'Breathing problems'],
  },
  {
    icon: Bug,
    title: 'Pests',
    description: 'Rodents and insects love clutter. Plenty of hiding spots, food scraps, and nobody disturbing them. Populations grow fast.',
    dangers: ['Disease', 'Bites', 'Contaminated food', 'Property damage'],
  },
  {
    icon: Flame,
    title: 'Fire Risk',
    description: 'Stuff piled near heaters, blocked exits, paper everywhere. Hoarded homes burn faster and are harder to escape from.',
    dangers: ['Fire spreads fast', 'Can\'t get out', 'Firefighters can\'t get in', 'Collapse risk'],
  },
  {
    icon: AlertTriangle,
    title: 'Falls and Injuries',
    description: 'Narrow paths, wobbly piles, stuff on the floor you can\'t see. It\'s easy to trip or have something fall on you.',
    dangers: ['Tripping', 'Stuff falling', 'Unstable furniture', 'Sharp objects'],
  },
]

export default function BlogPost() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-dark-blue underline hover:text-light-blue mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="bg-light-blue/10 text-light-blue text-sm font-medium px-3 py-1 rounded-full">
                Health &amp; Safety
              </span>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  October 1, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  6 min read
                </span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gunmetal mb-6">
              The Health Dangers of Hoarding (And Why You Shouldn&apos;t Clean It Yourself)
            </h1>

            <p className="text-xl text-gray-600">
              Hoarding isn&apos;t just clutter. It creates real health hazards—stuff that can make you sick. Here&apos;s what you&apos;re actually dealing with.
            </p>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none [&>p]:mb-6">
            <p>
              A lot of people don&apos;t realize how dangerous hoarded homes can be until they actually walk into one. We&apos;ve seen situations that would surprise you. It&apos;s not just messy—it&apos;s genuinely hazardous.
            </p>

            <p>
              Here&apos;s what we&apos;re talking about, and why you probably shouldn&apos;t tackle this kind of cleanup on your own.
            </p>

            <h2>What You&apos;re Actually Dealing With</h2>

            <div className="not-prose space-y-6 my-8">
              {healthRisks.map((risk, index) => (
                <div key={index} className="bg-fog rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cta-rose/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <risk.icon className="w-6 h-6 text-cta-rose" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gunmetal mb-2">{risk.title}</h3>
                      <p className="text-gray-600 mb-3">{risk.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {risk.dangers.map((danger, i) => (
                          <span key={i} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">
                            {danger}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2>Other Problems We See</h2>

            <h3>Biohazards</h3>
            <p>
              In bad cases, you might find human or animal waste, rotting food, or dead animals. This isn&apos;t something you want to handle without proper training and equipment.
            </p>

            <h3>Structural Problems</h3>
            <p>
              All that weight puts stress on the building. We&apos;ve seen floors sagging, walls bowing, doors that won&apos;t close. Sometimes the structure itself becomes a danger.
            </p>

            <h3>Mold</h3>
            <p>
              When stuff covers the walls and blocks airflow, mold thrives. It grows behind the clutter for years. You can&apos;t even see it. But you&apos;re breathing in the spores.
            </p>

            <h3>Chemicals</h3>
            <p>
              Old cleaning products, car fluids, expired medications—they pile up in hoarded homes. They can leak, mix together, create fumes. It&apos;s a mess.
            </p>

            <h2>Why You Shouldn&apos;t Do It Yourself</h2>

            <p>
              When people see how bad things have gotten, the first instinct is to just start throwing stuff away. Here&apos;s why that&apos;s a bad idea:
            </p>

            <ul>
              <li><strong>You&apos;ll get exposed:</strong> Without the right gear, you&apos;re breathing in mold, handling pests, touching who-knows-what</li>
              <li><strong>Disposal problems:</strong> You can&apos;t just throw hazardous stuff in the regular trash. That&apos;s illegal and dangerous.</li>
              <li><strong>You&apos;ll miss things:</strong> Hidden mold, structural damage, stuff you don&apos;t know to look for</li>
              <li><strong>It can hurt the person:</strong> Forcing a cleanup without support can be traumatic for someone with hoarding disorder</li>
              <li><strong>It&apos;ll come back:</strong> If you don&apos;t address the root causes, the problem returns</li>
            </ul>

            <h2>What Professionals Bring</h2>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6" />
                What We Actually Do
              </h3>
              <ul className="space-y-2 text-green-900">
                <li>Protective gear for everyone</li>
                <li>Trained in handling biohazards properly</li>
                <li>Contain the area so stuff doesn&apos;t spread</li>
                <li>Dispose of hazardous materials legally</li>
                <li>Check for mold and structural issues</li>
                <li>Deep clean and sanitize after</li>
                <li>Documentation if you need it for insurance</li>
              </ul>
            </div>

            <h2>When It&apos;s an Emergency</h2>

            <p>
              Some situations can&apos;t wait. Call for help right away if:
            </p>

            <ul>
              <li>No running water or working toilet</li>
              <li>Human or animal waste in the house</li>
              <li>Serious pest infestation</li>
              <li>Visible mold growing</li>
              <li>Structural damage—sagging floors, water damage</li>
              <li>Eviction notice or code violation</li>
              <li>Someone&apos;s been hospitalized</li>
            </ul>

            <p>
              Don&apos;t try to handle these yourself. Get professional help.
            </p>

            <h2>The Bottom Line</h2>

            <p>
              Professional cleanup isn&apos;t just about making things look better. It&apos;s about eliminating real health dangers and creating a space people can actually live in safely. That protects everyone—the person who hoards, their family, the neighbors.
            </p>
          </article>

          {/* CTA */}
          <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Worried About What You&apos;re Dealing With?
            </h3>
            <p className="text-gray-300 mb-6">
              We handle hazardous situations safely. Free assessments.
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
    </main>
  )
}
