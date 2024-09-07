import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState({
    token: localStorage.getItem("token"),
    user: null,
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("Users");
    if (storedUser) {
      setAuthUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (user) => {
    localStorage.setItem("Users", JSON.stringify(user));
    setAuthUser(user);
    navigate("/"); // Redirect after login
  };

  const logout = () => {
    localStorage.removeItem("Users");
    setAuthUser(null);
    navigate("/"); // Redirect after logout
  };
  // Fetch user data
  const fetchUserData = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const res = await axios.get("http://localhost:5000/api/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAuth((prevAuth) => ({ ...prevAuth, user: res.data }));
      } catch (error) {
        console.error(error.response.data.message);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{ authUser, setAuthUser, login, logout, fetchUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
