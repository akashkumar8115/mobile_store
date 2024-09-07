import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for v6
import { useAuth } from "../context/AuthProvider";
import "../css/MobileCard.css"; // Import your CSS

const MobileCard = ({ mobile }) => {
  // Use useNavigate instead of useHistory
  const navigate = useNavigate();

  const { authUser } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const handleBuyClick = () => {
    if (authUser) {
      alert("Confirm! Are you buy this mobile ?");
      setShowModal(true);
      navigate("/payment"); // Redirect to payment page
    } else {
      navigate("/signup"); // Redirect to login page if not authenticated
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmPurchase = () => {
    // Perform purchase action
    alert(`Purchasing ${mobile.title}`);
    setShowModal(false);
  };

  const downloadPDF = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mobile-card">
      <div className="mobile-card-inner">
        <div className="mobile-card-front">
          <img src={mobile.image} alt={mobile.brand} className="mobile-cover" />
        </div>
        <div className="mobile-card-back">
          <h3 className="mobile-title">{mobile.brand}</h3>
          <p className="mobile-description">{mobile.model}</p>
          
            <div className="mobile_specification">
              <p>ScreenSize:{mobile.specifications.screenSize}</p>
              <p>Processor: {mobile.specifications.processor}</p>
              <p>RAM: {mobile.specifications.ram}</p>
              <p>Storage: {mobile.specifications.storage}</p>
              <p>battery: {mobile.specifications.battery}</p>
              <p>camera: {mobile.specifications.camera}</p>
            </div>
          <p className="mobile-price">{mobile.price}</p>
          <div className="mobile-buttons">
            <button className="btn buy-btn" onClick={handleBuyClick}>
              Buy Now
            </button>
            <button className="btn download-btn" onClick={downloadPDF}>
              Go to
            </button>
          </div>

          {showModal && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h2>Confirm Purchase</h2>
                <p>Are you sure you want to purchase "{mobile.title}"?</p>
                <button
                  className="btn confirm-btn"
                  onClick={handleConfirmPurchase}
                >
                  Yes
                </button>
                <button className="btn cancel-btn" onClick={handleCloseModal}>
                  No
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
