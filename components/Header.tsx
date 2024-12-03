"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
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
              className={`theme-toggle-circle ${isDarkTheme ? "dark" : "light"}`}
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
  );
}
