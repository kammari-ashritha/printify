import React from 'react';
import Header from '../components/Header';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './CartPage.css';
import { FaTrash } from 'react-icons/fa';

const CartPage = () => {
  const { cartItems, removeFromCart, cartTotal } = useCart();

  const tax = cartTotal * 0.08; // Example 8% tax
  const orderTotal = cartTotal + tax;

  return (
    <>
      <Header />
      <div className="cart-container">
        <h1>Your Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is currently empty.</p>
            <Link to="/products" className="continue-shopping-btn">Continue Shopping</Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items-list">
              {cartItems.map(item => (
                <div className="cart-item" key={item.cartItemId}>
                  <img src={item.productImage} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    {/* Display options dynamically */}
                    <div className="cart-item-options">
                      {Object.keys(item.options).map(key => (
                        <span key={key}>{key}: <strong>{item[key]}</strong></span>
                      ))}
                    </div>
                  </div>
                  <div className="cart-item-actions">
                    <span className="cart-item-price">${item.price.toFixed(2)}</span>
                    <button onClick={() => removeFromCart(item.cartItemId)} className="remove-btn">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Estimated Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="summary-total">
                <span>Total</span>
                <span>${orderTotal.toFixed(2)}</span>
              </div>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;