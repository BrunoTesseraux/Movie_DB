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

const Details = () => {
  //useContext from fetch
  const { allMovies, movieDetails, setMovieDetails } = useContext(MovieContext);
  // console.log(allMovies);

  const { config } = useContext(MovieContext);
  // console.log(config);

  const { genres } = useContext(MovieContext);
  // console.log(genres);

  //useParams and path for selected movie-data !old!
  const selectedMoviePath = useParams();
  // console.log(selectedMoviePath);

  const selectedMovieID = selectedMoviePath.id;
  // console.log(selectedMovieID);

  const selectedMovieInfos = allMovies.filter((movie) => {
    return movie.id.toString() === selectedMovieID.toString();
  });
  // console.log(selectedMovieInfos);

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
    // return () => {
    //   setMovieDetails([]);
    // };
  }, [selectedMovieID, setMovieDetails]);

  console.log(movieDetails);

  //Array mit spoken languages
  const languages = movieDetails[0]?.spoken_languages;
  console.log(languages);

  const [englishName, setEnglishName] = useState(true);

  //Array mit genres aus film
  const thisMovieGenres = movieDetails[0]?.genres;
  console.log(thisMovieGenres);

  let movie = movieDetails?.find(
    (detail) => detail?.id.toString() === selectedMovieID
  );

  if (!movie) {
    // Display loading message if movie is not found
    return <div>Lade Film...</div>;
  }

  // Destructuring movie properties
  const {
    id,
    title,
    poster_path,
    overview,
    backdrop_path,
    release_date,
    runtime,
    vote_average,
  } = movie;

  return (
    <>
      <section className="movie-details">
        <article className="movie-details" key={id}>
          <div className="movie-details-top">
            <img
              src={`${config?.images?.base_url}${config?.images?.backdrop_sizes[3]}${backdrop_path}`}
              alt=""
              className="backdrop"
            />
            <p className="movie-details-headline">Movie Details</p>
            <h2>{title}</h2>
            <div className="features">
              <ButtonBack
                icon={back}
                // onClick={() => window.scrollTo(0, 0)}
              />
              <div className="save-download-wrapper">
                <ButtonIconOnly icon={save} />
                <ButtonIconOnly icon={download} />
              </div>
            </div>
            <div className="key-infos">
              <ul>
                <p>
                  <img src={rating} alt="" /> {vote_average}
                </p>
                <li>{release_date}</li>

                <li>{genres[0]?.name}</li>
                <li>
                  {Math.floor(runtime / 60)} h {runtime % 60} min
                </li>
              </ul>
            </div>
          </div>
          <div className={"movie-details-bottom"}>
            <h3>Overview</h3>
            <div>
              <p
                className={
                  openParagraph ? "overview-text-open" : "overview-text-closed"
                }
              >
                {overview}
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
                {thisMovieGenres?.map((genre, index) => (
                  <p key={index}>{genre.name}</p>
                ))}
              </div>
            </div>
            <div className="languages">
              <span>Languages</span>
              <div className="info-table">
                {languages?.map((language, index) =>
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
      </section>
    </>
  );
};

export default Details;
