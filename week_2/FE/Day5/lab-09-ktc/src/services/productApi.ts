
import axiosProductClient from "../api/axiosProductClient";
import type { Product } from "../components/types/Products.types";

export const getAlllProducts = async (): Promise<Product[]> => {
  const response = await axiosProductClient.get<Product[]>("/Phones");
  return response.data;
};

export const getProductById = async (id: string): Promise<Product> => {
  const response = await axiosProductClient.get<Product>(`/Phones/${id}`);
  return response.data;
};

export const createProduct = async (
  data: Omit<Product, "id">
): Promise<Product> => {
  const response = await axiosProductClient.post<Product>("/Phones", data);
  return response.data;
};

export const updateProduct = async (
  id: string,
  data: Partial<Product>
): Promise<Product> => {
  const response = await axiosProductClient.put<Product>(`/Phones/${id}`, data);
  return response.data;
};

export const deleteProduct = async (id: string): Promise<Product> => {
  const response = await axiosProductClient.delete<Product>(`/Phones/${id}`);
  return response.data;
};
