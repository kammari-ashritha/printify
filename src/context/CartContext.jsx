import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  // Recalculate the total whenever the cart items change
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    setCartTotal(total);
  }, [cartItems]);

  const addToCart = (product, options, price) => {
    const itemIdentifier = `${product.id}-${JSON.stringify(options)}`;
    const newItem = {
      ...product,
      ...options,
      price: price,
      cartItemId: itemIdentifier,
    };
    setCartItems(prevItems => [...prevItems, newItem]);
    alert(`${product.name} has been added to your cart!`);
  };

  // --- NEW FUNCTION TO REMOVE ITEMS ---
  const removeFromCart = (cartItemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.cartItemId !== cartItemId));
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart, // <-- Add to context
    cartTotal,      // <-- Add to context
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};