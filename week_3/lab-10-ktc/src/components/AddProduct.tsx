import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useAddProductMutation,
  useGetProductsQuery,
} from "../services/apiSlice";
import type { Product } from "../types/product.type";

const AddProduct: React.FC = () => {
  const [formData, setFormData] = useState<Partial<Product>>({
    name: "",
    price: 0,
    description: "",
    category: "",
  });
  const [addProduct] = useAddProductMutation();
  const { data: products } = useGetProductsQuery();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (products?.some((p) => p.name === formData.name)) {
      alert("Product name already exists!");
      return;
    }
    try {
      await addProduct({
        name: formData.name ?? "",
        price: formData.price ?? 0,
        description: formData.description ?? "",
        category: formData.category ?? "",
      }).unwrap();
      setFormData({ name: "", price: 0, description: "", category: "" });
      navigate("/");
    } catch (error) {
      alert("Failed to add product");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={formData.price || ""}
            onChange={handleChange}
            min="0"
            required
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={formData.description || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={formData.category || ""}
            onChange={handleChange}
          />
        </div>
        <Link to="/">Cancel</Link>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
