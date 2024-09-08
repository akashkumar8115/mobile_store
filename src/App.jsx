import React from "react";
import "./App.css"
import { Toaster } from "react-hot-toast";
import { useAuth } from "./project/context/AuthProvider.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import PaymentPage from "./project/context/PaymentPage.jsx";
import Navbar from "./project/js/Navbar.jsx";
import Home from "./project/js/Home.jsx";
import Login from "./project/js/Login.jsx";
import Signup from "./project/js/Signup.jsx";
import About from "./project/js/About.jsx";
import Mobile from "./project/js/Mobile.jsx";
import Lifestyle from "./project/js/Lifestyle.jsx";
import DiscoverPage from "./project/js/DiscoverPage.jsx";
import StorePage from "./project/js/StorePage.jsx";
import SupportPage from "./project/js/SupportPage.jsx";
import TvSmartHomePage from "./project/js/TvSmartHomePage.jsx";
import ProfilePage from "./project/js/ProfilePage.jsx";
import ContactPage from "./project/js/ContactPage.jsx";
import Goto from "./project/js/Goto.jsx";

import Footer from "./project/js/Footer.jsx";
function App() {
  // const { authUser } = useAuth(); // Destructure the value from useAuth
  // console.log(authUser);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/Discover" element={<DiscoverPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/smart" element={<TvSmartHomePage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/goto" element={<Goto />} />
      </Routes>
      <Toaster />
      <Footer />
    </>
  );
}

export default App;
