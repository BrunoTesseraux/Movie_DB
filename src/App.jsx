import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MovieContextProvider } from "./components/Context/MovieContext";
import Header from "./components/Header/Header";
import Home from "./page/Home";
import Details from "./components/Details/Details";
import MovieList from "./components/MovieList/MovieList";
import FetchMovies from "./components/FetchData/FetchMovies";

import { MovieContext } from "./components/Context/MovieContext";

import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Favoriten from "./components/Favoriten/Favoriten";
import Downloads from "./components/Downloads/Downloads";
import Trailer from "./components/Trailer/Trailer";
import Intro from "./components/Intro/Intro";
import LoginSignUp from "./components/LoginSignUp/LoginSignUp";
import Registration from "./components/Registration/Registration";
import FilteredMovieList from "./components/FilteredMovieList/FilteredMovieList";
import Profilseite from "./components/Profile/testprofil";

function App() {
  const upcomingURL =
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
  const trendingURL =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  return (
    <div>
      <MovieContextProvider>
        <FetchMovies />

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favoriten" element={<Favoriten />} />
          <Route path="/Downloads" element={<Downloads />} />
          <Route path="/Profile" element={<Profile />} />
          {/* <Route path="/Profile" element={<Profilseite />} /> */}
          <Route path="/detail/:id" element={<Details />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/trailer/:id" element={<Trailer />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/registration" element={<Registration />} />
          <Route
            path="/allupcoming"
            element={<FilteredMovieList fetchUrl={upcomingURL} />}
          />
          <Route
            path="/alltrending"
            element={<FilteredMovieList fetchUrl={trendingURL} />}
          />
        </Routes>
        <NavBar />
        {/* <Footer /> */}
      </MovieContextProvider>
    </div>
  );
}

export default App;
