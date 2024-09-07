import React from "react";
import "../css/StorePage.css";

const StorePage = () => {
  return (
    <div className="store-container">
      <header className="store-header">
        <h1 className="store-title">Welcome to Our Mobile Store</h1>
        <p className="store-tagline">
          Explore the latest smartphones and accessories
        </p>
      </header>

      <section className="store-section featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://a.media-amazon.com/images/I/711wsjBtWeL._AC_UY218_.jpg" alt="Mobile 1" />
            <h3>iPhone 13 Pro</h3>
            <p>Price: $999</p>
            <button className="buy-btn">Buy Now</button>
          </div>
          <div className="product-card">
            <img src="https://a.media-amazon.com/images/I/81vxWpPpgNL._AC_UY218_.jpg" alt="Mobile 2" />
            <h3>Samsung Galaxy S21</h3>
            <p>Price: $799</p>
            <button className="buy-btn">Buy Now</button>
          </div>
          <div className="product-card">
            <img src="https://a.media-amazon.com/images/I/61HrWjOTJiL._AC_UY218_.jpg" alt="Mobile 3" />
            <h3>OnePlus 9</h3>
            <p>Price: $699</p>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      </section>

      <section className="store-section best-sellers">
        <h2>Best Sellers</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://a.media-amazon.com/images/I/61VuVU94RnL._AC_UY218_.jpg" alt="Mobile 4" />
            <h3>iPhone 12</h3>
            <p>Price: $899</p>
            <button className="buy-btn">Buy Now</button>
          </div>
          <div className="product-card">
            <img src="https://a.media-amazon.com/images/I/81vxWpPpgNL._AC_UY218_.jpg" alt="Mobile 5" />
            <h3>Google Pixel 5</h3>
            <p>Price: $649</p>
            <button className="buy-btn">Buy Now</button>
          </div>
          <div className="product-card">
            <img src="https://a.media-amazon.com/images/I/71dGNC6hjHL._AC_UY218_.jpg" alt="Mobile 6" />
            <h3>Huawei P40</h3>
            <p>Price: $799</p>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      </section>

      <section className="store-section accessories">
        <h2>Mobile Accessories</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://a.media-amazon.com/images/I/61n9f8LrR4L._AC_UY218_.jpg" alt="Accessory 1" />
            <h3>AirPods Pro</h3>
            <p>Price: $199</p>
            <button className="buy-btn">Buy Now</button>
          </div>
          <div className="product-card">
            <img src="https://a.media-amazon.com/images/I/71ek-9mp7NL._AC_UY218_.jpg" alt="Accessory 2" />
            <h3>Samsung Galaxy Buds</h3>
            <p>Price: $149</p>
            <button className="buy-btn">Buy Now</button>
          </div>
          <div className="product-card">
            <img src="https://a.media-amazon.com/images/I/516ChgAhzrL._AC_UY218_.jpg" alt="Accessory 3" />
            <h3>OnePlus Charger</h3>
            <p>Price: $29</p>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      </section>

      <section className="store-section trending">
        <h2>Trending Smartphones</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://a.media-amazon.com/images/I/613SAOPmLeL._AC_UY218_.jpg" alt="Mobile 7" />
            <h3>iPhone SE</h3>
            <p>Price: $399</p>
            <button className="buy-btn">Buy Now</button>
          </div>
          <div className="product-card">
            <img src="https://a.media-amazon.com/images/I/71qe5DogAtL._AC_UY218_.jpg" alt="Mobile 8" />
            <h3>Xiaomi Mi 11</h3>
            <p>Price: $749</p>
            <button className="buy-btn">Buy Now</button>
          </div>
          <div className="product-card">
            <img src="https://a.media-amazon.com/images/I/71Uwv6PlzLL._AC_UY218_.jpg" alt="Mobile 9" />
            <h3>Realme GT</h3>
            <p>Price: $599</p>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StorePage;
