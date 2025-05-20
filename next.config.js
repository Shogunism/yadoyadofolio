/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.microcms-assets.io'], // ←これを追加
  },
};

module.exports = {
  ...nextConfig,
  env: {
    SERVICE_DOMAIN: process.env.MICROSIMS_SERVICE_DOMAIN,
    API_KEY: process.env.MICROSIMS_API_KEY,
  },
};