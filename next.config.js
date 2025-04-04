/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost", // 開発環境用
        port: "3000", // ローカルサーバーのポート
        pathname: "/**", // 任意のパスを許可
      },
      {
        protocol: "https",
        hostname: "yadoyadoportfolio.vercel.app", // 本番環境用
        pathname: "/**", // 任意のパスを許可
      },
    ],
  },
};

module.exports = nextConfig;
