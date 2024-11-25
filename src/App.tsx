import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Menu />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;