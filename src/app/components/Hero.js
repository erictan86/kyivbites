import { ChefHat } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1612540943977-98ce54bfa47b?auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)'
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 bg-black bg-opacity-40">
        <div className="flex items-center gap-3 mb-6">
          <ChefHat size={40} className="text-yellow-400" />
          <h2 className="text-2xl font-bold">Baba's Dumplings</h2>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
          Authentic Ukrainian
          <span className="block text-yellow-400">Handmade Dumplings</span>
        </h1>
        <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
          Experience the taste of tradition with our family recipes, 
          crafted with love and served with pride
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition-all text-lg">
            Order Now
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all text-lg">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
}