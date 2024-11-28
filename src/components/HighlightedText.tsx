import React from 'react';

interface HighlightedTextProps {
  children: React.ReactNode;
}

export function HighlightedText({ children }: HighlightedTextProps) {
  return (
    <span className="font-bold text-red-600">
      {children}
    </span>
  );
}