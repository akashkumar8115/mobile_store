import React, { useState, useEffect } from "react";
import "../css/Mobile.css";
import Data from "./mobile.json";
import MobileCard from "./MobileCard.jsx";
function ContactPage() {
  const mobilesData = Data.mobilePhones;
  const [searchTerm, setSearchTerm] = useState("");
  const [mobiles, setMobiles] = useState([]);
  const [defaultmobiles, setDefaultmobiles] = useState([]);
  // console.log(mobilesData);

  const fetchmobiles = (query = "") => {
    // Simulate a search by filtering the local JSON data
    if (query) {
      setMobiles(
        mobilesData.filter((mobile) => {

          return mobile.brand.toLowerCase().includes(query.toLowerCase());
        })
      );
    } else {
      setMobiles([]);
    }
  };

  useEffect(() => {
    // Load default mobiles from the JSON file
    const freemobiles = mobilesData.filter(
      (mobile) => mobile.category === "free"
    );
    setDefaultmobiles(freemobiles);
  }, [mobilesData]);

  const handleSearch = () => {
    fetchmobiles(searchTerm);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch();
  };
  console.log(mobiles);

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
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="mobile-results">
        {mobiles.length === 0 && searchTerm === "" ? (
          <div>
            {/* <h2>Default mobiles</h2> */}
            <div className="mobile-card-container">
              {defaultmobiles.length > 0 ? (
                defaultmobiles.map((mobile) => (
                  <mobileCard key={mobile.id} mobile={mobile} />
                ))
              ) : (
                <p>No default mobiles available</p>
              )}
            </div>
          </div>
        ) : (
          <div>
            <h2>{searchTerm ? "Search Results" : "Default mobiles"}</h2>
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
