import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MovieContextProvider } from "./components/Context/MovieContext";
import Header from "./components/Header/Header";
import Home from "./page/Home";
import FetchMovies from "./components/FetchData/FetchMovies";
import { MovieContext } from "./components/Context/MovieContext";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile"
import Favoriten from "./components/Favoriten/Favoriten"
import Downloads from "./components/Downloads/Downloads"

function App() {
  return (
    <>
      <MovieContextProvider>
        <FetchMovies />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Favoriten" element={<Favoriten />} />
          <Route path="/Downloads" element={<Downloads />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
        {/* <Footer /> */}
      </MovieContextProvider>
    </>
  );
}

export default App;
