import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function BackToTop() {
  return (
    <Link 
      to="/"
      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 transition-colors"
    >
      <ArrowLeft className="w-5 h-5 mr-2" />
      <span>トップページに戻る</span>
    </Link>
  );
}