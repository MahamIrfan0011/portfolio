import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // This suppresses ESLint warnings during build
  },
  // You can add other options here
};

export default nextConfig;
