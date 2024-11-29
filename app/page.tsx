"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "../styles/page.module.css";
import SocialMediaWidgets from "../components/SocialMediaWidgets";

type ImageData = {
  src: string;
  title: string;
  description: string;
  engine?: string;
  real_location?: string;
};

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const images: ImageData[] = [
    {
      src: "/images/image1.png",
      title: "emCAMPUS豊橋/まちなか図書館",
      description:
        "駅前大通の新しいシンボルの一つです。低層階の煌びやかな照明が街を年中ライトアップさせ、人々を寄せ付けます。",
      engine: "Blender",
      real_location: "豊橋駅前",
    },
    {
      src: "/images/image2.png",
      title: "Image 2",
      description: "Description for Image 2",
    },
    {
      src: "/images/image3.png",
      title: "Image 3",
      description: "Description for Image 3",
    },
  ];

  const closeImage = () => setSelectedImage(null);

  return (
    <div>
      <main className={styles.mainContent}>
        <section className={styles.gallery}>
          {images.map((image, index) => (
            <div
              key={index}
              className={styles.galleryItem}
              onClick={() => setSelectedImage(image)}
            >
              <Image src={image.src} alt={image.title} width={300} height={300} />
            </div>
          ))}
        </section>
      </main>

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
              {selectedImage.engine && <p><strong>Engine:</strong> {selectedImage.engine}</p>}
              {selectedImage.real_location && (
                <p><strong>Real Location:</strong> {selectedImage.real_location}</p>
              )}
            </div>
            <button className={styles.closeButton} onClick={closeImage}>
              戻る
            </button>
          </div>
        </div>
      )}

      <SocialMediaWidgets />

      <footer className={styles.footer}>
        © 2024 Yadoyado. All Rights Reserved.
      </footer>
    </div>
  );
}
