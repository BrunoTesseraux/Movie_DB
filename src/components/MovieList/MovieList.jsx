import { useContext } from "react";
import "./MovieList.scss";
import { MovieContext } from "../Context/MovieContext";
import MovieListItem from "../MovieListItem/MovieListItem";
import Searchbar from "../Searchbar/Searchbar";
const MovieList = () => {
  const { allMovies } = useContext(MovieContext);
  return (
    <>
      <section className="section-movies container">
        <ul className="movies-list">
          {allMovies.map((movie) => (
            <MovieListItem key={movie.id} movieId={movie.id} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default MovieList;
