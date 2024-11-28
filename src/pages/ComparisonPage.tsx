import React from 'react';
import { ComparisonTable } from '../components/ComparisonTable';
import { Summary } from '../components/Summary';
import { getCurrentFormattedDate } from '../utils/dateUtils';

export function ComparisonPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            AIプラットフォーム比較：会計処理の分析レポート
          </h1>
          <div className="flex items-center text-gray-600 mb-8">
            <span className="mr-4">投稿日: {getCurrentFormattedDate()}</span>
            <span className="mr-4">|</span>
            <span>カテゴリー: AI分析</span>
          </div>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              今回は、ChatGPT、Claude、Perplexityの3つのAIプラットフォームに同じ質問をして、
              その回答を比較分析してみました。質問内容は、個人事業主と法人における
              iPhone（13万円）とPC（28万円）の会計処理の違いについてです。
            </p>
            <ComparisonTable />
            <Summary />
          </div>
        </div>
      </article>
    </div>
  );
}