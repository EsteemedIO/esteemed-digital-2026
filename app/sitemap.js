export default function sitemap() {
  const baseUrl = 'https://esteemed.digital';

  const routes = [
    '',
    '/products',
    '/services',
    '/solutions',
    '/research',
    '/team',
    '/developers',
    '/deployment',
    '/partners',
    '/contact',
    '/news',
    '/about',
    '/careers',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
