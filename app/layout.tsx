"use client";

import { useState } from "react";
import localFont from "next/font/local";
import "../styles/globals.css"; // グローバルCSS

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false); // テーマ状態を管理

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme); // トグルでテーマを切り替え
  };

  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${
          isDarkTheme ? "darkTheme" : "lightTheme"
        }`}
      >
        <header
          className="header"
          style={{
            backgroundImage: isDarkTheme
              ? "url('/header_dark.png')" // ダークテーマの背景画像
              : "url('/header_white.png')", // ホワイトテーマの背景画像
          }}
        >
          <h1 className="Header_Title">Minecraft豊橋再現</h1>
          <p className="Header_creator">created by : yadoyado</p>

          {/* おしゃれなトグルスイッチ */}
          <div className="theme-switcher">
            <span className="theme-icon sun">🌞</span>
            <div className="theme-toggle" onClick={toggleTheme}>
              <div
                className={`theme-toggle-circle ${
                  isDarkTheme ? "dark" : "light"
                }`}
              ></div>
            </div>
            <span className="theme-icon moon">🌙</span>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
