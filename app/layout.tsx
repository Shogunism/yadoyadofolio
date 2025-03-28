import React from 'react';
import { ReactNode } from 'react';
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

        
        <footer className = "footer">
        <div className="footer-logo">
            <a href="/" style={{ display: 'inline-block' }}>
              <img src="/mylogo.png" alt="YADOYADO Logo" style={{ width: '160px', height: '80px' }} />
            </a>
          </div>

            <div className="footer-icons" style={{ marginTop: '20px' }}>
            <a href="https://x.com/yadoyadodayo" target="_blank" rel="noopener noreferrer">
              <img src="/icons/x-icon.png" alt="" style={{ width: '30px', height: '30px', margin: '0 10px' }} />
            </a>
            <a href="https://instagram.com/yadoyadodayo" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram-icon.png" alt="" style={{ width: '30px', height: '30px', margin: '0 10px' }} />
            </a>
            <a href="https://youtube.com/@yadoyadodayo" target="_blank" rel="noopener noreferrer">
              <img src="/icons/youtube-icon.png" alt="" style={{ width: '30px', height: '30px', margin: '0 10px' }} />
            </a>
          </div>

          
          <div style = {{marginTop: '10px' }}>
          <a href="/privacy" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>プライバシーポリシー</a>
            <a href="/terms" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>利用規約</a>
            <a href="/contact" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>お問い合わせ</a>
            <a href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:61672c67-9693-4c34-a34a-a22770cb0f9f" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>豊橋再現原則</a>
          </div>
          <p>&copy; {new Date().getFullYear()} YADOYADO. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;