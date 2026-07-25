import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPost, listPosts } from '@/lib/curate'
import { getAuthorForPost } from '@/lib/authors'
import LexicalRenderer from '@/components/LexicalRenderer'

const FALLBACK_IMAGES = {
  'the-unbound-knowledge-worker': 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'introducing-esteemed-curate': 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
}

export async function generateStaticParams() {
  try {
    const data = await listPosts({ limit: 100 })
    return data.docs.map((post) => ({ slug: post.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getPost(slug).catch(() => null)
  if (!post) return { title: 'Post Not Found' }
  return {
    title: `${post.title} | Esteemed`,
    description: post.excerpt ?? undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt ?? undefined,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  }
}

function formatDate(iso) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export default async function PostPage({ params }) {
  const { slug } = await params
  const post = await getPost(slug).catch(() => null)

  if (!post) notFound()

  const author = getAuthorForPost(slug)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 border-b border-zinc-100">
        <div className="max-w-3xl mx-auto px-6">
          {post.categories?.[0]?.category && (
            <Link
              href={`/blog/business-resource-center?category=${encodeURIComponent(post.categories[0].category)}`}
              className="text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-ink transition-colors"
            >
              {post.categories[0].category}
            </Link>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-ink mt-4 mb-6 leading-tight">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-xl text-zinc-500 leading-relaxed mb-6">{post.excerpt}</p>
          )}
          <div className="flex items-center gap-4 text-sm text-zinc-400">
            {author && (
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={author.image} alt={author.name} className="w-10 h-10 rounded-full object-cover border border-zinc-200" />
                <span className="font-semibold text-ink">{author.name}</span>
              </div>
            )}
            {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
          </div>
          {post.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map(({ tag }) => (
                <span key={tag} className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-500 text-xs">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured image */}
      {(post.featuredImage?.url || FALLBACK_IMAGES[post.slug]) && (
        <div className="max-w-3xl mx-auto px-6 pt-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.featuredImage?.sizes?.card?.url ?? post.featuredImage?.url ?? FALLBACK_IMAGES[post.slug]}
            alt={post.featuredImage?.altText ?? post.title}
            className="w-full rounded-2xl object-cover max-h-96"
          />
        </div>
      )}

      {/* Body */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <LexicalRenderer content={post.body} />
        </div>
      </section>

      {/* Author bio */}
      {author && (
        <section className="border-t border-zinc-100 py-12">
          <div className="max-w-3xl mx-auto px-6">
            <div className="flex gap-5 items-start">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={author.image} alt={author.name} className="w-16 h-16 rounded-full object-cover border border-zinc-200 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-ink mb-2">{author.name}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: author.bio }} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer nav */}
      <section className="border-t border-zinc-100 py-12">
        <div className="max-w-3xl mx-auto px-6 flex items-center justify-between">
          <Link
            href="/blog/business-resource-center"
            className="text-sm font-medium text-zinc-500 hover:text-ink transition-colors"
          >
            ← All Articles
          </Link>
          {post.categories?.[0]?.category && (
            <Link
              href={`/blog/business-resource-center?category=${encodeURIComponent(post.categories[0].category)}`}
              className="text-sm font-medium text-zinc-500 hover:text-ink transition-colors"
            >
              More in {post.categories[0].category} →
            </Link>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ink mb-4">
            Build your distributed team with Esteemed
          </h2>
          <p className="text-zinc-700 mb-8">
            Access 35,000+ vetted tech professionals, on demand.
          </p>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  )
}
