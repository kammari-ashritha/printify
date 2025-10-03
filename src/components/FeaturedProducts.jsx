import React from 'react';
import ProductCard from './ProductCard';
// CHANGE THIS LINE to import allProducts
import { allProducts } from '../data/mockProducts'; 
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  return (
    <section className="featured-products-section">
      <div className="container">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {/* CHANGE THIS VARIABLE to allProducts.map */}
          {allProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;