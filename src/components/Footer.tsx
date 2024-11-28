import React from 'react';
import { Brain } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Brain className="h-6 w-6 text-emerald-400" />
              <h3 className="text-lg font-semibold ml-2">かんたん！AI確定申告</h3>
            </div>
            <p className="text-gray-400">
              AIを使って、確定申告をもっと身近に、もっとカンタンに。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">カテゴリー</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-emerald-400">AI活用術</a></li>
              <li><a href="#" className="hover:text-emerald-400">確定申告の基本</a></li>
              <li><a href="#" className="hover:text-emerald-400">経理のコツ</a></li>
              <li><a href="#" className="hover:text-emerald-400">節税テクニック</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
            <p className="text-gray-400">
              分からないことがあれば、お気軽にご相談ください！
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2024 かんたん！AI確定申告. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}