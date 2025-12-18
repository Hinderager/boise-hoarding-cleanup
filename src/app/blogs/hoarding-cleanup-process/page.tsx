import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ClipboardList, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What to Expect During a Hoarding Cleanup | Hoarding Cleanup Pros',
  description: 'Professional hoarding cleanup follows a specific process. Here\'s how it typically works from assessment to completion.',
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/blogs/hoarding-cleanup-process',
  },
}

export default function HoardingCleanupProcess() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/hoarding-cleanup-process.webp"
          alt="Hoarding Cleanup Process"
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
            What to Expect During a Hoarding Cleanup
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You've made the decision to get help with a hoarding situation. That's a big step. But what actually happens when a professional crew shows up? What does the process look like?
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's a walkthrough of how professional hoarding cleanup typically works, from first contact to final cleaning.
            </p>
          </div>
        </div>
      </section>

      {/* Phase 1: Assessment */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <ClipboardList className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                Phase 1: Initial Assessment
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Before any cleanup begins:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Confidential phone conversation.</strong> You describe the situation without judgment. This helps the company understand what they're dealing with and whether they're the right fit.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>On-site evaluation.</strong> For significant hoarding, someone needs to see the actual conditions. This isn't about shock or judgment—it's about accurate assessment. They'll look at volume, accessibility, potential hazards, and special concerns.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Detailed estimate.</strong> Based on the assessment, you get a breakdown of expected costs, timeline, and what's included. Good companies explain their pricing clearly.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Planning conversation.</strong> Who needs to be involved? Will the person with hoarding disorder be present? Are there items that must be saved? Are there safety concerns like biohazards? This planning prevents problems later.
            </p>
          </div>
        </div>
      </section>

      {/* Phase 2: Preparation */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Phase 2: Preparation
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Before the crew arrives:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Identify must-save items.</strong> If there are specific items that absolutely must be kept or found—documents, jewelry, photos, medications—communicate this clearly. The crew will set these aside as they're found.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Discuss involvement level.</strong> Will the person be present? For how long? Will they make decisions on items, or has someone else been designated? Clear expectations prevent conflict during cleanup.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Notify relevant parties.</strong> Neighbors may notice increased activity. If there are landlords, case workers, or code enforcement involved, they may need to know the timeline.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Prepare emotionally.</strong> This is hard. Even with professional help, watching belongings leave can be distressing. Having support in place—a friend, family member, or therapist—helps.
            </p>
          </div>
        </div>
      </section>

      {/* Phase 3: The Cleanup */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Phase 3: The Actual Cleanup
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              How the work typically proceeds:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Safety first:</strong> The crew assesses hazards and sets up accordingly. This might mean protective gear for biohazards, careful navigation of unstable piles, or pest management</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Room by room:</strong> Systematically working through the space prevents chaos. One area is cleared before moving to the next</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Sorting as they go:</strong> Items are typically sorted into categories—keep, donate, recycle, trash. Valuables and documents are set aside</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Regular communication:</strong> Good crews check in with family members or designated contacts. "We found these photos—should we set them aside?" "This room is clear—want to see it?"</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Load and haul:</strong> Items leaving the home go onto trucks and are properly disposed of, recycled, or taken to donation centers</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              Timeline varies dramatically—a day for minor situations, a week or more for severe hoarding.
            </p>
          </div>
        </div>
      </section>

      {/* Phase 4: Post-Cleanup */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Phase 4: After the Items Are Gone
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Once the clutter is removed:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Condition assessment.</strong> Now you can actually see the floors, walls, and fixtures. This often reveals damage that needs attention—water stains, pest damage, mold, or structural issues.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Deep cleaning.</strong> Professional cleaning removes accumulated dirt, odors, and residue. This is usually separate from the cleanup service itself.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Remediation if needed.</strong> Biohazard situations, mold, or pest infestations require specialized treatment before the space is truly safe for habitation.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Repairs.</strong> Depending on condition, the home may need work—flooring replacement, painting, plumbing or electrical repairs, appliance replacement.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes It Different */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              How Hoarding Cleanup Differs From Regular Junk Removal
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              This isn't just hauling stuff away:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Sensitivity required.</strong> Professional hoarding cleanup crews understand the emotional dimension. They don't joke about the mess or express disgust. They work respectfully.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Careful sorting.</strong> Regular junk removal crews load and go. Hoarding cleanup requires checking items, watching for valuables, preserving what matters.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Hazard awareness.</strong> Hoarding situations often involve conditions regular crews aren't trained for—biohazards, unstable piles, structural concerns.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Flexible pacing.</strong> If the person needs breaks or time to process, good hoarding cleanup services accommodate that rather than rushing through.
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
              Professional hoarding cleanup is a structured process: assessment, preparation, the cleanup itself, and restoration of the space. Each phase matters for a successful outcome.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              The right cleanup service makes this as smooth as possible—but it's still hard. Clearing a hoarded home is emotionally intense for everyone involved. Having realistic expectations helps.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Most importantly, remember that the physical cleanup is just one piece. Long-term success requires addressing the underlying condition that led to hoarding in the first place.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Ready to Start the Process?
            </h2>
            <p className="text-gray-600 mb-8">
              We handle hoarding cleanups throughout Boise, Meridian, Nampa, and the Treasure Valley. Confidential consultations, compassionate service.
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
