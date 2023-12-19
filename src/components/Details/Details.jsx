import { useParams } from "react-router-dom";
import "./Details.scss";
import { useContext, useState } from "react";
import { MovieContext } from "../Context/MovieContext";
import Button from "../Button/Button";
import play from "./../../assets/icons/play.svg";
import rating from "./../../assets/icons/rating.svg";

const Details = () => {
  const { allMovies } = useContext(MovieContext);
  console.log(allMovies);

  const { config } = useContext(MovieContext);
  console.log(config);

  const { fetchGenre } = useContext(MovieContext);
  console.log(fetchGenre);

  const selectedMoviePath = useParams();
  console.log(selectedMoviePath);

  const selectedMovieID = selectedMoviePath.id;
  console.log(selectedMovieID);

  const selectedMovieInfos = allMovies.filter((movie) => {
    return movie.id.toString() === selectedMovieID.toString();
  });
  console.log(selectedMovieInfos);

  const [video, setVideo] = useState();

  return (
    <>
      <section>
        {selectedMovieInfos.map((props) => (
          <article className="movie-details" key={props.id}>
            <div className="movie-details-top">
              {/* import poster?? */}
              <img
                src={`${config.base_url}.${props.poster_path}`}
                alt=""
                className="poster"
              />
              <h1>{props.title}</h1>
              <div className="features">
                <button>back</button>
                <button>save</button>
                <button>download</button>
              </div>
              <div className="key-infos">
                <p>
                  <img src={rating} alt="" /> {props.vote_average}
                </p>
                <p>{props.release_date}</p>
                <p>Genre 1</p>
                <p>props.runtime</p>
              </div>
            </div>
            <div className="movie-details-bottom">
              <h2>Overview</h2>
              <div>
                <p className="overview-text">{props.overview}</p>
                <button className="inline-btn">See more</button>
              </div>
              <div className="genres">
                <p>Genre1</p>
                <p>Genre2</p>
                <p>Genre3</p>
              </div>
              <div className="languages">
                <p>{props.original_language}</p>
                <p>language2</p>
                <p>language3</p>
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
