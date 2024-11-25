import { Leaf, Timer, Award, Heart } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="w-8 h-8 text-green-600" />,
    title: "Fresh Ingredients",
    description: "Locally sourced, premium ingredients for authentic taste"
  },
  {
    icon: <Timer className="w-8 h-8 text-blue-600" />,
    title: "Made Daily",
    description: "Fresh batches prepared every morning"
  },
  {
    icon: <Award className="w-8 h-8 text-yellow-600" />,
    title: "Family Recipe",
    description: "Traditional recipes passed down through generations"
  },
  {
    icon: <Heart className="w-8 h-8 text-red-600" />,
    title: "Made with Love",
    description: "Each dumpling crafted with care and attention"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose Our Dumplings?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-gray-50 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}