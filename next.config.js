/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  // generateBuildId: () => "roominus",
  // exportPathMap: () => ({
  //   "/": { page: "/" },
  //   "/404": { page: "/404" },
  // }),

  experimental: {
    esmExternals: false,
  },
};

module.exports = nextConfig;
