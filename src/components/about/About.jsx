import React from 'react'
import './about.css'
import Me from '../../assets/Giorgia.jpg'
import CV from '../../assets/Giorgia_Ciulla_CV.pdf'

import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import Nav from '../nav/Nav'
import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const About = () => {
  const { width } = useWindowSize();

  return (
    <section id='about' className='mt-0'>
      <Nav />
      <div className="container about_container">
        <div className="d-flex container_gap">

          {width >= 992 && (
            <>
              <div className="col-md-12 col-lg-4 d-flex justify-content-center">
                <div className="about_me">
                  <div className="about_me-image">
                    <img src={Me} alt="me" />
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="col-md-12 col-lg-6">
            <div className="header_container">
              <h5>Hi, I'm<span className='name'> Giorgia</span></h5>

              <h5 className="text-light mb-4">a web developer experienced in Angular, JavaScript, HTML, Bootstrap, and CSS, with a solid foundation in Agile methodologies.<br/>
                Currently diving into back-end technologies like C# and Node.js and recently earned my Microsoft Azure Fundamentals certification.<br/>
                Thrilled to grow, innovate, and take on new challenges!</h5>
            </div>

            <div className='controls mt-4'>
              <a href={CV} download className='btn'>CV</a>
              <a href='#contact' className='btn btn-active'>Let's talk</a>


              <a href='https://www.linkedin.com/in/giorgia-ciulla/' className='btn' target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
              <a href='https://github.com/giorgiaci' className='btn' target="_blank" rel="noopener noreferrer"><FaGithub /></a>

            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About