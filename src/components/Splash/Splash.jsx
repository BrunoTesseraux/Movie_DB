import { useContext, useEffect } from "react";
import "./Splash.scss";
import { MovieContext } from "../Context/MovieContext";

const Splash = () => {
  const { showSplash } = useContext(MovieContext);
  console.log(showSplash);

  useEffect(() => {}, [showSplash]);
  console.log(showSplash);
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
