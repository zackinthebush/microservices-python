import React from 'react';
import Product from './admin/Products';
import Main from './main/main';
import ProductCreate from './admin/ProductCreate';
import ProductsEdit from './admin/ProductsEdit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/admin/products" element={<Product />} />
          <Route path="/admin/products/create" element={<ProductCreate />} />
          <Route path='/admin/products/:id/edit' element={<ProductsEdit/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;