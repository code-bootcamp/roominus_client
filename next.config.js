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
    "/mypage/mypick": { page: "/mypage/mypick" },
    "/mypage/myboard": { page: "/mypage/myboard" },
    "/mypage/myreview": { page: "/mypage/myreview" },
    "/mypage/history": { page: "/mypage/history" },
    "/mypage/reward": { page: "/mypage/reward" },
    "/home": { page: "/home" },
    "/404": { page: "/404" },
  }),
};

module.exports = nextConfig;
