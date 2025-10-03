import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const PaymentMethods = () => {
  const { currentUser, addPaymentMethod } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [newCard, setNewCard] = useState({ number: '', expiry: '', cvv: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCard(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPaymentMethod(newCard);
    setNewCard({ number: '', expiry: '', cvv: '' });
    setShowForm(false);
  };

  return (
    <div>
      <h2>Payment Methods</h2>
      {/* THIS IS THE FIX: The ?. prevents the crash */}
      {currentUser.paymentMethods?.length > 0 ? (
        currentUser.paymentMethods.map((card, index) => (
          <div className="payment-card" key={index}>
            <strong>Visa ending in {card.number.slice(-4)}</strong>
            <p>Expires {card.expiry}</p>
            <button className="link-button">Remove</button>
          </div>
        ))
      ) : (
        <p>You have no saved payment methods.</p>
      )}

      {!showForm && (
        <button className="add-new-btn" onClick={() => setShowForm(true)}>+ Add New Card</button>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="profile-form slide-down">
          <h3>Add a New Card</h3>
          {/* Form inputs... */}
          <div className="form-group"> <label>Card Number</label> <input name="number" value={newCard.number} onChange={handleChange} placeholder="•••• •••• •••• ••••" required /> </div>
          <div className="form-group-split"> <div className="form-group"> <label>Expiry Date</label> <input name="expiry" value={newCard.expiry} onChange={handleChange} placeholder="MM/YY" required /> </div> <div className="form-group"> <label>CVV</label> <input name="cvv" value={newCard.cvv} onChange={handleChange} placeholder="123" required /> </div> </div>
          <div className="form-actions"> <button type="submit" className="save-btn">Save Card</button> <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>Cancel</button> </div>
        </form>
      )}
    </div>
  );
};

export default PaymentMethods;