import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.esteemed.io'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/dashboard',
        '/login',
        '/signup',
        '/thanks',
        '/websites/ecommerce/start',
        '/websites/website-builder/start',
      ],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
