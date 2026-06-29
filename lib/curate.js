/**
 * Curate CMS delivery API client
 * Wraps GET /api/sites/esteemed/[collection] endpoints.
 * Server-side only — never import into client components.
 */

const BASE = process.env.CURATE_API_URL ?? 'https://curate.esteemed.io'
const SITE = 'esteemed'

/**
 * @param {string} collection  'posts' | 'events'
 * @param {Object} opts
 * @param {number} [opts.limit=12]
 * @param {number} [opts.page=1]
 * @param {string} [opts.category]
 * @param {string} [opts.tag]
 * @param {number} [opts.revalidate=60]  Next.js revalidation seconds
 */
export async function listContent(collection, opts = {}) {
  const { limit = 12, page = 1, category, tag, revalidate = 60 } = opts
  const url = new URL(`${BASE}/api/sites/${SITE}/${collection}`)
  url.searchParams.set('limit', limit)
  url.searchParams.set('page', page)
  if (category) url.searchParams.set('category', category)
  if (tag)      url.searchParams.set('tag', tag)

  const res = await fetch(url.toString(), {
    next: { revalidate },
  })
  if (!res.ok) throw new Error(`Curate ${collection} list: ${res.status}`)
  return res.json()
}

/**
 * @param {string} collection  'posts' | 'events'
 * @param {string} slug
 * @param {number} [revalidate=300]
 */
export async function getContent(collection, slug, revalidate = 300) {
  const url = `${BASE}/api/sites/${SITE}/${collection}/${slug}`
  const res = await fetch(url, { next: { revalidate } })
  if (res.status === 404) return null
  if (!res.ok) throw new Error(`Curate ${collection}/${slug}: ${res.status}`)
  return res.json()
}

export const listPosts  = (opts)        => listContent('posts',  opts)
export const listEvents = (opts)        => listContent('events', opts)
export const getPost    = (slug, reval) => getContent('posts',  slug, reval)
export const getEvent   = (slug, reval) => getContent('events', slug, reval)
