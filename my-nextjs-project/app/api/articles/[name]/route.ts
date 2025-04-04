import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import marked from 'marked';

export async function GET(req, { params }) {
    const { name } = params;
    const filePath = path.join(process.cwd(), 'app/articles/posts', `${name}.md`);

    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const htmlContent = marked(fileContent);
        return NextResponse.json({ content: htmlContent });
    } catch (error) {
        return NextResponse.error();
    }
}