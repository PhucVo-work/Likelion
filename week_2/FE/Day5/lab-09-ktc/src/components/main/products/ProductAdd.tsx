import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ProductForm } from "../../types/ProductForm.types";
import { getAlllProducts, createProduct } from "../../../services/productApi";

const ProductAdd = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<ProductForm>({
    id: "",
    name: "",
    price: 0,
    brand: "",
    category: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const trimmedName = form.name.trim();
    if (
      !trimmedName.trim() ||
      !form.price ||
      !form.brand.trim() ||
      !form.category.trim()
    ) {
      setError("Vui lòng nhập đầy đủ thông tin (không để trống).");
      setLoading(false);
      return;
    }

    if (Number(form.price) <= 0) {
      setError("Giá phải lớn hơn 0.");
      setLoading(false);
      return;
    }

    try {
      const existing = await getAlllProducts();
      const duplicate = existing.find(
        (p) => p.name.trim().toLowerCase() === trimmedName.toLowerCase()
      );
      if (duplicate) {
        setError("Tên sản phẩm đã tồn tại. Vui lòng chọn tên khác.");
        setLoading(false);
        return;
      }

      await createProduct({
        name: trimmedName,
        price: Number(form.price),
        brand: form.brand.trim(),
        category: form.category.trim(),
      });

      alert("Thêm sản phẩm thành công!");
      navigate("/");
    } catch (err) {
      setError("Lỗi khi thêm sản phẩm: " + err);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md py-10 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Thêm sản phẩm</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Tên sản phẩm"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          disabled={loading}
        />
        <input
          type="number"
          name="price"
          placeholder="Giá"
          value={form.price}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          disabled={loading}
        />
        <input
          type="text"
          name="brand"
          placeholder="Thương hiệu"
          value={form.brand}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          disabled={loading}
        />
        <input
          type="text"
          name="category"
          placeholder="Danh mục"
          value={form.category}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          disabled={loading}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? "Đang thêm..." : "Thêm"}
        </button>
      </form>
    </div>
  );
};

export default ProductAdd;
