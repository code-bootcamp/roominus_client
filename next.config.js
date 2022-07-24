/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "roominus", // E2C와 storage에 올려둘
  exportPathMap: () => ({
    "/": { page: "/" },
    "/404": { page: "/404" },
  }),
};

module.exports = nextConfig;
