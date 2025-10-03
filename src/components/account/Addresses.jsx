import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const Addresses = () => {
  const { currentUser, addAddress } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [newAddress, setNewAddress] = useState({ street: '', city: '', state: '', zip: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAddress(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAddress(newAddress);
    setNewAddress({ street: '', city: '', state: '', zip: '' });
    setShowForm(false);
  };

  return (
    <div>
      <h2>Addresses</h2>
      {/* THIS IS THE FIX: The ?. prevents the crash */}
      {currentUser.addresses?.length > 0 ? (
        currentUser.addresses.map((addr, index) => (
          <div className="address-card" key={index}>
            <p>{addr.street}<br/>{addr.city}, {addr.state} {addr.zip}</p>
            <button className="link-button">Edit</button>
          </div>
        ))
      ) : (
        <p>You have no saved addresses.</p>
      )}

      {!showForm && (
        <button className="add-new-btn" onClick={() => setShowForm(true)}>+ Add New Address</button>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="profile-form slide-down">
          <h3>Add a New Address</h3>
          {/* Form inputs... */}
          <div className="form-group"> <label>Street Address</label> <input name="street" value={newAddress.street} onChange={handleChange} required /> </div>
          <div className="form-group-split"> <div className="form-group"> <label>City</label> <input name="city" value={newAddress.city} onChange={handleChange} required /> </div> <div className="form-group"> <label>State</label> <input name="state" value={newAddress.state} onChange={handleChange} required /> </div> </div>
          <div className="form-group"> <label>Zip Code</label> <input name="zip" value={newAddress.zip} onChange={handleChange} required /> </div>
          <div className="form-actions"> <button type="submit" className="save-btn">Save Address</button> <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>Cancel</button> </div>
        </form>
      )}
    </div>
  );
};

export default Addresses;