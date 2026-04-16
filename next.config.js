// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Deprecated `domains` replaced by `remotePatterns` to avoid build warning
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.microcms-assets.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    MICROCMS_SERVICE_DOMAIN: process.env.MICROCMS_SERVICE_DOMAIN,
    MICROCMS_API_KEY: process.env.MICROCMS_API_KEY,
  },
};

module.exports = nextConfig;
