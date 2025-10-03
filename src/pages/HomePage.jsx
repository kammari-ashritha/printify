import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import TrustBadges from '../components/TrustBadges';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <TrustBadges />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;