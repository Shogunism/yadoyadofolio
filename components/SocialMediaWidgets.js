import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialMediaWidgets = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // 1秒後に表示状態にする
    }, 1000);
    return () => clearTimeout(timer); 
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '48px',
        right: '20px',
        backgroundColor: 'rgba(18, 18, 18, 0.6)',
        padding: '10px 15px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        color: '#fff',
        opacity: isVisible ? 1 : 0, 
        transition: 'opacity 0.5s ease-in-out', 
      }}
    >
      <h3 style={{ margin: '0 0 10px' }}>↓これ俺</h3>
      <div style={{ marginBottom: '5px' }}>
        <a
          href="https://twitter.com/yadoyadodayo"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#1DA1F2',
            textDecoration: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '48px' }} />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/yadoyadodayo"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#E4405F',
            textDecoration: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '48px' }} />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaWidgets;
