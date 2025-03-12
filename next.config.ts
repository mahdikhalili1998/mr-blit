import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "1mb",
      allowedOrigins: ["*"],
    },
    // timeout: 30, // افزایش تایم‌اوت به 30 ثانیه
  },
};

export default nextConfig;
