import "./contact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="main__contact" data-aos="fade-left">
      <section className="contact-area container" data-aos="fade-left">
        <div className="contact__inputs" data-aos="fade-left">
          <label data-aos="fade-left">
            Name
            <span className="required" data-aos="fade-left">
              *
            </span>
          </label>
          <div className="nameInputForm" data-aos="fade-left">
            <div className="inputName" data-aos="fade-left">
              <label htmlFor="www" data-aos="fade-left">
                First Name
              </label>
              <input type="text" required data-aos="fade-left" />
            </div>
            <div className="inputName" data-aos="fade-left">
              <label htmlFor="www" data-aos="fade-left">
                Last Name
              </label>
              <input type="text" required data-aos="fade-left" />
            </div>
          </div>
          <label htmlFor="sasx" data-aos="fade-left">
            Email
            <span className="required" data-aos="fade-left">
              *
            </span>
          </label>
          <div className="emailForm" data-aos="fade-left">
            <input type="email" required data-aos="fade-left" />
          </div>
          <label htmlFor="sasx">
            Subject
            <span className="required" data-aos="fade-left">
              *
            </span>
          </label>
          <div className="subject" data-aos="fade-left">
            <input type="text" required data-aos="fade-left" />
          </div>
          <label htmlFor="sasx" data-aos="fade-left">
            Message
            <span className="required" data-aos="fade-left">
              *
            </span>
          </label>
          <div className="message">
            <textarea type="text" required />
          </div>
          <div className="button_submit">
            <button className="btn">Submit</button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
