import axios from "axios";
import React, { useState, useEffect } from "react";
import AuthContext from "../context/AuthProvider.jsx";
import { useNavigate } from "react-router-dom";

import "../css/ProfilePage.css"; // Add styles in this file
const ProfilePage = () => {
  const navigate = useNavigate();

  // const { auth, fetchUserData } = useContext(AuthContext);
  // Sample user data (this could come from an API or local storage)
  const [userData, setUserData] = useState({
    name: "Akash Kumar",
    email: "akash@example.com",
    bio: "Full Stack Developer with a passion for creating innovative web applications. Love exploring new technologies and solving real-world problems.",
    location: "NIT Hamirpur",
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROYjj94a1EKPObxDQCbqSdwmIbkhQt5Np5lQ&s",
    hobbies: ["Chess", "Table Tennis", "Coding"],
  });

  const userId = "USER_ID_HERE"; // Replace with actual user ID

  const [isEditing, setIsEditing] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");

  // Fetch user data
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/users/${userId}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching user data!", error);
      });
  }, [userId]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // Handle password input changes
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({
      ...passwordData,
      [name]: value,
    });
  };

  // Save updated user data
  const handleSave = () => {
    axios
      .put(`http://localhost:5000/api/users/${userId}`, userData)
      .then((response) => {
        setUserData(response.data);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("There was an error updating user data!", error);
      });
  };

  // Change password
  const handleChangePassword = () => {
    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    axios
      .put(`http://localhost:5000/api/users/${userId}/password`, passwordData)
      .then((response) => {
        alert("Password updated successfully");
        setPasswordData({
          currentPassword: "",
          newPassword: "",
          confirmNewPassword: "",
        });
        setPasswordError("");
      })
      .catch((error) => {
        setPasswordError(error.response.data.error);
      });
  };

  // logout
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    document.getElementById("logout-btn").style.opacity = "1";
  };

  const handleLogout = () => {
    if (isChecked) {
      console.log("User logged out");
      navigate("/");
    }
  };
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src={userData.profilePic}
          alt="Profile"
          className="profile-picture"
        />
        {isEditing ? (
          <>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              className="edit-input"
            />
            <textarea
              name="bio"
              value={userData.bio}
              onChange={handleInputChange}
              className="edit-input"
            />
          </>
        ) : (
          <>
            <h1 className="profile-name">{userData.name}</h1>
            <p className="profile-bio">{userData.bio}</p>
          </>
        )}
      </div>

      <div className="profile-details">
        <h2>Profile Information</h2>
        {isEditing ? (
          <>
            <input
              type="text"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="edit-input"
            />
            <input
              type="text"
              name="location"
              value={userData.location}
              onChange={handleInputChange}
              className="edit-input"
            />
          </>
        ) : (
          <>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>Location:</strong> {userData.location}
            </p>
          </>
        )}

        <h2>Hobbies</h2>
        {isEditing ? (
          <>
            <input
              type="text"
              name="hobbies"
              value={userData.hobbies.join(", ")}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  hobbies: e.target.value.split(","),
                })
              }
              className="edit-input"
            />
          </>
        ) : (
          <ul>
            {userData.hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        )}
      </div>

      {isEditing ? (
        <button onClick={handleSave} className="save-btn">
          Save
        </button>
      ) : (
        <button onClick={() => setIsEditing(true)} className="edit-btn">
          Edit Profile
        </button>
      )}

      {/* Change Password Section */}
      <div className="change-password-container">
        <h2>Change Password</h2>
        <input
          type="password"
          name="currentPassword"
          value={passwordData.currentPassword}
          onChange={handlePasswordChange}
          placeholder="Current Password"
          className="edit-input"
        />
        <input
          type="password"
          name="newPassword"
          value={passwordData.newPassword}
          onChange={handlePasswordChange}
          placeholder="New Password"
          className="edit-input"
        />
        <input
          type="password"
          name="confirmNewPassword"
          value={passwordData.confirmNewPassword}
          onChange={handlePasswordChange}
          placeholder="Confirm New Password"
          className="edit-input"
        />
        {passwordError && <p className="error-message">{passwordError}</p>}
        <br />{" "}
        <button onClick={handleChangePassword} className="save-btn">
          Change Password
        </button>{" "}
        <br /> <br />
        <div>
          <input
            type="checkbox"
            name="logout_check"
            id="logout_check"
            onChange={handleCheckboxChange}
          />{" "}
          Are you sure you want to log out? &nbsp;
          <button
            id="logout-btn"
            onClick={handleLogout}
            className="logout-btn"
            disabled={!isChecked} // Disable button if checkbox is unchecked
            style={{
              cursor: isChecked ? "pointer" : "not-allowed", // Change cursor based on checkbox state
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
