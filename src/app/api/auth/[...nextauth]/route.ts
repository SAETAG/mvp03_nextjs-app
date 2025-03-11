import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs"; // パスワードの照合用
import { PrismaClient } from "@prisma/client"; // PrismaでDBを操作

const prisma = new PrismaClient();

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "user@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("メールアドレスとパスワードを入力してください");
        }

        // ユーザーがDBに存在するかチェック
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          throw new Error("ユーザーが見つかりません");
        }

        // パスワードが正しいか確認
        const isValidPassword = await compare(credentials.password, user.password);
        if (!isValidPassword) {
          throw new Error("パスワードが間違っています");
        }

        return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET, // 環境変数から取得
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
