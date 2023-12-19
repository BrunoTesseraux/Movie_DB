import React, { useState, useEffect, useContext } from "react";
import { MovieContext } from "../Context/MovieContext";
import "./Slider.scss";
import rating from "./../../assets/icons/rating.svg";

const Slider2 = () => {
  const [slideData, setSlideData] = useState([]);
  const { config } = useContext(MovieContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzUwMzc4ZDNjYTc2YjBjMWU4MWEyODRlZmYzNzg3MCIsInN1YiI6IjY1NmFjNzE5ZDQ0NWE4MDAyMmM5YTU1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sUq34cYiLj4-Pv81u3SdDs7ZVdR6Rlg1CcR0dudh1bk",
    },
  };

  useEffect(() => {
    const trendingMovies = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
        options
      )
        .then((response) => response.json())
        .then((data) => {
          setSlideData(data.results.slice(0, 5));
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    trendingMovies();
  }, []);

  //   console.log(slideData);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slideData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slideData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="heading-slider">
        <h1>Upcoming Movies</h1>
        <a href="">See all</a>
      </div>
      <div className="slider-container">
        <div className="slider">
          <div className="arrows left-arrow" onClick={goToPrevious}>
            ❰
          </div>
          {slideData.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? "active" : ""}`}
            >
              <img
                src={`${config.images.secure_base_url}${config.images.backdrop_sizes[0]}${slide.backdrop_path}`}
                alt={`Slide ${index + 1}`}
              />
              <div className="content">
                <h2>{slide.original_title}</h2>
                <p className="rating_star">
                  <img src={rating} alt="" /> {slide.vote_average.toFixed(1)} /
                  10.0
                </p>
              </div>
            </div>
          ))}
          <div className="arrows right-arrow" onClick={goToNext}>
            ❱
          </div>
        </div>
        <div className="slider-dots">
          {slideData.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider2;
