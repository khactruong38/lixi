import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.vietqr.io",
      },
      {
        protocol: "https",
        hostname: "vietqr.net",
      },
      {
        protocol: "https",
        hostname: "qr.sepay.vn",
      },
    ],
  },
};

export default nextConfig;
