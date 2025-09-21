import React from 'react';
import { Heart, Star, Gift, Camera, Plane, Home } from 'lucide-react';

const timelineEvents = [
  {
    year: 'Year 1',
    title: 'The Beginning',
    description: 'Where our beautiful love story began ❤️',
    icon: Heart,
    color: 'from-pink-400 to-red-400'
  },
  {
    year: 'Year 2',
    title: 'Growing Stronger',
    description: 'Learning and growing together, building trust and deeper love',
    icon: Star,
    color: 'from-purple-400 to-pink-400'
  },
  {
    year: 'Year 3',
    title: 'Special Moments',
    description: 'Creating unforgettable memories and celebrating milestones',
    icon: Gift,
    color: 'from-blue-400 to-purple-400'
  },
  {
    year: 'Year 4',
    title: 'Adventures Together',
    description: 'Exploring the world and making every day an adventure',
    icon: Plane,
    color: 'from-green-400 to-blue-400'
  },
  {
    year: 'Year 5',
    title: 'Our Present',
    description: 'Celebrating 5 amazing years and looking forward to forever',
    icon: Home,
    color: 'from-pink-400 to-purple-400'
  }
];

export default function Timeline() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Journey Through Time
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every year has been a new chapter in our love story, filled with growth, 
            joy, and countless precious moments together
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline line */}
              {index < timelineEvents.length - 1 && (
                <div className="absolute left-6 md:left-1/2 top-20 w-0.5 h-20 bg-gradient-to-b from-pink-300 to-purple-300 transform md:-translate-x-0.5"></div>
              )}
              
              <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border-l-4 border-pink-400">
                    <div className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${event.color} mb-2`}>
                      {event.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div className="flex-shrink-0 my-6 md:my-0">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300`}>
                    <event.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="w-full md:w-5/12"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}