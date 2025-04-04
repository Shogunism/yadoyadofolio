"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/page.module.css";

const ArticlePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch('/api/articles');
      const data = await response.json();
      setArticles(data);
    };

    fetchArticles();
  }, []);

  return (
    <div className={styles.container}>
      <h1>記事一覧</h1>
      <ul>
        {articles.map((article) => (
          <li key={article}>
            <Link href={`/${article}`}>{article}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticlePage;