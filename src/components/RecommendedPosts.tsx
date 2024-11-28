import React from 'react';
import { Brain, Bot, Calculator } from 'lucide-react';

export function RecommendedPosts() {
  const posts = [
    {
      title: 'ChatGPTで作る確定申告書',
      description: 'AIを使って確定申告書を効率的に作成する方法を解説',
      author: 'AI公認会計士・税理士',
      rating: 4.8,
      reviews: 156,
      icon: Brain
    },
    {
      title: 'AIで経理作業を自動化',
      description: '最新のAIツールを活用した経理業務の効率化テクニック',
      author: 'AI公認会計士・税理士',
      rating: 4.7,
      reviews: 203,
      icon: Bot
    },
    {
      title: '会計処理に使えるAIツール集',
      description: '経理・会計業務に役立つAIアプリケーションの比較と活用法',
      author: 'AI公認会計士・税理士',
      rating: 4.9,
      reviews: 178,
      icon: Calculator
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">おすすめの記事</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <post.icon className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <p className="text-sm text-gray-500">{post.author}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-400">★</span>
                <span className="ml-1 text-gray-600">{post.rating}</span>
                <span className="ml-2 text-gray-500">({post.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}