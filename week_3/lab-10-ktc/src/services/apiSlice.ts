import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "../types/product.type";


export const PhonesApi = createApi({
  reducerPath: "PhonesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6873a019c75558e27354be00.mockapi.io/api/v1/",
  }),
  tagTypes: ["Phones"],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/Phones",
      providesTags: ["Phones"],
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `/Phones/${id}`,
      providesTags: ["Phones"],
    }),
    addProduct: builder.mutation<Product, Omit<Product, "id">>({
      query: (newProduct) => ({
        url: "/Phones",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Phones"],
    }),
    updateProduct: builder.mutation<Product, Product>({
      query: ({ id, ...updates }) => ({
        url: `/Phones/${id}`,
        method: "PUT",
        body: updates,
      }),
      invalidatesTags: ["Phones"],
    }),
    deleteProduct: builder.mutation<void, string>({
      query: (id) => ({
        url: `/Phones/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Phones"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = PhonesApi;
