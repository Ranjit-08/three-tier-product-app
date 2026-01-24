import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
          <h1 className="text-xl font-bold text-blue-600">
            Product Dashboard
          </h1>
          <div className="space-x-4">
            <Link to="/" className="hover:text-blue-600">Add Product</Link>
            <Link to="/products" className="hover:text-blue-600">Products</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6">
        {children}
      </main>
    </div>
  );
}
