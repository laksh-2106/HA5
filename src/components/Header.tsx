import React from 'react';
import { Heart, Calendar } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-pink-200 via-purple-200 to-pink-200 shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center space-x-3">
          <Heart className="w-8 h-8 text-pink-600 animate-pulse" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Love Story
          </h1>
          <Heart className="w-8 h-8 text-pink-600 animate-pulse" />
        </div>
        <div className="flex items-center justify-center mt-2 space-x-2">
          <Calendar className="w-5 h-5 text-purple-600" />
          <p className="text-lg text-gray-700 font-medium">5 Beautiful Years Together</p>
        </div>
      </div>
    </header>
  );
}