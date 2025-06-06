"use client";
import Link from 'next/link';
import React, { useRef } from 'react';
import '../styles/globals.css'; // グローバルCSSをインポート

const HomePage = () => {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  const handleMouseLeave = (videoRef: React.RefObject<HTMLVideoElement>) => {
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
    }
  };

  const handleMouseEnter = (videoRef: React.RefObject<HTMLVideoElement>) => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play().catch((error) => {
        console.error('動画の再生に失敗しました:', error);
      });
    }
  };

  const handleVideoEnd = (videoRef: React.RefObject<HTMLVideoElement>) => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '0px', position: 'relative' }}>
      <nav style={{ position: 'fixed', top: '0', left: '0', width: '100%', zIndex: '10', backgroundColor: '#333', color: '#fff', padding: '10px' }}>
        <ul style={{ listStyle: 'none', margin: '0', padding: '0', display: 'flex', justifyContent: 'space-around' }}>
          <li><a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
          <li><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
          <li><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
        </ul>
      </nav>
      <header className="header">
        <video ref={videoRef1} autoPlay loop muted className="header-video">
          <source src="/web_movie_clop.mp4" type="video/mp4" />
          お使いのブラウザは動画タグに対応していません。悲しいですね。
        </video>
        <div className="header-content">
          <h1 className="nikoleta-font header-string"><span>YADOYADO</span></h1>
          <p className="subtitle">Minecraft / 3DCG / Movie Edit</p>
        </div>
      </header>

      <div style={{ textAlign: 'center', paddingTop: '1vw', zIndex: '2', position: 'relative', backgroundColor: '#2c2c2c', color: '#ffffff' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <video
            ref={videoRef1}
            style={{ width: '80%', height: 'auto' }}
            onMouseEnter={() => handleMouseEnter(videoRef1)}
            onMouseLeave={() => handleMouseLeave(videoRef1)}
            onEnded={() => handleVideoEnd(videoRef1)}
            muted
          >
            <source src="/mc_wall.mp4" type="video/mp4" />
            お使いのブラウザは動画タグに対応していません。悲しいですね。
          </video>
          <Link href="/profile">
          <h1 className="roboto-font work-string" style={{ position: 'absolute', top: '53%', left: '50%', transform: 'translate(-50%, -50%)', whiteSpace: 'nowrap', fontSize: '3vw' }}>
          <div className="box1">
            About me
            </div>
            </h1>
          </Link>
        </div>
      </div>

      <div style={{ textAlign: 'center', paddingTop: '30px', zIndex: '2', position: 'relative', backgroundColor: '#2c2c2c', color: '#ffffff' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <video
            ref={videoRef2}
            style={{ width: '80%', height: 'auto' }}
            onMouseEnter={() => handleMouseEnter(videoRef2)}
            onMouseLeave={() => handleMouseLeave(videoRef2)}
            onEnded={() => handleVideoEnd(videoRef2)}
            muted 
          >
            <source src="/mc_wall_2.mp4" type="video/mp4" />
            お使いのブラウザは動画タグに対応していません。悲しいですね。
          </video>
          <Link href="/gallery">
          <h1 className="roboto-font work-string" style={{ position: 'absolute', top: '53%', left: '50%', transform: 'translate(-50%, -50%)', whiteSpace: 'nowrap', fontSize: '3vw' }}>
            <div className = "box1">
              Gallery
            </div>              
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;