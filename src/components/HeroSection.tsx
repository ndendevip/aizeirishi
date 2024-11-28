import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const titles = [
  {
    main: "かんたん！AI確定申告",
    sub: "AIを活用して税務処理を自計化！",
    gradient: "from-emerald-600 to-teal-700",
    description: "初めての確定申告も、AIがしっかりサポート"
  },
  {
    main: "フリーランスのAI会計術",
    sub: "AIを活用して会計処理を自計化！",
    gradient: "from-blue-600 to-indigo-700",
    description: "もう経理要員は要らない時代へ！？"
  },
  {
    main: "使える会計AI活用術",
    sub: "AIツールで経理作業を効率化",
    gradient: "from-purple-600 to-pink-700",
    description: "経理作業に使える最新AIツールを徹底解説"
  }
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % titles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + titles.length) % titles.length);
  };

  return (
    <div className="relative bg-gray-100 py-12">
      <div className="max-w-[75%] mx-auto relative">
        <button
          onClick={prevSlide}
          className="absolute -left-16 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 p-4 rounded-full shadow-lg text-gray-600 hover:text-gray-900 transition-colors z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-16 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 p-4 rounded-full shadow-lg text-gray-600 hover:text-gray-900 transition-colors z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="hero-slider bg-white shadow-xl">
          {titles.map((title, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
            >
              <div className="p-12">
                <div className="w-2/3">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    {title.main}
                  </h1>
                  <p className="text-xl text-gray-600 mb-4">
                    {title.sub}
                  </p>
                  <p className="text-lg text-gray-500">
                    {title.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-6">
          {titles.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                currentIndex === index ? 'bg-gray-900' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}