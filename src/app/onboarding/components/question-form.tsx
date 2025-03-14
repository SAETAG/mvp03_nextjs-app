"use client";

import { useState } from "react";
import Dropdown from "@/app/onboarding/components/dropdown";
import MultiSelect from "@/app/onboarding/components/multi-select";

interface QuestionFormProps {
  type: "dropdown" | "checkbox";
  options: string[] | "location";
  onNext: () => void;
}

export default function QuestionForm({ type, options, onNext }: QuestionFormProps) {
  const [answer, setAnswer] = useState<string | string[]>("");

  return (
    <form onSubmit={(e) => { e.preventDefault(); onNext(); }} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      {type === "dropdown" && options === "location" && <Dropdown onChange={setAnswer} />}
      {type === "checkbox" && <MultiSelect options={options as string[]} onChange={setAnswer} />}
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
        次へ
      </button>
    </form>
  );
}
