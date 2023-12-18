import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MovieContextProvider } from "./components/Context/MovieContext";
import Header from "./components/Header/Header";
import Home from "./page/Home";
import FetchMovies from "./components/FetchData/FetchMovies";
import { MovieContext } from "./components/Context/MovieContext";

function App() {
  return (
    <>
      <MovieContextProvider>
        <FetchMovies />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </MovieContextProvider>
    </>
  );
}

export default App;
