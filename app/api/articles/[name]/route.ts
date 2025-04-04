import fs from "fs"; // ファイルシステム操作用のモジュール
import path from "path"; // ファイルパス操作用のモジュール
import { marked } from "marked"; // MarkdownをHTMLに変換するライブラリ
import { NextResponse } from "next/server"; // Next.jsのレスポンスオブジェクト

export async function GET(_: Request, { params }: { params: { name: string } }) {
  const { name } = params; // URLパラメータから記事名を取得
  const filePath = path.join(process.cwd(), "app/articles/posts", `${name}.md`); // 記事ファイルへのパスを生成

  // 指定された記事ファイルが存在しない場合、404エラーを返す
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`); // デバッグ用ログ
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }

  try {
    // 記事ファイルの内容を読み取り
    const fileContent: string = fs.readFileSync(filePath, "utf-8");
    console.log(`File content for ${name}:`, fileContent); // デバッグ用ログ

    // MarkdownをHTMLに変換
    const htmlContent = marked(fileContent);

    // タイトルを取得（最初の # 見出し）
    const titleMatch = fileContent.match(/^# (.+)$/m);
    const title = titleMatch ? titleMatch[1] : "Untitled";

    // サムネイルを取得（最初の ![](URL)）
    const thumbnailMatch = fileContent.match(/!\[.*?\]\(([^"\s]+)(?:\s+".*?")?\)/);
    const thumbnail = thumbnailMatch
      ? `${process.env.NEXT_PUBLIC_BASE_URL}${thumbnailMatch[1]}`
      : null; // 絶対パスに変換

    // 記事名、タイトル、サムネイル、HTMLコンテンツをJSON形式でレスポンスとして返す
    return NextResponse.json({ name, title, thumbnail, content: htmlContent });
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error); // デバッグ用ログ
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
