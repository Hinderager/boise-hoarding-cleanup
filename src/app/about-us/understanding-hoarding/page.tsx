import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, Brain, AlertCircle, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What is Hoarding Disorder? | Understanding Hoarding',
  description: 'Learn about hoarding disorder - what causes it, how it affects people, and why professional help matters. Understanding hoarding is the first step to getting help.',
  keywords: [
    'what is hoarding',
    'hoarding disorder',
    'hoarding definition',
    'hoarding causes',
    'why do people hoard',
    'hoarding mental health',
    'compulsive hoarding',
    'hoarding behavior',
    'understanding hoarding',
  ],
  openGraph: {
    title: 'What is Hoarding Disorder? | Understanding Hoarding',
    description: 'Learn about hoarding disorder - what causes it, how it affects people, and why professional help matters.',
    url: 'https://boise-hoarding-cleanup.com/about-us/understanding-hoarding',
  },
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/about-us/understanding-hoarding',
  },
}

export default function AboutHoardingPage() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gunmetal mb-6">
              What is Hoarding?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              If you&apos;re reading this, you probably know someone who hoards. Maybe it&apos;s a parent, a sibling, or yourself. Here&apos;s what you should know.
            </p>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-fog rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-light-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-light-blue" />
              </div>
              <h3 className="font-bold text-gunmetal mb-2">It&apos;s a Mental Health Thing</h3>
              <p className="text-sm text-gray-600">Hoarding isn&apos;t laziness. It&apos;s a recognized mental health condition.</p>
            </div>
            <div className="bg-fog rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-light-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-6 h-6 text-light-blue" />
              </div>
              <h3 className="font-bold text-gunmetal mb-2">More Common Than You&apos;d Think</h3>
              <p className="text-sm text-gray-600">2-6% of people deal with hoarding. That&apos;s millions of Americans.</p>
            </div>
            <div className="bg-fog rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-light-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-light-blue" />
              </div>
              <h3 className="font-bold text-gunmetal mb-2">Things Can Get Better</h3>
              <p className="text-sm text-gray-600">With the right help, people do recover. It takes time, but it happens.</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none text-gray-600 [&>p]:mb-6">
            <h2 className="text-3xl font-bold text-gunmetal">So What Exactly is Hoarding?</h2>

            <p>
              Hoarding is when someone has a really hard time getting rid of things—even stuff that seems worthless to everyone else. The{' '}
              <a href="https://www.psychiatry.org/patients-families/hoarding-disorder/what-is-hoarding-disorder" target="_blank" rel="noopener noreferrer" className="text-dark-blue underline hover:text-light-blue">
                American Psychiatric Association
              </a>{' '}
              classifies it as a mental health disorder. It&apos;s not about being messy or disorganized.
            </p>

            <p>
              People who hoard feel genuine distress when they try to throw things away. That old newspaper? Might need it someday. Broken appliances? Could be fixed. Empty containers? Those are useful. It adds up until there&apos;s no room left to live.
            </p>

            <p>
              The{' '}
              <a href="https://iocdf.org/about-us/understanding-hoarding/" target="_blank" rel="noopener noreferrer" className="text-dark-blue underline hover:text-light-blue">
                International OCD Foundation
              </a>{' '}
              points out that hoarding is complex. It&apos;s not something you can fix by just cleaning up. The stuff comes back unless you address what&apos;s underneath.
            </p>

            <h2 className="text-3xl font-bold text-gunmetal mt-10">Why Do People Hoard?</h2>

            <p>
              There&apos;s no single cause. Usually it&apos;s a mix of things:
            </p>

            <ul>
              <li><strong>Family history:</strong> It often runs in families. If your parent hoarded, you&apos;re more likely to.</li>
              <li><strong>How the brain works:</strong> Research shows hoarders&apos; brains process decisions about stuff differently.</li>
              <li><strong>Trauma or loss:</strong> Hoarding sometimes starts after losing someone or going through something hard.</li>
              <li><strong>Other conditions:</strong> It often shows up alongside depression, anxiety, ADHD, or OCD.</li>
              <li><strong>Emotional attachment:</strong> Objects feel like safety, or memories, or part of who they are.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gunmetal mt-10">How Hoarding Affects Life</h2>

            <p>
              It&apos;s not just about having a messy house. Hoarding affects everything:
            </p>

            <ul>
              <li><strong>You can&apos;t use your home:</strong> Bedrooms become storage rooms. Kitchens become unusable.</li>
              <li><strong>It&apos;s dangerous:</strong> Fire hazards, tripping risks, pests moving in.</li>
              <li><strong>Health problems:</strong> Bad air, mold, things that make you sick.</li>
              <li><strong>Isolation:</strong> You stop inviting people over. Then you stop going out.</li>
              <li><strong>Family fights:</strong> Relationships suffer. People get frustrated with each other.</li>
              <li><strong>Money issues:</strong> Can&apos;t stop buying stuff. Can&apos;t find bills to pay them.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gunmetal mt-10">Getting Help</h2>

            <p>
              Recovery usually takes a few different things working together:
            </p>

            <ol>
              <li><strong>Therapy:</strong> Specifically cognitive-behavioral therapy for hoarding. The{' '}
                <a href="https://adaa.org/understanding-anxiety/hoarding-disorder" target="_blank" rel="noopener noreferrer" className="text-dark-blue underline hover:text-light-blue">
                  Anxiety and Depression Association of America
                </a>{' '}
                can help you find someone.
              </li>
              <li><strong>Support groups:</strong> Talking to other people who get it.</li>
              <li><strong>Professional cleanup:</strong> Working with people who understand hoarding and won&apos;t judge.</li>
              <li><strong>Building new habits:</strong> Learning how to make decisions about stuff differently.</li>
            </ol>

            <p>
              The main thing to know? People do get better. It&apos;s not hopeless. It takes work and the right support, but recovery happens.
            </p>

            {/* External Resources */}
            <div className="bg-fog rounded-xl p-6 mt-8 not-prose">
              <h3 className="text-lg font-bold text-gunmetal mb-4">Want to Learn More?</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.psychiatry.org/patients-families/hoarding-disorder" target="_blank" rel="noopener noreferrer" className="text-dark-blue underline hover:text-light-blue">
                    American Psychiatric Association - Hoarding Disorder
                  </a>
                </li>
                <li>
                  <a href="https://iocdf.org/about-us/understanding-hoarding/" target="_blank" rel="noopener noreferrer" className="text-dark-blue underline hover:text-light-blue">
                    International OCD Foundation - About Hoarding
                  </a>
                </li>
                <li>
                  <a href="https://adaa.org/understanding-anxiety/hoarding-disorder" target="_blank" rel="noopener noreferrer" className="text-dark-blue underline hover:text-light-blue">
                    Anxiety and Depression Association of America
                  </a>
                </li>
                <li>
                  <a href="https://www.nimh.nih.gov/health/publications/obsessive-compulsive-disorder-when-unwanted-thoughts-or-repetitive-behaviors-take-over" target="_blank" rel="noopener noreferrer" className="text-dark-blue underline hover:text-light-blue">
                    National Institute of Mental Health
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Related Pages */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/resources/hoarding-signs" className="group bg-fog rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gunmetal mb-2 flex items-center gap-2">
                Signs of Hoarding
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-gray-600">How to recognize if someone has a hoarding problem.</p>
            </Link>
            <Link href="/resources/helping-a-hoarder" className="group bg-fog rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gunmetal mb-2 flex items-center gap-2">
                How to Help Someone Who Hoards
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-gray-600">What to do (and what not to do) when a loved one hoards.</p>
            </Link>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Help With Cleanup?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We do hoarding cleanups in Boise and the Treasure Valley. We understand what hoarding is and treat everyone with respect. No judgment, just help.
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
