/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // ── Exact page renames ──
      { source: '/company/about-esteemed', destination: '/about', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/our-team', destination: '/about', permanent: true },
      { source: '/team', destination: '/about', permanent: true },
      { source: '/join-colleagues', destination: '/products/colleagues', permanent: true },
      { source: '/manage-customers', destination: '/products/acquire', permanent: true },
      { source: '/esteemed-crm', destination: '/products/acquire', permanent: true },
      { source: '/esteemed-screening', destination: '/products/hire', permanent: true },
      { source: '/esteemed-talent', destination: '/products/colleagues', permanent: true },
      { source: '/news', destination: '/newsroom', permanent: true },
      { source: '/deployment', destination: '/', permanent: true },
      { source: '/developers', destination: '/', permanent: true },
      { source: '/research', destination: '/', permanent: true },
      { source: '/transform', destination: '/program/transform', permanent: true },
      { source: '/careers', destination: '/', permanent: true },
      { source: '/partners', destination: '/', permanent: true },
      { source: '/solutions', destination: '/products', permanent: true },
      { source: '/node/:path*', destination: '/', permanent: true },

      // ── Legacy product pages ──
      { source: '/products/digital/website-setup', destination: '/websites/website-builder', permanent: true },
      { source: '/products/esteemed-recruiting', destination: '/products/hire', permanent: true },
      { source: '/products/talent-management/employer-of-record', destination: '/hire-experts/talent-management', permanent: true },

      // ── Enterprise section → best-match new pages ──
      { source: '/enterprise', destination: '/solutions/enterprise', permanent: true },
      { source: '/enterprise/products/employee-experience', destination: '/products/colleagues', permanent: true },
      { source: '/enterprise/products/talent-management', destination: '/hire-experts/talent-management', permanent: true },
      { source: '/enterprise/products/talent-management/talent-acquisition', destination: '/products/acquire', permanent: true },
      { source: '/enterprise/services/human-resources', destination: '/hire-experts/talent-management', permanent: true },
      { source: '/enterprise/services/human-resources/:path*', destination: '/hire-experts/talent-management', permanent: true },
      { source: '/enterprise/services/managed-service', destination: '/hire-experts/web-support', permanent: true },
      { source: '/enterprise/services/staffing-solutions', destination: '/products/colleagues', permanent: true },
      { source: '/enterprise/services/staffing-solutions/:path*', destination: '/products/colleagues', permanent: true },
      { source: '/enterprise/services/workforce-management/:path*', destination: '/hire-experts/talent-management', permanent: true },
      { source: '/enterprise/solutions/industries/:slug', destination: '/solutions/industries/:slug', permanent: true },
      { source: '/enterprise/:path*', destination: '/solutions/enterprise', permanent: true },

      // ── Small Business section → best-match new pages ──
      { source: '/small-business', destination: '/solutions/small-business', permanent: true },
      { source: '/small-business-pricing', destination: '/pricing', permanent: true },
      { source: '/small-business/find-opportunities', destination: '/products/colleagues', permanent: true },
      { source: '/small-business/hire-contract-employees', destination: '/products/colleagues', permanent: true },
      { source: '/small-business/hire-direct-employees', destination: '/products/hire', permanent: true },
      { source: '/small-business/products/employee-benefits', destination: '/products/colleagues', permanent: true },
      { source: '/small-business/products/payroll-and-payments', destination: '/products/colleagues', permanent: true },
      { source: '/small-business/products/payroll-and-payments/:path*', destination: '/products/colleagues', permanent: true },
      { source: '/small-business/products/talent-management', destination: '/hire-experts/talent-management', permanent: true },
      { source: '/small-business/products/unified-communications', destination: '/business-tools/business-email', permanent: true },
      { source: '/small-business/products/virtual-office', destination: '/business-tools/business-email', permanent: true },
      { source: '/small-business/services/flexible-workspace', destination: '/business-tools/business-email', permanent: true },
      { source: '/small-business/services/human-resources', destination: '/hire-experts/talent-management', permanent: true },
      { source: '/small-business/services/human-resources/:path*', destination: '/hire-experts/talent-management', permanent: true },
      { source: '/small-business/services/managed-services', destination: '/hire-experts/web-support', permanent: true },
      { source: '/small-business/services/managed-services/:path*', destination: '/hire-experts/web-support', permanent: true },
      { source: '/small-business/:path*', destination: '/solutions/small-business', permanent: true },

      // ── Personal section → Colleagues ──
      { source: '/personal', destination: '/products/colleagues', permanent: true },
      { source: '/personal/member-pricing', destination: '/pricing', permanent: true },
      { source: '/personal/products/:path*', destination: '/products/colleagues', permanent: true },
      { source: '/personal/services/career-coaching', destination: '/products/colleagues', permanent: true },
      { source: '/personal/services/:path*', destination: '/products/colleagues', permanent: true },
      { source: '/personal/:path*', destination: '/products/colleagues', permanent: true },

      // ── Home variants ──
      { source: '/home/business', destination: '/', permanent: true },
      { source: '/home/personal', destination: '/products/colleagues', permanent: true },

      // ── Coaching ──
      { source: '/coaching/:path*', destination: '/products/colleagues', permanent: true },

      // ── Legacy forms → contact ──
      { source: '/form/:path*', destination: '/contact', permanent: true },
      { source: '/forms/:path*', destination: '/contact', permanent: true },

      // ── Career Catalyst (discontinued) → BRC ──
      { source: '/blog/career-catalyst/:slug', destination: '/blog/business-resource-center', permanent: true },

      // ── Blog author pages → BRC ──
      { source: '/blog/author/:path*', destination: '/blog/business-resource-center', permanent: true },

      // ── Old hosting path → new hosting ──
      { source: '/websites/hosting', destination: '/hosting', permanent: true },
      { source: '/websites/hosting/wordpress-hosting', destination: '/hosting/wordpress-hosting', permanent: true },
      { source: '/websites/hosting/drupal-hosting', destination: '/hosting/drupal-hosting', permanent: true },
      { source: '/websites/hosting/nextjs-hosting', destination: '/hosting/nextjs-hosting', permanent: true },
      { source: '/websites/hosting/curate-cms', destination: '/hosting/curate-cms', permanent: true },
      { source: '/websites/hosting/premium-support', destination: '/hosting/premium-support', permanent: true },

      // ── Services paths that moved to hire-experts ──
      { source: '/services/website-design', destination: '/hire-experts/website-design', permanent: true },
      { source: '/services/content-strategy', destination: '/hire-experts/content-strategy', permanent: true },
      { source: '/services/content-production', destination: '/hire-experts/content-production', permanent: true },
      { source: '/services/search-engine-marketing', destination: '/hire-experts/search-engine-marketing', permanent: true },
      { source: '/services/ai-visibility', destination: '/hire-experts/ai-visibility', permanent: true },
      { source: '/services/talent-management', destination: '/hire-experts/talent-management', permanent: true },
      { source: '/services/support', destination: '/hire-experts/web-support', permanent: true },
      { source: '/services/seo', destination: '/hire-experts/search-engine-marketing', permanent: true },
      { source: '/services/blogs', destination: '/hire-experts/content-production', permanent: true },
      { source: '/services/colleagues', destination: '/products/colleagues', permanent: true },
      { source: '/services/dashboards', destination: '/products/intelligence', permanent: true },
      { source: '/services/business-email', destination: '/business-tools/business-email', permanent: true },
      { source: '/services', destination: '/hire-experts', permanent: true },

      // ── Catch-all for any remaining old paths ──
      { source: '/resources', destination: '/blog/business-resource-center', permanent: true },
    ];
  },
};

module.exports = nextConfig;
