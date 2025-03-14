"use client";

import { useState } from "react";

// ✅ 日本の都道府県リスト
const prefectures = [
  "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
  "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
  "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県", "愛知県",
  "三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県",
  "鳥取県", "島根県", "岡山県", "広島県", "山口県",
  "徳島県", "香川県", "愛媛県", "高知県",
  "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"
];

// ✅ 世界の国リスト（日本を除外）
const countries = [
  "アメリカ", "カナダ", "イギリス", "フランス", "ドイツ", "オーストラリア", "中国", "韓国", "インド",
  "ブラジル", "メキシコ", "ロシア", "南アフリカ", "エジプト", "アルゼンチン", "イタリア", "スペイン",
  "スウェーデン", "ノルウェー", "デンマーク", "フィンランド", "インドネシア", "フィリピン",
  "タイ", "ベトナム", "マレーシア", "シンガポール", "トルコ", "サウジアラビア", "UAE", "ニュージーランド",
  "オランダ", "ベルギー", "スイス", "ポルトガル", "ギリシャ", "ポーランド", "ウクライナ", "チェコ",
  "ハンガリー", "アイルランド", "イスラエル", "ペルー", "チリ", "コロンビア", "パキスタン", "その他"
];

export default function Dropdown({ onChange }: { onChange: (value: string) => void }) {
  const [selected, setSelected] = useState("");

  return (
    <select
      value={selected}
      onChange={(e) => {
        setSelected(e.target.value);
        onChange(e.target.value);
      }}
      className="w-full p-2 border rounded mb-4"
    >
      <option value="">選択してください</option>
      <optgroup label="日本🗾">
        {prefectures.map((pref) => (
          <option key={pref} value={pref}>
            {pref}
          </option>
        ))}
      </optgroup>
      <optgroup label="海外🌎">
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </optgroup>
    </select>
  );
}
