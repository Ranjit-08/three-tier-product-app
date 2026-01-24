import { useEffect, useState } from "react";
import API from "../api";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/api/products/list").then(res => setProducts(res.data));
  }, []);

  return (
    <>
      <h2 className="text-3xl font-semibold mb-6">Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(p => (
          <div key={p.id} className="bg-white rounded-xl shadow">
            <img
              src={p.image}
              className="h-48 w-full object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="font-bold">{p.name}</h3>
              <p className="text-gray-600">₹{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
