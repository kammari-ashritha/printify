import React from 'react';
import Header from '../components/Header';
import './HelpPage.css';

const faqs = [
  {
    q: 'What are your turnaround times?',
    a: 'Standard turnaround is 3-5 business days for production, plus shipping time. Expedited options are available at checkout for an additional fee.'
  },
  {
    q: 'What file formats do you accept for artwork?',
    a: 'We accept high-resolution (300 dpi) files in PDF, AI, PSD, and EPS formats. For best results, please outline all fonts and embed or include all linked images.'
  },
  {
    q: 'What is your return policy?',
    a: 'We stand by the quality of our work. If there is a manufacturing defect or an error on our part, we will reprint and reship your order at no cost. As all products are custom, we cannot accept returns for customer errors (such as typos) or design choices.'
  },
  {
    q: 'Can I track my order?',
    a: 'Yes! Once your order has shipped, you will receive an email with a tracking number and a link to the carrier\'s website.'
  }
]

const HelpPage = () => {
  return (
    <>
      <Header />
      <div className="help-container">
        <h1>Help Center</h1>
        <p className="subtitle">Find answers to our most frequently asked questions.</p>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default HelpPage;