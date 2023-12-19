import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MovieContextProvider } from "./components/Context/MovieContext";
import Header from "./components/Header/Header";
import Home from "./page/Home";
import Details from "./components/Details/Details";
import MovieList from "./components/MovieList/MovieList";
import FetchMovies from "./components/FetchData/FetchMovies";

import { MovieContext } from "./components/Context/MovieContext";
import Slider from "./components/Slider/Slider";


function App() {
  return (
    <>
      <MovieContextProvider>
        <FetchMovies />
        <Slider />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Details />} />
          <Route path="/movies" element={<MovieList />} />
        </Routes>
        {/* <Footer /> */}
      </MovieContextProvider>
    </>
  );
}

export default App;
