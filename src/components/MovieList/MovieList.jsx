import { useContext } from "react";
import "./MovieList.scss";
import { MovieContext } from "../Context/MovieContext";
import MovieListItem from "../MovieListItem/MovieListItem";
import Searchbar from "../Searchbar/Searchbar";
import NavBar from "../NavBar/NavBar";
const MovieList = () => {
  const { allMovies } = useContext(MovieContext);
  return (
    <>
      <Searchbar />
      <section className="section-movies main-container">
        <ul className="movies-list">
          {allMovies.map((movie, index) => (
            <MovieListItem key={index} movieId={movie.id} />
          ))}
        </ul>
      </section>
      <NavBar />
    </>
  );
};

export default MovieList;
