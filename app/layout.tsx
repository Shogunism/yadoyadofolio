"use client";

import { useState } from "react";
import Head from "next/head";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme); // テーマ切り替え
  };

  return (
    <html lang="ja">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
    name="description"
    content="Minecraftで豊橋を再現したプロジェクトの公式ウェブサイト。"
        />
        <meta name="author" content="yadoyado" />
        <meta property="og:title" content="Minecraft豊橋再現" />
        <meta
          property="og:description"
          content="Minecraftで豊橋を再現したプロジェクトの公式ウェブサイト。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yadoyadoportfolio.vercel.app/" />
        <meta
          property="og:image"
          content="https://yadoyadoportfolio.vercel.app/thumbnail.png"
        />
        <meta property="og:site_name" content="Minecraft豊橋再現" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Minecraft豊橋再現" />
        <meta
          name="twitter:description"
          content="Minecraftで豊橋を再現したプロジェクトの公式ウェブサイト。"
        />
        <meta 
          name="twitter:image"
          content="https://yadoyadoportfolio.vercel.app/thumbnail.png"
        />
        <meta name="theme-color" content="#121212" />
        <link rel="icon" href="/favicon.ico" />
        <title>Minecraft豊橋再現</title>
</Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${
          isDarkTheme ? "darkTheme" : "lightTheme"
        }`}
      >
        <header className="header">
          <div className="header-images">
            <Image
              src="/header_dark.png"
              alt="Dark Header"
              fill
              style={{
                objectFit: "cover",
                opacity: isDarkTheme ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
              }}
              quality={100}
              priority
            />
            <Image
              src="/header_white.png"
              alt="White Header"
              fill
              style={{
                objectFit: "cover",
                opacity: isDarkTheme ? 0 : 1,
                transition: "opacity 0.5s ease-in-out",
              }}
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
                onClick={() => (isDarkTheme ? undefined : toggleTheme())}
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
                onClick={toggleTheme}
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
