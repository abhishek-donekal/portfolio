import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.credly.com", pathname: "/**" },
      {
        protocol: "https",
        hostname: "templates.images.credential.net",
        pathname: "/**",
      },
      { protocol: "https", hostname: "cdn.jsdelivr.net", pathname: "/**" },
    ],
  },
};

export default nextConfig;
