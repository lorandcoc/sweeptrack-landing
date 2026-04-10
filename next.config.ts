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
    ];
  },
};

export default nextConfig;
