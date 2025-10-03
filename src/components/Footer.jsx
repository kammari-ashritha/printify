import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-column">
          <h4>Products</h4>
          <ul>
            <li><a href="#link">Business Cards</a></li>
            <li><a href="#link">Postcards</a></li>
            <li><a href="#link">Stickers</a></li>
            <li><a href="#link">Banners</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Help</h4>
          <ul>
            <li><a href="#link">Contact Us</a></li>
            <li><a href="#link">FAQ</a></li>
            <li><a href="#link">Shipping</a></li>
            <li><a href="#link">Returns</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#link">About Us</a></li>
            <li><a href="#link">Careers</a></li>
            <li><a href="#link">Privacy Policy</a></li>
            <li><a href="#link">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="#link">FB</a>
            <a href="#link">IG</a>
            <a href="#link">TW</a>
            <a href="#link">LI</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Printify. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;