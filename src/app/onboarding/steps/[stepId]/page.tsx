"use client"; // 👈 クライアントコンポーネントとして指定

import { useParams, useRouter } from "next/navigation";
import QuestionForm from "@/app/onboarding/components/question-form";
import StepIndicator from "@/app/onboarding/components/step-indicator";

// 質問の型定義
type QuestionType = "dropdown" | "checkbox";

interface Question {
  id: number;
  title: string;
  type: QuestionType;
  options: string[] | "location";
}

// 質問リスト（修正後）
const questions: Question[] = [
  { id: 1, title: "住んでいる地域はどこ？", type: "dropdown", options: "location" },
  { id: 2, title: "一緒に住んでいるご家族についてあてはまるものに全てチェックをつけてね", type: "checkbox", options: ["一人暮らし", "お子さんと同居", "ご高齢の方と同居"] },
  { 
    id: 3, 
    title: "クローゼットの片づけで苦手なこと", 
    type: "checkbox", 
    options: [
      "どこから手をつけていいかわからない",
      "服を捨てられない",
      "収納スペースが足りない",
      "衣替えが面倒",
      "片付けてもすぐに散らかる",
    ]
  },
  { 
    id: 4, 
    title: "どんなクローゼットにしたい？", 
    type: "checkbox", 
    options: [
      "どこになにがあるかすぐに分かる",
      "コーディネートがすぐに決まる",
      "衣替えが楽にできる",
      "片づけやすく、リバウンドしない",
      "収納を素敵に活用出来ている",
    ]
  }
];

export default function OnboardingStepPage() {
  const params = useParams();
  const router = useRouter();

  // stepId を安全に取得（数値変換＆NaNチェック）
  const stepId = Number(params.stepId);
  if (isNaN(stepId)) return <p>無効なステップIDです</p>;

  const step = questions.find((q) => q.id === stepId);
  if (!step) return <p>ステップが見つかりません</p>;

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <StepIndicator currentStep={stepId} totalSteps={questions.length} />
      <h1 className="text-2xl font-bold mb-4">{step.title}</h1>
      <QuestionForm type={step.type} options={step.options} onNext={() => router.push(`/onboarding/steps/${stepId + 1}`)} />
    </div>
  );
}
