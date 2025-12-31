import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Phone, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: '5 Signs Your Loved One May Need Hoarding Help',
  description: 'Recognizing when a family member needs professional help with hoarding can be difficult. Learn the 5 key warning signs that indicate it may be time to seek assistance.',
  keywords: [
    'signs of hoarding',
    'hoarding help',
    'family member hoarding',
    'when to get hoarding help',
    'hoarding warning signs',
    'loved one hoarding',
  ],
  openGraph: {
    title: '5 Signs Your Loved One May Need Hoarding Help',
    description: 'Recognizing when a family member needs professional help with hoarding can be difficult. Learn the 5 key warning signs.',
    url: 'https://boise-hoarding-cleanup.com/blog/5-signs-loved-one-needs-hoarding-help',
  },
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/blog/5-signs-loved-one-needs-hoarding-help',
  },
}

const signs = [
  {
    number: 1,
    title: 'They Stopped Having People Over',
    content: 'Your mom used to host Thanksgiving every year. Now she insists on meeting at a restaurant. Your brother always has an excuse when you want to stop by. People dealing with hoarding get embarrassed about their home. They won\'t say that directly. But if someone who used to welcome visitors suddenly doesn\'t, pay attention.',
  },
  {
    number: 2,
    title: 'Rooms Don\'t Work Anymore',
    content: 'The dining table is covered. The bed has no space to sleep. The kitchen is unusable. We worked with a family last year where dad had been sleeping on a corner of his couch for six months. His bedroom was packed to the ceiling. When rooms lose their purpose, that\'s more than clutter.',
  },
  {
    number: 3,
    title: 'Safety Is a Concern',
    content: 'Newspapers blocking the front door. Boxes stacked near the furnace. Narrow paths through every room. These things worry us. Fire hazards, tripping hazards, sometimes even floors buckling from the weight. If someone couldn\'t get out quickly in an emergency, that\'s a problem that needs attention.',
  },
  {
    number: 4,
    title: 'Health Is Declining',
    content: 'Hoarding affects the body. Dust accumulates. Mold grows in places you can\'t see. Pests move in. Cooking real food becomes impossible. Medications get buried. Families tell us they noticed their parent seemed tired all the time, or kept getting sick. The living situation was making it worse.',
  },
  {
    number: 5,
    title: 'Discarding Anything Causes Distress',
    content: 'Everyone keeps things they probably shouldn\'t. That\'s normal. But when throwing away an empty container causes real distress—crying, yelling, panic—that\'s different. People with hoarding disorder feel genuine fear about losing possessions. Even things that look like garbage to others. It\'s not laziness. It\'s anxiety.',
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
                Family Support
              </span>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  December 1, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  5 min read
                </span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gunmetal mb-6">
              5 Signs Your Loved One May Need Hoarding Help
            </h1>

            <p className="text-xl text-gray-600">
              How to tell when clutter has become something more serious.
            </p>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none [&>p]:mb-6">
            <p>
              You&apos;ve noticed things piling up at their place.
            </p>

            <p>
              Maybe you&apos;ve told yourself it&apos;s fine. They&apos;re collectors. They grew up during hard times. They&apos;ll get around to cleaning eventually.
            </p>

            <p>
              But something doesn&apos;t feel right.
            </p>

            <p>
              There&apos;s a difference between having too much stuff and needing help. Figuring out which one you&apos;re looking at can be hard, especially when it&apos;s someone you care about.
            </p>

            <p>
              Here are five things we see that usually mean it&apos;s time to step in:
            </p>

            {signs.map((sign) => (
              <div key={sign.number} className="my-8 bg-fog rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-cta-rose text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {sign.number}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gunmetal mt-0 mb-3">{sign.title}</h2>
                    <p className="text-gray-600 mb-0">{sign.content}</p>
                  </div>
                </div>
              </div>
            ))}

            <h2>What To Do Next</h2>

            <p>
              If some of this sounds familiar, you&apos;re probably wondering what to do.
            </p>

            <p>
              The worst approach is showing up and throwing things away. We&apos;ve seen families try that. It backfires every time.
            </p>

            <p>
              Hoarding is a mental health issue. It&apos;s not laziness or stubbornness. Treating it that way just creates conflict.
            </p>

            <p>
              What actually works:
            </p>

            <ul>
              <li><strong>Lead with concern.</strong> &quot;I&apos;m worried about you&quot; works better than criticism.</li>
              <li><strong>Talk about safety first.</strong> Blocked exits and fire risks are hard to argue with.</li>
              <li><strong>Suggest professional help.</strong> Therapists who specialize in hoarding can do things family members can&apos;t.</li>
              <li><strong>Find cleanup people who understand.</strong> You want a crew that won&apos;t make your loved one feel judged.</li>
              <li><strong>Expect it to take time.</strong> This doesn&apos;t get fixed in a weekend.</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-brand-yellow p-6 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gunmetal mt-0 mb-2">When It Can&apos;t Wait</h3>
                  <p className="mb-0 text-gray-700">
                    Sometimes the situation is urgent. No running water. Pest infestations. The city threatening to condemn the home. If things have gotten that bad, call a hoarding cleanup service right away. Deal with the immediate crisis, then figure out the rest.
                  </p>
                </div>
              </div>
            </div>

            <h2>How We Help</h2>

            <p>
              We do hoarding cleanup throughout the Treasure Valley. Boise, Meridian, Nampa, Caldwell, Eagle.
            </p>

            <p>
              The physical cleanup is actually the easy part. What&apos;s harder is doing it in a way that doesn&apos;t make someone feel ashamed. That&apos;s what we focus on.
            </p>

            <p>
              If you&apos;re trying to figure out what to do about someone in your life, give us a call. No pressure. Sometimes it helps to talk to people who&apos;ve been through this before.
            </p>
          </article>

          {/* Related Links */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/resources/hoarding-signs" className="bg-fog rounded-lg p-4 hover:shadow-md transition-shadow">
              <span className="text-sm text-light-blue font-medium">Related</span>
              <h3 className="font-bold text-gunmetal">Signs of Hoarding Disorder</h3>
            </Link>
            <Link href="/resources/helping-a-hoarder" className="bg-fog rounded-lg p-4 hover:shadow-md transition-shadow">
              <span className="text-sm text-light-blue font-medium">Related</span>
              <h3 className="font-bold text-gunmetal">How to Help a Hoarder</h3>
            </Link>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Questions? Give Us a Call
            </h3>
            <p className="text-gray-300 mb-6">
              Happy to talk through your situation. No obligation.
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
