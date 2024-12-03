import localFont from "next/font/local";
import "../styles/globals.css";

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
  title: "Minecraft豊橋再現",
  description: "Minecraftで豊橋を再現したプロジェクトの公式ウェブサイト。",
  charset: "UTF-8",
  viewport: "width=device-width, initial-scale=1.0",
  author: "yadoyado",
  themeColor: "#121212",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Minecraft豊橋再現",
    description: "Minecraftで豊橋を再現したプロジェクトの公式ウェブサイト。",
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
    siteName: "Minecraft豊橋再現",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minecraft豊橋再現",
    description: "Minecraftで豊橋を再現したプロジェクトの公式ウェブサイト。",
    images: ["https://yadoyadoportfolio.vercel.app/thumbnail.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
