import { useParams } from "react-router-dom";

import "./Details.scss";
const Details = () => {
  const selectedMovie = useParams();
  console.log(selectedMovie);

  const selectedMovieID = selectedMovie.id;
  console.log(selectedMovieID);

  return (
    <>
      <section>
        <article className="movie-details">
          <div className="movie-details-top">
            <h1>Movie Name</h1>
            <div className="features">
              <button>back</button>
              <button>save</button>
              <button>download</button>
            </div>
            <div className="key-infos">
              <p>8.0</p>
              <p>Erschienen</p>
              <p>Genre 1</p>
              <p>Länge</p>
            </div>
          </div>
          <div className="movie-details-bottom">
            <h2>Overview</h2>
            <p>
              {" "}
              Beschreibung, Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Magni, ad!
            </p>
            <div className="genres">
              <p>Genre1</p>
              <p>Genre2</p>
              <p>Genre3</p>
            </div>
            <div className="languages">
              <p>language1</p>
              <p>language2</p>
              <p>language3</p>
            </div>
            <button>Watch trailer</button>
          </div>
        </article>
      </section>
    </>
  );
};

export default Details;
