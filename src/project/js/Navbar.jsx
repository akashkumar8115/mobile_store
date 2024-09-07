import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider.jsx";
import "../css/Navbar.css";

import Popupn from "./popupn.jsx";

const Navbar = () => {
  const [wantsToLogout, setWantsToLogout] = useState(false);
  const { authUser } = useAuth();
  const navigate = useNavigate();

  const handleBuyClick = () => {
    if (authUser) {
      // If authenticated, navigate to profile
      navigate("/profile");
    } else {
      // If not authenticated, navigate to signup
      navigate("/signup");
    }
  };



  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  function sidebar() {
    document.getElementById("nav_left").style.display = "block";
    document.getElementById("nav_right").style.display = "block";
  }

  function cross() {
    document.getElementById("nav_left").style.display = "none";
    document.getElementById("nav_right").style.display = "none";
  }

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <img src="https://t4.ftcdn.net/jpg/03/75/38/73/240_F_375387396_wSJM4Zm0kIRoG7Ej8rmkXot9gN69H4u4.jpg" alt="Logo" />
            </Link>
          </div>
          <div className="nav_left" id="nav_left">
            <ol>
              <li>
                <Link to="/store">Store</Link>
              </li>
              <li>
                <Link to="/mobile">Mobile</Link>
              </li>
              <li>
                <Link to="/smart">TV & Smart Home</Link>
              </li>
              <li>
                <Link to="/lifestyle">Life Style</Link>
              </li>
              <li onClick={handleBuyClick}> {/* Use onClick here */}
                Profile
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ol>
          </div>

          <div className="nav_right" id="nav_right">
            <ol>
              <li>
                <a href="#" className="close" onClick={cross}></a>
              </li>
              <li>
                <Link to="/discover">Discover</Link>
              </li>
              <li>
                <Link to="/support">Support</Link>
              </li>
              <li>
                <i className="gg-search"></i>
              </li>
              <li>
                <Link to="/addcart">
                  <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="Cart" />
                </Link>
              </li>
              <li onClick={togglePopup}>
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="Profile" />
              </li>
            </ol>
          </div>
          <div id="sidebar">
            <button onClick={sidebar}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </header>

      <Popupn show={showPopup} handleClose={togglePopup} id="popup_window" />
    </>
  );
};

export default Navbar;
