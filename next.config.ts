import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
      },
      {
        protocol: "https",
        hostname: "**.hashnode.com",
      },
      {
        protocol: "https",
        hostname: "**.hashnodecdn.com",
      },
    ],
  },
}

export default nextConfig
