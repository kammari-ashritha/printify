import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import './DealsPage.css';

const deals = [
  {
    title: '20% OFF All Business Cards',
    description: 'Get your professional brand identity started with a discount on all business card styles.',
    link: '/product/1'
  },
  {
    title: 'Free Shipping on Orders Over $100',
    description: 'Fill up your cart and we\'ll cover the shipping, anywhere in the country.',
    link: '/products'
  },
  {
    title: 'Buy One Get One Free on Stickers',
    description: 'Stock up on custom stickers for your brand or event. Add two to your cart and one is free!',
    link: '/product/4'
  }
]

const DealsPage = () => {
  return (
    <>
      <Header />
      <div className="deals-container">
        <h1>Special Offers & Deals</h1>
        <div className="deals-grid">
          {deals.map((deal, index) => (
            <div className="deal-card" key={index}>
              <h2>{deal.title}</h2>
              <p>{deal.description}</p>
              <Link to={deal.link} className="deal-button">Shop Now</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default DealsPage;