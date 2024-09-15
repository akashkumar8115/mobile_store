import React, { useState } from "react";
import "../css/Signup.css";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for v6
import { useAuth } from "../context/AuthProvider";
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();
  const [formType, setFormType] = useState('signup'); // State to toggle between signup and forgot password
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { setAuth } = useAuth(); // Use setAuth from context
  
  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/signup', {
        username,
        email,
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const { user, token } = response.data;

      // Store authentication details in context
      setAuth({ user, token });

      console.log('Signup successful:', response.data);
      navigate('/'); // Redirect to home or login after successful signup
    } catch (error) {
      setErrorMessage('Signup failed. Please try again.');
      console.error('Error signing up:', error);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      // Replace with the actual forgot password endpoint
      const response = await axios.post('http://localhost:5000/forgot-password', {
        email,
        password // If needed
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Forgot password request submitted:', response.data);
    } catch (error) {
      setErrorMessage('Error submitting forgot password request.');
      console.error('Error:', error);
    }
  };

  const handleFormSwitch = () => {
    setFormType(formType === 'signup' ? 'forgot' : 'signup');
    setErrorMessage(''); // Clear error message on form switch
  };

  const signClose = () => {
    navigate("/");
  };


  return (
    <>
      <div className="signup" id="signup">
        <button className="close-btns" onClick={signClose}>
          &times;
        </button>
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div className={`signup ${formType === 'signup' ? 'active' : ''}`}>
            <form onSubmit={handleSignup}>
              <label htmlFor="chk" aria-hidden="true">
                Sign up
              </label>
              <input
                type="text"
                name="username"
                placeholder="User name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                name="rePassword"
                placeholder="Re-enter Password"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                required
              />
              <button>Sign up</button>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
          </div>

          <div className={`forgate ${formType === 'forgot' ? 'active' : ''}`}>
            <form onSubmit={handleForgotPassword}>
              <label htmlFor="chk" aria-hidden="true">
                Forgate Password
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                name="rePassword"
                placeholder="Re-enter New Password"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                required
              />
              <button type="submit">Submit</button>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
