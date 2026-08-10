import { Fragment } from 'react'
import type { RichBlock, RichItem, TextSpan } from '@/lib/sanity'

const LINK = 'text-dark-blue underline hover:text-light-blue'

/**
 * Prose whose paragraphs carry inline links.
 *
 * The hand-written page separated its runs with explicit {' '} in the JSX, so
 * the spaces here are deliberate — they are what keeps "The" and the link that
 * follows it from running together.
 */
function TextSpans({ spans }: { spans?: TextSpan[] }) {
  if (!spans?.length) return null
  return (
    <>
      {spans.map((span, i) => (
        <Fragment key={span._key || i}>
          {span.href ? (
            <a href={span.href} target="_blank" rel="noopener noreferrer" className={LINK}>
              {span.text}
            </a>
          ) : (
            span.text
          )}
          {i < spans.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </>
  )
}

/** A list item: optional bold lead-in, then either spans or plain text. */
function Item({ item }: { item: RichItem }) {
  return (
    <li>
      {item.label ? <strong>{item.label}</strong> : null}
      {item.label ? ' ' : null}
      {item.spans?.length ? <TextSpans spans={item.spans} /> : item.text}
    </li>
  )
}

export function RichProse({ blocks }: { blocks?: RichBlock[] }) {
  return (
    <>
      {(blocks || []).map((block, index) => {
        if (block.type === 'h2') {
          return (
            <h2
              key={block._key}
              className={`text-3xl font-bold text-gunmetal${index === 0 ? '' : ' mt-10'}`}
            >
              {block.text}
            </h2>
          )
        }
        if (block.type === 'ul') {
          return (
            <ul key={block._key}>
              {(block.items || []).map((item) => (
                <Item key={item._key} item={item} />
              ))}
            </ul>
          )
        }
        if (block.type === 'ol') {
          return (
            <ol key={block._key}>
              {(block.items || []).map((item) => (
                <Item key={item._key} item={item} />
              ))}
            </ol>
          )
        }
        return (
          <p key={block._key}>
            <TextSpans spans={block.spans} />
          </p>
        )
      })}
    </>
  )
}
