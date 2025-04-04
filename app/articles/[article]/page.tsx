

interface ArticleProps {
  params: { article: string }; // URLパラメータとして記事名を受け取る
}

async function getArticleContent(article: string) {
  // 指定された記事名をもとにAPIから記事データを取得
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/${article}`); // 絶対URLを使用
  if (!res.ok) {
    throw new Error("Article not found"); // 記事が見つからない場合はエラーをスロー
  }
  return res.json(); // レスポンスをJSON形式で返す
}

const Article = async ({ params }: ArticleProps) => {
  const { article } = params; // URLパラメータから記事名を取得
  const data = await getArticleContent(article); // 記事データを取得
  const styledContent = `
    <style>
      img { max-width: 100%; height: auto; border-radius: 10px;}
    </style>
    ${data.content}
  `;


  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "90%", margin: "0 auto" }} dangerouslySetInnerHTML={{ __html: styledContent }} />
    </div>
  );
};

export default Article; // コンポーネントをエクスポート