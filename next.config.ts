import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'pub-d7c6c49f78ef4fad8191a6f31bd31ad4.r2.dev',
      },
    ],
  },
};

export default nextConfig;
