import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { IndexCard } from '@/lib/sanity'

/** The pair of "read this next" cards that sits above the CTA on the guides. */
export function RelatedCards({ cards, className = '' }: { cards?: IndexCard[]; className?: string }) {
  if (!cards?.length) return null

  return (
    <div className={`${className}grid grid-cols-1 md:grid-cols-2 gap-6`}>
      {cards.map((card) => (
        <Link
          key={card._key}
          href={card.href}
          className="group bg-fog rounded-xl p-6 hover:shadow-lg transition-all"
        >
          <h3 className="text-xl font-bold text-gunmetal mb-2 flex items-center gap-2">
            {card.title}
            <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          <p className="text-gray-600">{card.description}</p>
        </Link>
      ))}
    </div>
  )
}
