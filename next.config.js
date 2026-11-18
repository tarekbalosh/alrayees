/** @type {import('next').NextConfig} */
const pages = [
  'about',
  'contact',
  'agricultural-inputs',
  'grains-foodstuffs',
  'vegetable-oils',
  'success',
];

const nextConfig = {
  // Old static URLs keep working: /about.html -> /about (301), /index.html -> /
  // (query strings such as ?product=... are preserved by Next.js).
  async redirects() {
    return [
      { source: '/index.html', destination: '/', statusCode: 301 },
      ...pages.map((p) => ({ source: `/${p}.html`, destination: `/${p}`, statusCode: 301 })),
    ];
  },
};

module.exports = nextConfig;
