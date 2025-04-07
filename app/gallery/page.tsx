"use client";

import React, { useEffect } from 'react';
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/page.module.css";

type ImageData = {
  src: string;

  title: string;
  description: string;
  src2: string;
  src3: string;
  description2: string;
  engine?: string;
  real_location?: string;
};

type FilmData = {
  movie: string; // YouTubeの埋め込みリンク
  title: string;
  description: string;
  thumbnail: string; // サムネイル画像のURL
};





const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [activeTab, setActiveTab] = useState<"photos" | "films">("photos"); // 現在のタブを管理
  const [selectedFilm, setSelectedFilm] = useState<FilmData | null>(null);
  
  useEffect(() => {
      if (selectedFilm) {
        document.body.style.overflow = "hidden"; // モーダル表示中はスクロールを防止
      } else {
        document.body.style.overflow = "auto"; // モーダルが閉じられたらスクロールを再開
      }
  
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [selectedFilm]);
  
    const closeFilmModal = () => {
      setSelectedFilm(null);
    };

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden"; // モーダル表示中はスクロールを防止
    } else {
      document.body.style.overflow = "auto"; // モーダルが閉じられたらスクロールを再開
    }

    // クリーンアップ処理
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  const closeImage = () => {
    setSelectedImage(null);
  };

  const films: FilmData[] = [
    {
      movie: "https://www.youtube.com/embed/W4YDVLkNvrM", // サンプルYouTubeリンク
      thumbnail: "/images/thumbnail_1.jpeg", // サムネイル画像
      title: "【マインクラフト x Blender】巨大駅 」ひばな駅」プロモーション映像",
      description: "使用楽曲「Sleeping Tiger」は、エイジアンな楽器とストリングスの融合が魅力的で、「東洋の大都会」と言う随分漠然としたイメージをお伝えするにはピッタリだと思って購入・使用しました。 音楽も、まるで虎が目覚めて歩き始めるようで、夜明けの表現として適用させました。  ",
    },
    {
      movie: "https://www.youtube.com/embed/UDUS0DJQHlQ", // サンプルYouTubeリンク
      thumbnail: "/images/thumbnail_2.png", // サムネイル画像
      title: "【マイクラxBlender】重力レンズで歪むブラックホール",
      description: "Minecraftでブラックホールの降着円盤(外側)と光子球(内側)を作成し、Blenderで重力レンズを作りました。これによりブラックホールの強大な重力を近似的に表現し、直感的には理解しがたいものを視覚的に表現することに成功しました。",
    },
    {
      movie: "https://www.youtube.com/embed/WmXa0o_X8n0", // サンプルYouTubeリンク
      thumbnail: "/images/thumbnail_3.png", // サムネイル画像
      title: "【Minecrarft豊橋再現】紹介映像",
      description: "マインクラフト豊橋再現の基本的な紹介映像です。Blenderでのレンダリング表現をちょうど始めた頃だったので、レンダリングでの映像はオオトリを飾っています。",
    },

    {
      movie: "https://www.youtube.com/embed/bILsSf3wcAY", // サンプルYouTubeリンク
      thumbnail: "/images/thumbnail_4.png", // サムネイル画像
      title: "【Minecrarftコマ撮り】Minecraftで作った高速で走る新幹線",
      description: "マインクラフト内でコマ撮り撮影をし、高速で走る新幹線を表現しました。なお、奥の山、空というふうにレイヤー分けをすることで、違和感のない自然な表現を試みています。",
    },

    {
      movie: "https://www.youtube.com/embed/1Mfu2NyFl-0", // サンプルYouTubeリンク
      thumbnail: "/images/thumbnail_5.png", // サムネイル画像
      title: "【Minecraft x 好きな建材発表ドラゴン】 / 重音テト",
      description: "流行っていたので、思いつきで作った動画です。テロップ以外は全てマイクラ上で定点撮影による直接採取した素材です。好きな建材発表(エンダー)ドラゴン。",
    },
  ];



  const images: ImageData[] = [
    {
      src: "/images/image1.png",
      src2: "/images/image1-1.png",
      src3: "/images/image1-2.png",
      description:
        "駅前大通の新しいシンボルの一つです。低層階の煌びやかな照明が街を年中ライトアップさせ、人々を寄せ付けます。2021年11月に開業したこの複合施設は、レストラン、ショップ、図書館、スタジオ、住居などが集約されています。",
      title: "emCAMPUS豊橋/まちなか図書館",
      description2:
        "2017年までは名豊ビルという複合商業施設があり、ホテル、商業施設、公園、さらにバスターミナル(2007年迄、以降は駐車場)などがあり、豊橋駅前大通に活気をもたらす拠点として大変活躍していました。当時から内容物が大きく変わりましたが、当時を引き継ぐように老若男女の憩いの場をもたらしています。",
      engine: "Blender cycles",
      real_location: "豊橋駅前大通２丁目",
    },
    {
      src: "/images/image2.png",
      src2: "/images/image2-2.png",
      src3: "/images/image2-3.png",
      description2:
        "豊橋駅を降り、東口のペデストリアンデッキから見える、豊橋の顔となる場所です。",
      title: "豊橋駅前大通",
      description:
        "豊橋駅前大通は昭和29年の戦後復興により開発された五十メートル道路です。かつて広小路通り(駅前大通北側に隣接)を走っていた路面電車は現在全てこの通りに集約されています。彼方に広がる豊橋都市圏の中でも、とりわけ際立つ中心市街地の一つです。",
      engine: "Blender cycles ",
      real_location: "(豊橋駅前)",
    },

    {
      src: "/images/image3.png",
      src2: "/images/image3-2.png",
      src3: "/images/image3-3.png",
      description:
        "駅前大通の新しいシンボルの一つです。低層階の煌びやかな照明が街を年中ライトアップさせ、人々を寄せ付けます。2021年11月に開業したこの複合施設は、レストラン、ショップ、図書館、スタジオ、住居などが集約されています。",
      title: "emCAMPUS豊橋/まちなか図書館",
      description2:
        "2017年までは名豊ビルという複合商業施設があり、ホテル、商業施設、公園、さらにバスターミナル(2007年迄、以降は駐車場)などがあり、豊橋駅前大通に活気をもたらす拠点として大変活躍していました。当時から内容物が大きく変わりましたが、当時を引き継ぐように老若男女の憩いの場をもたらしています。",
      engine: "Blender cycles",
      real_location: "豊橋駅前大通２丁目",
    },
    {
      src: "/images/image4.jpeg",
      src2: "/images/null.png",
      src3: "/images/null.png",
      description2:
        "",
      title: "豊橋駅前大通交差点",
      description:
        "豊橋駅前大通の「豊橋駅前大通」交差点です。豊橋市内電車線の駅前大通停留所があります。",
      engine: "Blender cycles",
      real_location: "豊橋駅前大通",
    },

    {
      src: "/images/image5-2.jpeg",
      src2: "/images/image5.png",
      src3: "/images/image5-3.png",
      description2:
        "駅前大通の新しいシンボルの一つです。低層階の煌びやかな照明が街を年中ライトアップさせ、人々を寄せ付けます。2021年11月に開業したこの複合施設は、レストラン、ショップ、図書館、スタジオ、住居などが集約されています。",
      title: "ほのくに百貨店(解体済)",
      description:
        "1974年開業(2010年まで豊橋丸栄でした)。2020年3月まで運営されていた、現在東三河最後の百貨店となっています。",
      engine: "Blender cycles",
      real_location: "豊橋駅前大通２丁目",
    },

    {
      src: "/images/image6.jpeg",
      src2: "/images/null.png",
      src3: "/images/null.png",
      description2:
        "",
      title: "ココラフロント/サーラタワー",
      description:
        "2008年開業。豊橋駅西口すぐにある特徴的なビルです。サーラグループ本社、豊橋随一のシティホテル「アークリッシュ豊橋」、商業施設、ラジオ局スタジオ等が入っています。建造前には西武百貨店がありました。",
      engine: "Blender cycles",
      real_location: "豊橋駅前大通1丁目",
    },

    {
      src: "/images/image7.jpeg",
      src2: "/images/image7-2.jpeg",
      src3: "/images/null.png",
      description2:
        "比較(撮影日:2024年8月 ©︎2025 Google)",
      title: "ロワジールホテル豊橋(豊橋ホリデータワー)",
      description:
        "複合商業施設ホリデイ・スクエア内にあるホテルです。ビルの高さは120m(おそらく尖塔含め)で、三河地域で最も高いビルです。ホテルの２９-３０階にあるバンケットからは広大な眺望が望めます。ロワジールホテルではコンベンションイベントが定期的に開催されていたりします。豊橋のシンボルとして、文化の集いの場として街を照らしています。",
      engine: "Minecraft shader (chocapic 13 ultra)",
      real_location: "豊橋市藤沢町",
    },

    {
      src: "/images/image8.jpeg",
      src2: "/images/image8-2.jpeg",
      src3: "/images/null.png",
      description2:
        "ギャグ。",
      title: "駅前大通と路面電車",
      description:
        "豊橋市内電車線の3200形が駅前大通を通る図です。",
      engine: "Blender cycles",
      real_location: "豊橋市駅前大通",
    },

    {
      src: "/images/image9.jpeg",
      src2: "/images/null.png",
      src3: "/images/null.png",
      description2:
        "",
      title: "ケーブルテレビ会社",
      description:
        "豊橋のケーブルテレビ会社の建物です。(出演する機会を頂けた時に作りました。)",
      engine: "Minecraft shader (chocapic 13 ultra)",
      real_location: "豊橋市小畷町",
    },

    {
      src: "/images/image10.jpeg",
      src2: "/images/null.png",
      src3: "/images/null.png",
      description2:
        "",
      title: "豊橋市役所 西蒲/東館",
      description:
        "西蒲８階、東館１３階建ての役所です。基本的な市役所機能に加え、最高層階には無料開放されている常設/特設展示、市街や近辺の地域を一望できる展望施設、イタリアンレストランなどがあり、市街の人も気軽に寄って楽しめる施設です。",
      engine: "Minecraft shader (chocapic 13 ultra)",
      real_location: "豊橋市小畷町",
    },


  ];

  const images2: ImageData[] = [
    {
      src: "/images/2image1.jpeg",
      src2: "/images/2image1-2.jpeg",
      src3: "/images/null.png",
      description:
        "名古屋駅に直結する超高層ビル群です。1999年のJRセントラルタワーズ(245m)(画面左〜中央の白い建造物)の開業を皮切りに2006年のミッドランドスクエア(247m)、2012年のJRゲートタワー(220m)、2015年のJPタワー名古屋(196m)、2代目大名古屋ビルヂングへの建て替え(175m)等により、名古屋駅及びその周辺は国内最大級のビル群を形成しました。",
      title: "名古屋駅(セントラルタワーズ/高島屋ゲートタワー/JPタワー)",
      description2:
        "JRセントラルタワーズはその床面積を根拠に「世界一大きな駅ビル」としてギネス世界記録に認定されたほどであり、地方都市の顔として旅客を迎え入れます。",
      engine: "Blender cycles",
      real_location: "名古屋市中野区名駅",
    },

    {
      src: "/images/2image2.jpeg",
      src2: "/images/2image2-2.jpeg",
      src3: "/images/null.png",
      description:
        "西日本で最も高い構造物で、2024年まで日本で最も高い建築物でした。日本初のスーパートール(高さ300m以上の超高層建築物)で、近鉄の大阪阿部野橋駅に直結する駅ビルとして、百貨店、ホテル、展望台、オフィスなどが入る複合商業施設です。",
      title: "あべのハルカス",
      description2:
        "台風/耐震工学に基づいたメガトラス構造はそのファサードを特徴的なものにしています。",
      engine: "Blender cycles",
      real_location: "大阪市阿倍野区阿倍野筋１丁目",
    },

    {
      src: "/images/2image3.jpeg",
      src2: "/images/2image3-2.jpeg",
      src3: "/images/2image3-3.jpeg",
      description:
        "2023年に開業した266mの多用途複合の超高層タワーです。東京メトロ「虎ノ門ヒルズ駅」、商業施設、ホテル、オフィス、複合施設(TOKYO NODE)などが集積しています。地下と地上、高層階、他のビルなどを、アトリウムやデッキがシームレスに結びつけ、高い回遊性があります。",
      title: "虎ノ門ヒルズステーションタワー",
      description2:
        "ビルの前代未聞の独特なシェイプは圧迫感というより寧ろ迫力を与え、各所に散りばめられた視覚効果の数々は、常にユーザーに新たな刺激や体験を与えます。",
      engine: "Blender cycles",
      real_location: "港区虎ノ門２丁目",
    },

    {
      src: "/images/2image4.jpeg",
      src2: "/images/null.png",
      src3: "/images/null.png",
      description:
        "2028年頃に竣工予定の高さ385mの日本一高い高層ビルです。東京駅の東側すぐにて建造中です。",
      title: "Torch Tower",
      description2:
        "低層部は緑化された立体庭園が広がります。Torch(灯火)をモチーフにしたビルのデザインとなり、東京駅周辺の煌びやかな夜景にアクセントを添えることでしょう。",
      engine: "Blender cycles",
      real_location: "千代田区大手町",
    },

    {
      src: "/images/2image5.jpeg",
      src2: "/images/null.png",
      src3: "/images/null.png",
      description:
        "代々木駅の東にある時計台と赤白のデリック、アンテナが特徴的な超高層ビルです。オフィス、機械室は下半分にあり、上半分はアンテナなどを設置する尖塔になっています。",
      title: "NTTドコモ代々木ビル",
      description2:
        "30mを超えるデリックにより構造全体の高さは270mを超え、新宿を含めても最も高い構造物です。",
      engine: "Chocapic 13 ultra",
      real_location: "渋谷区千駄ヶ谷5丁目",
    },


  ];

  const images3: ImageData[] = [
    {
      src: "/images/3image1.jpeg",
      src2: "/images/null.png",
      src3: "/images/null.png",
      description:
        "大都会の中心駅をテーマに、自分自身でデザインした駅舎です。2010年代の潤沢なリソースのもと建造された駅ビルをイメージし、周辺施設にシームレスに接続する回遊性の高いペデストリアンデッキなどを表現しました。",
      title: "ひばな駅 1:駅舎",
      description2:
        "ひばな駅は都心の拠点として、観光客向けの大規模ホテル、観光客を迎え入れる庭園・アトリウム、一通りの商業施設、オフィスなどを詰め込んでいますが、周辺観光地へのアプローチや配慮をする事で、街全体に観光客が行き届くような内容の調整もされています。",
      engine: "Blender cycles",
    },

    {
      src: "/images/3image2.png",
      src2: "/images/3image2-2.jpeg",
      src3: "/images/3image2-3.jpeg",
      description:
        "駅舎の屋上の空いたスペースには、一般開放された、植生豊かな屋上庭園があります。街中としては破格の広大なフリースペースは、従来の狭苦しい都会からの解放と、治安維持の成果を極端なほどに表現しています。ベンチを用いて、ホテルの宿泊設備と連携したビアガーデンなどのイベントが開催されることも想定されています。",
      title: "ひばな駅 2:屋上庭園",
      description2:
        "屋上には運用コスト度外視の水場もあり、リラックス効果を増幅させます。また、かつてここの土地に建てられていた神社も屋上庭園に移設されています。",
      engine: "Blender cycles/Chocapic 13 ultra",
    },

    {
      src: "/images/3image3.jpeg",
      src2: "/images/3image3-2.jpeg",
      src3: "/images/3image3-3.jpeg",
      description:
        "高架駅のホームは5面9線の在来線、2面4線の新幹線で構成されます。現行のひばな駅ビルができる前からその形を成していたため、新幹線ホームは一部が駅ビルに食い込む形になっています。",
      title: "ひばな駅 3:駅",
      description2:
        "でかいです",
      engine: "Blender cycles/Chocapic 13 ultra",
    },

    {
      src: "/images/3image4.jpeg",
      src2: "/images/null.png",
      src3: "/images/null.png",
      description:
        "屋内のアトリウムには滝が流れています。このアトリウムは駅ビルの中にあり、屋内の階層の境界を減らし、アンビエントを彩ります",
      title: "ひばな駅 4:屋内アトリウム",
      description2:
        "けっこうでかいです",
      engine: "Chocapic 13 ultra",
    },

    {
      src: "/images/3image5.jpeg",
      src2: "/images/3image5-2.jpeg",
      src3: "/images/3image5-3.jpeg",
      description:
        "地下2階に改札、地下3、4階に地下鉄2路線のホームがあります。昔から通っていたのをリニューアルしたようなチグハグ感と豪快な構造を表現しました。",
      title: "ひばな駅 5:地下鉄駅",
      description2:
        "リニューアル後の銀座駅をモチーフに作っています。",
      engine: "Chocapic 13 ultra",
    },

    {
      src: "/images/3image6.jpeg",
      src2: "/images/null.png",
      src3: "/images/null.png",
      description:
        "三角形の大型ロータリーという特殊な制約のもと作りました。タクシープール、二重螺旋構造の地下駐車場への出入り口などがあります。",
      title: "ひばな駅 6:ロータリー",
      description2:
        "",
      engine: "Chocapic 13 ultra",
    },

    {
      src: "/images/3image7.jpeg",
      src2: "/images/3image7-2.jpeg",
      src3: "/images/null.png",
      description:
        "面積を持たない点に無限大の質量を持つ究極の天体をBlenderで作った重力レンズとあわせて再現しました。",
      title: "超大質量ブラックホール",
      description2:
        "",
      engine: "Blender cycles",
    },

  ];



  
  return (
    <div>
      {/* タブボタン */}
      <div className={styles.tabButtons }>
          <span
            className={activeTab === "photos" ? styles.active : ""}
            onClick={() => setActiveTab("photos")}
          >
            PHOTOS
          </span>
          <span
            className={activeTab === "films" ? styles.active : ""}
            onClick={() => setActiveTab("films")}
          >
            FILMS
          </span>
          <div
            id={styles.lamp}
            className={activeTab === "photos" ? styles.photos : styles.films}
          ></div>
        </div>

        {/* タブコンテンツ */}
        <div className={styles.tabContent}>
          {activeTab === "photos" && (
            <div className={styles.photos}>
            </div>
          )}
          {activeTab === "films" && (
            <div className={styles.films}>
            </div>
          )}
        </div>

        {/* 写真を表示 */}
        <div className={styles.tabContent}>
          {activeTab === "photos" && (
            <div>
            </div>
        )}

        {/* 映像を表示 */}
          {activeTab === "films" && (
            <div>
            </div>
          )}
        </div>


      {/* タブコンテンツ */}
      <div className={styles.tabContent}>
        {activeTab === "photos" && (
          <div>
            <div className={styles.Header}>
        <Image src="/gallery_wall_toyohashi.png" alt="豊橋市のheader" width={1280} height={720} className={styles.HeaderImage} />
        <h1 className={`${styles.HeaderTitle} ${styles.robotoFont}`}>Minecraft 豊橋再現</h1>
      </div>

      {/*画像をぽんぽん表示するにょ〜ん*/}
      <main className={styles.gallery}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.galleryItem}
            onClick={() => {
              setSelectedImage(image); // 画像をクリックしたらモーダル表示して...
            }}
          >
            <Image src={image.src} alt={image.title} width={300} height={300} />
          </div>
        ))}
      </main>

      <div className={styles.Header}>

        <Image src="/gallery_wall_saigen.png" alt="豊橋市のheader" width={1280} height={720} className={styles.HeaderImage} />
        <h1 className={`${styles.HeaderTitle} ${styles.robotoFont}`}>Minecraft 再現建築</h1>
      </div>

      {/*画像をぽんぽん表示するにょ〜ん*/}
      <main className={styles.gallery}>
        {images2.map((image, index) => (
          <div
            key={index}
            className={styles.galleryItem_2}
            onClick={() => {
              setSelectedImage(image); // 画像をクリックしたらモーダル表示して...
            }}
          >
            <Image src={image.src} alt={image.title} width={300} height={300} />
          </div>

        ))}
      </main>

      <div className={styles.Header}>

        <Image src="/gallery_wall_original.png" alt="豊橋市のheader" width={1280} height={720} className={styles.HeaderImage} />
        <h1 className={`${styles.HeaderTitle} ${styles.robotoFont}`}>Minecraft オリジナル建築</h1>
      </div>


      <main className={styles.gallery}>
        {images3.map((image, index) => (
          <div
            key={index}
            className={styles.galleryItem_3}
            onClick={() => {
              setSelectedImage(image); // 画像をクリックしたらモーダル表示して...
            }}
          >
            <Image src={image.src} alt={image.title} width={300} height={300} />
          </div>

        ))}
      </main>





      {/*画像をクリックした時のモーダル表示するにょ〜ん*/}
      {selectedImage && (
        <div
          className={styles.modal}
          onClick={(e) => {
            // 背景部分をクリックした場合のみモーダルを閉じる
            if (e.target === e.currentTarget) {
              closeImage();
            }
          }}
        >
          {/*戻るボタン*/}
          <div className={styles.modalContent}>
            <div className={styles.iconWrapper} onClick={closeImage}>
              <div className={styles.icon}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            {/*画像*/}
            <div className={styles.modalImageContainer}>
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                width={1280}
                height={720}
                style={{ objectFit: "contain" }}
              />
            </div>

            {/*説明文*/}
            <div className={styles.modalCaption}>
              {/*タイトル*/}
              <h3>{selectedImage.title}</h3>
              {/*説明文*/}
              <p>{selectedImage.description}</p>
              {/*追加画像*/}
              <div className={styles.additionalImages}>
                <Image
                  src={selectedImage?.src2 || ""}
                  alt={`${selectedImage?.title || ""} - Additional Image`}
                  width={640}
                  height={320}
                  style={{ objectFit: "cover" }}
                />
              </div>
              {/*追加説明文*/}
              {selectedImage.description2 && <p>{selectedImage.description2}</p>}
              {/*追加画像*/}
              <div className={styles.additionalImages}>
                <Image
                  src={selectedImage?.src3 || ""}
                  alt={`${selectedImage?.title || ""} - Additional Image`}
                  width={640}
                  height={320}
                  style={{ objectFit: "cover" }}
                />
              </div>
              {/*エンジン*/}
              {selectedImage.engine && <p><strong>Engine:</strong> {selectedImage.engine}</p>}
              {/*実際の場所*/}
              {selectedImage.real_location && (
                <p><strong>Real Location:</strong> {selectedImage.real_location}</p>
              )}

            </div>
          </div>


        </div>
      )}
          </div>
        )}
        {activeTab === "films" && (
          <div>
            {/* 映像ギャラリー */}
                  <main className={styles.gallery}>
                    {films.map((film, index) => (
                      <div
                        key={index}
                        className={styles.galleryItem_4}
                        onClick={() => setSelectedFilm(film)} // サムネイルをクリックしたらモーダルを表示
                      >
                        <Image
                          src={film.thumbnail} // サムネイル画像を表示
                          alt={film.title}
                          width={300}
                          height={300}
                          className={styles.thumbnail}
                        />
                      </div>
                    ))}
                  </main>
            
                  {/* 映像モーダル */}
                  {selectedFilm && (
                    <div
                      className={styles.modal}
                      onClick={(e) => {
                        if (e.target === e.currentTarget) {
                          closeFilmModal();
                        }
                      }}
                    >
                      <div className={styles.modalContent}>
                        <div className={styles.iconWrapper} onClick={closeFilmModal}>
                          <div className={styles.icon}>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
            
                        {/* 動画埋め込み */}
                        <div className={styles.modalVideoContainer}>
                          <iframe
                            src={selectedFilm.movie} // 動画の埋め込みリンクを表示
                            title={selectedFilm.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
            
                        {/* 説明文 */}
                        <div className={styles.modalCaption}>
                          <h3>{selectedFilm.title}</h3>
                          <p>{selectedFilm.description}</p>
                        </div>
                      </div>
                    </div>
                  )}
          </div>
        )}
      </div>







  </div>


  );
};

export default GalleryPage;
