"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import StepIndicator from "@/app/closet/components/StepIndicator";

// すべてのステップをリスト化
const steps = [
  { id: 1, title: "現状の課題と整理の狙いを記入する", description: "クローゼットの現状を観察し、困っていることを書き出そう。" },
  { id: 2, title: "箱 or 袋を4つ用意する", description: "捨てる・収納する・移動・迷う の4つのカテゴリーを作ろう。" },
  { id: 3, title: "クローゼットの中身をすべて出す", description: "すべてのアイテムを取り出し、一箇所に集めよう。" },
  { id: 4, title: "お気に入り & 1年以上着ているものを収納", description: "必要なものだけを分類しよう。" },
  { id: 5, title: "それ以外は断捨離対象", description: "AIが不要なものをリストアップし、手放すべきか判断しよう。" },
  { id: 6, title: "収納する物BOXと思い出BOXの最終確認", description: "本当に必要なものかもう一度確認しよう。" },
  { id: 7, title: "収納スペースから適正量を割り出す", description: "持っている服の量と収納スペースを比較し、超過分を減らそう。" },
  { id: 8, title: "整理の狙いに応じてグルーピング", description: "季節・シーン・アイテムごとに分類しよう。" },
  { id: 9, title: "使用頻度でグルーピング", description: "頻繁に使うものは手前、たまに使うものは奥へ。" },
  { id: 10, title: "収納場所を決める", description: "AIが収納スペースの最適な配置を提案！" },
  { id: 11, title: "アイテムを写真を撮りながら収納", description: "AIがどこに何があるか自動記録してくれる！" },
  { id: 12, title: "収納後のクローゼットの写真を撮る", description: "ビフォーアフターを記録しよう。" },
  { id: 13, title: "完了！", description: "お疲れ様でした！整理の達成感を味わおう。" },
];

export default function StepPage() {
  const params = useParams();
  const router = useRouter();
  const stepId = Number(params.stepId);
  const step = steps.find((s) => s.id === stepId);

  if (!step) return <p>ステップが見つかりません</p>;

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      {/* ステップの進行バー */}
      <StepIndicator currentStep={stepId} totalSteps={steps.length} />

      <h1 className="text-2xl font-bold text-gray-800 mt-4">{step.title}</h1>
      <p className="text-gray-600 mb-6 text-center">{step.description}</p>

      {/* 各ステップごとのカスタム UI */}
      {stepId === 1 && <Step1Form />}
      {stepId === 2 && <Step2Boxes />}
      {stepId === 3 && <Step3EmptyCloset />}
      {stepId === 4 && <Step4Favorites />}
      {stepId === 5 && <Step5Declutter />}
      {stepId === 6 && <Step6FinalCheck />}
      {stepId === 7 && <Step7OptimizeSpace />}
      {stepId === 8 && <Step8Grouping />}
      {stepId === 9 && <Step9Frequency />}
      {stepId === 10 && <Step10StoragePlacement />}
      {stepId === 11 && <Step11PhotoStorage />}
      {stepId === 12 && <Step12FinalPhoto />}
      {stepId === 13 && <Step13Complete />}

      {/* 次へ進むボタン */}
      <Button className="w-full mt-4" onClick={() => router.push(`/closet/steps/${stepId + 1}`)}>
        {stepId < steps.length ? "次へ進む" : "完了"}
      </Button>
    </div>
  );
}

/* 📌 各ステップごとのカスタム UI */

// ステップ1 - 現状の課題を記入
function Step1Form() {
  const [goal, setGoal] = useState("");
  const [problems, setProblems] = useState("");

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <label className="block text-sm font-medium text-gray-700">
        今のクローゼットの課題は？
      </label>
      <textarea className="w-full p-2 border rounded mb-4" value={problems} onChange={(e) => setProblems(e.target.value)} />

      <label className="block text-sm font-medium text-gray-700">
        目指したいクローゼットの状態は？
      </label>
      <textarea className="w-full p-2 border rounded mb-4" value={goal} onChange={(e) => setGoal(e.target.value)} />
    </div>
  );
}

// ステップ2 - 箱を4つ用意
function Step2Boxes() {
  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <p>以下の4つのボックスを用意してください：</p>
      <ul className="list-disc ml-4 mt-2">
        <li>廃棄BOX（捨てる）</li>
        <li>収納するBOX</li>
        <li>移動BOX（別の場所に移す）</li>
        <li>思い出BOX（迷ったもの）</li>
      </ul>
    </div>
  );
}

// ステップ3 - クローゼットの中身をすべて出す
function Step3EmptyCloset() {
  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <p>すべてのアイテムを取り出し、一箇所にまとめましょう！</p>
    </div>
  );
}

// ステップ4 - お気に入り & 1年以上着ているものを収納
function Step4Favorites() {
  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <p>毎日使うもの、1年以上着ているものだけを収納しましょう！</p>
    </div>
  );
}

// ステップ5 - 断捨離
function Step5Declutter() {
  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <p>AIが不要なものを提案します。手放すべきか考えましょう！</p>
    </div>
  );
}

// ステップ6以降は同じように追加する...

function Step6FinalCheck() {
  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <p>「思い出BOX」に入れたものをもう一度確認し、本当に必要か考えましょう。</p>
    </div>
  );
}

function Step7OptimizeSpace() {
  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <p>クローゼットの収納可能量を計算し、明らかに多すぎるものを手放しましょう。</p>
    </div>
  );
}

function Step8Grouping() {
  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <p>整理の狙いに応じて、アイテムを「季節」「シーン」「アイテム別」に分類しましょう。</p>
    </div>
  );
}

function Step9Frequency() {
  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <p>使用頻度に応じて配置を決めましょう。よく使うものは取り出しやすい場所に。</p>
    </div>
  );
}

function Step10StoragePlacement() {
  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <p>AIがクローゼットの写真を分析し、最適な収納場所を提案します！</p>
    </div>
  );
}

function Step11PhotoStorage() {
  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <p>収納しながらアイテムの写真を撮影し、どこに何があるかを記録しましょう。</p>
    </div>
  );
}

function Step12FinalPhoto() {
  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <p>収納後のクローゼットの写真を撮影し、ビフォーアフターを記録しましょう。</p>
    </div>
  );
}

// ステップ13 - 完了
function Step13Complete() {
  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold text-green-600">お疲れ様でした！</h2>
      <p>ビフォーアフターを比較して、整理の達成感を味わいましょう！</p>
    </div>
  );
}
