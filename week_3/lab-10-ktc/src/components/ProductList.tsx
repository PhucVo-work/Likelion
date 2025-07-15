import {
  useGetProductsQuery,
  useDeleteProductMutation,
} from "../services/apiSlice";
import { Link } from "react-router-dom";
import type { Product } from "../types/product.type";

const ProductList: React.FC = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteProduct(id);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as any).message}</div>;

  return (
    <div>
      <h2>Product List</h2>
      <Link to="/add">Add New Product</Link>
      <ul>
        {products?.map((product: Product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <Link to={`/product/${product.id}`}>View</Link>
            <Link to={`/edit/${product.id}`}>Edit</Link>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
