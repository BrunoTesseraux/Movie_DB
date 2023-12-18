import { createContext, useState } from "react";

const MovieContext = createContext([]);

const MovieContextProvider = ({ children }) => {
  const [allMovies, setAllMovies] = useState([]);
  const [config, setConfig] = useState([]);
  const [genres, setGenres] = useState([]);

  return (
    <MovieContext.Provider
      value={{ allMovies, setAllMovies, config, setConfig, genres, setGenres }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieContextProvider };
