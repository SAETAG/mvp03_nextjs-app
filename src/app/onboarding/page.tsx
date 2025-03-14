import Link from "next/link";

export default function OnboardingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">あなたにピッタリのクローゼットお片付け方法を見つけよう！</h1>
      <p className="text-gray-600 mb-6">まずはあなたのことを教えてね！全部で4問あるよ！</p>

      <Link href="/onboarding/steps/1">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg">
          アンケートを始める
        </button>
      </Link>
    </div>
  );
}
