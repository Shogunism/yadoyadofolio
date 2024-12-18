
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
        "駅前大通の新しいシンボルの一つです。低層階の煌びやかな照明が街を年中ライトアップさせ、人々を寄せ付けます。2021年11月に開業したこの複合施設は、レストラン、ショップ、図書館、スタジオ、住居などが集約されています。",
      engine: "Blender cycles",
      real_location: "豊橋駅前大通２丁目",
    },
    {
      src: "/images/image2.png",
      title: "豊橋駅前大通",
      description:
        "豊橋駅前大通は昭和29年の戦後復興により開発された五十メートル道路です。かつて広小路通り(駅前大通北側に隣接)を走っていた路面電車は現在全てこの通りに集約されています。彼方に広がる豊橋都市圏の中でも、とりわけ際立つ中心市街地の一つです。",
      engine: "Blender cycles ",
      real_location: "(豊橋駅前)",
    },
    {
      src: "/images/image3.png",
      title: "emCAMPUS豊橋/まちなか図書館(正面)",
      description:
        "豊橋駅ペデストリアンデッキからもよく見える一際大きな複合施設です。これは正面(駅前大通側)からの姿です。ここにはかつてEAST側は名豊ビル、WESTは開発ビル等があったところに建っています。",
      engine: "Blender cycles",
      real_location: "豊橋駅前大通２丁目",
    },

    {
      src: "/images/image4.jpeg",
      title: "豊橋駅前大通交差点",
      description:
        "豊橋駅前大通の「豊橋駅前大通」交差点です。豊橋市内電車線の駅前大通停留所があります。",
      engine: "Blender cycles",
      real_location: "豊橋駅前大通",
    },

    {
      src: "/images/image5.jpeg",
      title: "ほのくに百貨店(解体済)",
      description:
        "1974年開業(2010年まで豊橋丸栄でした)。2020年3月まで運営されていた、現在東三河最後の百貨店となっています。",
      engine: "Blender cycles",
      real_location: "豊橋駅前大通２丁目",
    },

    {
      src: "/images/image6.jpeg",
      title: "ココラフロント/サーラタワー",
      description:
        "2008年開業。豊橋駅西口すぐにある特徴的なビルです。サーラグループ本社、ホテル「アークリッシュ豊橋」、商業施設、ラジオ局スタジオ等が入っています。建造前には西武百貨店がありました。",
      engine: "Blender cycles",
      real_location: "豊橋駅前大通1丁目",
    },

    {
      src: "/images/image7.jpeg",
      title: "ロワジールホテル豊橋(豊橋ホリデータワー)",
      description:
        "複合商業施設ホリデイ・スクエア内にあるホテルです。ビルの高さは120m(おそらく尖塔含め)で、三河地域で最も高いビルです。ホテルの２９-３０階にあるバンケットからは広大な眺望が望めます。",
      engine: "Minecraft shader (chocapic 13 ultra)",
      real_location: "豊橋市藤沢町",
    },

    {
      src: "/images/image8.jpeg",
      title: "駅前大通と路面電車",
      description:
        "豊橋市内電車線の3200形が駅前大通を通る図です。",
      engine: "Blender cycles",
      real_location: "豊橋市駅前大通",
    },

    {
      src: "/images/image9.jpeg",
      title: "ケーブルテレビ会社",
      description:
        "豊橋のケーブルテレビ会社の建物です。(出演する機会を頂けた時に作りました。)",
        engine: "Minecraft shader (chocapic 13 ultra)",
    },
  ];

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto"; // スクロールを再開
  };

  return (
    <div>
      <main className={styles.mainContent}>
        <section className={styles.gallery}>
          {images.map((image, index) => (
            <div
              key={index}
              className={styles.galleryItem}
              onClick={() => {
                setSelectedImage(image);
                document.body.style.overflow = "hidden"; // スクロールを防止
              }}
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
            <div className={styles.modalImageContainer}>
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                width={600}
                height={400}
                style={{ objectFit: "contain" }}
              />
            </div>
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
