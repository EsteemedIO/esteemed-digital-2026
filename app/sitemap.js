export default function sitemap() {
  const baseUrl = 'https://esteemed.io';

  const routes = [
    // Core
    { path: '', priority: 1, freq: 'weekly' },
    { path: '/pricing', priority: 0.9, freq: 'monthly' },
    { path: '/about', priority: 0.8, freq: 'monthly' },
    { path: '/contact', priority: 0.8, freq: 'monthly' },

    // Hosting
    { path: '/hosting', priority: 0.9, freq: 'monthly' },
    { path: '/hosting/wordpress-hosting', priority: 0.9, freq: 'monthly' },
    { path: '/hosting/drupal-hosting', priority: 0.9, freq: 'monthly' },
    { path: '/hosting/nextjs-hosting', priority: 0.9, freq: 'monthly' },
    { path: '/hosting/vps-hosting', priority: 0.9, freq: 'monthly' },
    { path: '/hosting/web-hosting', priority: 0.8, freq: 'monthly' },
    { path: '/hosting/curate-cms', priority: 0.8, freq: 'monthly' },
    { path: '/hosting/premium-support', priority: 0.8, freq: 'monthly' },

    // Websites
    { path: '/websites/website-builder', priority: 0.9, freq: 'monthly' },
    { path: '/websites/ecommerce', priority: 0.9, freq: 'monthly' },

    // Business Tools
    { path: '/business-tools/content-management', priority: 0.8, freq: 'monthly' },
    { path: '/business-tools/applicant-tracking', priority: 0.8, freq: 'monthly' },
    { path: '/business-tools/crm', priority: 0.8, freq: 'monthly' },
    { path: '/business-tools/business-intelligence', priority: 0.8, freq: 'monthly' },
    { path: '/business-tools/business-email', priority: 0.8, freq: 'monthly' },

    // Hire Experts
    { path: '/hire-experts', priority: 0.9, freq: 'monthly' },
    { path: '/hire-experts/website-design', priority: 0.8, freq: 'monthly' },
    { path: '/hire-experts/web-support', priority: 0.8, freq: 'monthly' },
    { path: '/hire-experts/content-strategy', priority: 0.8, freq: 'monthly' },
    { path: '/hire-experts/content-production', priority: 0.8, freq: 'monthly' },
    { path: '/hire-experts/search-engine-marketing', priority: 0.8, freq: 'monthly' },
    { path: '/hire-experts/ai-visibility', priority: 0.8, freq: 'monthly' },
    { path: '/hire-experts/talent-management', priority: 0.8, freq: 'monthly' },

    // Products
    { path: '/products/acquire', priority: 0.7, freq: 'monthly' },
    { path: '/products/hire', priority: 0.7, freq: 'monthly' },
    { path: '/products/intelligence', priority: 0.7, freq: 'monthly' },
    { path: '/products/curate', priority: 0.7, freq: 'monthly' },
    { path: '/products/connect', priority: 0.7, freq: 'monthly' },
    { path: '/products/agents', priority: 0.7, freq: 'monthly' },
    { path: '/products/colleagues', priority: 0.7, freq: 'monthly' },
    { path: '/products/support', priority: 0.7, freq: 'monthly' },

    // Solutions
    { path: '/solutions/founders', priority: 0.7, freq: 'monthly' },
    { path: '/solutions/marketing-leaders', priority: 0.7, freq: 'monthly' },
    { path: '/solutions/it-directors', priority: 0.7, freq: 'monthly' },
    { path: '/solutions/hr-teams', priority: 0.7, freq: 'monthly' },
    { path: '/solutions/startups', priority: 0.7, freq: 'monthly' },
    { path: '/solutions/small-business', priority: 0.7, freq: 'monthly' },
    { path: '/solutions/enterprise', priority: 0.7, freq: 'monthly' },
    { path: '/solutions/nonprofits', priority: 0.7, freq: 'monthly' },

    // Blog & Resources
    { path: '/blog/business-resource-center', priority: 0.8, freq: 'weekly' },
    { path: '/newsroom', priority: 0.7, freq: 'weekly' },

    // Conversion
    { path: '/migrate', priority: 0.8, freq: 'monthly' },
    { path: '/signup', priority: 0.7, freq: 'monthly' },
    { path: '/program/agencies', priority: 0.6, freq: 'monthly' },
    { path: '/partners/partner-registration', priority: 0.6, freq: 'monthly' },

    // Legal
    { path: '/privacy', priority: 0.3, freq: 'yearly' },
    { path: '/terms', priority: 0.3, freq: 'yearly' },
    { path: '/code-of-conduct', priority: 0.3, freq: 'yearly' },
    { path: '/help', priority: 0.5, freq: 'monthly' },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
