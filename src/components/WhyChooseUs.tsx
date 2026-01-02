import { Heart, Shield, Clock, Leaf, Users, CreditCard } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: 'We Get It',
    description: 'Hoarding is a mental health condition, not a choice. Our crew is trained to work with people going through this. No lectures, no dirty looks. Just help.',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed with $1M liability coverage. We handle hazardous materials, biohazards, and heavy debris the right way.',
  },
  {
    icon: Clock,
    title: 'Same-Day If You Need It',
    description: 'Some situations can\'t wait. We offer same-day service throughout the Treasure Valley when timing is critical.',
  },
  {
    icon: CreditCard,
    title: 'Financing Available',
    description: 'We offer flexible financing options to help make our services more affordable. Cost shouldn\'t be an added burden.',
  },
  {
    icon: Leaf,
    title: 'We Donate What We Can',
    description: 'We work with local charities and recyclers. Over 60% of what we remove stays out of the landfill.',
  },
  {
    icon: Users,
    title: 'Local & Family-Owned',
    description: 'We\'re based right here in Boise. Been serving the area since 2022. We treat every home like it\'s family.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gunmetal mb-4">
            Why Work With Us?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We do hoarding cleanup in Boise, Meridian, Nampa, Caldwell, and Eagle. Here&apos;s what makes us different.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-fog rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-light-blue/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-light-blue" />
              </div>
              <h3 className="text-xl font-bold text-gunmetal mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            We&apos;ve helped hundreds of families in the Treasure Valley. Every situation is different, and we work with you to figure out what makes sense.
          </p>
        </div>
      </div>
    </section>
  )
}
