import { useEffect } from "react";
import { clients, counter, practice } from "../../Helpers/Helpers.jsx";
import "./practice.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Practice = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="main__practice" data-aos="fade-right">
      <section className="practice-areas container">
        <div className="intro" data-aos="fade-right">
          <h2 data-aos="fade-right">
            Our <span data-aos="fade-right">Practice Areas</span>
          </h2>
          <p data-aos="fade-right">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <button className="btn" data-aos="fade-right">
            SEE MORE
          </button>
        </div>
        <div className="areas" data-aos="fade-right">
          {practice}
        </div>

        <h1 data-aos="fade-right">
          <span className="highlight" data-aos="fade-right">
            50 Years {" "}
          </span>
          of Experience in Various Cases
        </h1>
        <div className="info_content" data-aos="fade-right">
          {counter}
        </div>
        <h1 data-aos="fade-right">
          <span className="highlight" data-aos="fade-right">
            Happy
          </span>
          Clients
        </h1>
        <div className="info_content" data-aos="fade-right">
          {clients}
        </div>
      </section>
    </section>
  );
};

export default Practice;
