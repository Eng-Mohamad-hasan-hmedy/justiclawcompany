import "./hero.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  useEffect(() => {
    Aos.init({ duration:1000 });
  }, []);
  return (
    <div className="main_hero_section" data-aos='fade-left'>
      <div className="container hero_container">
        <div className="content_hero">
          <h1 data-aos="fade-right">
            <span>We Fight</span> for Your Right
          </h1>
          <p data-aos="fade-right">
            Another cool free template by the fine folks at
            <a href="#">Colorlib.</a>
          </p>
          <button data-aos="fade-right" className="btn">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
