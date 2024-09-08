import React from "react";
import "../css/Signup.css";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for v6
import { useAuth } from "../context/AuthProvider";

function Signup() {
  const navigate = useNavigate();
  function signClose() {
    navigate("/");
  }

  return (
    <>
      <div className="signup" id="signup">
        <button className="close-btns" onClick={signClose}>
          &times;
        </button>
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div className="signup">
            <form>
              <label htmlFor="chk" aria-hidden="true">
                Sign up
              </label>
              <input
                type="text"
                name="text"
                placeholder="User name"
                required=""
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />

              <input
                type="password"
                name="pswd"
                placeholder="Password"
                required=""
              />
              <button>Sign up</button>
            </form>
          </div>

          <div className="forgate">
            <form>
              <label htmlFor="chk" aria-hidden="true">
                Forgate Password
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
              <input
                type="password"
                name="pswd"
                placeholder="Password"
                required=""
              />
              <input
                type="password"
                name="pswd"
                placeholder="Re Password"
                required=""
              />
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
