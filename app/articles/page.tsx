"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/page.module.css";
import Image from "next/image";

const ArticlePage = () => {
  const [articles, setArticles] = useState<
    { name: string; path: string; title: string; thumbnail: string | null }[]
  >([]);
  const [loading, setLoading] = useState(true); // 読み込み中の状態を管理

  useEffect(() => {
    fetch(`${window.location.origin}/api/articles`)
      .then(res => res.json())
      .then(data => {
        setArticles(data); // 記事データをセット
        setLoading(false); // 読み込み完了
      });
  }, []);

  if (loading) {
    return <div className={styles.Loading}>Loading Articles...</div>; // 読み込み中の表示
  }

  return (
    <div className={styles.ArticleBox}>
      <h1>記事一覧</h1>
      <ul className={styles.ul}>
        {articles.map(article => (
          <div className={styles.Skill_Box} key={article.name}>
            <div className={styles.Article_item}>
              <li style={{ marginBottom: "20px" }}>
                <Link href={article.path}>
                  <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                    {article.thumbnail && (
                      <Image
                        src={article.thumbnail}
                        alt={article.title}
                        style={{ width: "288px", height: "162px", objectFit: "cover" }}
                      />
                    )}
                    <h2>{article.title}</h2>
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