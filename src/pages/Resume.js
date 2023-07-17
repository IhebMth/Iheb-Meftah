import React, { useState } from "react";
import "../css/Resume.css";
import Marquee from "react-fast-marquee";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import RestoreIcon from "@mui/icons-material/Restore";
import SchoolIcon from "@mui/icons-material/School";
import PaletteIcon from "@mui/icons-material/Palette";
import Projects from "../components/Projects";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  // to Scroll between navigation buttons in resume Section
  const [value, setValue] = useState(0);
  const [showDetails, setShowDetails] = useState(true);

  const handleButtonClick = (newValue) => {
    setValue(newValue);
    setShowDetails(true); // Show the side div when a button is clicked
  };

  let softSkills = [
    "Collaboration",
    "Adaptability",
    "Positive Attitude",
    "Problem Solving",
    "Continuous learning",
    "Comminucation",
    "Time Management",
    "Problem Empathy",
    "Creativity",
  ];

  return (
    <>
      <div className="resume-section container-xxl mb-40">
        <div className="row">
          <div className="d-flex flex-column align-items-center justify-content-center ">
            <div className="section-title py-5 mb-40">
              <h1 className="title " id="resume">
                Resume
              </h1>
            </div>
            <div className=" resume d-flex flex-row  justify-content-center align-items-center gap-5 ">
              <nav className="buttonNavigation d-flex flex-column">
                <BottomNavigation
                  className="custom-bottom-navigation d-flex flex-column gap-15 "
                  showLabels
                  value={value}
                  onChange={(event, newValue) => {
                    handleButtonClick(newValue);
                  }}
                  sx={{
                    "& .Mui-selected": {
                      color: "var(--color-purple)", // Change the color of the active label
                    },
                    "& .Mui-selected .MuiBottomNavigationAction-wrapper": {
                      color: "var(--color-purple)", // Change the color of the active label text
                    },
                    "& .Mui-selected .MuiSvgIcon-root": {
                      fill: "var(--color-purple)", // Change the color of the active icon
                    },
                  }}
                >
                  <BottomNavigationAction
                    label="graduation"
                    className="resumeNav mt-2"
                    value={0}
                    icon={<SchoolIcon />}
                  />
                  <BottomNavigationAction
                    label="Projects"
                    className="resumeNav"
                    value={1}
                    icon={<ImportantDevicesIcon />}
                  />
                  <BottomNavigationAction
                    label="Skills"
                    className="resumeNav"
                    value={2}
                    icon={<RestoreIcon />}
                  />
                  <BottomNavigationAction
                    label="Experience"
                    className="resumeNav mb-2"
                    value={3}
                    icon={<PaletteIcon />}
                  />
                </BottomNavigation>
              </nav>

              {showDetails && value === 0 && (
                <div className="xoxo py-3 d-flex flex-column position-relative">
                  <h1 className="title d-flex align-items-center justify-content-center">
                    Education
                  </h1>
                  <div className="d-flex flex-row align-items-center justify-content-between">
                    <span>
                      <h3 className="list-item mx-4 mt-4 mb-40">
                        License in Computer science
                      </h3>
                    </span>
                    <span>
                      <h5 className=" date mt-4 mb-40 box-shadow">2022</h5>
                    </span>
                  </div>

                  <div className="d-flex flex-row align-items-center justify-content-between">
                    <span>
                      <h3 className="list-item mx-4 mt-4 mb-40">
                        Bachelor of Science in IT
                      </h3>
                    </span>
                    <span>
                      <h5 className=" date mt-4 mb-40 box-shadow">2019</h5>
                    </span>
                  </div>

                  <div className="langAndHobb d-flex flex-row justify-content-between">
                    <div className="d-flex flex-column flex-nowrap align-items-start justify-content-between ">
                      <h1 className=" title mx-2">Languages</h1>
                      <span>
                        <h5 className="list-item mx-4 mt-4">Arabic : Native</h5>
                      </span>

                      <span>
                        <h5 className="list-item mx-4 mt-4">
                          English : Fluent
                        </h5>
                      </span>

                      <span>
                        <h5 className="list-item mx-4 mt-4">French : Fluent</h5>
                      </span>
                    </div>

                    <div className="d-flex flex-column align-items-end justify-content-between mx-5">
                      <h1 className=" title hobbies ">Hobbies</h1>
                      <span className="w-100">
                        <h5 className="list-item mx-4 mt-4">
                          Running (Marathons)
                        </h5>
                      </span>

                      <span className="w-100">
                        <h5 className="list-item mx-4 mt-4">Playing Chess</h5>
                      </span>

                      <span className="w-100">
                        <h5 className="list-item mx-4 mt-4">Volunteer Work</h5>
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {showDetails && value === 1 && (
                <div className="xoxo">
                  <Projects />
                </div>
              )}

              {showDetails && value === 2 && (
                <div className="xoxo">
                  <div className="marquee">
                    <div>
                      <h1 className="text-center mt-3 mb-3">
                        Programming Skills
                      </h1>
                      <Marquee className="marq d-flex box-shadow p-3 mt-40 mb-3">
                        <div className="marq">
                          <i className=" skills-icons devicon-html5-plain-wordmark colored "></i>
                        </div>

                        <div className="marq">
                          <i className=" skills-icons devicon-css3-plain-wordmark colored "></i>
                        </div>

                        <div className="marq">
                          <i className=" skills-icons js devicon-javascript-plain colored "></i>
                        </div>

                        <div className="marq">
                          <i className=" skills-icons devicon-react-original-wordmark colored "></i>
                        </div>

                        <div className="marq">
                          <i className=" skills-icons devicon-bootstrap-plain-wordmark colored "></i>
                        </div>

                        <div className="marq">
                          <i className=" skills-icons devicon-photoshop-plain colored "></i>
                        </div>

                        <div className="marq">
                          <i className=" skills-icons devicon-github-original-wordmark colored "></i>
                        </div>
                      </Marquee>
                    </div>
                  </div>
                  <div className="mt-5">
                    <h1 className="text-center mt-3 mb-3">
                      Programming Knowledge
                    </h1>
                    <div className="marquee">
                      <Marquee className="  d-flex box-shadow p-3 mt-40 mb-3 ">
                        <div className="marq ">
                          <i className="skills-icons devicon-nodejs-plain-wordmark colored "></i>
                        </div>

                        <div className=" marq">
                          <i className="skills-icons devicon-express-original-wordmark colored "></i>
                        </div>

                        <div className=" marq">
                          <i className="skills-icons devicon-mongodb-plain-wordmark colored "></i>
                        </div>

                        <div className=" marq">
                          <i className="skills-icons devicon-mysql-plain-wordmark colored "></i>
                        </div>

                        <div className=" marq">
                          <i className="skills-icons devicon-php-plain colored "></i>
                        </div>

                        <div className=" marq">
                          <i class="devicon-wordpress-plain-wordmark colored "></i>
                        </div>

                        <div className=" marq">
                          <i className="skills-icons devicon-sass-original colored "></i>
                        </div>

                        <div className="marq ">
                          <i className="skills-icons devicon-illustrator-plain colored "></i>
                        </div>
                      </Marquee>
                    </div>
                  </div>

                  <div className="mt-5">
                    <h1 className="text-center mt-3 mb-3">Soft Skills</h1>
                    <div className=" soft-skills d-flex flex-wrap ">
                      {softSkills.map((skill, index) => (
                        <div className="w-33 p-1" key={index}>
                          <div className="d-flex justify-content-center align-items-center">
                            <ul>
                              <li>
                                <h5>{skill}</h5>
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {showDetails && value === 3 && (
                <div className="xoxo">
                  <div className="experience d-flex flex-row   gap-30 mx-3">
                    <div className="m-3 w-50">
                      <div className="calendarI d-flex gap-10 box-shadow algin-items-center justify-content-center">
                        <FontAwesomeIcon
                          className="cal-icon"
                          icon={faCalendar}
                        />
                        <p>
                          <b>
                            2022 
                            <span className="internship-date"> (3 months)</span>
                          </b>
                        </p>
                      </div>
                      <h5 className="mt-2">
                        <b>Web Development Internship (MERN Stack)</b>
                      </h5>
                      <p>Responsive single App Page with Mern Technology:</p>
                      <ul>
                        <li>ReactJs: Frontend library</li>
                        <li>
                          NodeJs: Software Platform(provides the runtime
                          environment.)
                        </li>
                        <li>
                          ExpressJs:handling HTTP requests, defining API
                          endpoints, and interacting with the database
                        </li>
                        <li>MongoDb: NoSQL database (Store and manage data)</li>
                      </ul>
                    </div>

                    <div className="m-3">
                      <div className="calendarI d-flex gap-10 box-shadow algin-items-center justify-content-center">
                        <FontAwesomeIcon
                          className="cal-icon"
                          icon={faCalendar}
                        />
                        <p>
                          <b>
                            2021{" "}
                            <span className="internship-date"> (1 month) </span>{" "}
                          </b>
                        </p>
                      </div>
                      <h5 className="mt-2">
                        <b>Mobile Development Internship</b>
                      </h5>
                      <p>
                        Creating a phone management application <br />
                        used technologies:
                      </p>
                      <ul>
                        <li>Kotlin programming language</li>
                        <li>XML</li>
                        <li>Android Studio</li>
                        <li>FireBase Authentication</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
