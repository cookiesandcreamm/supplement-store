"use client";

import React from "react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="flex flex-col gap-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center border p-4 rounded">
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-between items-center">
            <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
            <div className="flex gap-4">
              <button
                onClick={clearCart}
                className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded"
              >
                Clear Cart
              </button>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
