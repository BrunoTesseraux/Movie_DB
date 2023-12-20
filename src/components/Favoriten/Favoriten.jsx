import React, { useContext, useState } from "react";
import NavBar from "../NavBar/NavBar";
import "./Favoriten.scss";
import { favoritenDaten } from "./FavoritenDaten";
import { MovieContext } from "../Context/MovieContext";

const Favoriten = () => {
  const { config } = useContext(MovieContext);
  const [favorites, setFavorites] = useState(favoritenDaten); // State für Favoritenliste

  if (!config?.images) {
    return null;
  }

  const { secure_base_url, poster_sizes } = config.images;
  const imageURL = `${secure_base_url}${poster_sizes[0]}`;

  
  const removeFromFavorites = (indexToRemove) => {
    const updatedFavorites = favorites.filter((_, index) => index !== indexToRemove);
    setFavorites(updatedFavorites);
  };

  return (
    
      <div className="container">
        <h2>Meine Favoriten</h2>
        <div className="favorites-list">
          {favorites.map((movie, index) => (
            <div key={index} className="favorite-item">
              <img
                className="Poster"
                src={`${imageURL}${movie.poster_path}`}
                alt={`Bild des Films ${movie.title}`}
              />
              <button
                className="Button"
                onClick={() => removeFromFavorites(index)} // Aufruf der Funktion zum Entfernen
              >
                Löschen
              </button>
            </div>
          ))}
        </div>
        <NavBar />
      </div>
      
    
  );
};

export default Favoriten;
