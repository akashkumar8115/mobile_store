import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthProvider.jsx';

const LoginForm = () => {
  const { setAuth } = useContext(AuthContext);  // Use setAuth to store auth details
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');  // Handle errors if needed

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
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
      setAuth({ user, token });

      // Optionally, redirect user or handle success
      console.log('Login successful');

    } catch (error) {
      setErrorMessage('Login failed. Please try again.');
      console.error('Error logging in:', error);
    }
    console.log('Login successful');


  };
  console.log('Login successful');


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      {errorMessage && <p>{errorMessage}</p>} {/* Display error message if login fails */}
    </form>
  );
};

export default LoginForm;
