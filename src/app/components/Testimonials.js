import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah K.",
    text: "These dumplings remind me of my grandmother's cooking. Absolutely authentic and delicious!",
    rating: 5
  },
  {
    name: "Michael R.",
    text: "Best Ukrainian dumplings in the city! The potato and cheese filling is to die for.",
    rating: 5
  },
  {
    name: "Anna M.",
    text: "Finally found genuine Ukrainian dumplings! The taste brings back memories of home.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}