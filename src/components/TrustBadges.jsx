import React from 'react';
import './TrustBadges.css';

const TrustBadges = () => {
  return (
    <section className="trust-badges-section">
      <div className="container">
        <h2 className="section-title">Quality You Can Trust</h2>
        <div className="badges-container">
          <div className="badge">
            <span className="badge-icon">✓</span>
            <h3 className="badge-title">Free Digital Proofs</h3>
            <p className="badge-text">Approve your design before it goes to print.</p>
          </div>
          <div className="badge">
            <span className="badge-icon">🚀</span>
            <h3 className="badge-title">Fast Turnaround</h3>
            <p className="badge-text">Get your products quickly with our efficient process.</p>
          </div>
          <div className="badge">
            <span className="badge-icon">💯</span>
            <h3 className="badge-title">Satisfaction Guaranteed</h3>
            <p className="badge-text">We're not happy until you're happy with your order.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;