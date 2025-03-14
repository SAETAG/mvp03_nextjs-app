import Link from "next/link";

const steps = [
  { id: 1, title: "住んでいる地域はどこ？" },
  { id: 2, title: "一緒に住んでいるご家族について教えて" },
  { id: 3, title: "クローゼットの片づけで苦手なこと" },
  { id: 4, title: "どんなクローゼットにしたい？" },
];

export default function OnboardingStepsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">アンケートを進めましょう</h1>
      <ul className="w-full max-w-md">
        {steps.map((step) => (
          <li key={step.id} className="mb-3">
            <Link href={`/onboarding/steps/${step.id}`}>
              <button className="w-full bg-gray-200 px-6 py-3 rounded-md hover:bg-gray-300">
                {step.title}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
