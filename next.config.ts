import type { NextConfig } from "next";
const path = require("path");


const nextConfig: NextConfig = {
  webpack: config => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
};

export default nextConfig;
