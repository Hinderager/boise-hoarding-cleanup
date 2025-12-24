import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { DollarSign, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hoarding Cleanup Costs: What Affects the Price? | Hoarding Cleanup Pros',
  description: 'Every hoarding situation is different. Here\'s what determines the cost of professional hoarding cleanup in Boise.',
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/blogs/hoarding-cleanup-cost-factors',
  },
}

export default function HoardingCleanupCostFactors() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/hoarding-cleanup-costs.webp"
          alt="Hoarding Cleanup Costs"
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
            Hoarding Cleanup Costs: What Affects the Price?
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              "How much will this cost?" It's the first question most families ask, and the honest answer is: it depends. Hoarding cleanups vary dramatically based on multiple factors.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's a straightforward breakdown of what affects hoarding cleanup costs in the Boise area, so you know what to expect when getting quotes.
            </p>
          </div>
        </div>
      </section>

      {/* General Range */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                General Cost Ranges
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              These are broad estimates for the Treasure Valley area. Your specific situation may vary:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Minor hoarding (Level 1-2):</strong> $1,000-$3,000. Clutter but walkable paths, minimal hazards, one room or small area affected. Often completed in a day.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Moderate hoarding (Level 3):</strong> $3,000-$8,000. Multiple rooms affected, narrow or blocked pathways, some structural concerns or pest issues. Typically 2-3 days of work.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Severe hoarding (Level 4-5):</strong> $8,000-$25,000+. Whole house affected, rooms unusable, significant biohazard concerns, possible structural damage. Can take a week or more.
            </p>

            <p className="text-gray-600 leading-relaxed">
              These ranges are for the cleanup itself. Additional costs for repairs, biohazard remediation, or pest control are separate.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Cost Factors */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              What Drives the Cost
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              These factors have the biggest impact on price:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Volume of items:</strong> More stuff means more labor hours, more truckloads, and higher disposal fees. This is typically the biggest factor</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Square footage:</strong> A 3,000 square foot house costs more than a 1,000 square foot apartment, even at similar clutter density</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Biohazard presence:</strong> Animal waste, human waste, mold, or decomposing materials require specialized handling and significantly increase cost</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Decision involvement:</strong> If the person needs to approve every item removed, the process takes much longer than when the crew can sort independently</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Disposal requirements:</strong> E-waste, hazardous materials, and certain items cost more to dispose of properly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden Cost Factors */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Factors People Don't Expect
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              These often surprise families when getting estimates:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Accessibility.</strong> Items on second floors, in basements, or in tight spaces take longer to remove. Narrow hallways, no elevator, or long walks to the truck add labor time.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Sorting requirements.</strong> Looking for valuables, documents, or specific items throughout the clutter adds significant time. The more thoroughly everything needs to be checked, the longer it takes.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Hidden damage.</strong> Sometimes the full extent isn't visible until cleanup starts. Pest damage, water damage, or structural issues may emerge as items are removed.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Emotional pacing.</strong> If the person with hoarding disorder is present and needs breaks or time to process, the cleanup takes longer. This is often appropriate, but it adds to the timeline and cost.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Location within Boise area.</strong> Jobs in outlying areas like Caldwell or up in the foothills may cost more than central Boise due to travel time and disposal access.
            </p>
          </div>
        </div>
      </section>

      {/* Potential Additional Costs */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Beyond the Cleanup: Additional Costs
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              The cleanup itself may be just part of the total cost:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Biohazard remediation.</strong> Professional sanitization for biological hazards is a specialized service, often $2,000-$10,000+ depending on extent.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Pest control.</strong> Rodent or insect infestations often need professional treatment after cleanup. Budget $500-$2,500 depending on severity.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Repairs.</strong> Damaged flooring, walls, plumbing, or electrical often need attention once the clutter is cleared. These vary widely based on damage extent.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Deep cleaning.</strong> After items are removed, professional deep cleaning is usually needed. Expect $500-$2,000 for a whole house.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Appliance replacement.</strong> Refrigerators, stoves, and water heaters often need replacement if they've been non-functional or damaged.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Accurate Quotes */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Getting Accurate Estimates
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              To get useful quotes:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Provide photos if possible.</strong> Even pictures from outside the house or of the worst room help companies understand the scope.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Be honest about the situation.</strong> Companies need accurate information to give realistic estimates. Understating the problem leads to surprise costs later.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Request on-site estimates.</strong> For significant hoarding situations, phone quotes are unreliable. A company needs to see the actual conditions.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Ask what's included.</strong> Does the quote include disposal fees? Biohazard handling? Sorting for valuables? Understand exactly what you're paying for.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Get multiple quotes.</strong> Prices vary significantly between companies. But the cheapest quote isn't always the best—consider experience, insurance, and approach.
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
              Hoarding cleanup costs vary widely—from a few thousand dollars for minor situations to $25,000+ for severe cases. The main drivers are volume, biohazards, and time required.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Get detailed quotes from companies experienced in hoarding specifically, not just regular junk removal. And factor in the potential costs beyond the cleanup itself—remediation, repairs, and cleaning.
            </p>

            <p className="text-gray-600 leading-relaxed">
              The investment is significant, but the alternative—continued unsafe living conditions—carries its own costs. Done right, professional hoarding cleanup can restore a home to safe, livable condition.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Need a Hoarding Cleanup Estimate?
            </h2>
            <p className="text-gray-600 mb-8">
              We provide free, confidential estimates for hoarding situations throughout the Treasure Valley. No judgment, just honest assessment.
            </p>
            <a
              href="tel:2089435231"
              className="inline-block bg-dark-blue hover:bg-light-blue text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              Call (208) 943-5231
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
