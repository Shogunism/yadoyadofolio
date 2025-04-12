import fs from "fs"; // ファイルシステム操作用のモジュール
import path from "path"; // ファイルパス操作用のモジュール
import { NextResponse } from "next/server"; // Next.jsのレスポンスオブジェクト

export async function GET() {
  // プロジェクトのルートディレクトリから記事ディレクトリへのパスを生成
  const postsDir = path.join(process.cwd(), "app/articles/posts");

  // 指定ディレクトリ内のファイルを取得し、Markdownファイルのみをフィルタリング
  const files = fs.readdirSync(postsDir).filter(file => file.endsWith(".md"));

  // 各Markdownファイルを記事オブジェクトに変換
  const articles = files.map(file => {
    const filePath = path.join(postsDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    // タイトルを取得（最初の # 見出し）
    const titleMatch = fileContent.match(/^# (.+)$/m);
    const title = titleMatch ? titleMatch[1] : "Untitled";

    // サムネイルを取得（最初の ![](URL)）
    const thumbnailMatch = fileContent.match(/!\[.*?\]\(([^"\s]+)(?:\s+".*?")?\)/);
    const thumbnail = thumbnailMatch
      ? `${process.env.NEXT_PUBLIC_BASE_URL}${thumbnailMatch[1]}`
      : null; // 絶対パスに変換

    // タグを取得（Tags: の行）
    const tagsMatch = fileContent.match(/^Tags:\s*(.+)$/m);
    const tags = tagsMatch ? tagsMatch[1].split(",").map(tag => tag.trim()) : [];

    return {
      name: file.replace(".md", ""), // 拡張子を除いたファイル名
      path: `/articles/${file.replace(".md", "")}`, // 記事へのパス
      title, // 記事のタイトル
      thumbnail, // 記事のサムネイル
      tags, // タグを追加
    };
  });

  // 記事リストをJSON形式でレスポンスとして返す
  return NextResponse.json(articles);
}