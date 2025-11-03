/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: true,
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