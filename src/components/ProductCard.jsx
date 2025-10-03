import React from 'react';
import { Link } from 'react-router-dom'; // <-- 1. IMPORT LINK
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <h3 className="product-name">{product.name}</h3>
      {/* 2. CHANGE THE <button> to a <Link> */}
      <Link to={`/product/${product.id}`} className="product-button">
        Customize
      </Link>
    </div>
  );
};

export default ProductCard;