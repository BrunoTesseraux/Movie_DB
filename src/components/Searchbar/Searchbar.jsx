import { useContext, useEffect, useRef } from "react";
import { MovieContext } from "../Context/MovieContext";
import "./Searchbar.scss";
import searchIcon from "../../assets/icons/search-icon.svg";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";
import logoblack from "../../assets/logos/logoblack.svg";
import logowhite from "../../assets/logos/logowhite.svg";



const Searchbar = () => {
  const { genres, genreValue, setGenreValue, searchTerm, setSearchTerm } =
    useContext(MovieContext);

    const currentTheme = localStorage.getItem("theme");
        
    // const logo = currentTheme === "dark" ? logowhite : logoblack;

  const location = useLocation();

  const onLocation = location.pathname === "/movies";

  const inputRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    searchTerm.length >= 3 ? navigate("/movies") : null;
    inputRef.current.focus();
  }, [genreValue, searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <section className="section-search-bar main-container">
        <div className="search-wrapper ">
          <Link to="/" className=" main-container">
            <img src={logoblack} alt="logo" className="logo" />
          </Link>
          <input
            ref={inputRef}
            type="search"
            name="search"
            id="search"
            className="search"
            placeholder="Search Movie..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <img src={searchIcon} alt="search-icon" className="search-icon" />
          <DarkMode />
        </div>
        <div className="genres-wrapper">
          {genres?.genres?.map((genre, index) =>
            genre.name.toLowerCase() !== "documentary" ? (
              <Link
                to="/movies"
                className={`genres ${
                  onLocation &&
                  genreValue.toLowerCase() === genre.name.toLowerCase()
                    ? "active"
                    : null
                }`}
                key={index}
                onClick={(e) => setGenreValue(e.target.textContent)}
              >
                {genre.name}
              </Link>
            ) : null
          )}
        </div>
      </section>

      {/* Render MovieList, wenn mindestens ein Zeichen im Suchbegriff vorhanden ist */}
      {/* {searchTerm.length > 0 && <MovieList />} */}
    </>
  );
};

export default Searchbar;
