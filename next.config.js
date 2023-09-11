

/** @type {import('next').NextConfig} */
const runtimeCaching = require('next-pwa/cache');

const withPWA = require('next-pwa')({  
  dest: 'public',
  register: true,
  sw: '/sw.js',
  runtimeCaching,
})

const nextConfig = withPWA({
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images:{ 
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ]
  }
})

module.exports = nextConfig;
