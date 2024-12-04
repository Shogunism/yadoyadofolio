import localFont from "next/font/local";
import "../styles/globals.css";
import Header from "../components/Header"; // Headerコンポーネントをインポート

// カスタムフォント設定
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

// メタデータ定義
export const metadata = {
  title: "やどやど - Minecraft豊橋再現",
  description: "Minecraftで豊橋を再現したプロジェクトの公式ウェブサイト",
  charset: "UTF-8",
  viewport: "width=device-width, initial-scale=1.0",
  author: "yadoyado",
  themeColor: "#ffffff", // デフォルトテーマの色をホワイトに設定
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "やどやど - Minecraft豊橋再現",
    description: "Minecraftで豊橋を再現したプロジェクトのウェブサイト",
    url: "https://yadoyadoportfolio.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://yadoyadoportfolio.vercel.app/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Minecraft豊橋再現 Thumbnail",
      },
    ],
    siteName: "やどやど - Minecraft豊橋再現",
  },
  twitter: {
    card: "summary_large_image",
    title: "やどやど - Minecraft豊橋再現",
    description: "Minecraftで豊橋を再現するプロジェクトのウェブサイト",
    images: ["https://yadoyadoportfolio.vercel.app/thumbnail.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // サーバーサイドでデフォルトのホワイトテーマを適用
  const themeClass = typeof window === "undefined" ? "light" : "";

  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} antialiased ${themeClass}`}
    >
      <head>
        <meta charSet={metadata.charset} />
        <meta name="viewport" content={metadata.viewport} />
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="theme-color" content={metadata.themeColor} />
        <link rel="icon" href={metadata.icons.icon} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height.toString()} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <title>{metadata.title}</title>
      </head>
      <body>
        <Header /> {/* ヘッダーを呼び出し */}
        <main>{children}</main> {/* メインコンテンツ */}
      </body>
    </html>
  );
}
