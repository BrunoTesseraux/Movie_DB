import { useContext, useEffect } from "react";
import "./MovieListItem.scss";
import { MovieContext } from "../Context/MovieContext";

const MovieListItem = ({ movieId }) => {
  const { config, movieDetails, setMovieDetails, genreValue } =
    useContext(MovieContext);

  const bearerToken = import.meta.env
    .VITE_AUTHENTICATION_BEARER_TOKEN_THE_MOVIE_DB;

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${bearerToken}`,
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((movieDetailsObj) => {
        setMovieDetails((prevDetails) => [...prevDetails, movieDetailsObj]);
      })
      .catch((error) => console.log(error));
  }, [movieId, setMovieDetails]);

  if (!config?.images) {
    return null;
  }

  const movie = movieDetails.find((detail) => detail.id === movieId);
  if (!movie) {
    return <div>Lade Film...</div>;
  }

  const isGenreMatch = movie.genres?.some((genre) => genre.name === genreValue);
  if (!isGenreMatch) {
    return null;
  }

  const {
    title,
    backdrop_path,
    release_date,
    runtime,
    vote_average: rating,
  } = movie;
  const releaseYear = release_date
    ? new Date(release_date).getFullYear()
    : "Unknown";
  const { secure_base_url, backdrop_sizes } = config.images;
  const imageURL = `${secure_base_url}${backdrop_sizes[0]}${backdrop_path}`;

  return (
    <article key={movieId} className="movie-card">
      <img
        className="movie-card-img"
        src={imageURL}
        alt={`Bild des Films ${title}`}
      />
      <h2 className="movie-card-headline">{title}</h2>
      <p className="movie-card-release_date">{releaseYear}</p>
      <p className="movie-card-rating">{rating}</p>
      <p className="movie-card-genre">
        {Math.floor(runtime / 60)} h {runtime % 60} Minuten
      </p>
      <p className="movie-card-genre">{genreValue}</p>
    </article>
  );
};

export default MovieListItem;
