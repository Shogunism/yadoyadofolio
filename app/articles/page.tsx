"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/page.module.css";
import Image from "next/image";

const ArticlePage = () => {
  const [articles, setArticles] = useState<
    { name: string; path: string; title: string; thumbnail: string | null; tags: string[]; }[]
  >([]);
  const [loading, setLoading] = useState(true); // 読み込み中の状態を管理
  const [filterTag, setFilterTag] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${window.location.origin}/api/articles`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Articles:", data); // デバッグ用ログ
        setArticles(data); // 記事データをセット
        setLoading(false); // 読み込み完了
      });
  }, []);

  const filteredArticles = filterTag
    ? articles.filter((article) => article.tags.includes(filterTag))
    : articles;

  const allTags = Array.from(new Set(articles.flatMap((article) => article.tags))); // 全タグを取得

  const allDays = Array.from(new Set(articles.flatMap((article) => article.tags))); // 全タグを取得

  if (loading) {
    return <div className={styles.Loading}>Loading Articles...</div>; // 読み込み中の表示
  }

  return (
    <div className={styles.ArticleBox}>
      <h1>記事一覧</h1>
      <div>
        {/* タグ一覧 */}
        <ul className={styles.cp_tag01}>
  <li>
    <a
      onClick={() => setFilterTag(null)}
      className={!filterTag ? styles.active : ""}
      style={{ cursor: "pointer" }}
    >
      ぜんぶ
    </a>
  </li>

  {allTags.map((tag) => (
    <li key={tag}>
      <a
        onClick={() => setFilterTag(tag)}
        className={filterTag === tag ? styles.active : ""}
        style={{ cursor: "pointer" }}
      >
        {tag}
      </a>
    </li>
  ))}
</ul>
      </div>
      <div style={{ margin: "60px" }}></div>

      {/* 記事一覧 */}
      <ul className={styles.ul}>
        {filteredArticles.map((article) => (
          <div className={styles.Skill_Box} key={article.name}>
            <div className={styles.Article_item}>
              <li style={{ marginBottom: "20px" }}>
                <Link href={article.path}>
                  <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                    {article.thumbnail && (
                      <Image
                        src={article.thumbnail}
                        alt={article.title}
                        width={288} // アスペクト比の幅
                        height={162} // アスペクト比の高さ
                        style={{ objectFit: "cover" }}
                      />
                    )}
                    <h2>{article.title}</h2>
                    <p style={{ color: "#888", fontSize: "14px" }}>
                      Tags: {article.tags.join(", ")}
                    </p>
                  </div>
                </Link>
              </li>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ArticlePage;