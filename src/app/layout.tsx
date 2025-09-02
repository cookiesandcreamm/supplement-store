import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { OrdersProvider } from "@/context/OrdersContext";

export function ProviderLayout({ children }: { children: React.ReactNode }) {
  return <OrdersProvider>{children}</OrdersProvider>;
}

export const metadata: Metadata = {
  title: "Supplement Store",
  description: "Shop high-quality supplements and manage orders in the provider portal.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          {/* Header at the top */}
          <Header />

          {/* Main content */}
          <main className="flex-1 container mx-auto px-4 py-6">{children}</main>

          {/* Footer at the bottom */}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
