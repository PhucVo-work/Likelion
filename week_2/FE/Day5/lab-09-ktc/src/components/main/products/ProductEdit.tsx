import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { ProductForm } from "../../types/ProductForm.types";
import { getProductById, updateProduct } from "../../../services/productApi";

const ProductEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [form, setForm] = useState<ProductForm>({
    id: "",
    name: "",
    price: 0,
    brand: "",
    category: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      try {
        const product = await getProductById(id);
        setForm({
          id: product.id,
          name: product.name,
          price: product.price,
          brand: product.brand || "",
          category: product.category || "",
        });
      } catch (err) {
        setError("Lỗi khi tải sản phẩm: " + err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const trimmedName = form.name.trim();
    if (
      !trimmedName ||
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

    const confirmUpdate = window.confirm(
      "Bạn có chắc chắn muốn cập nhật sản phẩm này không?"
    );
    if (!confirmUpdate) {
      setLoading(false);
      return;
    }

    try {
      await updateProduct(form.id, {
        name: trimmedName,
        price: Number(form.price),
        brand: form.brand.trim(),
        category: form.category.trim(),
      });

      alert("Cập nhật sản phẩm thành công!");
      navigate("/");
    } catch (err) {
      setError("Lỗi khi cập nhật sản phẩm: " + err);
      setLoading(false);
    }
  };

  if (loading) return <div>Đang tải...</div>;

  return (
    <div className="max-w-md py-10 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Sửa sản phẩm</h1>
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
          {loading ? "Đang cập nhật..." : "Cập nhật"}
        </button>
      </form>
    </div>
  );
};

export default ProductEdit;
