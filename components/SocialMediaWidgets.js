const SocialMediaWidgets = () => (
  <div style={{
    position: 'fixed',   /* 画面に固定する */
    bottom: '20px',      /* 下からの距離 */
    right: '20px',       /* 右からの距離 */
    backgroundColor: 'rgba(18, 18, 18, 0.8)', /* 背景色（50%透過度） */
    padding: '10px 15px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', /* 影を追加 */
    textAlign: 'right',  /* テキストを右寄せ */
    color: '#fff',       /* テキストの色 */
    bottom: "80px", // フッターから少し上に移動
  }}>
    <h3 style={{ margin: '0 0 10px' }}>Follow Me</h3>
    <div style={{ marginBottom: '5px' }}>
      <a 
        href="https://twitter.com/Yadoyadodayo" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ color: '#1DA1F2', textDecoration: 'none' }}
      >
        Twitter
      </a>
    </div>
    <div>
      <a 
        href="https://www.instagram.com/yadoyadodayo/" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ color: '#E4405F', textDecoration: 'none' }}
      >
        Instagram
      </a>
    </div>
  </div>
);

export default SocialMediaWidgets;
