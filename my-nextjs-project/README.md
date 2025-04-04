# README.md

# My Next.js Project

このプロジェクトは、Next.js を使用して Markdown 記事を動的に取得し、表示するアプリケーションです。以下の機能を提供します。

## 機能

- 記事一覧の表示
- 各記事へのリンク
- Markdown を HTML に変換して表示

## ディレクトリ構造

```
my-nextjs-project
├── app
│   ├── api
│   │   ├── articles
│   │   │   ├── [name]
│   │   │   │   └── route.ts
│   │   │   └── route.ts
│   ├── articles
│   │   ├── posts
│   │   │   ├── README.md
│   │   │   └── example.md
│   ├── page.tsx
│   ├── [article]
│   │   └── page.tsx
├── styles
│   └── page.module.css
├── package.json
├── tsconfig.json
└── README.md
```

## 使用技術

- Next.js
- TypeScript
- marked (Markdown を HTML に変換するライブラリ)

## インストール

プロジェクトをクローンした後、以下のコマンドを実行して依存関係をインストールします。

```
npm install
```

## 開発サーバーの起動

以下のコマンドで開発サーバーを起動します。

```
npm run dev
```

ブラウザで `http://localhost:3000` にアクセスすると、アプリケーションを確認できます。

## API エンドポイント

- `GET /api/articles`: すべての Markdown ファイルのリストを取得します。
- `GET /api/articles/:name`: 指定された名前の Markdown ファイルを取得します。ファイルが存在しない場合は 404 エラーを返します。

## ライセンス

このプロジェクトは MIT ライセンスの下で提供されています。