import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AddProduct from "./pages/AddProduct";
import ProductList from "./pages/ProductList";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<AddProduct />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
