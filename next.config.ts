import type { NextConfig } from "next";

const repoName = "pizzeria";
const isProd = process.env.NODE_ENV === "production";
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isProd || isGitHubPages
    ? {
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
      }
    : {}),
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
