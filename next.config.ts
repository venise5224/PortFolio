import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["opengraph.githubassets.com", "linkbrary-sooty.vercel.app"],
  },
};

export default nextConfig;
