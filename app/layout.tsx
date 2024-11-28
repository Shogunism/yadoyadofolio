import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";  // グローバルCSSをインポート

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Minecraft豊橋再現",  // ポップアップタイトルを変更
  description: "「やどやど」による建築再現のポートフォリオ/紹介サイト ",  // ポップアップ説明を変更
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">  {/* 日本語に変更 */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
