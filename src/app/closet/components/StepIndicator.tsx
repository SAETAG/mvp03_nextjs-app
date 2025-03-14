"use client";

export default function StepIndicator({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) {
  return (
    <div className="w-full flex justify-between items-center mt-4 mb-6">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={`w-8 h-2 rounded-full transition ${
            index < currentStep ? "bg-blue-500" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}
