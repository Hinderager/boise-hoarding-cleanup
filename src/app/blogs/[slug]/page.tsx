import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Phone } from 'lucide-react'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import PortableText from '@/components/PortableText'
import { getPost, getPostSlugs, imageUrl, readingMinutes } from '@/lib/sanity'

export const revalidate = 120
// A post published after the last build still renders — that is what makes the
// daily auto-blog run show up without a deploy.
export const dynamicParams = true

export async function generateStaticParams() {
  const slugs = await getPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return { title: 'Post not found' }

  const url = `https://boise-hoarding-cleanup.com/blogs/${slug}`
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, url },
    alternates: { canonical: url },
  }
}

const formatDate = (iso?: string) =>
  iso
    ? new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : null

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  const img = imageUrl(post.mainImage, 1400)
  const published = formatDate(post.publishedAt)
  const minutes = readingMinutes(post.body)

  return (
    <main className="pt-20">
      <VisibleBreadcrumb />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link href="/blogs" className="inline-flex items-center gap-2 text-dark-blue underline hover:text-light-blue mb-8">
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
                {published && (
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {published}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {minutes} min read
                </span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gunmetal mb-6">
              {post.title}
            </h1>

            {post.excerpt && <p className="text-xl text-gray-600">{post.excerpt}</p>}
          </header>

          {img && (
            <div className="relative w-full h-[320px] md:h-[420px] rounded-xl overflow-hidden mb-10">
              <Image
                src={img}
                alt={post.imageAlt || post.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}

          {/* Article Content */}
          <article className="prose prose-lg max-w-none [&>p]:mb-6">
            <PortableText blocks={post.body} />
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
              Need Help With a Cleanup?
            </h3>
            <p className="text-gray-300 mb-6">
              We can talk it through. Free, confidential consultations.
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
