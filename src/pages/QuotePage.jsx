import React, { useState } from 'react';
import Header from '../components/Header';
import './QuotePage.css';
import { allProducts } from '../data/mockProducts';

const QuotePage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    product: allProducts[0].name, // Default to the first product
    quantity: 500,
    details: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to a server.
    // For now, we'll just show an alert.
    alert(`Quote Request Submitted!
      Name: ${formData.fullName}
      Email: ${formData.email}
      Product: ${formData.product}
      Quantity: ${formData.quantity}
      Details: ${formData.details}
    `);
    // Optionally reset form
    setFormData({
      fullName: '', email: '', phone: '', product: allProducts[0].name, quantity: 500, details: ''
    });
  };

  return (
    <>
      <Header />
      <div className="quote-container">
        <div className="quote-header">
          <h1>Request a Custom Quote</h1>
          <p>Have a large or unique order? Fill out the form below and our team will get back to you with a personalized quote within 24 hours.</p>
        </div>
        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number (Optional)</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          </div>
          <div className="form-group-split">
            <div className="form-group">
              <label htmlFor="product">Product of Interest</label>
              <select id="product" name="product" value={formData.product} onChange={handleChange}>
                {allProducts.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Estimated Quantity</label>
              <input type="number" id="quantity" name="quantity" min="1" value={formData.quantity} onChange={handleChange} required/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="details">Project Details</label>
            <textarea id="details" name="details" rows="6" value={formData.details} onChange={handleChange} placeholder="Tell us about your project, including size, materials, deadlines, etc." required></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit Quote Request</button>
        </form>
      </div>
    </>
  );
};

export default QuotePage;