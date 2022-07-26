/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  // generateBuildId: () => "roominus",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/cafe": { page: "/cafe" },
    "/reservation": { page: "/reservation" },
    "/theme": { page: "/theme" },
    "/community": { page: "/community" },
    "/mypage": { page: "/mypage" },
    "/404": { page: "/404" },
  }),

  experimental: {
    esmExternals: false,
  },
};

module.exports = nextConfig;
