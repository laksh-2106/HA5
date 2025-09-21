import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 flex items-center justify-center overflow-hidden">
      {/* Floating hearts animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-pink-300 opacity-20 animate-bounce`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              fontSize: `${20 + Math.random() * 20}px`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <Sparkles className="w-12 h-12 text-gold-500 mx-auto mb-4 animate-spin" style={{color: '#FFD700'}} />
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 mb-4">
            Happy Anniversary
          </h1>
          <h2 className="text-4xl md:text-6xl font-script text-purple-700 mb-6" style={{fontFamily: 'Dancing Script, cursive'}}>
            Shakshi ❤️
          </h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-pink-200">
          <div className="flex items-center justify-center mb-6">
            <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center text-white font-bold animate-pulse`}
                  style={{animationDelay: `${i * 0.5}s`}}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Five Amazing Years Together
          </h3>
          
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
            Today marks 5 incredible years of love, laughter, and unforgettable memories. 
            Every moment with you has been a beautiful adventure, and I can't wait for 
            all the amazing years ahead of us. You make every day brighter, my love! ✨
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">1,825</div>
              <div className="text-gray-600">Days Together</div>
            </div>
            <Heart className="w-6 h-6 text-pink-500" />
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">∞</div>
              <div className="text-gray-600">Love for You</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}