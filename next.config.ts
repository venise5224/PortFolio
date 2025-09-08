import { NextConfig } from "next";
import nextI18next from "./next-i18next.config";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: nextI18next.i18n,
};

export default nextConfig;
