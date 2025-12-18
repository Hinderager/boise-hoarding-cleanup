import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Brain, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Understanding Hoarding Disorder: What Family Members Should Know | Hoarding Cleanup Pros',
  description: 'Hoarding isn\'t about being messy or lazy. Here\'s what you need to understand about hoarding disorder before starting a cleanup.',
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/blogs/understanding-hoarding-disorder',
  },
}

export default function UnderstandingHoardingDisorder() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/understanding-hoarding.webp"
          alt="Understanding Hoarding Disorder"
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
            Understanding Hoarding Disorder
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Your family member isn't just "messy" or "lazy." They have a recognized mental health condition that affects how they process decisions about possessions. Understanding this changes everything about how you approach the situation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Before any cleanup happens, here's what you need to know about hoarding disorder.
            </p>
          </div>
        </div>
      </section>

      {/* What It Is */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                What Hoarding Disorder Actually Is
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Hoarding disorder is officially recognized in the DSM-5 (the diagnostic manual mental health professionals use). It's characterized by:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Persistent difficulty discarding possessions.</strong> Not just reluctance—genuine distress at the thought of letting things go, regardless of actual value.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Perceived need to save items.</strong> The person believes items are needed, useful, or important, even when others see no value.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Accumulation that compromises living space.</strong> The clutter prevents normal use of rooms for their intended purpose.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Significant distress or impairment.</strong> The hoarding causes problems in daily life—social isolation, health risks, housing issues, family conflict.
            </p>
          </div>
        </div>
      </section>

      {/* What It Isn't */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              What Hoarding Is NOT
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Clearing up misconceptions helps approach the situation better:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Not laziness.</strong> People with hoarding disorder aren't too lazy to clean up. They often work extremely hard—the problem is a processing issue with decisions about possessions, not motivation.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Not just collecting.</strong> Collectors have organized, displayed items of a specific category. Hoarding involves disorganized accumulation across many categories, often including obvious trash.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Not a choice.</strong> Nobody chooses to live in unsafe, isolating conditions. The behavior feels necessary and unavoidable to the person experiencing it.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Not about the stuff.</strong> The possessions are a symptom, not the disease. Removing items without addressing the underlying condition doesn't solve the problem—the clutter typically returns.
            </p>
          </div>
        </div>
      </section>

      {/* Contributing Factors */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              What Contributes to Hoarding
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              Hoarding disorder often develops from multiple factors:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Genetics:</strong> Hoarding runs in families. If a first-degree relative hoards, the risk is significantly higher</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Trauma and loss:</strong> Many people with hoarding disorder experienced significant loss, deprivation, or trauma. Holding onto possessions can feel like protection against future loss</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Other mental health conditions:</strong> Hoarding often co-occurs with depression, anxiety, ADHD, and OCD. These conditions can worsen hoarding behaviors</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Information processing differences:</strong> Research shows people with hoarding disorder process decisions differently. They have trouble categorizing, organizing, and making quick decisions</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Emotional attachment to possessions:</strong> Items can feel like extensions of identity, containers of memories, or potential future resources</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Severity Spectrum */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Hoarding Severity Scale
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Professionals often use a 1-5 scale to assess hoarding severity:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Level 1:</strong> Clutter is noticeable but all rooms are usable and accessible. Doors and windows open. No sanitation issues.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Level 2:</strong> One room is slightly unusable. Minor odors present. Pathways slightly narrowed. Some appliances not working.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Level 3:</strong> One room is fully unusable. Visible clutter outside the home. Light pest evidence. Narrow pathways. Some neglect of home maintenance.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Level 4:</strong> Multiple rooms unusable. Structural damage. Significant mold or pest issues. Blocked exits. Rotting food. Unsanitary conditions.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Level 5:</strong> Home is uninhabitable. No running water or electricity. Severe biohazards. Human or animal waste present. Fire hazards. Structural hazards.
            </p>
          </div>
        </div>
      </section>

      {/* Why Understanding Matters */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Why This Understanding Matters for Cleanup
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              How you understand the condition shapes how you approach cleanup:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Forced cleanouts usually fail.</strong> When families or authorities clear a hoarded home without the person's involvement, the space typically refills within months. The underlying condition hasn't been addressed.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Shame makes it worse.</strong> Expressing disgust, frustration, or judgment typically drives the person further into isolation and can actually accelerate hoarding behavior.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Treatment helps.</strong> Cognitive Behavioral Therapy (CBT) specifically for hoarding is effective. Cleanup combined with therapy has much better long-term outcomes.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Involvement is key.</strong> The more the person participates in cleanup decisions, the better the chance of lasting success. This is slower, but more effective.
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
              Hoarding disorder is a mental health condition, not a character flaw. Understanding this doesn't excuse unsafe conditions or mean you should ignore serious problems—but it does change how you approach solutions.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              The most successful approach combines compassion for the person, professional mental health support, and—when the person is ready—professional cleanup services that understand the unique nature of hoarding situations.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Recovery is possible. Many people with hoarding disorder go on to maintain safe, functional homes. It takes time, appropriate treatment, and ongoing support—but it's achievable.
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
              We provide compassionate hoarding cleanup throughout Boise, Meridian, Nampa, and the Treasure Valley. We understand the condition and work respectfully.
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
