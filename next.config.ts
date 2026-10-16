import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/the-1-50-clerk-reads-insurance-forms",
        destination: "/blog/an-inexpensive-model-is-sometimes-all-you-need",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
