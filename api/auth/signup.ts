// pages/api/auth/signup.ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "メールアドレスとパスワードは必須です" });
  }

  try {
    // パスワードのハッシュ化
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    return res.status(201).json({ message: "ユーザー登録成功", user });
  } catch (error: any) {
    // ここでエラー内容をターミナルに出力
    console.error("Signup error:", error);
    return res.status(500).json({ error: "サーバーエラーが発生しました", details: error.message });
  }
}
