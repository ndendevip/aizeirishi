import React from 'react';

export function Summary() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">分析まとめ</h2>
      <div className="space-y-4 text-gray-600">
        <p>
          各プラットフォームは正確な情報を提供しており、それぞれに特徴がありました：
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-medium">ChatGPT</span>は税務規制と特例に関する包括的な説明が特徴
          </li>
          <li>
            <span className="font-medium">Claude</span>は正確な数値例と計算方法の提示が優れている
          </li>
          <li>
            <span className="font-medium">Perplexity</span>は情報源の引用とビジネス実務への影響の説明が充実
          </li>
        </ul>
      </div>
    </div>
  );
}