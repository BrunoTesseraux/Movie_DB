import MovieList from "../components/MovieList/MovieList";
import NavBar from "../components/NavBar/NavBar";
import Searchbar from "../components/Searchbar/Searchbar";
import "./Home.scss";
const Home = () => {
  return (
    <>
      <div>hauptseite</div>
      <Searchbar />
      <MovieList />
      <NavBar />
    </>
  );
};

export default Home;
