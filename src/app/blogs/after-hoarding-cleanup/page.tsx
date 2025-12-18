import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { RefreshCw, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'After the Cleanup: Preventing Hoarding Relapse | Hoarding Cleanup Pros',
  description: 'The cleanup is just the first step. How to support long-term recovery and prevent hoarding behaviors from returning.',
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/blogs/after-hoarding-cleanup',
  },
}

export default function AfterHoardingCleanup() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/after-hoarding-cleanup.webp"
          alt="After the Hoarding Cleanup"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/90 via-dark-blue/50 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <Link
            href="/blogs"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            After the Cleanup: Preventing Relapse
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The cleanup is done. The house is clear. Now comes the harder question: how do you keep it that way?
            </p>
            <p className="text-gray-600 leading-relaxed">
              Hoarding disorder doesn't go away when the clutter does. Without ongoing support and strategies, relapse rates are high. Here's what actually helps people maintain a clutter-free home after cleanup.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding Relapse */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                Why Relapse Happens
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Understanding why hoarding returns helps prevent it:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Hoarding is a mental health condition, not a choice.</strong> The underlying patterns that led to hoarding—difficulty discarding items, strong emotional attachment to possessions, distress at the thought of letting go—don't automatically change after cleanup.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Trauma from forced cleanup.</strong> If the person wasn't ready or wasn't involved in decisions, they may experience the cleanup as a violation. This can actually accelerate re-accumulation as they try to regain a sense of control.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Triggers remain.</strong> Stress, anxiety, depression, grief, major life changes—whatever triggered or worsened the hoarding behavior is still present. Without addressing these, the behavior often returns.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>No new skills developed.</strong> The person may not have learned strategies for deciding what to keep, how to organize, or how to resist acquiring new items.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Support */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Professional Support Options
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              These resources exist in the Boise area:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Cognitive Behavioral Therapy (CBT):</strong> Specifically effective for hoarding. Helps change thought patterns around possessions. Look for therapists with hoarding experience</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Support groups:</strong> Connecting with others who understand the struggle reduces shame and provides accountability. Check for local groups or online options</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Professional organizers:</strong> Some specialize in working with hoarding recovery. They provide ongoing support and skill-building, not just organizing</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Medication:</strong> For some people, medication for underlying anxiety or OCD helps. This is a conversation for a psychiatrist</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              The most effective approach usually combines therapy with practical organizing support.
            </p>
          </div>
        </div>
      </section>

      {/* Daily Strategies */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Daily Strategies That Help
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Small daily habits make the biggest difference:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>One in, one out rule.</strong> Before bringing something new into the house, something must leave. This prevents gradual re-accumulation.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Daily 10-minute tidying.</strong> Spend just 10 minutes each day putting things in their place and removing anything that doesn't belong. Short and consistent beats occasional marathons.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Waiting period for purchases.</strong> Wait 24-48 hours before buying non-essential items. Many urges to acquire pass when given time.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Designated landing spots.</strong> Every category of item needs a home. If there's no place for something, it doesn't come in.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Regular donation schedule.</strong> Weekly or biweekly trips to drop off donations maintain momentum and create a habit of letting go.
            </p>
          </div>
        </div>
      </section>

      {/* Family Support */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              How Family Can Help
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Your ongoing support matters enormously:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Regular check-ins without judgment.</strong> Visit regularly. Notice progress more than problems. "The living room looks great" lands better than "Is that pile growing again?"
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Offer practical help.</strong> "I'm going to Goodwill Saturday—want me to take anything?" is more helpful than lectures about clutter.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Celebrate wins.</strong> Maintaining a clear space for months is an achievement. Acknowledge it.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Be patient with setbacks.</strong> Recovery isn't linear. A pile appearing doesn't mean failure—it means the person needs support, not criticism.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Take care of yourself too.</strong> Supporting someone with hoarding disorder is emotionally demanding. Set boundaries and get your own support if needed.
            </p>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Warning Signs to Watch For
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Early intervention prevents full relapse:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Acquiring speeding up.</strong> More shopping, more bringing home free items, more difficulty leaving stores empty-handed.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Flat surfaces filling up.</strong> Tables, counters, and floors slowly accumulating items is often the first visible sign.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Rooms becoming off-limits.</strong> If certain rooms are being avoided or doors kept closed, items may be accumulating there.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Resistance to visitors.</strong> Reluctance to have people over often signals shame about the space's condition.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Increased stress or isolation.</strong> The underlying triggers may be worsening, which often precedes increased hoarding behavior.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Bottom Line
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              The cleanup was a significant accomplishment—but it's the beginning of recovery, not the end. Long-term success requires ongoing support, professional help when needed, and daily practices that prevent re-accumulation.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Relapse doesn't mean failure. It means adjustment is needed. The earlier you catch it and respond with compassion rather than criticism, the better the outcome.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Recovery is possible. Many people with hoarding disorder go on to maintain clear, functional homes for years. It takes work, support, and patience—but it's absolutely achievable.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Need Help With a Hoarding Situation?
            </h2>
            <p className="text-gray-600 mb-8">
              We handle hoarding cleanups throughout Boise, Meridian, Nampa, and the Treasure Valley with compassion and discretion.
            </p>
            <a
              href="tel:2085059352"
              className="inline-block bg-dark-blue hover:bg-light-blue text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              Call (208) 505-9352
            </a>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gunmetal mb-8 text-center">
            More Hoarding Resources
          </h2>
          <div className="text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center text-dark-blue font-semibold hover:text-light-blue transition-colors"
            >
              View All Posts
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
