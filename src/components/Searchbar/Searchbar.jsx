import { useContext, useEffect } from "react";
import { MovieContext } from "../Context/MovieContext";
import "./Searchbar.scss";
import searchIcon from "../../assets/icons/search-icon.svg";
const Searchbar = () => {
  const {
    genres,
    genreValue,
    setGenreValue,
    searchTerm,
    setSearchTerm,
    localSearchTerm,
    setLocalSearchTerm,
  } = useContext(MovieContext);

  console.log(genreValue);
  useEffect(() => {}, [genreValue]);

  console.log();
  return (
    <>
      <section className="section-search-bar main-container">
        <div className="search-wrapper ">
          <input
            type="search"
            name="search"
            id="search"
            className="search"
            placeholder="Search Movie..."
            value={localSearchTerm}
            onChange={(e) => setLocalSearchTerm(e.target.value)}
          />
          <img src={searchIcon} alt="search-icon" className="search-icon" />
        </div>
        <div className="genres-wrapper">
          {genres?.genres?.map((genre, index) =>
            genre.name.toLowerCase() !== "documentary" ? (
              <button
                className={`genres ${
                  genreValue.toLowerCase() === genre.name.toLowerCase()
                    ? "active"
                    : null
                }`}
                key={index}
                onClick={(e) => setGenreValue(e.target.textContent)}
              >
                {genre.name}
              </button>
            ) : null
          )}
        </div>
      </section>
    </>
  );
};

export default Searchbar;
