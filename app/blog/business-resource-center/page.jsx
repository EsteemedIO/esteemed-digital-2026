import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { listPosts } from '@/lib/curate'
import { getAuthorForPost } from '@/lib/authors'

export const metadata = {
  title: 'Business Resource Center | Esteemed',
  description: 'Insights, guides, and best practices for building and managing distributed technology teams.',
}

const CATEGORIES = [
  'Analytics & Insights',
  'Human Resources',
  'News & Culture',
  'Fractional CTO',
  'Planning',
  'Community',
]

function formatDate(iso) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

const FALLBACK_IMAGES = {
  'the-unbound-knowledge-worker': 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
  'introducing-esteemed-curate': 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
}

function PostImage({ post, className = '' }) {
  const url = post.featuredImage?.sizes?.card?.url
    ?? post.featuredImage?.sizes?.thumbnail?.url
    ?? post.featuredImage?.url
    ?? FALLBACK_IMAGES[post.slug]

  if (!url) {
    return (
      <div className={`bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center ${className}`}>
        <span className="text-4xl font-bold text-zinc-300">{post.title?.charAt(0) ?? 'E'}</span>
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={url}
      alt={post.featuredImage?.altText ?? post.title}
      className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${className}`}
      loading="lazy"
    />
  )
}

function FeaturedPost({ post }) {
  return (
    <Link
      href={`/blog/business-resource-center/${post.slug}`}
      className="group block rounded-2xl border border-zinc-200 overflow-hidden hover:border-zinc-400 hover:shadow-md transition-all"
    >
      <div className="grid md:grid-cols-2 gap-0">
        <div className="aspect-[16/10] md:aspect-auto overflow-hidden bg-zinc-100">
          <PostImage post={post} className="min-h-full" />
        </div>
        <div className="p-8 md:p-10 flex flex-col justify-center">
          {post.categories?.[0]?.category && (
            <span className="text-xs font-bold text-accent-dark uppercase tracking-wide mb-3">
              {post.categories[0].category}
            </span>
          )}
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4 group-hover:text-zinc-600 transition-colors leading-tight">
            {post.title}
          </h2>
          {post.excerpt && (
            <p className="text-base text-zinc-600 line-clamp-3 mb-6 leading-relaxed">{post.excerpt}</p>
          )}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {(() => {
                const author = getAuthorForPost(post.slug)
                if (!author) return <span className="text-sm text-zinc-400">{formatDate(post.publishedAt)}</span>
                return (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={author.image} alt={author.name} className="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <span className="text-sm font-semibold text-ink block">{author.name}</span>
                      <span className="text-xs text-zinc-400">{formatDate(post.publishedAt)}</span>
                    </div>
                  </>
                )
              })()}
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-bold text-ink group-hover:gap-2 transition-all">
              Read more <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

function PostCard({ post }) {
  return (
    <Link
      href={`/blog/business-resource-center/${post.slug}`}
      className="group rounded-2xl border border-zinc-200 overflow-hidden hover:border-zinc-400 hover:shadow-sm transition-all flex flex-col"
    >
      <div className="aspect-[16/10] overflow-hidden bg-zinc-100">
        <PostImage post={post} />
      </div>
      <div className="p-6 flex flex-col flex-1">
        {post.categories?.[0]?.category && (
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-wide mb-2">
            {post.categories[0].category}
          </span>
        )}
        <h2 className="text-lg font-bold text-ink mb-2 group-hover:text-zinc-600 transition-colors line-clamp-2 leading-snug">
          {post.title}
        </h2>
        {post.excerpt && (
          <p className="text-sm text-zinc-500 line-clamp-2 mb-4">{post.excerpt}</p>
        )}
        <div className="flex items-center gap-2 mt-auto pt-2">
          {(() => {
            const author = getAuthorForPost(post.slug)
            if (!author) return <span className="text-xs text-zinc-400">{formatDate(post.publishedAt)}</span>
            return (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={author.image} alt={author.name} className="w-6 h-6 rounded-full object-cover" />
                <span className="text-xs font-medium text-zinc-600">{author.name}</span>
                <span className="text-xs text-zinc-300">·</span>
                <span className="text-xs text-zinc-400">{formatDate(post.publishedAt)}</span>
              </>
            )
          })()}
        </div>
      </div>
    </Link>
  )
}

export default async function BusinessResourceCenterPage({ searchParams }) {
  const { category, page: pageParam } = await searchParams
  const page = parseInt(pageParam ?? '1', 10)

  let data = { docs: [], totalPages: 1, page: 1, hasNextPage: false }
  try {
    data = await listPosts({ limit: 12, page, category: category ?? undefined })
  } catch (err) {
    console.error('[BRC] fetch failed:', err)
  }

  const featured = page === 1 && !category ? data.docs[0] : null
  const posts = featured ? data.docs.slice(1) : data.docs

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4">Resources</p>
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            Business Resource Center
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Insights, guides, and best practices for building and managing distributed technology teams.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-wrap gap-2">
            <Link
              href="/blog/business-resource-center"
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                !category
                  ? 'bg-ink text-white border-ink'
                  : 'border-zinc-200 text-zinc-600 hover:border-zinc-400'
              }`}
            >
              All
            </Link>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={`/blog/business-resource-center?category=${encodeURIComponent(cat)}`}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                  category === cat
                    ? 'bg-ink text-white border-ink'
                    : 'border-zinc-200 text-zinc-600 hover:border-zinc-400'
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-12 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          {data.docs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-zinc-500 text-lg">No posts found.</p>
              <Link href="/blog/business-resource-center" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-ink hover:underline">
                View all posts <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <>
              {/* Featured post */}
              {featured && (
                <div className="mb-10">
                  <FeaturedPost post={featured} />
                </div>
              )}

              {/* Post grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </>
          )}

          {/* Pagination */}
          {data.totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-14">
              {page > 1 && (
                <Link
                  href={`/blog/business-resource-center?page=${page - 1}${category ? `&category=${encodeURIComponent(category)}` : ''}`}
                  className="px-6 py-2.5 rounded-full border-2 border-ink text-sm font-bold text-ink hover:bg-accent hover:border-accent transition-colors"
                >
                  Previous
                </Link>
              )}
              <span className="text-sm text-zinc-400 font-medium">
                Page {data.page} of {data.totalPages}
              </span>
              {data.hasNextPage && (
                <Link
                  href={`/blog/business-resource-center?page=${page + 1}${category ? `&category=${encodeURIComponent(category)}` : ''}`}
                  className="px-6 py-2.5 rounded-full border-2 border-ink text-sm font-bold text-ink hover:bg-accent hover:border-accent transition-colors"
                >
                  Next
                </Link>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ink mb-6">
            Need a distributed tech team?
          </h2>
          <p className="text-zinc-700 mb-8">
            Join 35,000+ professionals in the Esteemed network.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-sm font-bold hover:bg-zinc-800 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  )
}
