import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, Heart, MessageCircle, Shield, Clock, CheckCircle, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Help a Hoarder | Supporting a Loved One',
  description: 'Learn how to help a family member or friend who struggles with hoarding. Practical tips for approaching the conversation and supporting recovery.',
  keywords: [
    'how to help a hoarder',
    'helping a hoarder',
    'how to help someone who hoards',
    'supporting a hoarder',
    'talking to a hoarder',
    'hoarder intervention',
    'family member hoarding',
    'parent is a hoarder',
    'hoarding family support',
  ],
  openGraph: {
    title: 'How to Help a Hoarder | Supporting a Loved One',
    description: 'Practical tips for helping a family member or friend who struggles with hoarding disorder.',
    url: 'https://boise-hoarding-cleanup.com/resources/helping-a-hoarder',
  },
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/resources/helping-a-hoarder',
  },
}

const dosAndDonts = {
  dos: [
    'Come from a place of caring, not criticism',
    'Listen more than you talk',
    'Talk about safety, not how things look',
    'Understand they\'re attached to this stuff',
    'Offer help, but let them stay in control',
    'Notice the small wins',
    'Be patient—this takes a long time',
    'Suggest getting professional help',
  ],
  donts: [
    'Throw stuff away without asking',
    'Try to shame them into changing',
    'Give ultimatums',
    'Bring up TV hoarder shows',
    'Clean while they\'re not home',
    'Think it\'ll be fixed in a weekend',
    'Make this about how it affects you',
    'Give up when there\'s a setback',
  ],
}

const conversationTips = [
  {
    icon: Heart,
    title: 'Start With Care',
    description: 'Make it clear you\'re worried about them, not mad about the house. "I care about you and want to help."',
  },
  {
    icon: MessageCircle,
    title: 'Talk About How You Feel',
    description: 'Don\'t say "Your house is a disaster." Try "I worry about you when I see blocked doorways."',
  },
  {
    icon: Shield,
    title: 'Stick to Safety',
    description: 'Focus on whether they\'re safe and healthy. Not how things look.',
  },
  {
    icon: Clock,
    title: 'Don\'t Expect Quick Results',
    description: 'This is going to be many conversations over time. One talk won\'t change things.',
  },
]

export default function HelpingAHoarderPage() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gunmetal mb-6">
              How to Help Someone Who Hoards
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watching someone you love struggle with hoarding is hard. Here&apos;s what actually helps—and what makes things worse.
            </p>
          </div>

          {/* Understanding Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">First, Try to Understand Where They&apos;re Coming From</h2>

            <div className="prose prose-lg max-w-none text-gray-600 mb-8 [&>p]:mb-6">
              <p>
                Before you try to help, you need to understand what&apos;s going on in their head. Hoarding isn&apos;t about being lazy or not caring. It&apos;s a mental health condition. Throwing stuff away causes them real distress.
              </p>
              <p>
                Here&apos;s what it feels like from their side:
              </p>
              <ul>
                <li>Every item might feel important or irreplaceable</li>
                <li>Getting rid of stuff feels like losing part of themselves</li>
                <li>They might not see the clutter the way you do</li>
                <li>They&apos;re probably ashamed but can&apos;t ask for help</li>
                <li>Past "clean up" attempts might have been traumatic for them</li>
              </ul>
            </div>
          </section>

          {/* Do's and Don'ts */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Do&apos;s and Don&apos;ts</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Do
                </h3>
                <ul className="space-y-3">
                  {dosAndDonts.dos.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-green-900">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <XCircle className="w-6 h-6" />
                  Don&apos;t
                </h3>
                <ul className="space-y-3">
                  {dosAndDonts.donts.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-red-900">
                      <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Starting the Conversation */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">How to Bring It Up</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {conversationTips.map((tip, index) => (
                <div key={index} className="bg-fog rounded-xl p-6">
                  <div className="w-12 h-12 bg-light-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <tip.icon className="w-6 h-6 text-light-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-gunmetal mb-2">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-fog rounded-xl p-6">
              <h3 className="text-xl font-bold text-gunmetal mb-4">Things You Could Say</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="border-l-4 border-light-blue pl-4">
                  &quot;You seem stressed lately. Anything I can help with?&quot;
                </li>
                <li className="border-l-4 border-light-blue pl-4">
                  &quot;I care about you and want you to be safe. Can we talk?&quot;
                </li>
                <li className="border-l-4 border-light-blue pl-4">
                  &quot;I found a company that helps with this kind of thing. Want me to tell you about them?&quot;
                </li>
                <li className="border-l-4 border-light-blue pl-4">
                  &quot;I&apos;m not judging. I just want to help if I can.&quot;
                </li>
              </ul>
            </div>
          </section>

          {/* When Professional Help is Needed */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">When to Call In Professionals</h2>

            <div className="prose prose-lg max-w-none text-gray-600 [&>p]:mb-6">
              <p>
                Sometimes family help isn&apos;t enough. You might need to bring in professionals when:
              </p>
              <ul>
                <li><strong>It&apos;s dangerous:</strong> Fire hazards, blocked exits, structural problems</li>
                <li><strong>There are legal problems:</strong> Eviction notices, code violations, custody issues</li>
                <li><strong>Health is getting worse:</strong> They&apos;re getting sick from the conditions</li>
                <li><strong>You&apos;ve tried and failed:</strong> Past cleanup attempts didn&apos;t work</li>
                <li><strong>It&apos;s severe:</strong> Serious hoarding usually needs professional help</li>
              </ul>
              <p>
                Good cleanup companies work with therapists and family members. They understand hoarding and treat people with respect.
              </p>
            </div>
          </section>

          {/* Taking Care of Yourself */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Take Care of Yourself Too</h2>

            <div className="bg-fog rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                This stuff is exhausting. A few things to remember:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>You can&apos;t force someone to change. They have to want it.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>It&apos;s okay to set boundaries. You have to protect yourself.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Support groups exist for families dealing with this.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Feeling frustrated is normal. This is really hard.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Consider talking to a therapist yourself.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Related Pages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Link href="/about-us/understanding-hoarding" className="group bg-fog rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gunmetal mb-2 flex items-center gap-2">
                What is Hoarding?
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-gray-600">Learn what hoarding is and why it happens.</p>
            </Link>
            <Link href="/resources/hoarding-signs" className="group bg-fog rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gunmetal mb-2 flex items-center gap-2">
                Signs of Hoarding
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-gray-600">How to recognize if someone has a hoarding problem.</p>
            </Link>
          </div>

          {/* CTA */}
          <div className="p-8 bg-dark-blue rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Help With a Loved One?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We work with families in Boise and the Treasure Valley. We can help with the cleanup while treating your loved one with respect. Give us a call.
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
