import { client } from "@/libs/client"; // microCMSクライアントをインポート
import { notFound } from "next/navigation"; // ページが見つからない場合の処理を提供
import BlogContent from "./BlogContent"; // クライアントコンポーネントをデフォルトインポート

// ページコンポーネントのプロパティ型定義
type PageProps = {
  params: Promise<{
    id: string; // 記事IDを含むプロパティ
  }>;
};

// 記事詳細ページのサーバーコンポーネント
export default async function ArticleDetailPage({ params }: PageProps) {
  const resolvedParams = await params; // Promiseを解決
  try {
    // 必須の環境変数が設定されているか確認
    if (!process.env.MICROCMS_SERVICE_DOMAIN || !process.env.MICROCMS_API_KEY) {
      throw new Error("Missing MICROCMS_SERVICE_DOMAIN or MICROCMS_API_KEY in environment variables");
    }

    // microCMSから記事データを取得
    const blog = await client.get({ 
      endpoint: "blogs", // microCMSのエンドポイント名
      contentId: resolvedParams.id, // 解決済みのIDを使用
    });

    // 記事データをクライアントコンポーネントに渡す
    return (
      <BlogContent blog={blog} />
    );
  } catch (error) {
    // エラー発生時にログを出力し、404ページを表示
    console.error("Error fetching blog data:", error);
    notFound();
  }
}
