"use client"; // 👈 追加

import Link from "next/link";

const steps = [
  { id: 1, title: "住んでいる地域はどこ？" },
  { id: 2, title: "一緒に住んでいるご家族について教えて" },
  { id: 3, title: "クローゼットの片づけで苦手なこと" },
  { id: 4, title: "どんなクローゼットにしたい？" },
];

export default function OnboardingStepsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-[#f8f9fd]">
      <h1 className="text-2xl font-bold mb-4 text-[#2a7d67]">アンケートを進めましょう</h1>
      <ul className="w-full max-w-md">
        {steps.map((step) => (
          <li key={step.id} className="mb-3">
            <Link href={`/onboarding/steps/${step.id}`}>
              <button className="w-full bg-[#a8e6cf] hover:bg-[#91d8ba] text-[#2a7d67] px-6 py-3 rounded-lg border border-[#2a7d67] font-medium shadow-md transition">
                {step.title}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
