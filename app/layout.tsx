"use client";

import { useState } from "react";
import Head from "next/head"; // 修正点: 正しくインポート
import localFont from "next/font/local";
import Image from "next/image";
import "../styles/globals.css";
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
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
    document.body.style.overflow = isDarkTheme ? "auto" : "hidden"; // 修正: スクロール制御
  };

  return (
    <html lang="ja">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Minecraft豊橋再現</title>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${
          isDarkTheme ? "darkTheme" : "lightTheme"
        }`}
      >
        <header className="header">
          <div className={`header-image ${isDarkTheme ? "dark" : "light"}`}>
            <Image
              src={isDarkTheme ? "/header_dark.png" : "/header_white.png"}
              alt="Header Background"
              layout="fill" // 修正: レイアウト設定
              style={{ objectFit: "cover", willChange: "opacity" }}
              quality={100}
              priority
            />
          </div>
          <div className="header-content">
            <h1 className="Header_Title">Minecraft豊橋再現</h1>
            <p className="Header_creator">created by : yadoyado</p>
            <div className="theme-switcher">
              <Image
                src="/theme/moon.svg"
                alt="Moon Icon"
                className={`theme-icon ${isDarkTheme ? "active" : ""}`}
                onClick={() => isDarkTheme ? undefined : toggleTheme()}
                width={24}
                height={24}
              />
              <div className="theme-toggle" onClick={toggleTheme}>
                <div
                  className={`theme-toggle-circle ${
                    isDarkTheme ? "dark" : "light"
                  }`}
                ></div>
              </div>
              <Image
                src="/theme/sun.svg"
                alt="Sun Icon"
                className={`theme-icon ${!isDarkTheme ? "active" : ""}`}
                onClick={() => !isDarkTheme ? undefined : toggleTheme()}
                width={24}
                height={24}
              />
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
