import React, { useState } from 'react';
import Header from '../components/Header';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'; // 1. 'Link' has been removed from this import
import './AccountPage.css';

// 1. Import the new tab components
import OrderHistory from '../components/account/OrderHistory';
import ProfileSettings from '../components/account/ProfileSettings';
import Addresses from '../components/account/Addresses';
import PaymentMethods from '../components/account/PaymentMethods';

const AccountPage = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  // 2. State to manage the active tab
  const [activeTab, setActiveTab] = useState('orders');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Function to render the correct tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case 'orders':
        return <OrderHistory />;
      case 'profile':
        return <ProfileSettings />;
      case 'addresses':
        return <Addresses />;
      case 'payment':
        return <PaymentMethods />;
      default:
        return <OrderHistory />;
    }
  };

  if (!currentUser) {
    return (
      <>
        <Header />
        <div className="account-container not-logged-in">
          <h1>Access Denied</h1>
          <p>You must be logged in to view this page.</p>
          {/* 2. Changed from <Link> to a <button> that uses navigate */}
          <button onClick={() => navigate('/login')} className="login-prompt-btn">Go to Login</button>
        </div>
      </>
    )
    // ... (This part remains the same)
  }

  return (
    <>
      <Header />
      <div className="account-container">
        <h1>My Account</h1>
        <div className="account-content">
          <div className="account-sidebar">
            <div className="profile-card">
              <h2>{currentUser.name}</h2>
              <p>{currentUser.email}</p>
              <p>Member Since: {currentUser.memberSince}</p>
              <button className="logout-btn" onClick={handleLogout}>Log Out</button>
            </div>
            {/* 3. Change <a> tags to <button>s that set the active tab */}
            <nav className="account-nav">
              <button onClick={() => setActiveTab('orders')} className={activeTab === 'orders' ? 'active' : ''}>Order History</button>
              <button onClick={() => setActiveTab('profile')} className={activeTab === 'profile' ? 'active' : ''}>Profile & Settings</button>
              <button onClick={() => setActiveTab('addresses')} className={activeTab === 'addresses' ? 'active' : ''}>Addresses</button>
              <button onClick={() => setActiveTab('payment')} className={activeTab === 'payment' ? 'active' : ''}>Payment Methods</button>
            </nav>
          </div>
          <div className="account-main">
            {/* 4. Render the content of the active tab */}
            {renderTabContent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountPage;