import Link from "next/link";
import { client } from "@/libs/client";
import styles from "../../styles/page.module.css";
import Image from "next/image";

type Article = {
  id: string;
  title: string;
  eyecatch?: {
    url: string;
    width: number;
    height: number;
  };
};

export default async function ArticleListPage() {
  const data = await client.get({ endpoint: "blogs" });
  const articles: Article[] = data.contents;

  return (
    <div className={styles.ArticleBox}>
      <h1>記事一覧</h1>
      <ul className={styles.ul}>
        {articles.map((article) => (
          <div className={styles.Skill_Box} key={article.id}>
            <div className={styles.Article_item}>
              <li style={{ marginBottom: "20px" }}>
                <Link href={`/articles/${article.id}`}>
                  <div style={{ paddingTop: "20px", paddingBottom: "20px", cursor: "pointer" }}>
                    {article.eyecatch && (
                      <Image
                        src={article.eyecatch.url}
                        alt={article.title}
                        width={288}
                        height={162}
                        style={{ objectFit: "cover" }}
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
}
