"use client";

import Image from "next/image";

type BlogContentProps = {
  blog: {
    title: string;
    eyecatch?: {
      url: string;
      width: number;
      height: number;
    };
    content: string;
  };
};

// BlogContent コンポーネントをデフォルトエクスポート
export default function BlogContent({ blog }: BlogContentProps) {
  return (
    <div style={{ padding: "40px" }}>
      <h1>{blog.title}</h1> {/* 記事タイトルを表示 */}
      {blog.eyecatch && ( // アイキャッチ画像が存在する場合に表示
        <Image
          src={blog.eyecatch.url} // 画像URL
          alt="アイキャッチ画像" // 代替テキスト
          width={blog.eyecatch.width} // 画像幅
          height={blog.eyecatch.height} // 画像高さ
          style={{
            maxWidth: "80%", // 最大幅を80%に制限
            display: "block", // ブロック要素として表示
            margin: "0 auto", // 中央寄せ
            height: "auto", // 高さを自動調整
          }}
        />
      )}
      <div 
        dangerouslySetInnerHTML={{ __html: blog.content }} 
        style={{
          maxWidth: "100%", // コンテンツ全体の最大幅
        }}
      />
      <style jsx global>{`
        img {
          max-width: 80%; /* 画像の最大幅を80%に制限 */
          height: auto; /* 高さを自動調整 */
          display: block; /* ブロック要素として表示 */
          margin: 0 auto; /* 中央寄せ */
        }
      `}</style>
    </div>
  );
}
