import type { PortableBlock, Span } from '@/lib/sanity'

/**
 * Renders Sanity portable text as the plain HTML the article pages already
 * used — h2/h3, paragraphs, real <ul> lists and <strong>. It sits inside the
 * existing `prose prose-lg` wrapper, so the styling is unchanged from the
 * hand-written posts.
 */

function Children({ children }: { children: Span[] }) {
  return (
    <>
      {(children || []).map((span) => {
        let node: React.ReactNode = span.text
        if (span.marks?.includes('strong')) node = <strong>{node}</strong>
        if (span.marks?.includes('em')) node = <em>{node}</em>
        return <span key={span._key}>{node}</span>
      })}
    </>
  )
}

export default function PortableText({ blocks }: { blocks?: PortableBlock[] | null }) {
  if (!Array.isArray(blocks) || blocks.length === 0) return null

  const out: React.ReactNode[] = []
  let list: PortableBlock[] = []

  const flushList = () => {
    if (!list.length) return
    out.push(
      <ul key={`ul-${list[0]._key}`}>
        {list.map((item) => (
          <li key={item._key}>
            <Children children={item.children} />
          </li>
        ))}
      </ul>
    )
    list = []
  }

  for (const block of blocks) {
    if (block.listItem) {
      list.push(block)
      continue
    }
    flushList()

    if (block.style === 'h2') {
      out.push(
        <h2 key={block._key}>
          <Children children={block.children} />
        </h2>
      )
    } else if (block.style === 'h3') {
      out.push(
        <h3 key={block._key}>
          <Children children={block.children} />
        </h3>
      )
    } else if (block.style === 'blockquote') {
      out.push(
        <blockquote key={block._key}>
          <Children children={block.children} />
        </blockquote>
      )
    } else {
      out.push(
        <p key={block._key}>
          <Children children={block.children} />
        </p>
      )
    }
  }
  flushList()

  return <>{out}</>
}
