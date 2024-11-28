"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "../styles/page.module.css";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    description: string;
  } | null>(null);

  const images = [
    { src: "/images/image1.png", title: "Image 1", description: "Description for Image 1" },
    { src: "/images/image2.png", title: "Image 2", description: "Description for Image 2" },
    // 必要に応じて画像を追加
  ];

  const openImage = (image: { src: string; title: string; description: string }) =>
    setSelectedImage(image);

  const closeImage = () => setSelectedImage(null);

  return (
    <div>
      {/* ヘッダー */}
      <header className={styles.header}>
        <h1>Minecraft豊橋再現</h1>
        <p>created by : yadoyado</p>
      </header>

      {/* メインコンテンツ */}
      <main className={styles.mainContent}>
        <section className={styles.gallery}>
          {images.map((image, index) => (
            <div
              key={index}
              className={styles.galleryItem}
              onClick={() => openImage(image)}
            >
              <Image src={image.src} alt={image.title} width={200} height={200} />
            </div>
          ))}
        </section>
      </main>

      {/* モーダル */}
      {selectedImage && (
        <div className={styles.modal}>
          <div className={styles.modalBackdrop} onClick={closeImage}></div>
          <div className={styles.modalContent}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              width={600}
              height={400}
              style={{ objectFit: "contain" }}
            />
            <div className={styles.modalCaption}>
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
            <button className={styles.closeButton} onClick={closeImage}>
              戻る
            </button>
          </div>
        </div>
      )}

      {/* フッター */}
      <footer className={styles.footer}>
        <p>Follow me:</p>
        <div>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.twitter}>
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.instagram}>
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}
