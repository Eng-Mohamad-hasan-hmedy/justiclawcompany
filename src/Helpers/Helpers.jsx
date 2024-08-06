/* eslint-disable react-refresh/only-export-components */
import { Avatar } from "@mui/material";
import { Counters, practiceAreasData, TeamMembers } from "../ArraiesData/Data";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const practice = practiceAreasData.map((area, index) => (
  <div key={index} className="area" data-aos="fade-right">
    <div className="icon" data-aos="fade-right">
      {area.icon}
    </div>
    <div className="content" data-aos="fade-right">
      <h3 data-aos="fade-right">{area.title}</h3>
      <p data-aos="fade-right">{area.description}</p>
    </div>
  </div>
));

export const counter = Counters.map((item) => (
  <div className="counter" key={item.id} data-aos="fade-right">
    <h1 data-aos="fade-right">{`${item.numberCount}${
      item.numberCount < 5 ? "K+" : "+"
    } `}</h1>
    <h4 data-aos="fade-right">{item.titleCount}</h4>
    <p data-aos="fade-right">{item.descriptionCounter}</p>
  </div>
));

export const clients = TeamMembers.map((team) => (
  <div className="team" key={team.id} data-aos="fade-right">
    <p data-aos="fade-right">{team.descriptionteam}</p>
    <Avatar sx={{ width: "70px", height: "70px" }} src={team.imgsrcTeam} />
    <h2 data-aos="fade-right">{team.titleName}</h2>
    <h3 data-aos="fade-right">{team.workName}</h3>
  </div>
));

const Helpers = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return <div></div>;
};

export default Helpers;
