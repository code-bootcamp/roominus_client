/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "roominus",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/cafe": { page: "/cafe" },
    "/community": { page: "/community" },
    "/reservation": { page: "/reservation" },
    "/theme": { page: "/theme" },
    "/404": { page: "/404" },
  }),

  experimental: {
    esmExternals: false,
  },
};

module.exports = nextConfig;
