import fs from "fs";
import path from "path";
import { marked } from "marked";
import { JSDOM } from "jsdom";
import createDOMPurify from "dompurify";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;

  const filePath = path.join(process.cwd(), "app/articles/posts", `${name}.md`);

  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }

  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const window = new JSDOM("").window;
    const DOMPurify = createDOMPurify(window);
    const rawHtml = await marked(fileContent);
    const htmlContent = DOMPurify.sanitize(rawHtml, { ADD_TAGS: ["iframe"], ADD_ATTR: ["allow", "allowfullscreen", "frameborder"] });

    const titleMatch = fileContent.match(/^# (.+)$/m);
    const title = titleMatch ? titleMatch[1] : "Untitled";
//po
    return NextResponse.json({ name, title, content: htmlContent });
  } catch (error) {
    console.error("Error reading file:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
