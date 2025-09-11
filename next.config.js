/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Remove output: 'export' for Vercel deployment
  // output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig
