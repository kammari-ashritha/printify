import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import './DesignServicesPage.css';
import { FaPenNib, FaComments, FaCheckCircle } from 'react-icons/fa';

const DesignServicesPage = () => {
  return (
    <>
      <Header />
      <div className="design-services-page">
        <div className="design-hero">
          <h1>Professional Design Services</h1>
          <p>From logos to packaging, our expert designers are here to bring your vision to life.</p>
          <Link to="/quote" className="design-cta-button">Get Started Today</Link>
        </div>

        <div className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps-container">
            <div className="step">
              <FaComments className="step-icon" />
              <h3>1. Consultation</h3>
              <p>We start with a conversation to understand your brand, vision, and goals for the project.</p>
            </div>
            <div className="step">
              <FaPenNib className="step-icon" />
              <h3>2. Design & Proofing</h3>
              <p>Our designers create initial concepts and work with you through revisions to perfect the design.</p>
            </div>
            <div className="step">
              <FaCheckCircle className="step-icon" />
              <h3>3. Final Approval</h3>
              <p>Once you're 100% happy with the design, we provide the final files, ready for print or digital use.</p>
            </div>
          </div>
        </div>

        <div className="what-we-design">
            <h2>What We Can Design For You</h2>
            <div className="design-grid">
                <span>Logos & Branding</span>
                <span>Business Cards</span>
                <span>Marketing Materials</span>
                <span>Custom Apparel</span>
                <span>Packaging & Labels</span>
                <span>And Much More...</span>
            </div>
        </div>
      </div>
    </>
  );
};

export default DesignServicesPage;