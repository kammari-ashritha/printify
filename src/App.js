import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AllProductsPage from './pages/AllProductsPage';
import DealsPage from './pages/DealsPage';
import HelpPage from './pages/HelpPage';
import QuotePage from './pages/QuotePage';
import DesignServicesPage from './pages/DesignServicesPage';
import LoginPage from './pages/LoginPage';
import AccountPage from './pages/AccountPage'; // <-- IMPORT WAS MISSING
import CartPage from './pages/CartPage';       // <-- IMPORT WAS MISSING
import SignupPage from './pages/SignupPage'; // <-- IMPORT

import './App.css';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/deals" element={<DealsPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/design-services" element={<DesignServicesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signup" element={<SignupPage />} /> 
        {/* <-- ADD THIS ROUTE */}
      </Routes>
    </div>
  );
}

export default App;