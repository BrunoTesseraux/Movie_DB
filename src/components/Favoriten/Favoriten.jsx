import React, { useContext, useState } from "react";
import NavBar from "../NavBar/NavBar";
import "./Favoriten.scss";
import { favoritenDaten } from "./FavoritenDaten";
import { MovieContext } from "../Context/MovieContext";
import binwhite from "./../../assets/icons/binwhite.svg";
import binred from "./../../assets/icons/binred.svg";
import { Link } from "react-router-dom";

const Favoriten = () => {
  const { config } = useContext(MovieContext);
  const [favorites, setFavorites] = useState(favoritenDaten); // State für Favoritenliste

  if (!config?.images) {
    return null;
  }

  const { secure_base_url, poster_sizes } = config.images;
  const imageURL = `${secure_base_url}${poster_sizes[0]}`;

  const removeFromFavorites = (indexToRemove) => {
    const updatedFavorites = favorites.filter(
      (_, index) => index !== indexToRemove
    );
    setFavorites(updatedFavorites);
  };

  return (
    <div className="favoriten-container">
      <h2 className="favoriten-headline">Meine Favoriten</h2>
      <p className="favoriten-introtext">
        Hier findest du alle Filme, die du dir gespeichert hast.
      </p>
      <div className="favorites-list">
        {favorites.map((movie, index) => (
          <Link to={`/detail/${movie.id}`}>
            <div key={index} className="favorite-item">
              <img
                className="poster"
                src={`${imageURL}${movie.poster_path}`}
                alt={`Bild des Films ${movie.title}`}
              />
              <button
                className="favoriten-secondary-btn-text-only"
                onClick={() => removeFromFavorites(index)} // Aufruf der Funktion zum Entfernen
              >
                <img src={binred} alt="" className="icon-bin" />
              </button>
            </div>
          </Link>
        ))}
      </div>
      <NavBar />
    </div>
  );
};

export default Favoriten;
