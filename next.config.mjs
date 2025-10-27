/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Enable network access
  experimental: {
    serverComponentsExternalPackages: [],
  },
  // Suppress hydration warnings in development
  reactStrictMode: false,
  // Additional hydration fixes
  compiler: {
    removeConsole: false,
  },
  async redirects() {
    return [
      // Map iOS apple-touch-icon requests to our site logo to avoid 404s in dev
      { source: "/apple-touch-icon.png", destination: "/images/malikem-logo.png", permanent: false },
      { source: "/apple-touch-icon-precomposed.png", destination: "/images/malikem-logo.png", permanent: false },
    ]
  },
}

export default nextConfig
