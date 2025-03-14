"use client"; // 👈 追加

import { useParams, useRouter } from "next/navigation";
import StepIndicator from "@/app/closet/components/StepIndicator";
import { Button } from "@/components/ui/button";

const steps = [
  { id: 1, title: "現状の課題を記入", description: "クローゼットの課題を整理しよう" },
  { id: 2, title: "箱 or 袋を4つ用意する", description: "整理のための準備をしよう" },
  { id: 3, title: "クローゼットの中身をすべて出す", description: "全部出して仕分けよう" },
  { id: 4, title: "お気に入り & 1年以上着ているものを収納", description: "必要なものを分類しよう" },
  { id: 5, title: "それ以外は断捨離対象", description: "不要なものを手放そう" },
  { id: 6, title: "収納する物と思い出BOXの最終確認", description: "改めて仕分けの見直しをしよう" },
  { id: 7, title: "収納スペースから適正量を割り出す", description: "収納可能な量を確認して超過分を削減" },
  { id: 8, title: "整理の狙いに応じてグルーピング", description: "季節や用途ごとに整理しよう" },
  { id: 9, title: "使用頻度でさらにグルーピング", description: "使いやすさを考えて配置を決めよう" },
  { id: 10, title: "収納場所を決める", description: "クローゼット内の最適な配置を決定" },
  { id: 11, title: "一つ一つのアイテムを記録しながら収納", description: "何がどこにあるかを記録しながら整理" },
  { id: 12, title: "収納後のクローゼットの写真を撮る", description: "ビフォーアフターを記録しよう" },
  { id: 13, title: "完了！ビフォーアフター写真を比較", description: "達成感を得よう！" },
];

export default function StepPage() {
  const params = useParams();
  const router = useRouter();
  const stepId = Number(params.stepId);
  const step = steps.find((s) => s.id === stepId);

  if (!step) return <p>ステップが見つかりません</p>;

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-white">
      {/* ステップの進捗バー */}
      <StepIndicator currentStep={stepId} totalSteps={steps.length} />

      <h1 className="text-2xl font-bold text-gray-800">{step.title}</h1>
      <p className="text-gray-600">{step.description}</p>

      <div className="mt-6 flex gap-4">
        {/* 戻るボタン（ステップ1では非表示） */}
        {stepId > 1 && (
          <Button variant="outline" onClick={() => router.push(`/closet/steps/${stepId - 1}`)}>
            戻る
          </Button>
        )}

        {/* 次へ進むボタン */}
        <Button variant="default" onClick={() => {
          if (stepId < steps.length) {
            router.push(`/closet/steps/${stepId + 1}`);
          } else {
            router.push("/closet/completion"); // 最後のページへ遷移
          }
        }}>
          {stepId < steps.length ? "次へ進む" : "完了"}
        </Button>
      </div>
    </div>
  );
}
