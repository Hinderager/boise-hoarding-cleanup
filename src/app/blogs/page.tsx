import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hoarding Cleanup Pros Blog | Tips & Guides for Hoarding cleanup',
  description: 'Expert tips, guides, and insights about hoarding cleanup in Boise and the Treasure Valley. Learn from the pros at Hoarding Cleanup Pros.',
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/blogs',
  },
}

const blogPosts = [
  {
    "slug": "understanding-hoarding-disorder",
    "title": "Understanding Hoarding Disorder: What Family Members Should Know",
    "excerpt": "Hoarding isn't about being messy. Here's what you need to understand before starting a cleanup.",
    "image": "/generated/understanding-hoarding.webp"
  },
  {
    "slug": "hoarding-cleanup-process",
    "title": "What to Expect During a Hoarding Cleanup",
    "excerpt": "Professional hoarding cleanup follows a specific process. Here's how it typically works.",
    "image": "/generated/hoarding-cleanup-process.webp"
  },
  {
    "slug": "helping-hoarder-family-member",
    "title": "How to Help a Family Member Who Hoards",
    "excerpt": "You want to help, but pushing too hard backfires. Here's a compassionate approach.",
    "image": "/generated/helping-hoarder-family.webp"
  },
  {
    "slug": "hoarding-cleanup-cost-factors",
    "title": "Hoarding Cleanup Costs: What Affects the Price?",
    "excerpt": "Every hoarding situation is different. Here's what determines the cost of professional cleanup.",
    "image": "/generated/hoarding-cleanup-costs.webp"
  },
  {
    "slug": "after-hoarding-cleanup",
    "title": "After the Cleanup: Preventing Hoarding Relapse",
    "excerpt": "Cleanup is just the first step. Here's how to support long-term recovery.",
    "image": "/generated/after-hoarding-cleanup.webp"
  }
]

export default function BlogsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <Image
          src="/generated/hero.webp"
          alt="Hoarding Cleanup Pros Blog"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/80 to-dark-blue/60" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Tips, guides, and insights about hoarding cleanup in the Treasure Valley. Real advice from real professionals.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/blogs/${post.slug}`}>
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gunmetal mb-2 hover:text-dark-blue transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center text-dark-blue font-semibold">
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on your hoarding cleanup project.
          </p>
          <a
            href="tel:2089435231"
            className="inline-block bg-brand-yellow hover:bg-yellow-400 text-black font-bold text-lg px-8 py-4 rounded-lg transition-colors"
          >
            Call (208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
