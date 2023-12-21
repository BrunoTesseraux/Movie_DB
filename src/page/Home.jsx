import { Link } from "react-router-dom";
import MovieList from "../components/MovieList/MovieList";
import NavBar from "../components/NavBar/NavBar";
import Searchbar from "../components/Searchbar/Searchbar";
import SliderComponent from "../components/Slider/SliderComponent";

const trendingURL =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
const upcomingURL =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

import "./Home.scss";
const Home = (onAllResultsChange) => {
  return (
    <main className="main-home">
      <div cla>Welcome!</div>
      <Searchbar />
      <div className="heading-slider">
        <h1>Trending Movies</h1>
        <Link to="/movies">See all</Link>
      </div>
      <SliderComponent
        fetchUrl={trendingURL}
        onAllResultsChange={onAllResultsChange}
      />
      <div className="heading-slider">
        <h1>Upcoming Movies</h1>
        <a href="">See all</a>
      </div>
      <SliderComponent fetchUrl={upcomingURL} />
      {/* <NavBar /> */}
    </main>
  );
};

export default Home;
