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
    const isFirstVisit = localStorage.getItem("firstVisit");
    const loggedIn = localStorage.getItem("loggedIn");

    console.log(loggedIn);

    if (isFirstVisit) {
      localStorage.setItem("firstVisit", "no");
      setShowSplash(true);
      // Verzögerung, um den Splash-Screen eine Weile anzuzeigen
      setTimeout(() => {
        setShowSplash(false);
        // Warten auf die Dauer der Ausblend-Animation
        setTimeout(() => setDisplaySplash(false), 500); // Angenommene Dauer der Ausblend-Animation
      }, 2000); // Zeit, bis die Ausblend-Animation beginnt
    } else {
      setDisplaySplash(false);
    }

    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }

    if (isLoggedIn) {
      localStorage.setItem("loggedIn", isLoggedIn);
    }
  }, [setShowSplash, isLoggedIn, setIsLoggedIn]);

  // Dass darkmode beim laden ausgeführt wird

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      {displaySplash ? (
        <Splash />
      ) : !displaySplash && isLoggedIn === false ? (
        <Intro />
      ) : (
        <main className="main-home">
          <div>Welcome!</div>
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
            <Link to="/alltrending">See all</Link>
          </div>
          <SliderNetflixStyle fetchUrl={upcomingURL} />
          <div className="heading-slider">
            <h1>Trending Movies</h1>
            <Link to="/allupcoming">See all</Link>
          </div>
          <SliderNetflixStyle fetchUrl={trendingURL} />
        </main>
      )}
    </>
  );
};

export default Home;
