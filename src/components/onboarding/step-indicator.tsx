interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export default function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="w-full max-w-md flex justify-between mb-4">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div key={i} className={`h-2 w-10 ${i < currentStep ? "bg-blue-500" : "bg-gray-300"} rounded`} />
      ))}
    </div>
  );
}
