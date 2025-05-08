/** @type {import('next').NextConfig} */

const nextConfig = {
  // Disable TypeScript and ESLint checks during build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: '*.firebasestorage.app',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https', 
        hostname: '*.cloudinary.com',
      },
    ],
    // Simpler image settings to avoid file system issues
    minimumCacheTTL: 3600,
    deviceSizes: [640, 750, 828, 1080],
    imageSizes: [16, 32, 64, 96],
  },
  
  // Optimize for stability rather than development speed
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  
  // Simplified onDemandEntries to avoid file locking issues
  onDemandEntries: {
    maxInactiveAge: 15 * 60 * 1000, // 15 minutes
    pagesBufferLength: 2,
  },
  
  // Vercel-specific configurations
  distDir: '.next',
  trailingSlash: false,
  
  // Fix experimental options according to Next.js 15 requirements
  experimental: {
    // Empty to avoid compatibility issues
  },
  
  // Disable unnecessary webpack optimizations that can cause issues
  webpack: (config, { dev, isServer }) => {
    // Avoid filesystem heavy operations in development
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        poll: 800, // Check for changes every 800ms instead of continuously
        aggregateTimeout: 300, // Delay before rebuilding
      };
      
      // Disable source maps in development to prevent source map errors
      config.devtool = false;
    }
    return config;
  },
  
  // Add assetPrefix for production deployments
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : undefined,
  
  // Simplified output options
  output: 'standalone',
}

// Enable Turbopack for development if needed
// Uncomment this line to use Turbopack instead of Webpack
// process.env.TURBOPACK = "1";

module.exports = nextConfig
