import { useState } from "react";
import ProductList from "./components/ProductList";
import OrderForm from "./components/OrderForm";

export default function App() {
  const [product, setProduct] = useState(null);

  return (
    <div style={{ padding: 20 }}>
      <h1>Product Store</h1>
      {!product ? <ProductList onSelect={setProduct} /> : <OrderForm product={product} />}
    </div>
  );
}
