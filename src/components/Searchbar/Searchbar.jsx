import { useContext, useEffect } from "react";
import { MovieContext } from "../Context/MovieContext";
import "./Searchbar.scss";
const Searchbar = () => {
  const { genres, genreValue, setGenreValue, searchTerm, setSearchTerm } =
    useContext(MovieContext);

  console.log(genreValue);
  useEffect(() => {}, [genreValue]);

  console.log();
  return (
    <>
      <section className="section-search-bar">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search Movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          {genres?.genres?.map((genre, index) =>
            genre.name.toLowerCase() !== "documentary" ? (
              <button
                className=""
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
