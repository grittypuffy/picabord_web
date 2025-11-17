/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  output: 'standalone', // For Docker deployments
  images: {
    domains: [],
  },
  turbopack: {
    resolveAlias: {
      '@assets': './attached_assets',
    },
  },
}

export default nextConfig