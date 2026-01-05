import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Phone, CheckCircle, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hoarding vs Clutter: Understanding the Difference',
  description: 'Is it just clutter or is it hoarding? Learn how to tell the difference and understand when messiness crosses the line into a mental health concern.',
  keywords: [
    'hoarding vs clutter',
    'difference between hoarding and clutter',
    'is it hoarding or clutter',
    'hoarding definition',
    'when is clutter hoarding',
    'messy vs hoarder',
  ],
  openGraph: {
    title: 'Hoarding vs Clutter: Understanding the Difference',
    description: 'Learn how to tell the difference between clutter and hoarding, and when messiness becomes a concern.',
    url: 'https://boise-hoarding-cleanup.com/blogs/hoarding-vs-clutter-difference',
  },
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/blogs/hoarding-vs-clutter-difference',
  },
}

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
                Education
              </span>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  November 1, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  6 min read
                </span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gunmetal mb-6">
              Is It Clutter or Is It Hoarding?
            </h1>

            <p className="text-xl text-gray-600">
              Everyone has some mess. But there&apos;s a difference between a cluttered house and a hoarding situation. Here&apos;s how to tell.
            </p>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none [&>p]:mb-6">
            <p>
              A pile of mail on the counter. A closet that&apos;s hard to shut. A garage full of stuff you&apos;ll &quot;get to someday.&quot; That&apos;s pretty normal. Most people have some clutter.
            </p>

            <p>
              But when does it become something more? When does messy cross the line into hoarding?
            </p>

            <p>
              The answer matters because you deal with them differently. Clutter just needs cleaning. Hoarding needs a different approach entirely.
            </p>

            <h2>What&apos;s Clutter?</h2>

            <p>
              Clutter is just stuff that&apos;s accumulated. It&apos;s pretty common and usually happens because:
            </p>

            <ul>
              <li>Life&apos;s busy and cleaning isn&apos;t a priority</li>
              <li>Not enough storage space</li>
              <li>Putting things off</li>
              <li>Attached to some stuff for sentimental reasons</li>
              <li>Overwhelmed and don&apos;t know where to start</li>
            </ul>

            <p>
              Here&apos;s the key: with clutter, the person <strong>could</strong> get rid of things if they had to. It just hasn&apos;t happened yet. Give them a weekend and some motivation, and they&apos;d be fine.
            </p>

            <h2>What&apos;s Hoarding?</h2>

            <p>
              Hoarding is different. It&apos;s a mental health condition where:
            </p>

            <ul>
              <li>The person really struggles to throw anything away, even worthless stuff</li>
              <li>They feel a strong need to save things and get upset when they can&apos;t</li>
              <li>The stuff has taken over to where rooms can&apos;t be used</li>
              <li>It&apos;s causing problems in their life and relationships</li>
            </ul>

            <p>
              The big difference is the <strong>emotional part</strong>. People who hoard feel real distress—sometimes panic, anxiety, or grief—when they try to get rid of things. It&apos;s not just &quot;I don&apos;t feel like cleaning.&quot; It&apos;s deeper than that.
            </p>

            <h2>Quick Comparison</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Clutter
                </h3>
                <ul className="space-y-2 text-green-900">
                  <li>Could throw stuff away if needed</li>
                  <li>The mess bothers them</li>
                  <li>Rooms still work as rooms</li>
                  <li>Has people over (maybe a bit embarrassed)</li>
                  <li>Feels better after cleaning</li>
                  <li>Problem is time and energy</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <XCircle className="w-6 h-6" />
                  Hoarding
                </h3>
                <ul className="space-y-2 text-red-900">
                  <li>Gets really upset throwing things away</li>
                  <li>Doesn&apos;t see it as a problem</li>
                  <li>Rooms can&apos;t be used anymore</li>
                  <li>Never lets anyone in</li>
                  <li>Cleaning causes anxiety</li>
                  <li>Deep emotional attachment to stuff</li>
                </ul>
              </div>
            </div>

            <h2>The Gray Area</h2>

            <p>
              Sometimes it&apos;s hard to tell. Here are warning signs that clutter might be turning into something more:
            </p>

            <ul>
              <li><strong>Getting worse:</strong> It keeps building up instead of getting better</li>
              <li><strong>Won&apos;t accept help:</strong> Rejects offers to clean or organize</li>
              <li><strong>Gets defensive:</strong> Gets upset when anyone mentions it</li>
              <li><strong>Safety problems:</strong> Blocked doors, fire risks, tripping hazards</li>
              <li><strong>Can&apos;t use the space:</strong> Can&apos;t cook, sleep in bed, use the bathroom normally</li>
            </ul>

            <p>
              If you&apos;re seeing these patterns, it might be time to get a professional opinion.
            </p>

            <h2>Why This Matters</h2>

            <p>
              You handle these two situations differently:
            </p>

            <p>
              <strong>For clutter:</strong> An organizer, some trash bags, and a free weekend. The person helps make decisions and it&apos;s pretty straightforward.
            </p>

            <p>
              <strong>For hoarding:</strong> Just cleaning doesn&apos;t fix it. Without addressing the underlying issue—usually through therapy—the stuff comes back. And forcing a cleanup without support can actually hurt the person.
            </p>

            <h2>Getting Help</h2>

            <p>
              Either way, help exists:
            </p>

            <ul>
              <li><strong>For clutter:</strong> Professional organizers, junk haulers, decluttering services</li>
              <li><strong>For hoarding:</strong> A therapist who specializes in hoarding plus a cleanup service that understands what this is</li>
            </ul>

            <p>
              Not sure which one you&apos;re dealing with? We can help figure that out. Free consultations.
            </p>
          </article>

          {/* Related Links */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/resources/hoarding-signs" className="bg-fog rounded-lg p-4 hover:shadow-md transition-shadow">
              <span className="text-sm text-light-blue font-medium">Related Resource</span>
              <h3 className="font-bold text-gunmetal">Signs of Hoarding Disorder</h3>
            </Link>
            <Link href="/about-us/understanding-hoarding" className="bg-fog rounded-lg p-4 hover:shadow-md transition-shadow">
              <span className="text-sm text-light-blue font-medium">Related Resource</span>
              <h3 className="font-bold text-gunmetal">What is Hoarding?</h3>
            </Link>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Not Sure What You&apos;re Dealing With?
            </h3>
            <p className="text-gray-300 mb-6">
              We can help you figure it out. Free, confidential consultations.
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
