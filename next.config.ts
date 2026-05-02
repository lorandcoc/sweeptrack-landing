import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    // Vercel injects VERCEL_GIT_COMMIT_SHA at build time; fall back to "local" off-Vercel.
    NEXT_PUBLIC_BUILD_SHA: (process.env.VERCEL_GIT_COMMIT_SHA || "local").slice(0, 7),
    NEXT_PUBLIC_BUILD_DATE: new Date().toISOString().slice(0, 10),
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    rules: {
      "*.md": { loaders: ["raw-loader"], as: "*.js" },
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      type: "asset/source",
    });
    return config;
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Hunt Planner and the old Detecting Forecast post were merged into a single
      // unified Detecting Forecast guide. 301 both old URLs to the new one.
      {
        source: "/blog/hunt-planner-wizard",
        destination: "/blog/detecting-forecast-guide",
        permanent: true,
      },
      {
        source: "/blog/how-to-use-detecting-forecast",
        destination: "/blog/detecting-forecast-guide",
        permanent: true,
      },
      // Removed blog posts that described features the app doesn't actually have.
      // Redirect to the blog index so old backlinks don't 404.
      {
        source: "/blog/find-heatmap",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/find-to-preset-intelligence",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/signal-diary",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/site-productivity-heatmap",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/depth-chart",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/permission-request-thank-you-letters",
        destination: "/blog/metal-detecting-permission-letter-template",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
