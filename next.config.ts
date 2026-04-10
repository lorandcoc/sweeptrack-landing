import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
