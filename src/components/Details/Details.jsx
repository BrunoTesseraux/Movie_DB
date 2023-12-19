import { useParams } from "react-router-dom";
import "./Details.scss";
import { useContext, useState, useEffect } from "react";
import { MovieContext } from "../Context/MovieContext";
import Button from "../Button/Button";
import play from "./../../assets/icons/play.svg";
import rating from "./../../assets/icons/rating.svg";
import ButtonIconOnly from "../Button/ButtonIconOnly";
import back from "./../../assets/icons/back.svg";
import save from "./../../assets/icons/save.svg";
import download from "./../../assets/icons/download.svg";

const Details = () => {
  const { allMovies, movieDetails, setMovieDetails } = useContext(MovieContext);
  console.log(allMovies);

  const { config } = useContext(MovieContext);
  console.log(config);

  const { genres } = useContext(MovieContext);
  console.log(genres);

  const selectedMoviePath = useParams();
  console.log(selectedMoviePath);

  const selectedMovieID = selectedMoviePath.id;
  console.log(selectedMovieID);

  const selectedMovieInfos = allMovies.filter((movie) => {
    return movie.id.toString() === selectedMovieID.toString();
  });
  console.log(selectedMovieInfos);

  const [video, setVideo] = useState();
  const [openParagraph, setOpenParagraph] = useState(false);

  // Neu
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
      `https://api.themoviedb.org/3/movie/${selectedMovieID}?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((movieDetailsObj) => {
        // Updating movie details in context
        setMovieDetails((prevDetails) => [...prevDetails, movieDetailsObj]);
      })
      .catch((error) => console.log(error));
  }, [selectedMovieID, setMovieDetails]);

  // // Destructuring movie properties
  // const {
  //   title,
  //   backdrop_path,
  //   release_date,
  //   runtime,
  //   vote_average: rating,
  // } = movie;

  console.log(movieDetails);

  return (
    <>
      <section>
        {selectedMovieInfos.map((props) => (
          <article className="movie-details" key={props.id}>
            <div className="movie-details-top">
              <img
                src={`${config.images.base_url}${config.images.backdrop_sizes[3]}${props.backdrop_path}`}
                alt=""
                className="backdrop"
              />
              <p className="movie-details-headline">Movie Details</p>
              <h2>{props.title}</h2>
              <div className="features">
                <ButtonIconOnly icon={back} />
                <div className="save-download-wrapper">
                  <ButtonIconOnly icon={save} />
                  <ButtonIconOnly icon={download} />
                </div>
              </div>
              <div className="key-infos">
                <ul>
                  <p>
                    <img src={rating} alt="" /> {props.vote_average}
                  </p>
                  <li>{props.release_date}</li>
                  {genres.genres.map((genre) =>
                    genre.id === props.genre_ids[0] ? (
                      <li>{genre.name}</li>
                    ) : null
                  )}
                  <li>props.runtime</li>
                </ul>
                {/* <p>{props.release_date}</p>
                <p>Genre 1</p>
                <p>props.runtime</p> */}
              </div>
            </div>
            <div className={"movie-details-bottom"}>
              <h3>Overview</h3>
              <div>
                <p
                  className={
                    openParagraph
                      ? "overview-text-open"
                      : "overview-text-closed"
                  }
                >
                  {props.overview}
                </p>
                <button
                  onClick={() => setOpenParagraph(!openParagraph)}
                  className="inline-btn"
                >
                  {openParagraph ? "See less" : "See more"}
                </button>
              </div>
              <div className="genres">
                <span>Genres</span>
                <div className="info-table">
                  {genres.genres.map((genre) =>
                    genre.id === props.genre_ids[0] ? <p>{genre.name}</p> : null
                  )}
                  {genres.genres.map((genre) =>
                    genre.id === props.genre_ids[1] ? <p>{genre.name}</p> : null
                  )}
                  {genres.genres.map((genre) =>
                    genre.id === props.genre_ids[2] ? <p>{genre.name}</p> : null
                  )}
                  {genres.genres.map((genre) =>
                    genre.id === props.genre_ids[3] ? <p>{genre.name}</p> : null
                  )}
                </div>
              </div>
              <div className="languages">
                <span>Languages</span>
                <div className="info-table">
                  <p>{props.original_language}</p>
                  <p>{props.original_language}</p>
                  <p>{props.original_language}</p>
                </div>
              </div>
              <Button icon={play} content="Watch now"></Button>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default Details;
