import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs"; // パスワードの照合用
import { PrismaClient } from "@prisma/client";
// import { NextResponse } from "next/server";

const prisma = new PrismaClient();

const authHandler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "user@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null; // エラー発生時は `null` を返す
        }

        try {
          // ユーザーをデータベースで検索
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });

          if (!user) {
            return null; // ユーザーが存在しない場合
          }

          // パスワードの検証
          const isValidPassword = await compare(credentials.password, user.password);
          if (!isValidPassword) {
            return null; // パスワードが間違っている場合
          }

          return { id: user.id, name: user.name, email: user.email };
        } catch (error) {
          console.error("認証エラー:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { authHandler as GET, authHandler as POST };
