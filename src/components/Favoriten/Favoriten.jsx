import NavBar from "../NavBar/NavBar";
import "./Favoriten.scss";
import  { useContext } from "react";
import { favoritenDaten } from "./FavoritenDaten";
import { MovieContext } from "../Context/MovieContext";


const Favoriten = () => {
  const {config} = useContext(MovieContext)
  console.log(config)
  if (!config?.images) {
    return null;
  }
  const { secure_base_url, poster_sizes} = config.images;
  const imageURL = `${secure_base_url}${poster_sizes[0]}`;
  console.log(imageURL)


  
  return (
    <div className="container">
      <h2>Meine Favoriten</h2>
      <div className="favorites-list">
        {favoritenDaten.map((movie, index) => (
          <div key={index} className="favorite-item">
              { <img
                  src={`${imageURL}${movie.poster_path}`}
              alt={`Bild des Films ${movie.title}`}
            /> }
            {/* <button className="Button" onClick={handleDelet}>
              Löschen
            </button> */}

          </div>
        ))}
      </div>
      <NavBar />
    </div>
  );
};

export default Favoriten;