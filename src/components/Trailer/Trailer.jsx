import { useParams } from "react-router-dom";
import ButtonBack from "../Button/ButtonBack";
import "./Trailer.scss";
import back from "./../../assets/icons/back.svg";

const Trailer = () => {
  const selectedMoviePath = useParams();
  console.log(selectedMoviePath);

  const selectedMovieID = selectedMoviePath.id;
  console.log(selectedMovieID);

  return (
    <>
      <section className="trailer-wrapper">
        <ButtonBack icon={back} className="back-on-fullscreen" />
        {/* <YouTube className="youtube" /> */}
        <div className="youtube">
          <iframe
            src={`https://www.youtube.com/embed/${selectedMovieID}`}
            allowFullScreen
            frameborder="0"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Trailer;
