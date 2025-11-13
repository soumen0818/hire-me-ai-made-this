/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable React strict mode for better error detection
  reactStrictMode: true,
  // Optimize production build
  compress: true,
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig