import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PhotoGallery from './components/PhotoGallery';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PhotoGallery />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;