import { Link } from "react-router-dom";
import "./Registration.scss";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../Context/MovieContext";
import Home from "../../page/Home";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    firstname,
    setFirstname,
    lastname,
    setLastname,
    users,
    setUsers,
    isLoggedIn,
    setIsLoggedIn,
    isActive,
    setIsActive,
  } = useContext(MovieContext);
  // const [loginStatus, setLoginStatus] = useState(true);

  const navigate = useNavigate();
  console.log(isLoggedIn);

  useEffect(() => {
    const usersFromLocalStorage = localStorage.getItem("users") || "[]"; // Default-Wert, falls nichts im LocalStorage ist
    const parsedUserObj = JSON.parse(usersFromLocalStorage);
    setUsers(parsedUserObj);

    const isActiveValueFromLocalStorage = localStorage.getItem("isActive");
    const isActiveValue = isActiveValueFromLocalStorage
      ? JSON.parse(isActiveValueFromLocalStorage)
      : false; // Default false
    setIsActive(isActiveValue);
  }, [email, password, setIsLoggedIn, isActive, setIsActive, setUsers]);

  const handleRegistrationSubmit = (e) => {
    e.preventDefault(); // Verhindert das Standard-Submit-Verhalten

    let allUsers = users
      ? [...users, { firstname, lastname, email, password }]
      : [{ firstname, lastname, email, password }];
    setUsers(allUsers);
    localStorage.setItem("users", JSON.stringify(allUsers));
    navigate("/login");

    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
  };

  const saveIsActiveValue = (e) => {
    if (e.target.textContent.toLowerCase() === "sign in") {
      setIsActive(false);
      console.log(isActive);
    } else if (e.target.textContent.toLowerCase() === "registration") {
      console.log(isActive);
      setIsActive(true);
    }
    localStorage.setItem("isActive", !isActive);
  };

  return (
    <section className="section-registration">
      <h1 className="text-logo">
        Super <span>.Stream</span>
      </h1>
      <div className="registration-signin">
        <Link
          to="/login"
          className={`registration-headline ${isActive ? null : "form-active"}`}
          onClick={(e) => saveIsActiveValue(e)}
        >
          Sign In
        </Link>
        <Link
          to="/registration"
          className={`registration-headline ${isActive ? "form-active" : null}`}
          onClick={(e) => saveIsActiveValue(e)}
        >
          Registration
        </Link>
      </div>
      <form className="registration-form">
        <input
          type="text"
          name="firstname"
          id="firstname"
          className="registration-input"
          placeholder="Firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          type="text"
          name="lastname"
          id="lastname"
          className="registration-input"
          placeholder="Lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="email"
          name="email"
          id="email"
          className="registration-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          className="registration-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          value="Registration"
          className="registration-button"
          onClick={handleRegistrationSubmit}
        />

        <div className="informations">
          <span className="need-help">Need help?</span>
        </div>
      </form>
    </section>
  );
};

export default Registration;
