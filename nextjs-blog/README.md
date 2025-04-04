# README.md

# Next.js Blog

このプロジェクトは、Next.jsを使用して動的なブログを構築するためのサンプルです。Markdown形式の記事を取得し、ページとして表示します。

## 構成

- `articles/posts/` - 記事のMarkdownファイルを格納するディレクトリ
  - `example-post.md` - 記事の例
  - `another-post.md` - 別の例の記事
- `pages/articles/[slug].tsx` - 動的な記事ページを表示するためのファイル
- `pages/api/articles.ts` - 記事の一覧を取得するAPIエンドポイント
- `pages/api/articles/[name].ts` - 特定の記事を取得するAPIエンドポイント
- `pages/index.tsx` - アプリケーションのホームページ
- `styles/page.module.css` - ページのスタイルを定義するCSSファイル
- `package.json` - プロジェクトの依存関係やスクリプトを定義するファイル
- `tsconfig.json` - TypeScriptのコンパイラオプションやファイルの設定を定義するファイル

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

## 使用方法

- ホームページにアクセスすると、記事の一覧が表示されます。
- 記事をクリックすると、動的に生成されたページが表示されます。

## ライセンス

MITライセンスの下で提供されています。