import "./Intro.scss";
import img1 from "../../assets/images/intro-img1.png";
import img2 from "../../assets/images/intro-img2.png";
const Intro = () => {
  return (
    <>
      <section className="section-intro">
        <article className="intro-imgs-wrapper">
          <img className="intro-img1" src={img1} alt="" />
          <img className="intro-img2" src={img2} alt="" />
        </article>
        <article className="intro-content">
          <h2 className="intro-content-headline">
            Enjoy Your Movie Watch Everywhere
          </h2>
          <p className="intro-content-text">
            Stream unlimited movies and TV showson your phone,tablet, laptop,
            and TV.
          </p>
        </article>
      </section>
    </>
  );
};

export default Intro;
