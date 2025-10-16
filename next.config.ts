import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "opengraph.githubassets.com",
      "linkbrary-sooty.vercel.app",
      "expo.dev",
    ],
  },
};

export default nextConfig;
