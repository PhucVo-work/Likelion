import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from '../components/main/products/ProductList';
import ProductAdd from '../components/main/products/ProductAdd';
import ProductDetail from '../components/main/products/ProductDetail';
import ProductEdit from '../components/main/products/ProductEdit';


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />}></Route>
        <Route path="/products/add" element={<ProductAdd />}></Route>
        <Route path="/products/:id" element={<ProductDetail />}></Route>
        <Route path="/products/:id/edit/" element={<ProductEdit />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes
