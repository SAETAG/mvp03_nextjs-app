import Link from "next/link";

export default function OnboardingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f9fd] p-6">
      <h1 className="text-2xl font-bold text-[#2a7d67] mb-4 text-center">
        あなたにピッタリのクローゼットお片付け方法を見つけよう！
      </h1>
      <p className="text-[#555] mb-6 text-center">
        まずはあなたのことを教えてね！全部で4問あるよ！
      </p>

      <Link href="/onboarding/steps/1">
        <button className="bg-[#a8e6cf] hover:bg-[#91d8ba] text-[#2a7d67] px-6 py-3 rounded-lg border border-[#2a7d67] font-medium shadow-md transition">
          アンケートを始める
        </button>
      </Link>
    </div>
  );
}
