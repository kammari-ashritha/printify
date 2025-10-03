import React, { useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import './AllProductsPage.css';

// --- Import Icons ---
import { FaTshirt, FaBoxOpen, FaTag, FaRegFileAlt, FaPrint, FaRegCreditCard, FaEnvelopeOpenText, FaShoppingBag, FaSign, FaStickyNote } from 'react-icons/fa';

// --- Import the main product data ---
import { allProducts } from '../data/mockProducts';

// --- Data Structure for Category Accordion ---
const categories = [
  { name: 'Apparel', icon: <FaTshirt />, sub: ['T-Shirts', 'Hoodies', 'Hats'] },
  { name: 'Banners', icon: <FaPrint />, sub: ['Vinyl Banners', 'Retractable Banners'] },
  { name: 'Boxes', icon: <FaBoxOpen />, sub: ['Shipping Boxes', 'Product Boxes'] },
  { name: 'Brochures', icon: <FaRegFileAlt />, sub: ['Tri-Fold', 'Bi-Fold', 'Z-Fold'] },
  { name: 'Business Cards', icon: <FaRegCreditCard />, sub: ['Standard', 'Square', 'Rounded Corner'] },
  { name: 'Flyers', icon: <FaEnvelopeOpenText />, sub: ['Club Flyers', 'Business Flyers'] },
  { name: 'Labels', icon: <FaTag />, sub: ['Roll Labels', 'Sheet Labels'] },
  { name: 'Packaging', icon: <FaShoppingBag />, sub: ['Custom Bags', 'Pouches', 'Tissue Paper'] },
  { name: 'Postcards', icon: <FaEnvelopeOpenText />, sub: ['Standard', 'Jumbo'] },
  { name: 'Signs', icon: <FaSign />, sub: ['Yard Signs', 'Foam Board Signs'] },
  { name: 'Stickers', icon: <FaStickyNote />, sub: ['Die-Cut', 'Kiss-Cut', 'Bumper Stickers'] },
];

// --- Create a dynamic list of popular products from our main data ---
const popularProducts = allProducts.slice(0, 4); // Takes the first 4 products

const AllProductsPage = () => {
  // State to track which category is open
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (categoryName) => {
    if (openCategory === categoryName) {
      setOpenCategory(null); // Close it if it's already open
    } else {
      setOpenCategory(categoryName); // Open the new one
    }
  };

  return (
    <>
      <Header />
      <div className="all-products-container">
        <div className="all-products-header">
          <h1>All Products</h1>
          <p>Find exactly what you need from our comprehensive list of high-quality print products.</p>
        </div>
        
        <div className="section-title">Popular Products</div>
        <div className="popular-products-grid">
          {popularProducts.map(product => (
            <Link to={`/product/${product.id}`} className="popular-card" key={product.id}>
              {product.name}
            </Link>
          ))}
        </div>

        <div className="section-title">Product Categories</div>
        <div className="category-grid">
          {categories.map(category => (
            <div className={`category-item ${openCategory === category.name ? 'open' : ''}`} key={category.name}>
              <div className="category-header" onClick={() => toggleCategory(category.name)}>
                <div>
                  <span className="icon">{category.icon}</span>
                  {category.name}
                </div>
                <span className="toggle-icon">&#9662;</span> {/* Down arrow */}
              </div>
              <ul className="subcategory-list">
                {category.sub.map(subItem => (
                  <li key={subItem}><Link to="#">{subItem}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>



<div className="cta-section">
    <div className="cta-item">
        <h3>Need a Custom Quote?</h3>
        <p>For large orders or special requests, get a personalized quote from our team.</p>
        {/* Change button to Link */}
        <Link to="/quote" className="cta-button-link quote">Request a Quote</Link>
    </div>
    <div className="cta-item">
        <h3>Use Our Design Services</h3>
        <p>Work with our professional designers to bring your vision to life.</p>
        {/* Change button to Link */}
        <Link to="/design-services" className="cta-button-link design">Learn More</Link>
    </div>
</div>


      </div>
    </>
  );
};

export default AllProductsPage;