import Hero from './components/Hero';
import Features from './components/Features';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Menu />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}