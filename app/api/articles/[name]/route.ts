import fs from "fs";
import path from "path";
import { marked } from "marked";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { name: string } }) {
  const { name } = params; // URLパラメータから記事名を取得
  const filePath = path.join(process.cwd(), "app/articles/posts", `${name}.md`);

  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }

  try {
    const fileContent: string = fs.readFileSync(filePath, "utf-8");
    const htmlContent = marked(fileContent);

    const titleMatch = fileContent.match(/^# (.+)$/m);
    const title = titleMatch ? titleMatch[1] : "Untitled";

    return NextResponse.json({ name, title, content: htmlContent });
  } catch (error) {
    console.error("Error reading file:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}