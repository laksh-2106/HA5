import React from 'react';
import { Heart, Infinity } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Heart className="w-8 h-8 animate-pulse" />
            <Infinity className="w-8 h-8" />
            <Heart className="w-8 h-8 animate-pulse" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Forever and Always
          </h3>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
            "In all the world, there is no heart for me like yours. 
            In all the world, there is no love for you like mine." 
            - Maya Angelou
          </p>
        </div>

        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
          <h4 className="text-2xl font-bold mb-4">To My Dearest Shakshi</h4>
          <p className="text-lg text-pink-100 leading-relaxed">
            Thank you for 5 incredible years of love, laughter, and unforgettable memories. 
            You are my sunshine, my best friend, and my greatest love. 
            Here's to many more years of adventures together! 💕
          </p>
        </div>

        <div className="mt-8 text-pink-200">
          <p>Made with ❤️ for our 5th Anniversary</p>
          <p className="text-sm mt-2">
            {new Date().getFullYear()} - Our Love Story Continues...
          </p>
        </div>
      </div>
    </footer>
  );
}