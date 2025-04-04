import { marked } from "marked"; // 名前付きエクスポートに変更

interface ArticleProps {
  params: Promise<{ article: string }>; // 非同期型に修正
}

async function getArticleContent(article: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/${article}`);
  if (!res.ok) {
    throw new Error("Article not found");
  }
  return res.json();
}

const Article = async ({ params }: ArticleProps) => {
  const { article } = await params; // 非同期で解決
  const data = await getArticleContent(article);

  const styledContent = `
    <style>
      img { max-width: 100%; height: auto; border-radius: 10px; }
    </style>
    ${data.content}
  `;

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "90%", margin: "0 auto" }} dangerouslySetInnerHTML={{ __html: styledContent }} />
    </div>
  );
};

export default Article;