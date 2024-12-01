"use client";


import { useState } from "react";
import localFont from "next/font/local";
import "../styles/globals.css"; // グローバルCSS
import "@fortawesome/fontawesome-svg-core/styles.css"; 


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
  const [isDarkTheme, setIsDarkTheme] = useState(true); // デフォルトでダークテーマ

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

          {/* テーマ切り替えスイッチ */}
          <div className="theme-switcher">
            <img
              src="/theme/moon.svg"
              alt="Moon"
              className={`theme-icon ${isDarkTheme ? "active" : ""}`}
              onClick={() => isDarkTheme && toggleTheme()} // ホワイトテーマではクリック不可
              style={{
                cursor: isDarkTheme ? "not-allowed" : "pointer",
                opacity: isDarkTheme ? 1 : 0.5, // 非アクティブ時の透明度
              }}
            />
            <div className="theme-toggle" onClick={toggleTheme}>
              <div
                className={`theme-toggle-circle ${
                  isDarkTheme ? "light" : "dark"
                }`}
              ></div>
            </div>
            <img
              src="/theme/sun.svg"
              alt="Sun"
              className={`theme-icon ${!isDarkTheme ? "active" : ""}`}
              onClick={() => !isDarkTheme && toggleTheme()} // ダークテーマではクリック不可
              style={{
                cursor: !isDarkTheme ? "not-allowed" : "pointer",
                opacity: isDarkTheme ? 0.5 : 1,
              }}
            />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
