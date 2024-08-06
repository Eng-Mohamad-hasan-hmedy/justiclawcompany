import "./footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="main__footer">
      <div className="container">
        <div className="listFooter">
          <ul data-aos="fade-left">
            <li className="activeLink" data-aos="fade-right">
              Home
            </li>
            <li data-aos="fade-left"> About us</li>
            <li data-aos="fade-right">Practice Area</li>
            <li data-aos="fade-left">Services</li>
            <li data-aos="fade-right">Attorneys</li>
            <li data-aos="fade-left">Terms</li>
            <li data-aos="fade-right">Privacy</li>
          </ul>
          <ul data-aos="fade-right">
            <li className="activeLink" data-aos="fade-left">
              Practice Area
            </li>
            <li data-aos="fade-right"> Banking Law</li>
            <li data-aos="fade-left">Commercial Law</li>
            <li data-aos="fade-right">Corporate Law</li>
            <li data-aos="fade-left">Family Law</li>
            <li data-aos="fade-right">Media Law</li>
          </ul>
          <ul data-aos="fade-left">
            <li className="activeLink" data-aos="fade-left">
              Services
            </li>
            <li data-aos="fade-right"> Labor Law</li>
            <li data-aos="fade-left">Employment</li>
            <li data-aos="fade-right">Property Law</li>
            <li data-aos="fade-left">Family Law</li>
            <li data-aos="fade-right">Prosecution</li>
          </ul>
          <ul data-aos="fade-right">
            <li className="activeLink" data-aos="fade-left">
              Contact
            </li>
            <li data-aos="fade-right"> +1(123)-456-7890</li>
            <li data-aos="fade-left">+1(123)-456-7890</li>
            <li data-aos="fade-right">info@mydomain.com</li>
            <li>
              <ul className="soctialMedia">
                <InstagramIcon />
                <TwitterIcon />
                <FacebookIcon />
                <LinkedInIcon data-aos="fade-right" />
                <PinterestIcon />
                <YouTubeIcon />
              </ul>
            </li>
          </ul>
          <p style={{
            color:'white',fontSize:'16px'
            ,textAlign:'center',
            marginTop:'140px'
          }}>
            Created by Colorlib and recreated for tutorials goals by Mohamad
            hasan hmedy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
