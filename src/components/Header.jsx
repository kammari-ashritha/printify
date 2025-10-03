import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext'; // <-- 1. IMPORT useAuth

const Header = () => {
  const { cartItems } = useCart();
  const { currentUser, logout } = useAuth(); // <-- 2. GET user and logout function
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to homepage after logout
  };

  return (
    <header className="site-header">
      <div className="container header-container">
        <Link to="/" className="logo">Printify</Link>
        <nav className="main-nav">
          <ul>
            <li><Link to="/products">All Products</Link></li>
            <li><Link to="/deals">Deals</Link></li>
            <li><Link to="/help">Help</Link></li>
          </ul>
        </nav>
        <div className="header-actions">
          {/* --- 3. DYNAMICALLY SHOW LOGIN OR ACCOUNT INFO --- */}
          {currentUser ? (
            <>
              <Link to="/account" className="action-link">My Account</Link>
              <button onClick={handleLogout} className="action-link logout-btn">Logout</button>
            </>
          ) : (
            <Link to="/login" className="action-link">Login</Link>
          )}
          <Link to="/cart" className="action-button">
            Cart ({cartItems.length})
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;