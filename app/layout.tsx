import React from 'react';
import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '../components/Nav'; // Navコンポーネントをインポート
import '../styles/globals.css';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <body style={{ paddingTop: '103px' }}>
        <div className="container">
          <Nav /> {/* Navコンポーネントをここにぶちこむ */}
        </div>

        <main>
          {children}
        </main>

        <footer className="footer">
          <div className="footer-logo">
            <Link href="/" style={{ display: 'inline-block' }}>
              <Image src="/mylogo.png" alt="YADOYADO Logo" width={160} height={80} />
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