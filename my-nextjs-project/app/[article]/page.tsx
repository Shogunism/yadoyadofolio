import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import marked from "marked";
import styles from "../../styles/page.module.css";

const ArticlePage = () => {
  const router = useRouter();
  const { article } = router.query;
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (article) {
      const fetchArticle = async () => {
        try {
          const response = await fetch(`/api/articles/${article}`);
          if (!response.ok) {
            throw new Error("Article not found");
          }
          const text = await response.text();
          setContent(marked(text));
        } catch (err) {
          setError(true);
        } finally {
          setLoading(false);
        }
      };

      fetchArticle();
    }
  }, [article]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Article not found</div>;

  return (
    <div className={styles.articleContainer} dangerouslySetInnerHTML={{ __html: content }} />
  );
};

export default ArticlePage;