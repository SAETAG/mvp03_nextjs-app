"use client"; // 👈 クライアントコンポーネントとして指定

import { useEffect, useState } from "react";

export default function MultiSelect({ options, onChange }: { options: string[]; onChange: (value: string[]) => void }) {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  useEffect(() => {
    setSelectedValues([]); // ✅ 初期値を明示的にセット（SSRとCSRの不一致を防ぐ）
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let updatedValues = [...selectedValues];

    if (e.target.checked) {
      updatedValues.push(value); // ✅ チェックされたら追加
    } else {
      updatedValues = updatedValues.filter((v) => v !== value); // ✅ チェックが外れたら削除
    }

    setSelectedValues(updatedValues);
    onChange(updatedValues); // ✅ 配列として `onChange` に渡す
  };

  return (
    <div className="mb-4">
      {options.map((option) => (
        <label key={option} className="block">
          <input 
            type="checkbox" 
            value={option} 
            checked={selectedValues.includes(option)} 
            onChange={handleChange} 
          />
          {option}
        </label>
      ))}
    </div>
  );
}
