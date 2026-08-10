import { Phone } from 'lucide-react'

/**
 * The dark call-to-action panel that closes most pages. It was copy-pasted
 * into every page file before these moved to Sanity; the only thing that ever
 * varied is whether the body text is width-capped.
 */
export function PageCta({
  heading,
  body,
  wide = false,
  className = '',
}: {
  heading?: string
  body?: string
  wide?: boolean
  className?: string
}) {
  return (
    <div className={`${className}p-8 bg-dark-blue rounded-xl text-center`}>
      <h3 className="text-2xl font-bold text-white mb-4">{heading}</h3>
      <p className={`text-gray-300 mb-6${wide ? ' max-w-2xl mx-auto' : ''}`}>{body}</p>
      <a
        href="tel:2089435231"
        className="inline-flex items-center gap-2 bg-brand-yellow text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
      >
        <Phone className="w-5 h-5" />
        (208) 943-5231
      </a>
    </div>
  )
}
