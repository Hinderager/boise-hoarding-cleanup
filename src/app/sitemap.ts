import { MetadataRoute } from 'next'
import { getPostSlugs } from '@/lib/sanity'

const baseUrl = 'https://boise-hoarding-cleanup.com'

// Blog slugs come from Sanity so a post published by the daily auto-blog run
// is in the sitemap without anyone editing this file.
export const revalidate = 120

const cityPages = [
  'boise',
  'caldwell',
  'eagle',
  'garden-city',
  'kuna',
  'meridian',
  'middleton',
  'nampa',
  'star',
]

const neighborhoodPages = [
  'boise/bench',
  'boise/downtown',
  'boise/harris-ranch',
  'boise/north-end',
  'boise/southeast-boise',
  'boise/west-boise',
  'meridian/lochsa-falls',
  'meridian/paramount',
  'meridian/ten-mile',
  'meridian/tuscany',
  'nampa/downtown-nampa',
  'nampa/karcher',
  'nampa/lake-lowell',
  'nampa/midway',
]

const servicePages = [
  'biohazard',
  'commercial',
  'estate-cleanout',
  'residential',
]

const aboutPages = [
  'testimonials',
  'understanding-hoarding',
  'why-choose-us',
]

const resourcePages = [
  'cleanup-process',
  'faq',
  'helping-a-hoarder',
  'hoarding-signs',
]

const FALLBACK_BLOG_POSTS = [
  '5-signs-loved-one-needs-hoarding-help',
  'after-hoarding-cleanup',
  'health-risks-hoarding-cleanup',
  'helping-hoarder-family-member',
  'hoarding-cleanup-cost-factors',
  'hoarding-cleanup-process',
  'hoarding-vs-clutter-difference',
  'supporting-family-through-cleanup',
  'understanding-hoarding-disorder',
  'what-to-expect-hoarding-cleanup',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fall back to the known slugs if Sanity is unreachable — a broken sitemap
  // is worse than a slightly stale one.
  const blogPosts = await getPostSlugs().catch(() => FALLBACK_BLOG_POSTS)
  const lastModified = new Date()

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...servicePages.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/cities-served`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...cityPages.map((slug) => ({
      url: `${baseUrl}/cities-served/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...neighborhoodPages.map((slug) => ({
      url: `${baseUrl}/cities-served/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    {
      url: `${baseUrl}/about-us`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...aboutPages.map((slug) => ({
      url: `${baseUrl}/about-us/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    {
      url: `${baseUrl}/resources`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...resourcePages.map((slug) => ({
      url: `${baseUrl}/resources/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
    {
      url: `${baseUrl}/blogs`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...blogPosts.map((slug) => ({
      url: `${baseUrl}/blogs/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
