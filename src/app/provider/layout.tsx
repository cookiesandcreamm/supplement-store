// src/app/provider/layout.tsx
import { OrdersProvider } from "@/context/OrdersContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProviderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <OrdersProvider>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 container mx-auto px-4 py-6">{children}</main>

        <Footer />
      </div>
    </OrdersProvider>
  );
}
