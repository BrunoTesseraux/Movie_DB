import { useParams } from "react-router-dom";
import ButtonBack from "../Button/ButtonBack";
import "./Trailer.scss";
import back from "./../../assets/icons/back.svg";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../Context/MovieContext";

const Trailer = () => {
  const selectedMoviePath = useParams();
  console.log(selectedMoviePath);

  const selectedMovieID = selectedMoviePath.id;
  console.log(selectedMovieID);

  const { allMovies, movieDetails, setMovieDetails } = useContext(MovieContext);
  console.log(allMovies);

  const [video, setVideo] = useState([]);

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
      `https://api.themoviedb.org/3/movie${selectedMovieID}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((movieTrailerObj) => {
        // Updating movie details in context
        setVideo((prevDetails) => [...prevDetails, movieTrailerObj]);
      })
      .catch((error) => console.log(error));
  }, [selectedMovieID, setVideo]);

  let videoPath = "";

  console.log(video);

  return (
    <>
      <section className="trailer-wrapper">
        <ButtonBack icon={back} className="back-on-fullscreen" />
        {/* <YouTube className="youtube" /> */}
        <div className="youtube">
          <iframe
            src={`https://www.youtube.com/embed/${selectedMovieID.id}`}
            allowFullScreen
            frameborder="0"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Trailer;
