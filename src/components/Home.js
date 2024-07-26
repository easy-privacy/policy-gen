import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import logo from '../assets/images/logo.png';

const Home = () => {
  return (
    <div className="container">
      <header>
        <img src={logo} alt="Company Logo" />
        <h1>Welcome to Our Privacy Policy Generator & FAQ Chatbot</h1>
        <p>Compliant with the DPDP Act of India</p>
      </header>
      <main className="main">
        <h2>Your One-Stop Solution for Privacy Compliance</h2>
        <p>
          We provide an end-to-end solution for companies to achieve full compliance with the DPDP Act of India quickly and effortlessly. Our service ensures that you have a comprehensive privacy policy and a robust FAQ chatbot ready in no time, saving you from the heavy lifting and reducing costs significantly.
        </p>
        <button className="cta-button">Get Started Now</button>
        <div className="features">
          <div className="feature-item">
            <h3>Easy to Use</h3>
            <p>Generate your privacy policy with a few simple steps.</p>
          </div>
          <div className="feature-item">
            <h3>Fully Compliant</h3>
            <p>Our policies and chatbots are updated and compliant with the latest DPDP Act of India.</p>
          </div>
          <div className="feature-item">
            <h3>Cost Effective</h3>
            <p>Achieve compliance at a fraction of the cost compared to traditional methods.</p>
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
