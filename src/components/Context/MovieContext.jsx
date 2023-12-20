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
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieContextProvider };
