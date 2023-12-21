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

function App() {
  return (
    <>
      <MovieContextProvider>
        <FetchMovies />

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favoriten" element={<Favoriten />} />
          <Route path="/Downloads" element={<Downloads />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/detail/:id" element={<Details />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/trailer/:id" element={<Trailer />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
        {/* <Footer /> */}
      </MovieContextProvider>
    </>
  );
}

export default App;
