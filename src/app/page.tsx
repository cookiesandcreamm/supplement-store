import React from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  const bestSellers = products.filter((p) => p.isBestSeller);

  return (
    <div className="flex flex-col gap-12 p-8">
      {/* Welcome Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Supplement Store</h1>
        <p className="text-gray-700 max-w-xl mx-auto">
          Shop the best supplements to fuel your fitness journey.
        </p>
      </div>

      {/* Carousel Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Best Sellers</h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
