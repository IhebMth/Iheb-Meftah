import React, { Fragment, useState } from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'

import {ProjectCard} from './ProjectCard'
import '../css/Projects.css';

import progImg1 from '../images/progimg1.jpg'
import progImg2 from '../images/bg-1.jpg'
import progImg3 from '../images/progImg3.jpg'
import progImg4 from '../images/progImg4.jpg'
import progImg5 from '../images/progImg5.jpg'
import progImg6 from '../images/progImg6.jpg'
import progImg8 from '../images/progImg8.jpg'
import progImg9 from '../images/progImg9.PNG'
import { Tab } from 'bootstrap'
import { BottomNavigation ,BottomNavigationAction } from '@mui/material'

const Projects = () => {
    let projects = 
  [
  {
    title: 'E-Commerce App',
    description:'A Front End Elecotronics app',
    imgUrl: progImg1,
    githubLink: "https://github.com/IhebMth/e-commerce.git",
  },

  {
    title: 'React Chat App',
    description:'A ReactJs Chat Application',
    imgUrl: progImg2,
    githubLink: "https://github.com/IhebMth/Chat.git",

  },

  {
    title: 'Crypto App',
    description:'A Front End that searches coins using an api',
    imgUrl: progImg3,
    githubLink: "https://github.com/IhebMth/crypto.git",

  },
  
  {
    title: 'Phones Store',
    description:'Mern Stack Electronics Store',
    imgUrl: progImg1,
    githubLink: "https://github.com/IhebMth/Ecommerce.git",

  },

  {
    title: 'Organization of Weddings ',
    description:'front End Development of this WebSite (Mean Stack) ',
    imgUrl: progImg4,
    githubLink: "https://github.com/IhebMth/Iheb-Events.git",

  },

  {
    title: 'Vehicules Towing',
    description:' front End Development of this WebSite',
    imgUrl: progImg5,
    githubLink: "https://github.com/IhebMth/remorquage-cars.git",

  },

  {
    title: 'small reactJs Apps',
    description:'ToDoList / Calculator / Weather App / ..',
    imgUrl: progImg6,
    githubLink: "https://github.com/IhebMth/ReactJsCourse.git",

  },

  {
    title: 'Gabes Running Club',
    description:'A WebSite for group members and runners usig Html,CSS, and JavaScript',
    imgUrl: progImg8,
    githubLink: "https://github.com/IhebMth/Gabes-Running-Club.git",

  },
  
  {
    title: 'Personal Portfolio',
    description:'A beatiful portfolio form using Html/ Css / Js',
    imgUrl: progImg9,
    githubLink: "https://github.com/IhebMth/Ihebmeftah",
  }
  ]

  let [ value, setValue] = useState(0)
  let [showDetails,setShowDetails] = useState("true")
  const handleButtonClick = (newValue) => {
    setValue(newValue);
    setShowDetails(true); // Show the side div when a button is clicked
  };
 
  const slicedProjects = projects.slice(value * 3, value * 3 + 3);
  
    return (
    <div>
<section  className="project">
              <Container >
                <Row>
                    <Col  className=' mx-3 d-flex flex-column flex-wrap justify-content-between align-items-center'>
                    <h1 className=' proj-title mt-2 mb-4'>Projects</h1>
                    <p className=' proj-desc mb-5'>I am always looking for new ways to improve my projects. I am always learning new technologies and techniques, and I am always looking for ways to make my projects more user-friendly and efficient.</p>
                   <BottomNavigation
                   
                    className="projects-navigation d-flex flex-row justify-content-center align-items-center gap-15 mb-5 w-100"
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
                      
                    }}
                    >
                    <BottomNavigationAction
                      label="Tab One"
                      className="btnNavigation mt-2"
                      value={0}
                    />
                    <BottomNavigationAction
                      label="Tab Two"
                      className="btnNavigation mt-2"
                      value={1}
                    
                    />
                    <BottomNavigationAction
                      label="Tab Three"
                      className="btnNavigation mt-2 p-2"
                      value={2}
                     
                    /> 
                  </BottomNavigation>                  
                    </Col>

                  
                        <Fragment>
                        <div className='d-flex me-3 mb-3 gap-30 justify-content-center align-items-center flex-wrap'>
                        
                            {slicedProjects.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })
                              
                               
                                   
                            }
                        
                        </div>
                        </Fragment>
                  
                </Row>
            </Container>
            
        </section>
    </div>
  )
}

export default Projects
