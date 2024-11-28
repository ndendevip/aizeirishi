import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center">
            <Brain className="h-8 w-8 text-emerald-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">かんたん！AI確定申告</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-emerald-600">ホーム</Link>
            <Link to="/comparison" className="text-gray-700 hover:text-emerald-600">AI比較</Link>
            <a href="#" className="text-gray-700 hover:text-emerald-600">カテゴリー</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600">お問い合わせ</a>
          </div>
        </div>
      </div>
    </nav>
  );
}