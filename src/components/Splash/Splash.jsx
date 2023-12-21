import { useContext, useEffect } from "react";
import "./Splash.scss";
import { MovieContext } from "../Context/MovieContext";
import logowhite from "./../../assets/logos/logowhite.svg";

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
      <img src={logowhite} alt="" />
    </section>
  );
};

export default Splash;
