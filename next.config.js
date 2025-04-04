/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // 必要に応じて有効化
  },
  images: {
    domains: ["https://yadoyadoportfolio.vercel.app/"], // 画像のホスト名を許可
  },
};

module.exports = nextConfig;
