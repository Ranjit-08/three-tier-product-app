import { useState } from "react";
import api from "../api";

export default function OrderForm({ product }) {
  const [name, setName] = useState("");
  const [qty, setQty] = useState(1);

  const submit = () => {
    api.post("/orders", {
      customer_name: name,
      product_id: product.id,
      quantity: qty,
    }).then(() => alert("Order placed"));
  };

  return (
    <div>
      <h2>Order {product.name}</h2>
      <input placeholder="Your Name" onChange={e => setName(e.target.value)} />
      <input type="number" value={qty} onChange={e => setQty(e.target.value)} />
      <button onClick={submit}>Place Order</button>
    </div>
  );
}
