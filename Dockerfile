FROM node:20-alpine

WORKDIR /app

# package.json と package-lock.json をコピー
COPY package.json package-lock.json ./

# npm を使って依存パッケージをインストール
RUN npm install

# ソースコードをコピー
COPY . .

# Next.jsアプリケーションをビルド
RUN npm run build

# コンテナがリッスンするポート番号を公開
EXPOSE 3000

# アプリケーション起動
CMD ["npm", "start"]
