こちらは [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) でブートストラップされた [Next.js](https://nextjs.org) プロジェクトです。

## 開始方法

まず、publicフォルダに適当なサンプル画像と動画を入れてください（データベース接続はまだ実装できていません）

次に必要なパッケージのインストールを行い、開発サーバーを起動します：

```bash
npm install
npm run json-server
npm run dev
```
http://localhost:3001で仮のデータベース(db.json)にアクセスすることができます
ブラウザで [http://localhost:3000](http://localhost:3000) を開いて、結果を確認してください。

app/page.tsx を編集することで、ページの内容を変更できます。ファイルを編集すると、ページが自動的に更新されます。
