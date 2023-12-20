import { createContext, useState } from "react";

const MovieContext = createContext([]);

const MovieContextProvider = ({ children }) => {
  const [allMovies, setAllMovies] = useState([]);
  const [config, setConfig] = useState([]);
  const [genres, setGenres] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [genreValue, setGenreValue] = useState("");
  const [movieDetails, setMovieDetails] = useState([]);
  const [innerWidth, setInnerWidth] = useState(window.outerWidth);
  const [showSplash, setShowSplash] = useState(false);
  const [displaySplash, setDisplaySplash] = useState(true);

  return (
    <MovieContext.Provider
      value={{
        allMovies,
        setAllMovies,
        config,
        setConfig,
        genres,
        setGenres,
        searchTerm,
        setSearchTerm,
        genreValue,
        setGenreValue,
        movieDetails,
        setMovieDetails,
        innerWidth,
        setInnerWidth,
        showSplash,
        setShowSplash,
        displaySplash,
        setDisplaySplash,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieContextProvider };
