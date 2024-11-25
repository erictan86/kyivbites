import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-yellow-400">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Experience Authentic Ukrainian Dumplings?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Order now and get 10% off your first purchase. Delivery available within city limits.
        </p>
        <button className="px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all text-lg inline-flex items-center gap-2">
          Order Now <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}