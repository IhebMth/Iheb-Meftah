import React, { useEffect, useRef, useState } from "react";
import "../css/About.css";
import ihebPdp from "../images/iheb-removebg.png";
import ihebCv from "../ihebMeftahCv.pdf";
import Typed from "typed.js";

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
import {
  faAngleDown,
  faAngleUp,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {

  // Front End Devoloper title (Jquery Animation)
  const el = useRef(null);

 
  //Load more Button in about me Section 
  const [showHighlights, setShowHighlights] = useState(false);
  const [showLoadMoreButton, setShowLoadMoreButton] = useState(true);
  const [showUpButton, setShowUpButton] = useState(false);


   

  useEffect(() => {
    const options = {
      strings: [" FrontEnd Developer"], // Update with the cryon icon HTML code or specific component usage
      typeSpeed: 100,
      backSpeed: 100,
      loopCount: Infinity,
      showCursor: false,
      smartBackspace: true,
    };

    const typed = new Typed(el.current, options);

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  

  return (
    <>
      <div className="about-section box-shadow  py-5 ">
        <div className="container-xxl ">
          <div className="row">
            <div className="  d-flex flex-column flex-wrap align-items-center justify-content-center mb-80">
              <div className="section-title py-5">
                <h1 className="title ">About Me</h1>
              </div>
            </div>

            <div className="  mb-80">
              <div
                className=" d-flex align-items-center justify-content-center"
                id="about"
              >
                <div className="card-section  d-flex flex-row align-items-center justify-content-center ">
                  <div className="section-1">
                    <img src={ihebPdp} alt="iheb" className="" />
                  </div>
                  <div className="section-2 py-3">
                    <div>
                      <div className="d-flex flex-column text-center">
                        <h1 className="text-center ">Iheb Meftah</h1>
                        <h1>
                          <span ref={el} className="mb-40"></span>
                        </h1>
                      </div>

                      <p className="description  me-1 px-3">
                        FrontEnd Developer with knowledge of React Js with
                        redux, axios, along with a knock of building application
                        and user friendly interfaces ith utmost efficieny. I
                        benefit from practical experience in carrying out web
                        development acquired during various internships and
                        training.
                      </p>
                    </div>
                    {!showHighlights && showLoadMoreButton && !showUpButton && (
                      <button
                        className="downArrow"
                        onClick={() => {
                          setShowHighlights(true); 
                          setShowLoadMoreButton(false);
                          setShowUpButton(true)
                        }}
                      >
                        <FontAwesomeIcon icon={faAngleDown} className="fs-5" />
                        <p>
                          <b>load more</b>
                        </p>
                      </button>
                    )}
                    <div
                      className="highlights px-1 py-4"
                      style={{ display: (showHighlights && !showLoadMoreButton ) ? "block" : "none" }}
                    >
                      <ul>
                        <li>
                          <h4 className="title px-1 ">
                            Here are a Few Higlights:
                          </h4>
                        </li>
                        <li>Interactive FrontEnd as per the design</li>
                        <li>Responsive Web Development</li>
                        <li>State Management (Redux)</li>
                        <li>
                          Proficiency in ES6+ features, asynchronous
                          programming, and DOM manipulation
                        </li>
                      </ul>
                     
                      <button
                        className="upArrow"
                        onClick={() => {
                          setShowHighlights(false); 
                          setShowLoadMoreButton(true)
                          setShowUpButton(false)
                        }}
                      >
                        <FontAwesomeIcon icon={faAngleUp} className="fs-5" />
                      </button>
                    
                    </div>
                    

                    <div className="d-flex justify-content-center align-items-center position-relative">
              <a className="button border-0 mx-2" href='#contact'  >
                <p>Hire Me</p>
                </a>
                <a
                 href={ihebCv} 
                className="button button2 border-0 mx-2 " 
                target='_blank'
                rel='noreferrer'
                download='ihebMeftah.cv'
                >
                 <p>Download Cv</p>
                  </a>
              </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default About;
