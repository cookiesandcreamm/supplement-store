"use client";

import React, { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { orders as dummyOrders, Order } from "@/data/orders";

interface OrdersContextType {
  orders: Order[];
  updateOrderStatus: (id: string, status: Order["status"]) => void;
}

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

export const OrdersProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>(dummyOrders);

  const updateOrderStatus = (id: string, status: Order["status"]) => {
    setOrders((prev) =>
      prev.map((order) => (order.id === id ? { ...order, status } : order))
    );
  };

  // Use useMemo to prevent the object from changing every render
  const value = useMemo(
    () => ({ orders, updateOrderStatus }),
    [orders] // only recreate when orders changes
  );

  return <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>;
};

export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (!context) throw new Error("useOrders must be used within OrdersProvider");
  return context;
};
