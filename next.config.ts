import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // turbopack disabled for Windows nul bug is handled by dev workaround
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "framerusercontent.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
