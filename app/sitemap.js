import { listPosts } from '@/lib/curate'

const BASE_URL = 'https://www.esteemed.io'

export const revalidate = 3600

const staticRoutes = [
  // Core
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/help', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/pricing', priority: 0.9, changeFrequency: 'monthly' },

  // Hosting and websites
  { path: '/hosting', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/hosting/curate-cms', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/hosting/domains', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/hosting/drupal-hosting', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/hosting/nextjs-hosting', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/hosting/premium-support', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/hosting/vps-hosting', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/hosting/web-hosting', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/hosting/wordpress-hosting', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/websites/ecommerce', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/websites/website-builder', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/local/websites/south-sound', priority: 0.9, changeFrequency: 'monthly' },

  // Business tools
  { path: '/business-tools/applicant-tracking', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/business-tools/business-email', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/business-tools/business-intelligence', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/business-tools/content-management', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/business-tools/crm', priority: 0.8, changeFrequency: 'monthly' },

  // Products
  { path: '/products/acquire', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/products/agents', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/products/colleagues', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/products/connect', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/products/curate', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/products/hire', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/products/intelligence', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/products/support', priority: 0.8, changeFrequency: 'monthly' },

  // Expert services
  { path: '/hire-experts', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/hire-experts/ai-visibility', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/hire-experts/content-production', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/hire-experts/content-strategy', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/hire-experts/search-engine-marketing', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/hire-experts/talent-management', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/hire-experts/web-support', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/hire-experts/website-design', priority: 0.8, changeFrequency: 'monthly' },

  // Solutions
  { path: '/solutions/build-internal-tool', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/enterprise', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/founders', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/higher-ed', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/hire-technical-talent', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/hr-teams', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/industries/construction', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/industries/consumer-and-hospitality', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/industries/financial-services', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/industries/government-education-and-non-profit', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/industries/healthcare-and-life-sciences', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/industries/professional-and-business-services', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/industries/technology-and-media', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/it-directors', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/launch-marketing-site', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/marketing-leaders', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/mid-market', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/modernize-legacy-site', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/nonprofits', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/roles', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/segments', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/small-business', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/startups', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/use-cases', priority: 0.7, changeFrequency: 'monthly' },

  // Programs, resources, and company content
  { path: '/blog/business-resource-center', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/newsroom', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/resources/events', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/migrate', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/partners/partner-registration', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/program/agencies', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/program/transform', priority: 0.6, changeFrequency: 'monthly' },

  // Legal
  { path: '/code-of-conduct', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
]

export default async function sitemap() {
  const routes = staticRoutes.map(({ path, ...metadata }) => ({
    url: `${BASE_URL}${path}`,
    ...metadata,
  }))

  try {
    const { docs = [] } = await listPosts({ limit: 100, revalidate })
    const posts = docs.map((post) => ({
      url: `${BASE_URL}/blog/business-resource-center/${post.slug}`,
      lastModified: post.updatedAt ?? post.publishedAt,
      changeFrequency: 'monthly',
      priority: 0.7,
    }))

    return [...routes, ...posts]
  } catch (error) {
    console.error('[sitemap] Curate post fetch failed:', error)
    return routes
  }
}
