import React from 'react';
import "../css/HomePage.css";

const HomePage = () => {
  return (
   <div className='home_body'>
     <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Mobile World</h1>
          <p>Discover the latest smartphones and smart home devices at unbeatable prices.</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
        <div className="hero-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5eKEdKoNMklpbpDAYeSCwXyvsG-sDpG5U-lNLGUISzv5nL0JmDLHaevgtmS_sKVYS62w&usqp=CAU" alt="Smartphone and smart home devices"/>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <h2>About Our Company</h2>
          <p>We are pioneers in mobile production and selling, delivering cutting-edge devices to enhance your life. From smartphones to smart homes, our technology is designed to meet your needs.</p>
        </div>
        <div className="about-image">
          <img src="https://images.ctfassets.net/8cjpn0bwx327/4YaKiioaeZ2S8jRzsCmet0/3ece92b4dc5c7631cd81938121c3cd9b/A_modern_living_room_with_various_smart_home_devices_interconnected_wirelessly__showcasing_the_convenience_and_automation_of.jpg" alt="Our company"/>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products-section">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://a.media-amazon.com/images/I/61sY8BGOyEL._AC_UY218_.jpg" alt="Product 1" />
            <h3>Smartphone 1</h3>
            <p>Latest features, sleek design, and unbeatable performance.</p>
            <button className="buy-btn">Buy Now</button>
          </div>
          <div className="product-card">
            <img  src="https://a.media-amazon.com/images/I/61dhsFpHHVL._AC_UL320_.jpg" alt="Product 2" />
            <h3>Smart Home Device</h3>
            <p>Control your home with ease, voice commands, and smart automation.</p>
            <button className="buy-btn">Explore</button>
          </div>
          <div className="product-card">
            <img src="https://a.media-amazon.com/images/I/71d1ytcCntL._AC_UY218_.jpg" alt="Product 3" />
            <h3>Smartphone 2</h3>
            <p>Advanced camera and powerful performance in your hands.</p>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="reviews-section">
        <h2>What Our Customers Say</h2>
        <div className="reviews-grid">
          <div className="review-card">
            <p>"The best smartphone I've ever used. Fantastic design and performance!"</p>
            <h4>- John D.</h4>
          </div>
          <div className="review-card">
            <p>"Smart home devices have made my life so much easier. Totally recommend!"</p>
            <h4>- Sarah P.</h4>
          </div>
          <div className="review-card">
            <p>"Top-notch customer service and high-quality products."</p>
            <h4>- Michael T.</h4>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="newsletter-section">
        <h2>Stay Updated with Us</h2>
        <p>Sign up for our newsletter to receive the latest product updates and exclusive offers.</p>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter your email" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </section>
    </div>
   </div>
  );
};

export default HomePage;
