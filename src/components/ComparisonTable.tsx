import React from 'react';
import { Brain, Bot, SparkleIcon, ExternalLink } from 'lucide-react';

export function ComparisonTable() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
      <div className="grid grid-cols-4 gap-4 p-6 bg-gray-100">
        <div className="font-semibold text-gray-700">比較項目</div>
        <div className="flex items-center gap-2 font-semibold text-gray-700">
          <Brain className="w-5 h-5" />
          <a
            href="https://chat.openai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-blue-600 transition-colors"
          >
            ChatGPT
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <div className="flex items-center gap-2 font-semibold text-gray-700">
          <Bot className="w-5 h-5" />
          <a
            href="https://claude.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-blue-600 transition-colors"
          >
            Claude
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <div className="flex items-center gap-2 font-semibold text-gray-700">
          <SparkleIcon className="w-5 h-5" />
          <a
            href="https://perplexity.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-blue-600 transition-colors"
          >
            Perplexity
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="divide-y divide-gray-200">
        <div className="grid grid-cols-4 gap-4 p-6">
          <div className="font-medium text-gray-900">個人事業主の処理</div>
          <div className="text-gray-600">
            30万円未満の資産に対する特例償却（青色申告）
            <br />
            5年間の通常償却（白色申告）
          </div>
          <div className="text-gray-600">
            4年間の減価償却期間
            <br />
            iPhone：年間3.25万円
            <br />
            PC：年間7万円
          </div>
          <div className="text-gray-600">
            4年間の減価償却が必要
            <br />
            定額法または定率法の選択可
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 p-6">
          <div className="font-medium text-gray-900">法人の処理</div>
          <div className="text-gray-600">
            iPhone：3年間の均等償却
            <br />
            PC：5年間の償却
          </div>
          <div className="text-gray-600">
            30万円未満の特例により一括経費計上可能
          </div>
          <div className="text-gray-600">
            両方とも一括償却可能（30万円未満）
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 p-6">
          <div className="font-medium text-gray-900">主な相違点</div>
          <div className="text-gray-600">
            - 事業用・個人用の使用割合の考慮
            <br />
            - 青色・白色申告での取扱いの違い
          </div>
          <div className="text-gray-600">
            - 償却期間に重点
            <br />
            - 具体的な計算例の提示
          </div>
          <div className="text-gray-600">
            - キャッシュフローへの影響
            <br />
            - 事務手続きの違い
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 p-6">
          <div className="font-medium text-gray-900">法的根拠</div>
          <div className="text-gray-600">
            - 所得税法第45条
            <br />
            - 法人税法第133条
          </div>
          <div className="text-gray-600">
            - 所得税法第49条
            <br />
            - 法人税法第64条
          </div>
          <div className="text-gray-600">
            複数の引用元：
            <br />
            - 所得税法
            <br />
            - 法人税法
          </div>
        </div>
      </div>
    </div>
  );
}