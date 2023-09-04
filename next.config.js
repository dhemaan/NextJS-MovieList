/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
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

module.exports = nextConfig
