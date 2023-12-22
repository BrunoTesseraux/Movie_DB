import DarkMode from "../DarkMode/DarkMode";
import NavBar from "../NavBar/NavBar";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Profile.scss";

const calculateAge = (birthdate) => {
  const birthYear = new Date(birthdate).getFullYear();
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
};

const Profile = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedInStatus = localStorage.getItem("loggedIn");

      if (loggedInStatus === "true") {
        const loggedInUserFromLocalStorage =
          localStorage.getItem("loggedInUser");
        const parsedUserObj = JSON.parse(loggedInUserFromLocalStorage);

        if (parsedUserObj) {
          setLoggedInUser(parsedUserObj);
        } else {
          navigate("/login");
        }
      } else {
        navigate("/login");
      }
    };

    checkLoginStatus();
  }, [navigate]);

  if (!loggedInUser) {
    return <div>Loading...</div>;
  }

  const address =
    loggedInUser.address &&
    `${loggedInUser.address.street} ${loggedInUser.address.houseNumber}, ${loggedInUser.address.postalCode} ${loggedInUser.address.country}`;

  const age = loggedInUser.birthdate && calculateAge(loggedInUser.birthdate);

  return (
    <>
      <div className="profile-container">
        <div className="top-bild"></div>
        <DarkMode />
        <div className="profile-content">
          <div className="profile-header">
            <h1>Profil</h1>
          </div>
          <div className="profile-picture">
            <img src="src\components\SVG\mac mussterman.jpg" alt="Profilbild" />
          </div>
          <div className="profile-info">
            <h2>
              {loggedInUser.firstname} {loggedInUser.lastname}
            </h2>
            <p>Email: {loggedInUser.email}</p>
            {age && <p>Alter: {age}</p>}
            {/* <p>Adresse: {address}</p> */}
            <p>Geburtsdatum: {loggedInUser.birthdate}</p>
          </div>
        </div>
      </div>
      <NavBar />
    </>
  );
};

export default Profile;
