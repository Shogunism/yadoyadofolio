import { NextResponse } from 'next/server';

// 簡易的なメモリストレージ（実際の本番環境ではデータベースを使用）
const likesData: { [key: string]: number } = {};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const imageId = searchParams.get('imageId');

  if (!imageId) {
    return NextResponse.json({ error: 'Image ID is required' }, { status: 400 });
  }

  const likes = likesData[imageId] || 0;
  return NextResponse.json({ likes });
}

export async function POST(request: Request) {
  try {
    const { imageId, action } = await request.json();

    if (!imageId) {
      return NextResponse.json({ error: 'Image ID is required' }, { status: 400 });
    }

    if (action === 'toggle') {
      // いいねのトグル処理
      if (!likesData[imageId]) {
        likesData[imageId] = 0;
      }

      // 現在の状態に応じて増減
      if (action === 'toggle') {
        // クライアント側でliked状態を管理するので、ここでは単純に増減
        // 実際の実装では、liked状態もサーバー側で管理することを推奨
      }
    } else {
      // 従来の処理（後方互換性のため残す）
      likesData[imageId] = (likesData[imageId] || 0) + 1;
    }

    return NextResponse.json({ 
      likes: likesData[imageId],
      message: 'Like updated successfully' 
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function PUT(request: Request) {
  try {
    const { imageId, increment } = await request.json();

    if (!imageId || typeof increment !== 'boolean') {
      return NextResponse.json({ error: 'Image ID and increment boolean are required' }, { status: 400 });
    }

    // いいね数を増減
    if (increment) {
      likesData[imageId] = (likesData[imageId] || 0) + 1;
    } else {
      likesData[imageId] = Math.max((likesData[imageId] || 0) - 1, 0);
    }

    return NextResponse.json({ 
      likes: likesData[imageId],
      message: increment ? 'Like added successfully' : 'Like removed successfully'
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}