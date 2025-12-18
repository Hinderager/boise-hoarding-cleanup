import Image from 'next/image'
import { Button } from '@/components/ui/button'

const services = [
  {
    title: 'Hoarding Cleanup',
    description: 'Professional hoarding cleanup with compassion and respect. We understand the emotional challenges involved and work at your pace. Our team carefully sorts through belongings, helps identify valuables and keepsakes, and removes unwanted items. We never throw anything away without your approval.',
    image: '/generated/hoarding-cleanup.webp',
    link: 'tel:2085059352',
    buttonText: 'Call Now',
  },
  {
    title: 'Ongoing Maintenance',
    description: 'Recovery from hoarding is a journey, not a one-time event. We offer ongoing maintenance visits to help you stay on track. Whether it\'s weekly, monthly, or as-needed check-ins, we\'ll help prevent re-accumulation and keep your space comfortable and safe.',
    image: '/generated/ongoing-maintenance.webp',
    link: 'tel:2085059352',
    buttonText: 'Call Now',
  },
  {
    title: 'Deep Cleaning',
    description: 'After the clutter is removed, we deep clean and sanitize the entire space. Floors, walls, surfaces—everything gets attention. We address odors, stains, and years of accumulated grime to make the space livable and comfortable again. Perfect preparation for selling or moving back in.',
    image: '/generated/deep-cleaning.webp',
    link: 'tel:2085059352',
    buttonText: 'Call Now',
  },
  {
    title: 'Emergency Services',
    description: 'Facing an eviction, code violation, or urgent deadline? We offer expedited hoarding cleanup services when you need them fast. Same-day and next-day service available for emergency situations. We understand time-sensitive situations and work quickly without sacrificing quality.',
    image: '/generated/emergency-services.webp',
    link: 'tel:2085059352',
    buttonText: 'Call Now',
  },
]

export function ServicesShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark-blue mb-4 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>
            Serving Boise and Surrounding Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            From Boise to the scenic stretches of the Treasure Valley, we provide compassionate hoarding cleanup and property restoration services!
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              {/* Title - Mobile/Tablet only */}
              <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] lg:hidden w-full">
                {service.title}
              </h3>

              {/* Image - Second on mobile, alternates on desktop */}
              <div className={`relative w-full ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                  />
                </div>
              </div>

              {/* Text Content - Alternates on desktop */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                {/* Title - Desktop only */}
                <h3 className="hidden lg:block text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="inline-block bg-[#FFC845] hover:bg-[#e5b13d] text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 uppercase tracking-wide"
                >
                  {service.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-4 justify-center mt-16">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow">
            <a href="tel:2085059352">
              <span className="md:hidden">Call Now</span>
              <span className="hidden md:inline">(208) 505-9352</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
