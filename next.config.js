/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  
    dest: "public",
    register: true,
    skipWaiting: true
})
const nextConfig = {
  dest:'public',
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
}

module.exports = withPWA(nextConfig)
