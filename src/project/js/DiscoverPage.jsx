import React from "react";
import "../css/DiscoverPage.css";

const DiscoverPage = () => {
  return (
    <div className="discover-container">
      <header className="discover-header">
        <h1 className="animate-header">Discover the World</h1>
        <p className="tagline animate-text">
          Uncover new insights and stay updated with the latest trends.
        </p>
      </header>

      <section className="discover-trending">
        <h2>Trending Topics</h2>
        <div className="discover-card-container">
          <div className="discover-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9hnrfnuAOxqiBr4Ubuc6mCM23siWAdf90Gg&s"
              alt="Tech Innovation"
              className="discover-image"
            />
            <h3>Tech Innovations</h3>
            <p>Explore the latest breakthroughs in the tech world.</p>
            <button className="explore-btn">Learn More</button>
          </div>

          <div className="discover-card">
            <img
              src="data:image/jpeg;base64,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"
              alt="Sustainability"
              className="discover-image"
            />
            <h3>Sustainability</h3>
            <p>Dive into eco-friendly trends and sustainable living.</p>
            <button className="explore-btn">Learn More</button>
          </div>

          <div className="discover-card">
            <img
              src="https://hclhealthcare.in/wp-content/uploads/2023/11/wellness.jpeg"
              alt="Health & Wellness"
              className="discover-image"
            />
            <h3>Health & Wellness</h3>
            <p>Stay up-to-date with health trends and tips.</p>
            <button className="explore-btn">Learn More</button>
          </div>
        </div>
      </section>

      <section className="discover-new">
        <h2>New Discoveries</h2>
        <div className="discover-new-item">
          <h3>AI in Medicine</h3>
          <p>
            AI is transforming healthcare with its ability to diagnose and treat diseases faster.
          </p>
        </div>
        <div className="discover-new-item">
          <h3>Space Exploration</h3>
          <p>
            Learn about the new findings in the universe and upcoming space missions.
          </p>
        </div>
        <div className="discover-new-item">
          <h3>Climate Change</h3>
          <p>
            Discover how climate change is affecting different parts of the world and what you can do.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DiscoverPage;
