import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Phone, Heart, MessageCircle, Users, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Support a Family Member Through Hoarding Cleanup',
  description: 'Hoarding cleanup is an emotional process. Learn how to provide meaningful support to your loved one during and after the cleanup process.',
  keywords: [
    'supporting hoarder during cleanup',
    'family hoarding cleanup',
    'help family member hoarding',
    'hoarding cleanup support',
    'emotional support hoarding',
    'family hoarding recovery',
  ],
  openGraph: {
    title: 'How to Support a Family Member Through Hoarding Cleanup',
    description: 'Learn how to provide meaningful support to your loved one during and after the hoarding cleanup process.',
    url: 'https://boise-hoarding-cleanup.com/blogs/supporting-family-through-cleanup',
  },
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/blogs/supporting-family-through-cleanup',
  },
}

const supportStrategies = [
  {
    icon: Heart,
    title: 'Remember What This Feels Like for Them',
    description: 'Every item going out the door might feel like a loss. Acknowledge how hard it is without brushing it off.',
  },
  {
    icon: MessageCircle,
    title: 'Check In, But Don\'t Hover',
    description: 'Ask how they\'re feeling instead of "how\'s the progress going?" Don\'t call every day asking if they threw more stuff away.',
  },
  {
    icon: Users,
    title: 'Be There If They Want You',
    description: 'Offer to be present during cleanup. But if they want space, give it to them. Don\'t pressure.',
  },
  {
    icon: Shield,
    title: 'Keep It Private',
    description: 'Don\'t tell the whole family. Don\'t post about it. They\'re already embarrassed enough.',
  },
]

export default function BlogPost() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-dark-blue underline hover:text-light-blue mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="bg-light-blue/10 text-light-blue text-sm font-medium px-3 py-1 rounded-full">
                Family Support
              </span>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  October 15, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  8 min read
                </span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gunmetal mb-6">
              Being There for a Family Member During Hoarding Cleanup
            </h1>

            <p className="text-xl text-gray-600">
              Your loved one finally agreed to cleanup. Now what? Here&apos;s how to actually help without making things worse.
            </p>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none [&>p]:mb-6">
            <p>
              When someone with hoarding disorder finally says yes to cleanup, you might feel relieved. Finally. But here&apos;s the thing—the cleanup itself is often the hardest part for them. How you show up during this time matters a lot.
            </p>

            <h2>What They&apos;re Going Through</h2>

            <p>
              For them, this isn&apos;t just getting rid of junk. Every item being removed might feel like losing something important. Here&apos;s what they might be feeling:
            </p>

            <ul>
              <li><strong>Grief:</strong> Seriously. Each thing going out the door can feel like a loss.</li>
              <li><strong>Anxiety:</strong> What if I need that? What if I&apos;m making a mistake?</li>
              <li><strong>Shame:</strong> Now everyone sees how bad it got.</li>
              <li><strong>Fear:</strong> Are they judging me? Disgusted?</li>
              <li><strong>Relief:</strong> Mixed with guilt about feeling relieved.</li>
              <li><strong>Exhaustion:</strong> Making decision after decision is draining.</li>
            </ul>

            <p>
              Knowing this helps you understand why they might get upset, shut down, or want to stop. It&apos;s not them being difficult. It&apos;s genuinely hard.
            </p>

            <h2>Before It Starts</h2>

            <h3>Talk About What Scares Them</h3>
            <p>
              Ask what they&apos;re worried about. Is it certain items? Being judged? Losing memories? Knowing their fears helps you and the cleanup team avoid landmines.
            </p>

            <h3>Figure Out Your Role</h3>
            <p>
              Are you going to be there during cleanup? Helping with decisions? Just moral support? Sort this out beforehand so there&apos;s no confusion or conflict later.
            </p>

            <h3>Make a &quot;Don&apos;t Touch&quot; List</h3>
            <p>
              Work together to identify things that should never be thrown away without their explicit okay—photos, documents, specific sentimental stuff. Give this list to the cleanup team.
            </p>

            <h2>During the Cleanup</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose">
              {supportStrategies.map((strategy, index) => (
                <div key={index} className="bg-fog rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-light-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <strategy.icon className="w-5 h-5 text-light-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gunmetal mb-1">{strategy.title}</h4>
                      <p className="text-sm text-gray-600">{strategy.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3>Things That Help</h3>
            <ul>
              <li>&quot;I&apos;m proud of you.&quot;</li>
              <li>&quot;How are you feeling?&quot;</li>
              <li>&quot;Want to take a break?&quot;</li>
              <li>&quot;I&apos;m here.&quot;</li>
              <li>&quot;This is hard. You&apos;re doing it.&quot;</li>
            </ul>

            <h3>Things That Don&apos;t</h3>
            <ul>
              <li>&quot;Finally! Can&apos;t believe you kept all this.&quot;</li>
              <li>&quot;Why would you want that?&quot;</li>
              <li>&quot;This looks so much better!&quot; (sounds dismissive)</li>
              <li>&quot;Just throw it all away.&quot;</li>
              <li>Taking pictures without asking</li>
            </ul>

            <h2>After It&apos;s Done</h2>

            <p>
              Cleanup finishing isn&apos;t the end. Hoarding is chronic—without support, the stuff can come back over time.
            </p>

            <h3>Keep Therapy Going</h3>
            <p>
              Encourage them to keep seeing a therapist who specializes in hoarding. Cleanup fixes the symptom. Therapy works on what&apos;s underneath.
            </p>

            <h3>Celebrate Without Policing</h3>
            <p>
              Acknowledge the progress. But don&apos;t become the clutter cop. Constantly checking up on them damages trust and makes them more anxious.
            </p>

            <h3>Help With Practical Stuff</h3>
            <p>
              Help set up systems—regular donation runs, sorting mail together, organizing seasonal items. Make it collaborative, not supervisory.
            </p>

            <h3>Expect Some Setbacks</h3>
            <p>
              It&apos;s normal. Doesn&apos;t mean failure. Respond with patience, not criticism. Recovery doesn&apos;t go in a straight line.
            </p>

            <h2>Take Care of Yourself Too</h2>

            <p>
              This stuff is hard on you as well. Some things to remember:
            </p>

            <ul>
              <li>Set limits on what you can give</li>
              <li>Take breaks when you need them</li>
              <li>Get your own support—therapy, support groups</li>
              <li>Your feelings are valid too</li>
              <li>You&apos;re doing something really hard</li>
            </ul>

            <p>
              You can&apos;t help them if you&apos;re running on empty.
            </p>
          </article>

          {/* Related Links */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/resources/helping-a-hoarder" className="bg-fog rounded-lg p-4 hover:shadow-md transition-shadow">
              <span className="text-sm text-light-blue font-medium">Related Resource</span>
              <h3 className="font-bold text-gunmetal">How to Help a Hoarder</h3>
            </Link>
            <Link href="/blogs/what-to-expect-hoarding-cleanup" className="bg-fog rounded-lg p-4 hover:shadow-md transition-shadow">
              <span className="text-sm text-light-blue font-medium">Related Post</span>
              <h3 className="font-bold text-gunmetal">What to Expect During Cleanup</h3>
            </Link>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Help With Cleanup?
            </h3>
            <p className="text-gray-300 mb-6">
              We work with families and treat everyone with respect. Give us a call.
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
