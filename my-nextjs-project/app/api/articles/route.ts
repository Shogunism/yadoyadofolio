import fs from 'fs';
import path from 'path';

const articlesDirectory = path.join(process.cwd(), 'app/articles/posts');

export async function GET() {
    const fileNames = fs.readdirSync(articlesDirectory);
    const articles = fileNames
        .filter(file => file.endsWith('.md'))
        .map(file => ({
            name: file.replace(/\.md$/, ''),
            path: `/api/articles/${file.replace(/\.md$/, '')}`
        }));

    return new Response(JSON.stringify(articles), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}