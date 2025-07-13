import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import type { Product } from '../../types/Products.types';
import "../../../App.css"
import { getProductById } from '../../../services/productApi';

const ProductDetail = () => {
    const  { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(()=> {
        const fetchProduct = async () => {
            try {
              if (id) {
                const data = await getProductById(id);
                setProduct(data);
              }
            } catch (error) {
              setError("Không thể tải sản phẩm. Lỗi: " + error);
            } finally {
                setLoading(false)
            }
        }

        fetchProduct()
    }, [id]) 
    
    if(loading) return <span>Đang tải... </span>
    if(error) return <p style={{color: "red"}}>{error}</p>
    if(!product) return <p>sản phẩm ko tồn tại</p>
  return (
    <div>
      <h2>Chi tiết sản phẩm</h2>
      <ul>
        <li>
          <strong>ID:</strong> {product.id}
        </li>
        <li>
          <strong>Tên:</strong> {product.name}
        </li>
        <li>
          <strong>Giá:</strong> {product.price}
        </li>
        <li>
          <strong>Thương hiệu:</strong> {product.brand}
        </li>
        <li>
          <strong>Loại:</strong> {product.category}
        </li>
      </ul>
      <button onClick={() => navigate("/")} className="btn-back">
        Quay về
      </button>
    </div>
  );
}

export default ProductDetail
