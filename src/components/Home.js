import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import logo from '../assets/images/logo3.png';

const Home = () => {
  return (
    <div className="container">
      <header>
        <img src={logo} alt="Company Logo" />
        <h1>EasyPrivacy</h1>
        <p>Be compliant with the DPDP Act of India instantly</p>
      </header>
      <main className="main">
        <h2>Your One-Stop Solution for Privacy Compliance</h2>
        <p>
          We provide an end-to-end solution to achieve full compliance with the DPDP Act of India.
        </p>
        <div className="features">
          <div className="feature-item">
            <h3>DPO Assistance</h3>
            <p>Generate your privacy policy in seconds and have a chatbot to answer all your questions related to DPDPA.</p>
          </div>
          <div className="feature-item">
            <h3>Data Discovery</h3>
            <p>Seamlessly see where is all your user data across structured and unstructured data + old and new data.</p>
          </div>
          <div className="feature-item">
            <h3>Consent and Right Management</h3>
            <p>Handle your consent layer and service your DSR requests + audit logs.</p>
          </div>
        </div>
        <div className="links">
          <Link to="/policy-generator">Go to Policy Generator</Link>
          <Link to="/dpdp-faqs">Go to FAQs</Link>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Our Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
