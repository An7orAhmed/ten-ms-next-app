import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', 
  basePath: '/ten-ms-next-app',
  images: {
    unoptimized: true,
    domains: ['cdn.10minuteschool.com', 's3.ap-southeast-1.amazonaws.com'],
  },
};

export default nextConfig;
