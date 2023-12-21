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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [toSignIn, setToSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [users, setUsers] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);
  const [isNavigatingFromIntro, setIsNavigatingFromIntro] = useState(false);
  const [localSearchTerm, setLocalSearchTerm] = useState("");

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
        isLoggedIn,
        setIsLoggedIn,
        email,
        setEmail,
        password,
        setPassword,
        users,
        setUsers,
        toSignIn,
        setToSignIn,
        isActive,
        setIsActive,
        firstname,
        setFirstname,
        lastname,
        setLastname,
        hasAnimationPlayed,
        setHasAnimationPlayed,
        isNavigatingFromIntro,
        setIsNavigatingFromIntro,
        localSearchTerm,
        setLocalSearchTerm,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieContextProvider };
