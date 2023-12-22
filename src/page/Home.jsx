import { Link } from "react-router-dom";
import MovieList from "../components/MovieList/MovieList";
import NavBar from "../components/NavBar/NavBar";
import Searchbar from "../components/Searchbar/Searchbar";
import SliderComponent from "../components/Slider/SliderComponent";

const trendingURL =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
const upcomingURL =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

import "./Home.scss";

import SliderNetflixStyle from "../components/Slider/SliderNetflixStyle";
import DarkMode from "../components/DarkMode/DarkMode";

import { useContext, useEffect, useState } from "react";
import Splash from "../components/Splash/Splash";
import { MovieContext } from "../components/Context/MovieContext";
import Intro from "../components/Intro/Intro";
import LoginSignUp from "../components/LoginSignUp/LoginSignUp";

const Home = (onAllResultsChange) => {
  const {
    setShowSplash,
    displaySplash,
    setDisplaySplash,
    isLoggedIn,
    setIsLoggedIn,
  } = useContext(MovieContext);
  // const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const isFirstVisit = localStorage.getItem("firstVisit") === null;
    const loggedIn = localStorage.getItem("loggedIn") === "true";

    if (loggedIn) {
      setIsLoggedIn(true);
    }

    setShowSplash(true);
    setTimeout(() => {
      setShowSplash(false);
      setTimeout(() => setDisplaySplash(false), 500);
    }, 2000);

    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }

    if (isLoggedIn) {
      localStorage.setItem("loggedIn", isLoggedIn);
    }
  }, [setShowSplash, isLoggedIn, setIsLoggedIn]);

  return (
    <>
      {displaySplash ? (
        <Splash />
      ) : !displaySplash && isLoggedIn === false ? (
        <Intro />
      ) : (
        <main className="main-home">
          <div>Welcome!</div>
          <DarkMode />
          <Searchbar />
          <div className="heading-slider">
            <h1>Trending Movies</h1>
            <Link to="/movies">See all</Link>
          </div>
          <SliderComponent
            fetchUrl={trendingURL}
            onAllResultsChange={onAllResultsChange}
          />
          <div className="heading-slider">
            <h1>Upcoming Movies</h1>
            <a href="">See all</a>
          </div>
          <SliderNetflixStyle fetchUrl={upcomingURL} />
          <div className="heading-slider">
            <h1>Trending Movies</h1>
            <Link to="/allupcoming">See all</Link>
          </div>
          <SliderNetflixStyle fetchUrl={trendingURL} />
          <NavBar />
        </main>
      )}
    </>
  );
};

export default Home;
