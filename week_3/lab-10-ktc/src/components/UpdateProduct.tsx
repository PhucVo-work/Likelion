import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "../services/apiSlice";
import type { Product } from "../types/product.type";

const UpdateProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading, error } = useGetProductByIdQuery(id!);
  const [updateProduct] = useUpdateProductMutation();
  const [formData, setFormData] = useState<Partial<Product>>({});
  const navigate = useNavigate();

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (window.confirm("Are sure you want to update this product?")) {
      try {
        await updateProduct({
          id: id!,
          name: formData.name ?? "",
          price: formData.price ?? 0,
          description: formData.description ?? "",
          category: formData.category ?? "",
        }).unwrap();
        navigate("/");
      } catch (error) {
        alert("Failed to update product");
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as any).message}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h2>Update Product</h2>
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
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
