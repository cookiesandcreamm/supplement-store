import Link from "next/link";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  isBestSeller?: boolean;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="w-64 flex-shrink-0 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <div className="h-40 w-full relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        <Link
          href={`/store/products/${product.id}`}
          className="mt-auto text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
