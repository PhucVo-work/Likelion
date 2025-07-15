import { useParams, Link } from "react-router-dom";
import { useGetProductByIdQuery } from "../services/apiSlice";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading, error } = useGetProductByIdQuery(id!);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as any).message}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description || "N/A"}</p>
      <p>Category: Marisa{product.category || "N/A"}</p>
      <Link to="/">Back to List</Link>
    </div>
  );
};

export default ProductDetail;
