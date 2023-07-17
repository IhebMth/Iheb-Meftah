import React, { useEffect, useRef, useState } from 'react'
import {AiFillLinkedin, AiFillFacebook, AiOutlineGithub  } from 'react-icons/ai'
import {CgMail} from 'react-icons/cg'
import '../css/Home.css'
import Typed from 'typed.js';
import iheb from '../images/iheb-removebg.png'
import waterShape from '../images/shape-bg.png'
import ihebCv from '../ihebMeftahCv.pdf'
const Home = () => {

 // Create Ref element.
 const el = useRef(null);

 useEffect(() => {
  const options = {
    strings: ['FrontEnd Developer'], // Update with the cryon icon HTML code or specific component usage
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
      <div className="home-page" id='home'>
        <div className="container-xxl home">
            <div className="row">
                <div className="col-12 d-flex flex-row justify-content-center align-items-center">
                    <div className=' mt-5'>

                    <div className="links d-flex justify-content-center gap-15 mb-3">
                    <a href="https://github.com/IhebMth" target='_blank' rel='noreferrer'>
                      <AiOutlineGithub className="fs-4" /></a>
                    <a href="https://www.linkedin.com/in/iheb-meftah/" target='_blank' rel='noreferrer'>
                      <AiFillLinkedin className='fs-4'/></a>
                    <a href="mailto:ihebmeftah@outlook.fr">
                      <CgMail className='fs-4' /></a>
                    <a href="https://www.facebook.com/profile.php?id=100009419897556" target='_blank' rel='noreferrer'>
                      <AiFillFacebook className='fs-4' /></a>
                    </div>

                    <div className="introduction mb-3 d-flex flex-column">
                    <h1 className="title text-white  text-center">Hello i'm Iheb Meftah</h1>
                    <h1 className='text-center'><span  ref={el} className='me-5 px-5'></span></h1>
                    <h5 className='text-white text-center'>Developing and implementing highly responsive user interface</h5>
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
               
              <div className="home-image ">
                    <div className='d-flex justify-content-end mb-5'>
                        <img src={iheb} alt="iheb" className='iheb-img ' />
                    </div>
                </div>
               
                  
                </div>
               
            </div>
            
        
        </div>
        
        <div className="waterShape">
                        <img src={waterShape} alt="shape" className='w-100' />
       </div>
      
      </div>
    </>
  );
}

export default Home;
