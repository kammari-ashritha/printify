// src/pages/ProductPage.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { allProducts } from '../data/mockProducts';
import './ProductPage.css';
import Header from '../components/Header';
import { useCart } from '../context/CartContext'; // <-- 1. IMPORT useCart

const ProductPage = () => {
  const { productId } = useParams();
  const product = allProducts.find(p => p.id === parseInt(productId));
  const { addToCart } = useCart(); // <-- 2. GET addToCart FROM CONTEXT

  const [options, setOptions] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  // ... (the two useEffect hooks for setting options and price remain the same) ...
  useEffect(() => {
    if (product) {
      const defaultOptions = {};
      for (const key in product.options) {
        defaultOptions[key] = product.options[key][0]?.value ?? product.options[key][0];
      }
      setOptions(defaultOptions);
    }
  }, [product]);

  useEffect(() => {
    if (product && Object.keys(options).length > 0) {
      const quantity = options.quantities;
      const basePrice = product.pricing.basePrices[quantity];
      
      let finalPrice = basePrice;
      for (const key in product.pricing.multipliers) {
        if (options[key]) {
          const selectedOption = options[key];
          finalPrice *= product.pricing.multipliers[key][selectedOption];
        }
      }
      
      setTotalPrice(finalPrice);
    }
  }, [options, product]);


  const handleOptionChange = (key, value) => {
    const isNumeric = typeof product.options[key][0] === 'number';
    setOptions(prevOptions => ({
      ...prevOptions,
      [key]: isNumeric ? Number(value) : value,
    }));
  };

  // 3. UPDATE THE handleAddToCart FUNCTION
  const handleAddToCart = () => {
    // Call the global addToCart function
    addToCart(product, options, totalPrice); 
  };

  // ... (the rest of the component remains the same) ...
  if (!product) {
    return (
      <>
        <Header />
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>Product not found!</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="product-container">
        {/* ... product-info div ... */}
        <div className="product-info">
          <img src={product.productImage} alt={product.name} className="product-main-image" />
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
        <div className="product-customizer">
          {/* ... customize & price div ... */}
          <h2>Customize & Price</h2>
          <div className="options-form">
            {Object.keys(product.options).map(key => (
              <div key={key}>
                <label htmlFor={key}>{key.toUpperCase()}</label>
                <select id={key} name={key} value={options[key]} onChange={(e) => handleOptionChange(key, e.target.value)}>
                  {product.options[key].map(option => (
                    <option
                      key={option.value ?? option}
                      value={option.value ?? option}
                    >
                      {option.label ?? option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <div className="price-display">
              Total: ${totalPrice.toFixed(2)}
            </div>
            {/* THIS BUTTON NOW WORKS! */}
            <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;