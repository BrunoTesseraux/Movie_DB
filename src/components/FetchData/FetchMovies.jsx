import { useEffect, useState } from "react";

const FetchMovies = () => {
  const [allMovies, setAllMovies] = useState([]);
  // const pageIndex = 1;

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
          console.log(moviesData.total_pages);
          newMovies = newMovies.concat(moviesData?.results); // concat movies to temporary array
          // get 5 pages from the api -> One Page have 20 Objects in an Array
          if (pageIndex === 200) {
            setAllMovies(newMovies); // set the state on the end of the bottom for loop
          }
        })
        .catch((error) => console.log(error));
    };

    for (let i = 1; i <= 200; i++) {
      fetchMovies(i);
    }
  }, []);

  console.log(allMovies);

  return <div></div>;
};

export default FetchMovies;
