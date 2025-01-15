import { useContext, useEffect } from "react";
import { MovieContext } from "../Context/MovieContext";

const FetchMovies = () => {
  const { setAllMovies, setConfig, setGenres } = useContext(MovieContext);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDVlNWFlZTZkMjY5M2ExNTBkOTk2OWMzMGUwNmRhZiIsInN1YiI6IjY1YzkxMTY0OThmMWYxMDE2MmQ3YjU2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q6K2urfq5WwsbXnrl5874YUchOd_kUuyD4UDF4y0Ikg",
    },
  };

  useEffect(() => {
    let newMovies = []; // Temporary array for the collected films

    async function fetchMovies(pageIndex) {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?page=${pageIndex}&language=en`,
          options
        );
        if (response.ok) {
          const moviesData = await response.json();
          newMovies = newMovies?.concat(moviesData.results); // concat movies to temporary array
          // get 5 pages from the api -> One Page have 20 Objects in an Array
          if (pageIndex === 10) {
            await setAllMovies(newMovies); // set the state on the end of the bottom for loop
          }
          return newMovies;
        }
        throw new Error("Something went wrong");
      } catch (error) {
        console.log(error);
      }
    }

    for (let i = 1; i <= 10; i++) {
      fetchMovies(i);
    }
  }, []);

  useEffect(() => {
    const fetchConfig = () => {
      fetch("https://api.themoviedb.org/3/configuration", options)
        .then((response) => response.json())
        .then((configData) => setConfig(configData))
        .catch((error) => console.log(error));
    };
    fetchConfig();
  }, []);

  useEffect(() => {
    const fetchGenre = () => {
      fetch("https://api.themoviedb.org/3/genre/movie/list", options)
        .then((response) => response.json())
        .then((genreData) => setGenres(genreData))
        .catch((error) => console.log(error));
    };
    fetchGenre();
  }, []);

  return <></>;
};

export default FetchMovies;
