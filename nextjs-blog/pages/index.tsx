import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/page.module.css";

const HomePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("/api/articles");
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
          <li key={article.slug}>
            <Link href={`/articles/${article.slug}`}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;