import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../Context/MovieContext";

const FetchMovies = () => {
  const { allMovies, setAllMovies, config, setConfig, genres, setGenres } =
    useContext(MovieContext);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzUwMzc4ZDNjYTc2YjBjMWU4MWEyODRlZmYzNzg3MCIsInN1YiI6IjY1NmY2YzRlOTQ2MzE4MDExZDhhMDQyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SDK0CwPNgeSykWhKcCVsJj-ZZk7fQWBt3pQBFB57XVI",
    },
  };

  useEffect(() => {
    let newMovies = []; // Temporary array for the collected films

    const fetchMovies = (pageIndex) => {
      fetch(
        `https://api.themoviedb.org/3/discover/movie?page=${pageIndex}&language=en`,
        options
      )
        .then((response) => response.json())
        .then((moviesData) => {
          newMovies = newMovies?.concat(moviesData.results); // concat movies to temporary array
          // get 5 pages from the api -> One Page have 20 Objects in an Array
          if (pageIndex === 400) {
            setAllMovies(newMovies); // set the state on the end of the bottom for loop
          }
        })
        .catch((error) => console.log(error));
    };

    for (let i = 1; i <= 400; i++) {
      fetchMovies(i);
    }
  }, []);

  useEffect(() => {
    const fetchConfig = () => {
      fetch("https://api.themoviedb.org/3/configuration", options)
        .then((response) => response.json())
        .then((configData) => setConfig(configData));
    };
    fetchConfig();
  }, []);

  useEffect(() => {
    const fetchGenre = () => {
      fetch("https://api.themoviedb.org/3/genre/movie/list", options)
        .then((response) => response.json())
        .then((genreData) => setGenres(genreData));
    };
    fetchGenre();
  }, []);

  if (allMovies !== undefined) {
    console.log(allMovies);
  }

  console.log(config);
  console.log(genres);

  return <div></div>;
};

export default FetchMovies;
