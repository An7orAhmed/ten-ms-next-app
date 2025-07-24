import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    domains: ['cdn.10minuteschool.com', 's3.ap-southeast-1.amazonaws.com', 'www.pngplay.com'],
  },
};

export default nextConfig;
