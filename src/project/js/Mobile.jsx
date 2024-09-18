import React, { useState, useEffect } from "react";
import "../css/Mobile.css";
import Data from "./mobile.json";
import MobileCard from "./MobileCard.jsx";

function ContactPage() {
  const mobilesData = Data.mobilePhones;

  const [searchTerm, setSearchTerm] = useState("");
  const [mobiles, setMobiles] = useState([]);
  const [defaultmobiles, setDefaultmobiles] = useState([]);
  const [minPrice, setMinPrice] = useState(""); // New state for minimum price
  const [maxPrice, setMaxPrice] = useState(""); // New state for maximum price

  const fetchmobiles = (query = "", minPrice, maxPrice) => {
    let filteredMobiles = mobilesData;

    if (query) {
      filteredMobiles = filteredMobiles.filter((mobile) =>
        mobile.brand.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Apply price range filter
    if (minPrice && maxPrice) {
      filteredMobiles = filteredMobiles.filter((mobile) => {
        const price = parseFloat(mobile.price.replace("$", "").replace(",", ""));
        return price >= parseFloat(minPrice) && price <= parseFloat(maxPrice);
      });
    }

    setMobiles(filteredMobiles);
  };

  useEffect(() => {
    // Load default mobiles from the JSON file
    const freemobiles = mobilesData.filter(
      (mobile) => mobile.category === "free"
    );
    setDefaultmobiles(freemobiles);
  }, [mobilesData]);

  const handleSearch = () => {
    fetchmobiles(searchTerm, minPrice, maxPrice);
  };
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch();
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };
  // 
  return (
    <div className="mobiles-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for mobiles..."
          value={searchTerm}
          onChange={handleInputChange}
        />{" "}
        <br />
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={handleMinPriceChange}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={handleMaxPriceChange}
        />
        <br />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="mobile-results">
        {mobiles.length === 0 && searchTerm === "" ? (
          <div>
            <div className="mobile-card-container">
              {defaultmobiles.length > 0 ? (
                defaultmobiles.map((mobile) => (
                  <MobileCard key={mobile.id} mobile={mobile} />
                ))
              ) : (
                <p></p>
              )}
            </div>
          </div>
        ) : (
          <div>
            <h4>{searchTerm ? "Search Results" : "Default All mobiles"}</h4>
            <div className="mobile-card-container">
              {mobiles.length === 0 && searchTerm ? (
                <p>No results found</p>
              ) : (
                mobiles.map((mobile) => (
                  <MobileCard key={mobile.id} mobile={mobile} />
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactPage;
