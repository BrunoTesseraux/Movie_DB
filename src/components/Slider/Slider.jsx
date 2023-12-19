import "./Slider.scss";
const Slider = () => {
  return (
    <>
      <div className="center">
        <div className="carousel-wrapper">
          {/* Abstract radio buttons for slides */}
          <input id="slide1" type="radio" name="controls" defaultChecked />
          <input id="slide2" type="radio" name="controls" />
          <input id="slide3" type="radio" name="controls" />
          <input id="slide4" type="radio" name="controls" />
          <input id="slide5" type="radio" name="controls" />

          {/* Navigation dots */}
          <label htmlFor="slide1" className="nav-dot"></label>
          <label htmlFor="slide2" className="nav-dot"></label>
          <label htmlFor="slide3" className="nav-dot"></label>
          <label htmlFor="slide4" className="nav-dot"></label>
          <label htmlFor="slide5" className="nav-dot"></label>

          {/* Arrows */}
          {Array.from({ length: 5 }, (_, index) => (
            <label
              key={index}
              htmlFor={`slide${index + 1}`}
              className="left-arrow"
            ></label>
          ))}
          {Array.from({ length: 5 }, (_, index) => (
            <label
              key={index}
              htmlFor={`slide${index + 1}`}
              className="right-arrow"
            ></label>
          ))}

          <div className="carousel">
            <ul>
              <li>
                <img
                  src="https://raw.githubusercontent.com/osef-art/osef-art.github.io/master/src/assets/wallpapers/canyon.jpg"
                  alt="Canyon"
                />
              </li>
              <li>
                <img
                  src="https://m.media-amazon.com/images/I/31Y+R3Y3nvL._SL1000_.jpg"
                  alt="Mountains"
                />
              </li>
              <li>
                <img
                  src="https://raw.githubusercontent.com/osef-art/ministick/main/data/img/main/ministick-clip-3.gif"
                  alt="Animated Stick"
                />
              </li>
              <li>
                <img
                  src="https://raw.githubusercontent.com/osef-art/osef-art.github.io/master/src/assets/wallpapers/smoke.jpg"
                  alt="Smoke"
                />
              </li>
              <li>
                <img
                  src="https://images.ctfassets.net/9l3tjzgyn9gr/photo-157575/d224d518da6c26515a470a9b7e490df8/157575-honey-bun-baby.jpg?fm=jpg&fl=progressive&q=50&w=1200"
                  alt="Honey Bun Baby"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
