import { Link } from "react-router-dom";
import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import "aos/dist/aos.css";

const Header = () => {
  const [active, setActive] = useState();
  const [activelink, setActiveLink] = useState("");
  function handleNav() {
    setActive(!active);
  }

  return (
    <div className="main__header">
      <div className="container container__header">
        <div className="logo">JUSTIC</div>
        <nav>
          <div className="nav__mobile">
            {!active ? (
              <MenuIcon sx={{ fontSize: "50px" }} onClick={handleNav} />
            ) : (
              <CloseIcon sx={{ fontSize: "50px" }} onClick={handleNav} />
            )}

            <ul className={active ? "list__mobile" : "active"}>
              <li onClick={() => setActive(!active)}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={() => setActive(!active)}>
                <Link to="/practice">Practice Areas</Link>
              </li>
              <li onClick={() => setActive(!active)}>
                <Link to="/services">Services</Link>
              </li>
              <li onClick={() => setActive(!active)}>
                <Link to="/about">About</Link>
              </li>
              <li onClick={() => setActive(!active)}>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <ul className="listDesktop">
            <li
              onClick={() => setActiveLink("Home")}
              className={activelink === "Home" ? "active" : ""}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              onClick={() => setActiveLink("practice")}
              className={activelink === "practice" ? "active" : ""}
            >
              <Link to="/practice">Practice Areas</Link>
            </li>
            <li
              onClick={() => setActiveLink("service")}
              className={activelink === "service" ? "active" : ""}
            >
              <Link to="/services">Services</Link>
            </li>
            <li
              onClick={() => setActiveLink("about")}
              className={activelink === "about" ? "active" : ""}
            >
              <Link to="/about">About</Link>
            </li>
            <li
              onClick={() => setActiveLink("contact")}
              className={activelink === "contact" ? "active" : ""}
            >
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
