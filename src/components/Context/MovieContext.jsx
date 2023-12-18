import { createContext, useState } from "react";

const MovieContext = createContext([]);

const MovieContextProvider = ({ children }) => {
  return <MovieContext.Provider value={{}}>{children}</MovieContext.Provider>;
};

export { MovieContext, MovieContextProvider };
