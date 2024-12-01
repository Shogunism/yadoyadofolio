"use client";

import { useState } from "react";
import localFont from "next/font/local";
import "../styles/globals.css"; // グローバルCSS
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import Image from "next/image";
import Head from "next/head";

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
  };

  return (
    <html lang="ja">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${
          isDarkTheme ? "darkTheme" : "lightTheme"
        }`}
      >
        <header className="header">
          {/* 背景画像 */}
          <div className={`header-image ${isDarkTheme ? "dark" : "light"}`}>
            <Image
              src={isDarkTheme ? "/header_dark.png" : "/header_white.png"}
              alt="Header Background"
              fill
              style={{ objectFit: "cover", willChange: "opacity" }}
              quality={100}
              priority
            />
          </div>
          <div className="header-content">
            <h1 className="Header_Title">Minecraft豊橋再現</h1>
            <p className="Header_creator">created by : yadoyado</p>

            {/* テーマ切り替えスイッチ */}
            <div className="theme-switcher">
              <Image
                src="/theme/moon.svg"
                alt="Moon Icon"
                className={`theme-icon ${isDarkTheme ? "active" : ""}`}
                onClick={() => isDarkTheme ? undefined : toggleTheme()}
                style={{
                  cursor: isDarkTheme ? "not-allowed" : "pointer",
                  opacity: isDarkTheme ? 1 : 0.5,
                }}
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
                style={{
                  cursor: !isDarkTheme ? "not-allowed" : "pointer",
                  opacity: isDarkTheme ? 0.5 : 1,
                }}
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
