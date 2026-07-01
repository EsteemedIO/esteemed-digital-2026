import Link from 'next/link'
import { listPosts } from '@/lib/curate'

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

export default async function BusinessResourceCenterPage({ searchParams }) {
  const { category, page: pageParam } = await searchParams
  const page = parseInt(pageParam ?? '1', 10)

  let data = { docs: [], totalPages: 1, page: 1, hasNextPage: false }
  try {
    data = await listPosts({ limit: 12, page, category: category ?? undefined })
  } catch (err) {
    console.error('[BRC] fetch failed:', err)
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Business Resource Center
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Insights, guides, and best practices for building and managing distributed technology teams.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="py-8 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap gap-3">
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

      {/* Post grid */}
      <section className="py-12 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          {data.docs.length === 0 ? (
            <p className="text-zinc-500 text-sm">No posts found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {data.docs.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/business-resource-center/${post.slug}`}
                  className="group rounded-2xl border border-zinc-200 overflow-hidden hover:border-zinc-400 hover:shadow-sm transition-all flex flex-col"
                >
                  {post.featuredImage?.url && (
                    <div className="aspect-[16/9] overflow-hidden bg-zinc-100">
                      <img
                        src={`https://curate.esteemed.io${post.featuredImage.sizes?.thumbnail?.url ?? post.featuredImage.url}`}
                        alt={post.featuredImage.altText ?? post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    {post.categories?.[0]?.category && (
                      <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide">
                        {post.categories[0].category}
                      </span>
                    )}
                    <h2 className="text-lg font-semibold text-ink mt-2 mb-2 group-hover:text-zinc-600 transition-colors line-clamp-3">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-sm text-zinc-500 line-clamp-2 mb-4">{post.excerpt}</p>
                    )}
                    <span className="text-xs text-zinc-400 mt-auto">{formatDate(post.publishedAt)}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination */}
          {data.totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-12">
              {page > 1 && (
                <Link
                  href={`/blog/business-resource-center?page=${page - 1}${category ? `&category=${encodeURIComponent(category)}` : ''}`}
                  className="px-5 py-2 rounded-full border border-zinc-200 text-sm font-medium hover:border-zinc-400 transition-colors"
                >
                  Previous
                </Link>
              )}
              <span className="text-sm text-zinc-400">
                Page {data.page} of {data.totalPages}
              </span>
              {data.hasNextPage && (
                <Link
                  href={`/blog/business-resource-center?page=${page + 1}${category ? `&category=${encodeURIComponent(category)}` : ''}`}
                  className="px-5 py-2 rounded-full border border-zinc-200 text-sm font-medium hover:border-zinc-400 transition-colors"
                >
                  Next
                </Link>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need a distributed tech team?
          </h2>
          <p className="text-zinc-400 mb-8">
            Join 35,000+ professionals in the Esteemed network.
          </p>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  )
}
