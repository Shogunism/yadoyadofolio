import fs from "fs";
import path from "path";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { name: string } }) {
  const { name } = params; // URLパラメータから記事名を取得
  const filePath = path.join(process.cwd(), "app/articles/posts", `${name}.md`);

  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }

  try {
    const fileContent: string = fs.readFileSync(filePath, "utf-8");
    const markdownContent = await Promise.resolve(marked(fileContent));
    const htmlContent = DOMPurify.sanitize(markdownContent); // Markdown を HTML に変換し、サニタイズ

    const titleMatch = fileContent.match(/^# (.+)$/m);
    const title = titleMatch ? titleMatch[1] : "Untitled";

    return NextResponse.json({ name, title, content: htmlContent });
  } catch (error) {
    console.error("Error reading file:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}