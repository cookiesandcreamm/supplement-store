// src/data/orders.ts

export interface Order {
    id: string;
    customerName: string;
    date: string; // ISO string
    status: "Pending" | "Shipped" | "Delivered";
    products: {
      name: string;
      price: number;
      quantity: number;
    }[];
  }
  
  // Dummy orders for development/testing
  export const orders: Order[] = [
    {
      id: "ORD-1001",
      customerName: "Alice Johnson",
      date: "2025-09-01T10:30:00Z",
      status: "Pending",
      products: [
        { name: "Whey Protein", price: 29.99, quantity: 1 },
        { name: "Creatine Monohydrate", price: 19.99, quantity: 1 },
      ],
    },
    {
      id: "ORD-1002",
      customerName: "Bob Smith",
      date: "2025-09-02T14:20:00Z",
      status: "Shipped",
      products: [
        { name: "Pre-Workout Booster", price: 24.99, quantity: 1 },
      ],
    },
    {
      id: "ORD-1003",
      customerName: "Carol Davis",
      date: "2025-09-03T09:15:00Z",
      status: "Delivered",
      products: [
        { name: "Whey Protein", price: 29.99, quantity: 2 },
        { name: "Pre-Workout Booster", price: 24.99, quantity: 1 },
      ],
    },
  ];
  