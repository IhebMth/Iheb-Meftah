import React, { useState } from 'react'
import '../css/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faLocationPin, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import contactImg from '../images/contactImg.png'

import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
      // Initialize EmailJS service
    emailjs.init('Z5bnNfX8i2DocKic6');

    // Set up the email template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

     // Send the email using EmailJS
     emailjs.send('service_fwulkll', "template_q3ioffa", templateParams)
     .then((response) => {
        Swal.fire(
            'Thank You!',
            'Email has been sent successfully!',
            'success'
          )
    //    console.log('Email sent successfully!', response.status, response.text);
       // Reset the form fields after successful submission
       setName('');
       setEmail('');
       setMessage('');
     })
     .catch((error) => {
       console.error('Error sending email:', error);
     });

    }
    
  return (
    <>
      <div className="contact box-shadow" id="contact">
        <div className="container-xxl home">
            <div className="row">
                <div className="col-12">
                <div className="d-flex flex-column flex-wrap align-items-center justify-content-center mb-80">
                <div className="section-title py-5">
                  <h1 className="title ">Contact Me</h1>
                </div>

                <div className=" d-flex flex-column flex-wrap align-items-center justify-content-center mt-40 mb-80">
                    <h1 className='contact-title mt-4 mb-2'>Have You Any Questions</h1>
                    <h5 className='description'>I'm at your services</h5>

                    <div className="contact-icons d-flex flex-row flex-wrap justify-content-center align-items-center gap-30 mt-5 mb-5">
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                        <FontAwesomeIcon 
                        icon={faPhone}
                        className='icon fs-3 mt-2 mb-2' />
                        <h5><b>Call us On</b></h5>
                        <a href="tel:+21655918650"><p>+216 55 918 650</p></a>
                        </div>

                        <div className='d-flex flex-column justify-content-center align-items-center'>
                        <FontAwesomeIcon icon={faLocationPin} 
                        className=' icon fs-3 mt-2 mb-2'
                        />
                        <h5><b>Adress</b></h5>
                        <p>Chenini-Gabes-Tunisia</p>
                        </div>


                        <div className='d-flex flex-column justify-content-center align-items-center'>
                        <FontAwesomeIcon icon={faEnvelope} 
                        className='icon fs-3 mt-2 mb-2'
                        />
                        <h5><b>Email</b></h5>
                        <p>Ihebmeftah@outlook.fr</p>
                        </div>

                        <div className='d-flex flex-column justify-content-center align-items-center'>
                        <FontAwesomeIcon  
                        icon={faLinkedin}
                        className='icon fs-3 mt-2 mb-2' />
                        <h5><b>LinkedIn</b></h5>
                        <a href="https://www.linkedin.com/in/iheb-meftah/" rel='noreferrer' target='_blank'>
                          <p> https://www.linkedin.com/in/iheb-meftah/</p> </a>
                        </div>

                       
                    </div>

                    <h1 className='contact-title mt-4 mb-2'>Send Me An Email</h1>
                    <h5 className='desc'>I'M VERY RESPONSIVE TO MESSAGES</h5>
                
                </div>
              </div>
                </div>
                  
                <div className="mask">
                    <div className="col-12"></div>
      <section className="contactForm">
        <div className="left-side">
          <form onSubmit={handleSubmit}>
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
              <span>Your Full Name</span>
            </div>

            <div className="inputBox">
              <input type="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              <span>Email</span>
            </div>

            <div className="inputBox">
              <textarea name="message" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              <span>Your Message</span>
            </div>

            <div className="inputBox">
              <input type="submit" className='button border-0 mx-2 pe-3 px-2' value="Send" />
            </div>
          </form>
        </div>
        <div className="right-side d-flex">
            <div className="contact-section">
                <img src={contactImg} alt="contact" />
            </div>
        </div>
      </section>
    </div>
                             
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact
