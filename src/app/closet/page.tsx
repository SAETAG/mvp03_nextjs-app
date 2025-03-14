"use client"; // 👈 追加

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ClosetPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f9fd] p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">クローゼット整理を始めましょう！</h1>
      <p className="text-gray-600 text-center max-w-md">
        13ステップで、あなたのクローゼットをスッキリ整理！<br />
        AIのアドバイスを受けながら、簡単に片づけを進められます。
      </p>

      {/* ステップ開始ボタン */}
      <Link href="/closet/steps/1">
        <Button className="mt-6">クローゼット整理を始める</Button>
      </Link>
    </div>
  );
}
