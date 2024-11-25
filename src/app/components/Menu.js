const menuItems = [
  {
    name: "Classic Potato & Cheese",
    description: "Creamy mashed potatoes, farmer's cheese, caramelized onions",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1641645498611-2bb6e52f27ad?auto=format&fit=crop&q=80"
  },
  {
    name: "Savory Mushroom",
    description: "Wild mushrooms, herbs, garlic, sour cream",
    price: "$13.99",
    image: "https://images.unsplash.com/photo-1641645498611-2bb6e52f27ad?auto=format&fit=crop&q=80"
  },
  {
    name: "Traditional Meat",
    description: "Premium ground pork, onions, black pepper",
    price: "$14.99",
    image: "https://images.unsplash.com/photo-1641645498611-2bb6e52f27ad?auto=format&fit=crop&q=80"
  }
];

export default function Menu() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Signature Dumplings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-full">
                    Order Now
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="text-xl font-bold text-yellow-600">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}