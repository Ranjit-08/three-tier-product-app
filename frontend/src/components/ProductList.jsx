import { useEffect, useState } from "react";
import api from "../api";

export default function ProductList({ onSelect }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id} className="card" onClick={() => onSelect(p)}>
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
        </div>
      ))}
    </div>
  );
}
