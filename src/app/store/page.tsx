"use client"; // needed because we use useState

import React, { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function AllProductsPage() {
  const [search, setSearch] = useState("");
  const [filterBestSeller, setFilterBestSeller] = useState(false);
  const [sort, setSort] = useState<"price-asc" | "price-desc" | "alpha" | "best" | "none">("none");

  // Filter and sort products
  const filteredProducts = products
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      (p.description && p.description.toLowerCase().includes(search.toLowerCase()))
    )
    .filter((p) => (filterBestSeller ? p.isBestSeller : true))
    .sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "alpha":
          return a.name.localeCompare(b.name);
        case "best":
          return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
        default:
          return 0;
      }
    });

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">All Products</h1>

      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <input
          type="text"
          placeholder="Search products..."
          className="border rounded p-2 flex-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filterBestSeller}
            onChange={(e) => setFilterBestSeller(e.target.checked)}
          />
          Best Sellers
        </label>
        <select
          className="border rounded p-2"
          value={sort}
          onChange={(e) => setSort(e.target.value as any)}
        >
          <option value="none">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="alpha">Alphabetical</option>
          <option value="best">Best Sellers</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-gray-500 mt-4">No products found.</p>
      )}
    </div>
  );
}
