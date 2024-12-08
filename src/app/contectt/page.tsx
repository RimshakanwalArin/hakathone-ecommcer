// components/FeaturedProducts.tsx
import React from "react";

const products = [
  { id: 1, name: "Library Stool Chair", price: 50, image: "/images/chair-1.jpg" },
  { id: 2, name: "Modern Chair", price: 60, image: "/images/chair-2.jpg" },
  { id: 3, name: "Minimalist Chair", price: 70, image: "/images/chair-3.jpg" },
  { id: 4, name: "Comfort Chair", price: 80, image: "/images/chair-4.jpg" },
  { id: 5, name: "Classic Chair", price: 90, image: "/images/chair-5.jpg" },
];

const FeaturedProducts: React.FC = () => {
  return (
    <div className="px-8 py-12">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <button className="text-blue-500 hover:underline">View All</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 hover:shadow-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-cover rounded-md"
            />
            <h3 className="mt-4 text-sm font-medium">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
