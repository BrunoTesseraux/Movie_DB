import { useContext, useEffect } from "react";
import "./MovieListItem.scss";
import { MovieContext } from "../Context/MovieContext";
import rating from "./../../assets/icons/rating.svg";
import { favoritenDaten } from "../Favoriten/FavoritenDaten";
import { Link } from "react-router-dom";

const MovieListItem = ({ movieId }) => {
  // Accessing context values
  const { config, movieDetails, setMovieDetails, genreValue, searchTerm } =
    useContext(MovieContext);

  // Fetching environment variable for bearer token
  const bearerToken = import.meta.env
    .VITE_AUTHENTICATION_BEARER_TOKEN_THE_MOVIE_DB;

  // Defining fetch options with authentication headers
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
        // Updating movie details in context
        setMovieDetails((prevDetails) => [...prevDetails, movieDetailsObj]);
      })
      .catch((error) => console.log(error));
  }, [movieId, setMovieDetails]);

  // Return null if image configuration is not available
  if (!config?.images) {
    return null;
  }

  let movie = movieDetails.find((detail) => detail.id === movieId);
  if (!movie) {
    // Display loading message if movie is not found
    return <div>Lade Film...</div>;
  }

  // Checking if movie matches search term and selected genre
  const titleMatchesSearchTerm = searchTerm
    ? movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    : true;
  const genreMatches = genreValue
    ? movie.genres.some((genre) => genre.name === genreValue)
    : true;

  // Do not render if movie does not match the filter criteria
  if (!titleMatchesSearchTerm || !genreMatches) {
    return null;
  }

  // Destructuring movie properties
  const { title, poster_path, release_date, runtime, vote_average } = movie;

  // Calculating release year from release date
  const releaseYear = release_date
    ? new Date(release_date).getFullYear()
    : "Unknown";

  // Building image URL for movie

  const { secure_base_url, poster_sizes } = config.images;
  const imageURL = `${secure_base_url}${poster_sizes[6]}${poster_path}`;

  const handleAddToFavorites = () => {
    favoritenDaten.push(movie);
    console.log("Film zu Favoriten hinzugefügt:", movie);
  };

  return (
    <Link to={`/detail/${movie.id}`} className="link">
      <li key={movieId} className="movie-card">
        <div className="image-wrapper">
          <img
            className="movie-card-img"
            src={imageURL}
            alt={`Bild des Films ${title}`}
          />
        </div>
        <div className="movie-card-content">
          <h2 className="movie-card-headline">{title}</h2>
          <div className="movie-card-infos">
            <p className="movie-card-rating">
              <img src={rating} alt="" className="rating-icon" />
              {vote_average.toFixed(1)}
            </p>
            <p className="dot">⏺</p>
            <p className="movie-card-release_date">{releaseYear}</p>
            <p className="dot">⏺</p>

            {genreValue && (
              <>
                <p className="movie-card-genre">{genreValue}</p>
                <p className="dot">⏺</p>
              </>
            )}

            <p className="movie-card-runtime">
              {Math.floor(runtime / 60)}h {runtime % 60}m
            </p>
          </div>
        </div>
        <img
          onClick={handleAddToFavorites} // Fügen Sie den onClick-Handler hinzu
          className="favorites"
          src="src\components\SVG\Vector.svg"
          alt=""
        />
      </li>
    </Link>
  );
};

export default MovieListItem;
