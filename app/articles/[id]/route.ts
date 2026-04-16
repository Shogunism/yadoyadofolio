import { NextResponse } from 'next/server';

// likes API は無効化されました。ビルド時の TypeScript エラーを避けるため
// 有効なモジュールとして GET/POST/PUT をエクスポートし、404を返します。

export async function GET() {
  return NextResponse.json({ error: 'likes API disabled' }, { status: 404 });
}

export async function POST() {
  return NextResponse.json({ error: 'likes API disabled' }, { status: 404 });
}

export async function PUT() {
  return NextResponse.json({ error: 'likes API disabled' }, { status: 404 });
}