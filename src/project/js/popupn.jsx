import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthProvider.jsx';
import "../css/popupn.css";
import { Link } from "react-router-dom";

const Popupn = ({ show, handleClose, children }) => {
  // const { setAuth } = useContext(AuthContext);  // Use setAuth to store auth details
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');  // Handle errors if needed

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Axios POST request to authenticate the user
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Assuming response contains user details and token
      const { user, token } = response.data;

      // Store the authentication details (user and token) in context
      // setAuth({ user, token });

      // Optionally, redirect user or handle success
      console.log('Login successful');
      handleClose();  // Close the popup after successful login

    } catch (error) {
      // Set error message if login fails
      setErrorMessage('Login failed. Please try again.');
      console.error('Error logging in:', error);
    }
  };

  return (
    <>
      <div className={`popup ${show ? "show" : ""}`}>
        <div className="popup-content">
          {/* form */}
          <div className="form-container">
            <p className="title">Please Enter Your ID</p>
            <form className="form" onSubmit={handleSubmit}>
              <input 
                type="email" 
                className="input" 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
              />
              <input 
                type="password" 
                className="input" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
              />
              <p className="page-link">
                <Link to="/signup" target="_blank" className="aforgate">
                  <span className="page-link-label">Forgot Password?</span>
                </Link>
              </p>
              <button className="form-btn">Log in</button>
              {errorMessage && <p className='error-message'>{errorMessage}</p>}
            </form>
            <p className="sign-up-label">
              Don't have an account? 
              <Link to="/signup" target="_blank" rel="noopener noreferrer">
                <span className="sign-up-link"> Sign Up </span>
              </Link>
            </p>
            <div className="buttons-container">
              <div className="apple-login-button">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  className="apple-icon"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="..."></path>
                </svg>
                <span>Log in with Apple</span>
              </div>
              <div className="google-login-button">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1.1"
                  x="0px"
                  y="0px"
                  className="google-icon"
                  viewBox="0 0 48 48"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="..."></path>
                </svg>
                <span>Log in with Google</span>
              </div>
            </div>
          </div>
          <Link to="/">
            <button className="close-btn" onClick={handleClose}>
              &times;
            </button>
          </Link>
          {children}
        </div>
      </div>
    </>
  );
};

export default Popupn;
