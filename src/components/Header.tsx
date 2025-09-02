import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full">
      {/* Color bar */}
      <div className="bg-blue-600 h-2"></div>

      {/* Header content */}
      <div className="bg-gray-100 shadow-md p-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Title */}
          <h1 className="text-2xl font-bold text-center w-full md:w-auto mb-4 md:mb-0">
            Supplement Store
          </h1>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-6 w-full md:w-auto">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/store" className="hover:text-blue-600 transition-colors">
              All Products
            </Link>
            <Link href="/cart" className="hover:text-blue-600 transition-colors">
              Cart
            </Link>
            <Link href="/provider" className="hover:text-blue-600 transition-colors">
              Provider Portal
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
