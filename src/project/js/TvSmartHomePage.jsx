import React from "react";
import "../css/TvSmartHomePage.css";

const TvSmartHomePage = () => {
  return (
    <div className="tv-smarthome-container">
      <header className="tv-header">
        <h1 className="animate-header">Discover Smart Living</h1>
        <p className="tagline animate-text">
          Explore the latest in Smart TVs and Home Automation
        </p>
      </header>

      <section className="tv-section">
        <div className="tv-card animate-fade">
          <img
            src="https://a.media-amazon.com/images/I/71cwbVlcGXL._AC_UY218_.jpg"
            alt="Smart TV"
            className="card-image"
          />
          <h2>Smart TVs</h2>
          <p>
            Experience immersive viewing with our range of 4K, 8K, and OLED TVs.
          </p>
          <button className="explore-btn">Explore More</button>
        </div>

        <div className="tv-card animate-fade">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk0mdYFf_2xvPCLIYQD7Qpva7iqOGjIy6FBw&s"
            alt="Smart Home Devices"
            className="card-image"
          />
          <h2>Smart Home Devices</h2>
          <p>
            Automate your home with the latest in smart lighting, thermostats,
            and security systems.
          </p>
          <button className="explore-btn">Explore More</button>
        </div>

        <div className="tv-card animate-fade">
          <img
            src="https://www.audioperfectionist.com.my/wp-content/uploads/2024/03/McIntosh-Westchester-I-Home-Theater-System-01-1024x587.webp"
            alt="Home Theater"
            className="card-image"
          />
          <h2>Home Theater</h2>
          <p>
            Upgrade your entertainment setup with top-of-the-line audio systems
            and projectors.
          </p>
          <button className="explore-btn">Explore More</button>
        </div>
      </section>

      <section className="smart-home-features">
        <h2 className="animate-header">Why Choose Smart Living?</h2>
        <div className="features-list">
          <div className="feature-item animate-fade">
            <h3>Voice Control</h3>
            <p>Control your devices hands-free with Alexa, Google Assistant, or Siri.</p>
          </div>
          <div className="feature-item animate-fade">
            <h3>Energy Efficiency</h3>
            <p>Save on electricity bills with smart energy monitoring and automated systems.</p>
          </div>
          <div className="feature-item animate-fade">
            <h3>Security</h3>
            <p>Keep your home safe with smart locks, cameras, and motion detectors.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TvSmartHomePage;
