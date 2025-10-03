import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
// The import for the image is NOT needed and should be deleted
import { allProducts } from '../data/mockProducts';

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const trimmedSearchTerm = searchTerm.trim().toLowerCase();
    if (!trimmedSearchTerm) return;

    const foundProduct = allProducts.find(product =>
      product.name.toLowerCase().includes(trimmedSearchTerm)
    );

    if (foundProduct) {
      navigate(`/product/${foundProduct.id}`);
    } else {
      alert(`Sorry, no products found for "${searchTerm}"`);
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    // The path here should be a direct string to the public folder
    <section className="hero-section" style={{ backgroundImage: `url('/images/hero-image.png')` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Custom Printing for Brilliant Brands</h1>
        <p>High-quality marketing materials that make you shine.</p>
        <div className="hero-search">
          <input
            type="text"
            placeholder="Search for products (e.g., 'business cards')"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="cta-button" onClick={handleSearch}>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;