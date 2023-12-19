import NavBar from "../components/NavBar/NavBar";
import Searchbar from "../components/Searchbar/Searchbar";
import Slider from "../components/Slider/Slider";
import Slider2 from "../components/Slider/Slider2";
import "./Home.scss";
const Home = () => {
  return (
    <>
      <div>Welcome!</div>
      <Searchbar />
      <Slider />
      {/* <Slider2 /> */}
      <NavBar />
    </>
  );
};

export default Home;
