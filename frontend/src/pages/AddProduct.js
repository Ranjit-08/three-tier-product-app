import { useState } from "react";
import API from "../api";

export default function AddProduct() {
  const [form, setForm] = useState({ name: "", price: "", image: "" });

  const submit = async () => {
    await API.post("/api/products/add", form);
    alert("Product added");
    setForm({ name: "", price: "", image: "" });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Add Product</h2>

      {["name", "price", "image"].map((field) => (
        <input
          key={field}
          placeholder={field.toUpperCase()}
          value={form[field]}
          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      ))}

      <button
        onClick={submit}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Add Product
      </button>
    </div>
  );
}
