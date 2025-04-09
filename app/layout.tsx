import React from 'react';
import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '../components/Nav'; // Navコンポーネントをインポート
import '../styles/globals.css';

// メタデータ定義
export const metadata = {
  title: "やどやど - Minecraft現代建築",
  description: "Minecraft,3DCG,Movie Editを駆使したプロジェクトの遂行.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "やどやど - Minecraft現代建築",
    description: "Minecraft,3DCG,Movie Editを駆使したプロジェクトの遂行.",
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
    siteName: "やどやど - Minecraft現代建築",
  },
  twitter: {
    card: "summary_large_image",
    title: "やどやど - Minecraft現代建築",
    description: "Minecraft,3DCG,Movie Editを駆使したプロジェクトの遂行.",
    images: ["https://yadoyadoportfolio.vercel.app/thumbnail.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};



const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>やどやど - Minecraft現代建築</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content={viewport.width} />
        <meta name="description" content={metadata.description} />
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
      <body style={{ paddingTop: '103px' }}>
        <div className="container">
          <Nav /> {/* Navコンポーネントをここにぶちこむ */}
        </div>

        <main>
          {children}
        </main>

        <footer className="footer">
        <div style={{ paddingTop: '30px' }}></div>
          <div className="footer-logo">
            <Link href="/" style={{ display: 'inline-block' }}>
              <Image src="/mylogo.png" alt="YADOYADO Logo" width={128} height={53} />
            </Link>
          </div>

          <div className="footer-icons" style={{ marginTop: '20px' }}>
            <Link href="https://x.com/yadoyadodayo" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/x-icon.png" alt="X Icon" width={30} height={30} />
            </Link>
            <Link href="https://instagram.com/yadoyadodayo" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/instagram-icon.png" alt="Instagram Icon" width={30} height={30} />
            </Link>
            <Link href="https://youtube.com/@yadoyadodayo" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/youtube-icon.png" alt="YouTube Icon" width={30} height={30} />
            </Link>
          </div>

          <div style={{ marginTop: '10px' }}>
            <Link href="/privacy" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>プライバシーポリシー</Link>
            <Link href="/terms" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>利用規約</Link>
            <Link href="/contact" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>お問い合わせ</Link>
            <Link href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:61672c67-9693-4c34-a34a-a22770cb0f9f" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>豊橋再現原則</Link>
          </div>
          
          <p>&copy; {new Date().getFullYear()} YADOYADO. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;