import React from "react";
import "../css/LifestylePage.css";
import MobileCompanyPage from "./MobileCompanyPage.jsx"
const LifestylePage = () => {
  return (
    <div>
      <div className="lifestyle-container">
        <header className="lifestyle-header">
          <h1 className="animate-header">Live Your Best Life</h1>
          <p className="tagline animate-text">
            Explore health, fitness, and fashion trends
          </p>
        </header>

        <section className="lifestyle-section">
          <div className="lifestyle-card animate-fade">
            <img
              src="https://a.media-amazon.com/images/I/710R5ZkricL._AC_UL320_.jpg"
              alt="Fitness"
              className="card-image"
            />
            <h2>Fitness</h2>
            <p>Discover workout routines and tips to stay in shape.</p>
            <button className="explore-btn">Explore More</button>
          </div>

          <div className="lifestyle-card animate-fade">
            <img
              src="https://a.media-amazon.com/images/I/91aO++3p-LL._AC_UL320_.jpg"
              alt="Fashion"
              className="card-image"
            />
            <h2>Fashion</h2>
            <p>Latest trends in fashion for all seasons and styles.</p>
            <button className="explore-btn">Explore More</button>
          </div>

          <div className="lifestyle-card animate-fade">
            <img
              src="https://a.media-amazon.com/images/I/71QDAnSp2fL._AC_UL320_.jpg"
              alt="Health"
              className="card-image"
            />
            
            <h2>Health & Wellness</h2>
            <p>Maintain a healthy lifestyle with expert tips and advice.</p>
            <button className="explore-btn">Explore More</button>
          </div>
        </section>
      </div>
      <MobileCompanyPage />
    </div>
  );
};

export default LifestylePage;
