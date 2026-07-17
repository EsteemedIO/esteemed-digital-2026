/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/solutions', destination: '/products', permanent: true },
      { source: '/deployment', destination: '/', permanent: true },
      { source: '/developers', destination: '/', permanent: true },
      { source: '/research', destination: '/', permanent: true },
      { source: '/news', destination: '/', permanent: true },
      { source: '/careers', destination: '/', permanent: true },
      { source: '/partners', destination: '/', permanent: true },
      { source: '/team', destination: '/about', permanent: true },
    ];
  },
};

module.exports = nextConfig;
