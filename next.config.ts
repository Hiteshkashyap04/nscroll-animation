import type { NextConfig } from "next";

const repoName = "nscroll-animation";

const nextConfig: NextConfig = {
  output: "export",

  trailingSlash: true,

  basePath:
    process.env.NODE_ENV === "production"
      ? `/${repoName}`
      : "",

  assetPrefix:
    process.env.NODE_ENV === "production"
      ? `/${repoName}/`
      : "",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;