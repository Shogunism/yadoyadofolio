import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { marked } from "marked";

// DOMPurify を使うなら JSDOM 組み合わせも必要（後述）

export async function GET(
  request: NextRequest,
  { params }: { params: { name: string } }  // ✅ 明示してOK
) {
  const { name } = params;

  if (!name || Array.isArray(name)) {
    return NextResponse.json({ error: "Invalid article name" }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), "app/articles/posts", `${name}.md`);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }

  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const html = marked(fileContent);

    // titleだけMarkdownの1行目から取得
    const titleMatch = fileContent.match(/^# (.+)$/m);
    const title = titleMatch ? titleMatch[1] : "Untitled";

    return NextResponse.json({ name, title, content: html });
  } catch {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
