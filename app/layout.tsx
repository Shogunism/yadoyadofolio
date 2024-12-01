"use client";

import { useState } from "react";
import localFont from "next/font/local";
import "../styles/globals.css"; // グローバルCSS
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import Image from 'next/image'; // Imageコンポーネントをインポート

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
        <header className="header">
          {/* ダークテーマまたはホワイトテーマに応じて背景画像を切り替え */}
          <Image
            src={isDarkTheme ? "/header_dark.png" : "/header_white.png"} 
            alt="Header Image"
            layout="fill" // 背景画像のため、親要素に合わせてサイズを調整
            objectFit="cover" // 画像が要素に合わせてトリミングされるように
            quality={100} // 高品質な画像表示
            priority // この画像が優先的に読み込まれる
          />
          <div className="header-content">
            <h1 className="Header_Title">Minecraft豊橋再現</h1>
            <p className="Header_creator">created by : yadoyado</p>

            {/* テーマ切り替えスイッチ */}
            <div className="theme-switcher">
              <Image
                src="/theme/moon.svg"
                alt="Moon"
                className={`theme-icon ${isDarkTheme ? "active" : ""}`}
                onClick={() => isDarkTheme && toggleTheme()} // ホワイトテーマではクリック不可
                style={{
                  cursor: isDarkTheme ? "not-allowed" : "pointer",
                  opacity: isDarkTheme ? 1 : 0.5, // 非アクティブ時の透明度
                }}
                width={24} // アイコンの幅を指定
                height={24} // アイコンの高さを指定
              />
              <div className="theme-toggle" onClick={toggleTheme}>
                <div
                  className={`theme-toggle-circle ${
                    isDarkTheme ? "light" : "dark"
                  }`}
                ></div>
              </div>
              <Image
                src="/theme/sun.svg"
                alt="Sun"
                className={`theme-icon ${!isDarkTheme ? "active" : ""}`}
                onClick={() => !isDarkTheme && toggleTheme()} // ダークテーマではクリック不可
                style={{
                  cursor: !isDarkTheme ? "not-allowed" : "pointer",
                  opacity: isDarkTheme ? 0.5 : 1,
                }}
                width={24} // アイコンの幅を指定
                height={24} // アイコンの高さを指定
              />
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
