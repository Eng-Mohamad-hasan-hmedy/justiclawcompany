import { Avatar } from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import "./services.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {
  const ServicesInfo = [
    {
      id: 1,
      avatarIcone: (
        <Avatar
          sx={{ width: "60px", height: "60px", backgroundColor: "#b8a484" }}
        >
          <SpeedIcon sx={{ fontSize: "35px" }} />
        </Avatar>
      ),
      descriptionService:
        "Lorem ipsum dolor sit amet sit amet amet sit ametsit amet sit amet amet sit amet",
    },
    {
      id: 2,
      avatarIcone: (
        <Avatar
          sx={{ width: "60px", height: "60px", backgroundColor: "#b8a484" }}
        >
          <EmojiEventsIcon sx={{ fontSize: "35px" }} />
        </Avatar>
      ),
      descriptionService:
        "Lorem ipsum dolor sit amet sit amet amet sit ametsit amet sit amet amet sit amet",
    },
    {
      id: 3,
      avatarIcone: (
        <Avatar
          sx={{ width: "60px", height: "60px", backgroundColor: "#b8a484" }}
        >
          <LightbulbIcon sx={{ fontSize: "35px" }} />
        </Avatar>
      ),
      descriptionService:
        "Lorem ipsum dolor sit amet sit amet amet sit ametsit amet sit amet amet sit amet",
    },
    {
      id: 4,
      avatarIcone: (
        <Avatar
          sx={{ width: "60px", height: "60px", backgroundColor: "#b8a484" }}
        >
          <ElectricBoltIcon sx={{ fontSize: "35px" }} />
        </Avatar>
      ),
      descriptionService:
        "Lorem ipsum dolor sit amet sit amet amet sit ametsit amet sit amet amet sit amet",
    },
  ];
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="main__services service_main" data-aos="fade-left">
      <section className="servisec-area container" data-aos="fade-left">
        <h1 data-aos="fade-left">
          Our <span className="highlight">Services</span>
        </h1>
        <div className="info_content_services" data-aos="fade-left">
          {ServicesInfo.map((serv) => (
            <div className="services_type" key={serv.id} data-aos="fade-left">
              {serv.avatarIcone}
              <p data-aos="fade-left">{serv.descriptionService}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Services;
