import "./about.css";
import CheckIcon from "@mui/icons-material/Check";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import { Avatar } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "white" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
const About = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const TeamMembers = [
    {
      id: 1,
      descriptionteam:
        "Lorem ipsum dolor sit amet sit amet amet sit ametsit amet sit amet amet sit amet",
      imgsrcTeam: (
        <Avatar
          sx={{ width: "70px", height: "70px" }}
          src="https://randomuser.me/api/portraits/men/43.jpg"
        />
      ),
      titleName: "Mohamad",
      workName: "CEO SE-FOUNDER",
    },
    {
      id: 2,
      descriptionteam:
        "Lorem ipsum dolor sit amet sit amet amet sit ametsit amet sit amet amet sit amet",
      imgsrcTeam: (
        <Avatar
          sx={{ width: "70px", height: "70px" }}
          src="https://randomuser.me/api/portraits/men/78.jpg"
        />
      ),
      titleName: "Mike Doe",
      workName: "MANEGER",
    },
    {
      id: 3,
      descriptionteam:
        "Lorem ipsum dolor sit amet sit amet amet sit ametsit amet sit amet amet sit amet",
      imgsrcTeam: (
        <Avatar
          sx={{ width: "70px", height: "70px" }}
          src="https://randomuser.me/api/portraits/women/43.jpg"
        />
      ),
      titleName: "Maya",
      workName: "Lawer  ",
    },
    {
      id: 4,
      descriptionteam:
        "Lorem ipsum dolor sit amet sit amet amet sit ametsit amet sit amet amet sit amet",
      imgsrcTeam: (
        <Avatar
          sx={{ width: "70px", height: "70px" }}
          src="https://randomuser.me/api/portraits/women/66.jpg"
        />
      ),
      titleName: "Sham",
      workName: "TEAM LEADER",
    },
  ];
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="main__about " data-aos="fade-right">
      <div className="container" data-aos="fade-right">
        <h1 className="main_title" data-aos="fade-right">
          About{" "}
          <span className="highlight" data-aos="fade-right">
            {" "}
            Company{" "}
          </span>
        </h1>
        <div className="faq_section" data-aos="fade-right">
          <div className="content_section_about_features" data-aos="fade-right">
            <h1 data-aos="fade-right">
              Why <span className="highlight">Choose Us? </span>
            </h1>
            <p data-aos="fade-right">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <div className="feature_text" data-aos="fade-right">
              <CheckIcon sx={{ color: "#b8a484" }} data-aos="fade-right" />
              <p data-aos="fade-right">Far far away, behind the word</p>
            </div>
            <div className="feature_text" data-aos="fade-right">
              <CheckIcon sx={{ color: "#b8a484" }} data-aos="fade-right" />
              <p>Far from the countries Vokalia</p>
            </div>
            <div className="feature_text" data-aos="fade-right">
              <CheckIcon sx={{ color: "#b8a484" }} data-aos="fade-right" />
              <p data-aos="fade-right">Separated they live in Bookmarksgrove</p>
            </div>
          </div>
          <div className="accodion_section" data-aos="fade-right">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              sx={{ border: "none" }}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                sx={{
                  background: "#5d5d6a",
                  color: "#eaeaea",
                  borderBottom: "1px solid white",
                }}
              >
                <Typography data-aos="fade-right">
                  HOW TO DOWNLOAD AND REGISTER
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{ background: "#2d2d34", border: "none", color: "white" }}
              >
                <Typography data-aos="fade-right">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              sx={{ border: "none" }}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
                sx={{
                  background: "#5d5d6a",
                  color: "#eaeaea",
                  borderBottom: "1px solid white",
                }}
              >
                <Typography data-aos="fade-right">
                  HOW TO DOWNLOAD AND REGISTER
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{ background: "#2d2d34", border: "none", color: "white" }}
              >
                <Typography data-aos="fade-right">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              sx={{ border: "none" }}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
                sx={{
                  background: "#5d5d6a",
                  color: "#eaeaea",
                  borderBottom: "1px solid white",
                }}
              >
                <Typography data-aos="fade-right">
                  HOW TO DOWNLOAD AND REGISTER
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{ background: "#2d2d34", border: "none", color: "white" }}
              >
                <Typography data-aos="fade-right">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
              sx={{ border: "none" }}
            >
              <AccordionSummary
                aria-controls="panel4d-content"
                id="panel3d-header"
                sx={{
                  background: "#5d5d6a",
                  color: "#eaeaea",
                  borderBottom: "1px solid white",
                }}
              >
                <Typography data-aos="fade-right">
                  HOW TO DOWNLOAD AND REGISTER
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{ background: "#2d2d34", border: "none", color: "white" }}
              >
                <Typography data-aos="fade-right">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <h1 data-aos="fade-right">
          <span className="highlight" data-aos="fade-right">
            Our{" "}
          </span>{" "}
          Team
        </h1>
        <div className="info_content" data-aos="fade-right">
          {TeamMembers.map((team) => (
            <div className="team" key={team.id}>
              {team.imgsrcTeam}
              <p data-aos="fade-right">{team.descriptionteam}</p>
              <h2 data-aos="fade-right">{team.titleName}</h2>
              <h3 data-aos="fade-right">{team.workName}</h3>
            </div>
          ))}
        </div>
      </div>
      <section className="about-area container " data-aos="fade-right">
        <div className="content_About" data-aos="fade-right">
          <p data-aos="fade-right">
            Lets get started. <br /> Call us Now for a Free Consultation
          </p>
          <button className="btn" data-aos="fade-right">
            FREE CONSULTATION
          </button>
        </div>
      </section>
    </section>
  );
};

export default About;
