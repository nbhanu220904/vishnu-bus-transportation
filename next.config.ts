import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["img.clerk.com"], // Allow images from Clerk
  },
};

export default nextConfig;
