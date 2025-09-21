import { useState } from "react";
import { Heart, Camera, X, ChevronLeft, ChevronRight } from "lucide-react";

// Import images from src/assets
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";

const placeholderPhotos = [
  { id: "1", src: pic1 },
  { id: "2", src: pic2 },
  { id: "3", src: pic3 },
  { id: "4", src: pic4 },
  { id: "5", src: pic5 },
];

export default function PhotoGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prevPhoto = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? placeholderPhotos.length - 1 : prev - 1
    );

  const nextPhoto = () =>
    setCurrentIndex((prev) =>
      prev === placeholderPhotos.length - 1 ? 0 : prev + 1
    );

  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Beautiful Memories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every photo tells a story of our love, capturing the precious
            moments we've shared together
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {placeholderPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={photo.src}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-64 sm:h-72 md:h-80 lg:h-64 xl:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/30 backdrop-blur-sm rounded-full p-2 hover:bg-white/50 transition-colors">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Count */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg animate-fadeIn">
            <Heart className="w-5 h-5 text-pink-500 animate-pulse" />
            <span className="text-gray-700 font-medium">
              {placeholderPhotos.length} Beautiful Memories & Counting...
            </span>
            <Heart className="w-5 h-5 text-pink-500 animate-pulse" />
          </div>
        </div>

        {/* Lightbox Overlay */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-white/20 transition"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous */}
            <button
              className="absolute left-6 text-white p-2 rounded-full hover:bg-white/20 transition"
              onClick={prevPhoto}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Next */}
            <button
              className="absolute right-6 text-white p-2 rounded-full hover:bg-white/20 transition"
              onClick={nextPhoto}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Current Image */}
            <img
              src={placeholderPhotos[currentIndex].src}
              alt={`Photo ${currentIndex + 1}`}
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-xl"
            />
          </div>
        )}
      </div>
    </section>
  );
}
