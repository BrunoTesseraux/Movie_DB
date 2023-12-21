import { Link } from "react-router-dom";
import "./LoginSignUp.scss";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../Context/MovieContext";
import Home from "../../page/Home";
import { useNavigate } from "react-router-dom";
const LoginSignUp = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    users,
    setUsers,
    isLoggedIn,
    setIsLoggedIn,
  } = useContext(MovieContext);
  // const [loginStatus, setLoginStatus] = useState(true);
  // const [userDB, setUserDB] = useState([]);

  const navigate = useNavigate();
  console.log(isLoggedIn);

  useEffect(() => {
    const usersFromLocalStorage = localStorage.getItem("users");
    const parsedUserObj = JSON.parse(usersFromLocalStorage);
    setUsers(parsedUserObj);
    console.log(users);
  }, [email, password, setIsLoggedIn]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      console.log("Bitte geben Sie E-Mail und Passwort ein.");
      return;
    }

    // !! Localstorage setter to set userData for Testing login
    // let allUsers = [...users, { email, password }];
    // setUsers(allUsers);
    // console.log(allUsers);
    // localStorage.setItem("users", JSON.stringify(allUsers));

    let isUserValid = false;
    for (const singleUser of users) {
      if (singleUser.email === email && singleUser.password === password) {
        console.log(singleUser);
        isUserValid = true;
        break;
      }
    }

    if (isUserValid) {
      localStorage.setItem("loggedIn", "true");
      navigate("/");
      setIsLoggedIn(true);
    } else {
      console.log("Email or password not correct! Please try again.");
    }
  };

  console.log(email);
  console.log(password);
  return (
    <>
      <section className="section-login">
        <h1 className="text-logo">
          Super <span>.Stream</span>
        </h1>
        <h2 className="login-headline">Sign In</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            className="login-email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            className="login-password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Sign In" className="login-button" />

          <div className="informations">
            <label htmlFor="remember-me">
              <input
                type="checkbox"
                name="remember-me"
                id="remember-me"
                className="remember-me"
              />
              Remember me
            </label>
            <span className="need-help">Need help?</span>
          </div>
        </form>
      </section>
    </>
  );
};

export default LoginSignUp;
