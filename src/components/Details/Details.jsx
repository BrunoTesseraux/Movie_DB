import { Link, useNavigate, useParams } from "react-router-dom";
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
import ButtonBack from "../Button/ButtonBack";
import Slider from "../Slider/Slider";

const Details = () => {
  //useContext from fetch
  const { allMovies, movieDetails, setMovieDetails } = useContext(MovieContext);
  console.log(allMovies);

  const { config } = useContext(MovieContext);
  console.log(config);

  const { genres } = useContext(MovieContext);
  console.log(genres);

  //useParams and path for selected movie-data !old!
  const selectedMoviePath = useParams();
  console.log(selectedMoviePath);

  const selectedMovieID = selectedMoviePath.id;
  console.log(selectedMovieID);

  const selectedMovieInfos = allMovies.filter((movie) => {
    return movie.id.toString() === selectedMovieID.toString();
  });
  console.log(selectedMovieInfos);

  //Video
  const [video, setVideo] = useState();

  // open and close paragraph (read more/less)
  const [openParagraph, setOpenParagraph] = useState(false);

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

  console.log(movieDetails);

  //Array mit spoken languages
  const languages = movieDetails[0]?.spoken_languages;
  console.log(languages);

  const [englishName, setEnglishName] = useState(true);

  //Array mit genres aus film
  const thisMovieGenres = movieDetails[0]?.genres;
  console.log(thisMovieGenres);

  return (
    <>
      <section className="movie-details">
        {movieDetails.map((props) => (
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
                <ButtonBack icon={back} />
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
                  {genres.genres.map((genre, index) =>
                    genre.id === props.genre_ids[0] ? (
                      <li key={index}>{genre.name}</li>
                    ) : null
                  )}
                  <li>props.runtime</li>
                  <li>{props.genres[0].name}</li>
                  <li>
                    {Math.floor(props.runtime / 60)} h {props.runtime % 60} min
                  </li>
                </ul>
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
                  {thisMovieGenres.map((genre, index) => (
                    <p key={index}>{genre.name}</p>
                  ))}
                </div>
              </div>
              <div className="languages">
                <span>Languages</span>
                <div className="info-table">
                  {languages.map((language, index) =>
                    englishName ? (
                      <p key={index}>{language.english_name}</p>
                    ) : (
                      <p key={index}>{language.name}</p>
                    )
                  )}
                </div>
              </div>
              <Link to="/trailer/${props.id}" className="linkTo">
                <Button icon={play} content="Watch now"></Button>
              </Link>
            </div>
          </article>
        ))}
        <Slider />
      </section>
    </>
  );
};

export default Details;
