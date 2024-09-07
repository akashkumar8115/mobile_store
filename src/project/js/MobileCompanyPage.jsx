import React from "react";
import "../css/MobileCompanyPage.css";

const MobileCompanyPage = () => {
  return (
    <div className="mobile-company-container">
      <header className="company-header">
        <h1 className="animate-header">Innovative Mobile Solutions</h1>
        <p className="tagline animate-text">
          Experience the future of smartphones with us
        </p>
      </header>

      <section className="promo-section">
        <div className="promo-banner animate-fade">
          <h2>Exclusive Offer: 20% off on All New Models!</h2>
          <button className="shop-now-btn">Shop Now</button>
        </div>
      </section>

      <section className="product-section">
        <h2>Our Latest Mobiles</h2>
        <div className="product-grid">
          <div className="product-card animate-fade">
            <img
              src="https://a.media-amazon.com/images/I/71d5xDynLfL._AC_UY218_.jpg"
              alt="Mobile 1"
              className="product-image"
            />
            <h3>Model X1 Pro</h3>
            <p>Ultra-fast 5G, long battery life, 64MP camera</p>
            <button className="details-btn">View Details</button>
          </div>

          <div className="product-card animate-fade">
            <img
              src="https://a.media-amazon.com/images/I/41oKJYOhseL._AC_UY218_.jpg"
              alt="Mobile 2"
              className="product-image"
            />
            <h3>Model S2 Max</h3>
            <p>Edge-to-edge display, 128GB storage, powerful processor</p>
            <button className="details-btn">View Details</button>
          </div>

          <div className="product-card animate-fade">
            <img
              src="https://a.media-amazon.com/images/I/81ZFLjC0JJL._AC_UY218_.jpg"
              alt="Mobile 3"
              className="product-image"
            />
            <h3>Model A3 Lite</h3>
            <p>Affordable, sleek design, 48MP triple camera</p>
            <button className="details-btn">View Details</button>
          </div>
        </div>
      </section>

      <section className="customer-review-section">
        <h2>What Our Customers Say</h2>
        <div className="reviews">
          <div className="review animate-slide">
            <p>"The best phone I've ever owned. Battery life is amazing!"</p>
            <h4>- Alex Johnson</h4>
          </div>
          <div className="review animate-slide">
            <p>"Stunning design and performance. Highly recommend!"</p>
            <h4>- Maria Silva</h4>
          </div>
          <div className="review animate-slide">
            <p>
              "Great value for money. Super fast, no lag, and fantastic camera."
            </p>
            <h4>- John Doe</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileCompanyPage;
