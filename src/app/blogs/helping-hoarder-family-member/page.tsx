import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Help a Family Member Who Hoards | Hoarding Cleanup Pros',
  description: 'You want to help, but pushing too hard backfires. A compassionate approach to helping someone you love deal with hoarding.',
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/blogs/helping-hoarder-family-member',
  },
}

export default function HelpingHoarderFamilyMember() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/helping-hoarder-family.webp"
          alt="Helping a Family Member Who Hoards"
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
            How to Help a Family Member Who Hoards
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You can see the problem clearly. The house is becoming unsafe. You're worried about their health, their isolation, maybe even a fire hazard. You want to help, but everything you've tried has backfired.
            </p>
            <p className="text-gray-600 leading-relaxed">
              You're not alone. Millions of families deal with hoarding, and the path to helping is rarely straightforward. Here's what actually works—and what makes things worse.
            </p>
          </div>
        </div>
      </section>

      {/* What Not to Do */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                What Doesn't Work (and Makes Things Worse)
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              These well-intentioned approaches typically backfire:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Surprise cleanouts.</strong> Coming in while they're gone and clearing everything out feels like a violation. It destroys trust and often accelerates re-hoarding as they try to regain control.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Throwing things away without permission.</strong> Even if it looks like garbage to you, removing items without consent creates trauma and makes the person more protective of remaining possessions.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Ultimatums and threats.</strong> "Clean up or I'm not visiting" rarely motivates change. It more often leads to isolation and shame, which worsen hoarding behavior.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Arguing about the value of items.</strong> Logical arguments about why something should be thrown away don't work. The attachment isn't logical—it's emotional.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Shaming or expressing disgust.</strong> They already feel shame. Adding more drives them further into isolation and secrecy, not into action.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding First */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Understand Before Acting
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Hoarding disorder is a recognized mental health condition. Understanding this changes how you approach it:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>It's not laziness.</strong> People who hoard often feel overwhelmed by the clutter but genuinely cannot decide what to do with items. The problem isn't motivation—it's a processing difficulty.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Items feel like part of themselves.</strong> For someone with hoarding disorder, possessions can feel like extensions of their identity or memory. Throwing something away feels like losing a piece of themselves.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>There's usually an underlying cause.</strong> Trauma, loss, anxiety, depression, ADHD, OCD—hoarding often accompanies or stems from other conditions.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>They often don't see it the same way you do.</strong> What looks like a dangerous pile of garbage to you might look like useful items, important memories, or potential resources to them.
            </p>
          </div>
        </div>
      </section>

      {/* What Actually Helps */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              What Actually Helps
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              These approaches have better outcomes:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Lead with compassion.</strong> Express concern for their wellbeing, not disgust at their home. "I'm worried about you" lands differently than "This place is a disaster"</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Focus on safety and function.</strong> Instead of tackling everything, identify specific problems: "Can we clear a path to the bathroom?" Small, focused goals feel achievable</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Let them make decisions.</strong> Don't touch anything without asking. Even if it takes longer, their participation in decisions prevents re-hoarding</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Offer practical support.</strong> "I can help carry things to the car when you're ready" is more useful than "You really need to clean this up"</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Maintain the relationship.</strong> Stay connected even if progress is slow. Isolation makes hoarding worse; connection provides motivation for change</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When It's Urgent */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              When Safety Forces Action
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Sometimes you can't wait for willing participation:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Code violations or eviction threats.</strong> When the city or landlord is involved, there's a deadline. Help them understand the consequences and offer to work alongside them.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Immediate health hazards.</strong> Pest infestations, structural damage, no running water, blocked exits—these require action even without full buy-in.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Children or vulnerable adults involved.</strong> Child or adult protective services may need to be involved if others' safety is at risk.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Even in emergencies, try to involve the person as much as possible. Explain what's happening and why. Let them make whatever decisions they can. Forced cleanouts should be a last resort, not a first response.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Resources */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Professional Resources
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              You don't have to figure this out alone:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Therapists specializing in hoarding.</strong> Cognitive Behavioral Therapy (CBT) is the most effective treatment. Look for providers with specific hoarding experience.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Professional organizers.</strong> Some specialize in hoarding situations and work alongside therapists to provide practical support.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Support groups for families.</strong> Connecting with others who understand helps you process your own feelings and learn what's worked for others.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Hoarding cleanup services.</strong> When it's time for the physical cleanup, professionals who understand hoarding work differently than regular junk removal. Look for companies that work compassionately and involve the person in decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Bottom Line
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Helping someone with hoarding disorder is a marathon, not a sprint. Quick fixes usually backfire. Lasting change takes time, patience, and a consistent compassionate presence.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Your role isn't to fix them—it's to support them while they work on change. That might feel frustrating, but it's the approach most likely to actually help.
            </p>

            <p className="text-gray-600 leading-relaxed">
              And take care of yourself in the process. You can't pour from an empty cup. Get your own support, set boundaries where needed, and remember that you're doing the best you can with a difficult situation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Need Professional Hoarding Cleanup?
            </h2>
            <p className="text-gray-600 mb-8">
              When your family is ready for cleanup, we approach every situation with compassion and discretion. Serving Boise, Meridian, Nampa, and the Treasure Valley.
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
