import { useContext, useEffect, useState } from "react";
import "./MovieListItem.scss";
import { MovieContext } from "../Context/MovieContext";

const MovieListItem = () => {
  const {
    allMovies,
    config,
    genres,
    movieDetails,
    setMovieDetails,
    genreValue,
  } = useContext(MovieContext);

  const [movieId, setMovieId] = useState(0);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzUwMzc4ZDNjYTc2YjBjMWU4MWEyODRlZmYzNzg3MCIsInN1YiI6IjY1NmY2YzRlOTQ2MzE4MDExZDhhMDQyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SDK0CwPNgeSykWhKcCVsJj-ZZk7fQWBt3pQBFB57XVI",
    },
  };

  const movieIds = allMovies?.map((movie) => setMovieId(movie.id));
  console.log(movieIds);

  useEffect(() => {
    const fetchDetails = (movieId) => {
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        options
      )
        .then((response) => response.json())
        .then((movieDetailsObj) =>
          setMovieDetails([...movieDetails, movieDetailsObj])
        )
        .catch((error) => console.log(error));

      for (let i = 0; i < movieIds.length; i++) {
        fetchDetails(movieId[i]);
      }
    };
  }, []);

  // if (config?.images === undefined) {
  //   return;
  // }

  // const { secure_base_url, backdrop_sizes } = config?.images;
  // const imageURL = `${secure_base_url}${backdrop_sizes[0]}`;

  // console.log(movieDetails);

  return (
    <>
      {/* {allMovies.map((movie) => {
        const {
          id,
          genre_ids,
          title,
          backdrop_path,
          release_date,
          vote_average: rating,
        } = movie;

        const [movieId, setMovieId] = useState(0);
        const [movieDetails, setMovieDetails] = useState([]);

        const gen = genres.genres.filter((genre) =>
          genre_ids.includes(genre.id) ? genre.name : null
        );

        const date = new Date(release_date);
        const releaseYear = date.getFullYear();

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzUwMzc4ZDNjYTc2YjBjMWU4MWEyODRlZmYzNzg3MCIsInN1YiI6IjY1NmY2YzRlOTQ2MzE4MDExZDhhMDQyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SDK0CwPNgeSykWhKcCVsJj-ZZk7fQWBt3pQBFB57XVI",
          },
        };

        useEffect(() => {
          const fetchMovieDetails = () => {
            fetch(
              `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
              options
            )
              .then((response) => response.json())
              .then((movieDetails) => setMovieDetails(movieDetails))
              .catch((error) => console.log(error));
          };
          fetchMovieDetails();
        }, [movieId]);

        console.log(movieDetails);

        return (
          <article key={id} className="movie-card">
            <img
              className="movie-card-img"
              src={`${imageURL}/${backdrop_path}`}
              alt={`Picture of the Movie ${title}`}
            />
            <h2 className="movie-card-headline">{title}</h2>
            <p className="movie-card-release_date">{releaseYear}</p>
            <p className="movie-card-rating">{rating}</p>
            <p className="movie-card-genre">{gen.map((g) => g.name + " ")}</p>
            <p className="movie-card-genre">{movieDetails.runtime}</p>
          </article>
        );
      })} */}
      <article key={movieDetails.id} className="movie-card">
        {/* <img
          className="movie-card-img"
          src={`${imageURL}/${movieDetails.backdrop_path}`}
          alt={`Picture of the Movie ${movieDetails.title}`}
        /> */}
        <h2 className="movie-card-headline">{movieDetails.title}</h2>
        <p className="movie-card-release_date">{movieDetails.releaseYear}</p>
        <p className="movie-card-rating">{movieDetails.rating}</p>
        {/* <p className="movie-card-genre">{gen.map((g) => g.name + " ")}</p> */}
        <p className="movie-card-genre">{movieDetails.runtime}</p>
      </article>
    </>
  );
};

export default MovieListItem;
