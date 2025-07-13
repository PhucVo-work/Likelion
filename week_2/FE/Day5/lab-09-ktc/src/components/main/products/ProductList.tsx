import React, { useEffect, useState } from "react";
import type { Product } from "../../types/Products.types";
import { useNavigate } from "react-router-dom";
import { deleteProduct, getAlllProducts } from "../../../services/productApi";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAlllProducts();
      setProducts(data);
      console.log(data);
    } catch (error) {
      setError("Không thể tải sản phẩm, lỗi: " + error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm("Bạn có muốn xóa sản phẩm này không?")) {
      try {
        await deleteProduct(id);
        alert("Xóa sản phẩm thành công");
        fetchProducts();
      } catch (error) {
        alert("Lỗi khi xóa sản phẩm, Lỗi: " + error);
      }
    }
  };

  const handleUpdate = (id: string) => {
    if (window.confirm("Bạn có muốn sửa sản phẩm này không?")) {
      navigate(`/products/${id}/edit`);
    }
  };

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <button onClick={() => navigate("/products/add")}>Thêm sản phẩm</button>
      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <table border={1} cellPadding={8} style={{ marginTop: 16 }}>
          <thead>
            <tr>
              <th>Mã số</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Thương hiệu</th>
              <th>Danh mục</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>{prod.brand}</td>
                <td>{prod.category}</td>
                <td>
                  <button
                    onClick={() => navigate(`/products/${prod.id}`)}
                    style={{
                      backgroundColor: "#3498db",
                      color: "#fff",
                      marginRight: 8,
                    }}
                  >
                    Xem
                  </button>
                  <button
                    onClick={() => handleUpdate(prod.id)}
                    style={{
                      backgroundColor: "#f1c40f",
                      color: "#000",
                      marginRight: 8,
                    }}
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() => handleDelete(prod.id)}
                    style={{ backgroundColor: "#e74c3c", color: "#fff" }}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductList;
