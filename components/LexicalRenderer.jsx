/**
 * Renders a Payload Lexical rich-text JSON body to React elements.
 * Supports: paragraphs, headings (h1–h6), lists (bullet/number),
 *           horizontal rules, and inline text formatting (bold, italic,
 *           underline, strikethrough, code).
 */

// Text format bitmask (mirrors Payload/Lexical)
const FORMAT = { bold: 1, italic: 2, strikethrough: 4, underline: 8, code: 16 }

function TextNode({ node }) {
  let el = node.text

  if (!el) return null

  if (node.format & FORMAT.code)          el = <code className="bg-zinc-100 text-zinc-700 rounded px-1 py-0.5 text-sm font-mono">{el}</code>
  if (node.format & FORMAT.bold)          el = <strong>{el}</strong>
  if (node.format & FORMAT.italic)        el = <em>{el}</em>
  if (node.format & FORMAT.underline)     el = <u>{el}</u>
  if (node.format & FORMAT.strikethrough) el = <s>{el}</s>

  return el
}

function InlineChildren({ children }) {
  if (!children?.length) return null
  return children.map((child, i) => <NodeRenderer key={i} node={child} />)
}

function NodeRenderer({ node }) {
  if (!node) return null

  switch (node.type) {
    case 'text':
      return <TextNode node={node} />

    case 'linebreak':
      return <br />

    case 'paragraph':
      if (!node.children?.length) return <p className="mb-4" />
      return (
        <p className="mb-4 text-zinc-700 leading-relaxed">
          <InlineChildren children={node.children} />
        </p>
      )

    case 'heading': {
      const Tag = node.tag ?? 'h2'
      const styles = {
        h1: 'text-3xl font-bold text-ink mt-10 mb-4',
        h2: 'text-2xl font-bold text-ink mt-10 mb-3',
        h3: 'text-xl font-semibold text-ink mt-8 mb-2',
        h4: 'text-lg font-semibold text-ink mt-6 mb-2',
        h5: 'text-base font-semibold text-ink mt-4 mb-1',
        h6: 'text-sm font-semibold text-ink mt-4 mb-1',
      }
      return (
        <Tag className={styles[Tag] ?? styles.h2}>
          <InlineChildren children={node.children} />
        </Tag>
      )
    }

    case 'list': {
      const Tag = node.listType === 'number' ? 'ol' : 'ul'
      const listStyle = node.listType === 'number'
        ? 'list-decimal list-outside ml-6 mb-4 space-y-1'
        : 'list-disc list-outside ml-6 mb-4 space-y-1'
      return (
        <Tag className={listStyle}>
          {node.children?.map((item, i) => <NodeRenderer key={i} node={item} />)}
        </Tag>
      )
    }

    case 'listitem':
      return (
        <li className="text-zinc-700 leading-relaxed">
          <InlineChildren children={node.children?.flatMap(c => c.children ?? [c])} />
        </li>
      )

    case 'horizontalrule':
      return <hr className="my-8 border-zinc-200" />

    case 'quote':
      return (
        <blockquote className="border-l-4 border-accent pl-4 my-6 italic text-zinc-500">
          <InlineChildren children={node.children} />
        </blockquote>
      )

    case 'link': {
      const href = node.fields?.url ?? node.url ?? '#'
      const external = href.startsWith('http')
      return (
        <a
          href={href}
          className="text-ink underline underline-offset-2 hover:text-zinc-500 transition-colors"
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          <InlineChildren children={node.children} />
        </a>
      )
    }

    default:
      // Unknown block — recurse into children if present
      if (node.children?.length) {
        return <InlineChildren children={node.children} />
      }
      return null
  }
}

export default function LexicalRenderer({ content, className = '' }) {
  if (!content?.root?.children) return null
  return (
    <div className={className}>
      {content.root.children.map((node, i) => (
        <NodeRenderer key={i} node={node} />
      ))}
    </div>
  )
}
