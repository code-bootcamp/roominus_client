/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "roominus",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/cafe": { page: "/cafe" },
    "/reservation": { page: "/reservation" },
    "/theme": { page: "/theme" },
    "/community": { page: "/community" },
    "/mypage": { page: "/mypage" },
    "/customer": { page: "/customer" },
    "/home": { page: "/home" },
    "/404": { page: "/404" },
  }),
};

module.exports = nextConfig;
