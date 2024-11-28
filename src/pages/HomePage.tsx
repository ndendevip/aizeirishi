import React from 'react';
import { Link } from 'react-router-dom';
import { RecommendedPosts } from '../components/RecommendedPosts';
import { Brain, Bot, SparkleIcon } from 'lucide-react';
import { HeroSection } from '../components/HeroSection';
import { getCurrentFormattedDate } from '../utils/dateUtils';

export function HomePage() {
  const currentDate = getCurrentFormattedDate();

  return (
    <div>
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">最新の記事</h2>
          <div className="grid grid-cols-1 gap-8">
            <Link 
              to="/ai-future"
              className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Brain className="w-8 h-8 text-emerald-600" />
                  <Bot className="w-8 h-8 text-emerald-600" />
                  <SparkleIcon className="w-8 h-8 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  AIが変える会計の未来
                </h2>
                <p className="text-gray-600 mb-4">
                  AIの発達による経理業務の自動化から、人間に求められる新しいスキルまで。
                  激動のAI時代を生き抜くためのヒントをご紹介します。
                </p>
                <div className="flex items-center text-gray-500">
                  <span className="mr-4">投稿日: {currentDate}</span>
                  <span className="mr-4">|</span>
                  <span>カテゴリー: AI技術動向</span>
                </div>
              </div>
            </Link>

            <Link 
              to="/comparison"
              className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Brain className="w-8 h-8 text-blue-600" />
                  <Bot className="w-8 h-8 text-green-600" />
                  <SparkleIcon className="w-8 h-8 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  AIプラットフォーム比較：会計処理の分析レポート
                </h2>
                <p className="text-gray-600 mb-4">
                  ChatGPT、Claude、Perplexityの3つのAIプラットフォームによる会計処理の回答を比較分析。
                  個人事業主と法人におけるiPhoneとPCの購入に関する会計処理の違いを解説します。
                </p>
                <div className="flex items-center text-gray-500">
                  <span className="mr-4">投稿日: {currentDate}</span>
                  <span className="mr-4">|</span>
                  <span>カテゴリー: AI分析</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
        <RecommendedPosts />
      </div>
    </div>
  );
}