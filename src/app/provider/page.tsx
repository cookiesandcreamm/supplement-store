"use client";

import Link from "next/link";
import { orders } from "@/data/orders";

export default function ProviderPortal() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Provider Portal</h1>
      <p className="text-gray-600">
        Manage your store orders and view detailed order information.
      </p>

      <div className="mt-4">
        <h2 className="text-2xl font-semibold mb-2">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Order ID</th>
                <th className="border px-4 py-2">Customer</th>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Status</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="text-center">
                  <td className="border px-4 py-2">{order.id}</td>
                  <td className="border px-4 py-2">{order.customerName}</td>
                  <td className="border px-4 py-2">
                    {new Date(order.date).toLocaleDateString()}
                  </td>
                  <td className="border px-4 py-2">{order.status}</td>
                  <td className="border px-4 py-2">
                    <Link
                      href={`/provider/orders/${order.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
