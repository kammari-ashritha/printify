import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const signup = (name, email, password) => {
    const userExists = users.find(user => user.email === email);
    if (userExists) {
      alert('A user with this email already exists.');
      return false;
    }
    const newUser = {
      name,
      email,
      password,
      memberSince: new Date().toLocaleDateString(),
      orders: [],
      addresses: [], // <-- Start with empty addresses
      paymentMethods: [], // <-- Start with empty payment methods
    };
    setUsers(prevUsers => [...prevUsers, newUser]);
    return true;
  };

  const login = (email, password) => {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  // --- NEW FUNCTION TO ADD AN ADDRESS ---
  const addAddress = (address) => {
    if (!currentUser) return;
    const updatedUser = { ...currentUser, addresses: [...currentUser.addresses, address] };
    updateUser(updatedUser);
  };
  
  // --- NEW FUNCTION TO ADD A PAYMENT METHOD ---
  const addPaymentMethod = (paymentMethod) => {
    if (!currentUser) return;
    const updatedUser = { ...currentUser, paymentMethods: [...currentUser.paymentMethods, paymentMethod] };
    updateUser(updatedUser);
  };

  // Helper function to update both the full user list and the current user
  const updateUser = (updatedUser) => {
    setCurrentUser(updatedUser);
    setUsers(prevUsers => prevUsers.map(user => user.email === updatedUser.email ? updatedUser : user));
  }

  const value = {
    currentUser,
    login,
    logout,
    signup,
    addAddress,     // <-- Expose the new function
    addPaymentMethod, // <-- Expose the new function
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};