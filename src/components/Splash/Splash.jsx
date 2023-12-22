import { useContext, useEffect } from "react";
import "./Splash.scss";
import { MovieContext } from "../Context/MovieContext";

const Splash = () => {
  const { showSplash } = useContext(MovieContext);

  useEffect(() => {}, [showSplash]);

  return (
    <section
      className={`spash-screen ${
        showSplash ? "puff-in-center" : "puff-out-center"
      }`}
    >
      <h1>SuperStream</h1>
    </section>
  );
};

export default Splash;
