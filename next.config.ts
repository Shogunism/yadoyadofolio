import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [""], // 外部画像を使用する場合はここにドメインを追加
  },
  /* その他のオプションをここに追加できます */
};

module.exports = {
  images: {
    domains: [], // ここにホスト名を追加
  },
};

export default nextConfig;