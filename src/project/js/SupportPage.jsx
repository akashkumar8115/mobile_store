import React from 'react';
import '../css/SupportPage.css';

const SupportPage = () => {
  return (
    <div className="support-container">
      <header className="support-header">
        <h1 className="animate-header">How can we help you?</h1>
        <p className="animate-text">Get support for all your queries.</p>
      </header>

      <section className="support-section">
        <div className="support-card animate-fade">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTvRDhHHm4rLLMxRFj2b3rjL1x-GSMd3w7JQ&s"
            alt="Contact Support"
            className="support-image"
          />
          <h2>Contact Support</h2>
          <p>Need help? Reach out to our support team for assistance.</p>
          <button className="explore-btn">Get Help</button>
        </div>

        <div className="support-card animate-fade">
          <img
            src="data:image/png;base64,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"
            alt="FAQs"
            className="support-image"
          />
          <h2>FAQs</h2>
          <p>Find answers to frequently asked questions and common issues.</p>
          <button className="explore-btn">Read FAQs</button>
        </div>

        <div className="support-card animate-fade">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqGWuBwBpMCNt3JauAVSZpHfJMbtxdwAj0Pg&s"
            alt="Settings"
            className="support-image"
          />
          <h2>Account Settings</h2>
          <p>Manage your account settings and preferences easily.</p>
          <button className="explore-btn">Manage Account</button>
        </div>

        <div className="support-card animate-fade">
          <img
            src="data:image/jpeg;base64,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"
            alt="Tutorials"
            className="support-image"
          />
          <h2>Tutorials</h2>
          <p>Watch our tutorials to learn how to use the product efficiently.</p>
          <button className="explore-btn">Watch Now</button>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
