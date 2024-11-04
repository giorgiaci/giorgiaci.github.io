import React from 'react';
import { useState } from 'react'
import './footer.css';

const Footer = () => {

  const [activeNav, setActiveNav] = useState('#')

  const handleScrollToSection = (sectionId) => {
    setActiveNav(sectionId);
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <footer>
      <h5><a href='#about' className='d-flex fs-1 fw-medium mb-5 justify-content-center text-decoration-none'>Giorgia Ciulla</a></h5>
      
      <div className='d-flex justify-content-center'>
        <button
          type='button'
          onClick={() => handleScrollToSection('#about')}
          className={activeNav === '#about' ? 'active' : ''}>
          About
        </button>

        <button
          type='button'
          onClick={() => handleScrollToSection('#experiences')}
          className={activeNav === '#experiences' ? 'active' : ''}>
          Skills
        </button>

        <button
          type='button'
          onClick={() => handleScrollToSection('#projects')}
          className={activeNav === '#projects' ? 'active' : ''}>
          Projects
        </button>

        <button
          type='button'
          onClick={() => handleScrollToSection('#contact')}
          className={activeNav === '#contact' ? 'active' : ''}>
          Contact
        </button>      
      </div>

    </footer>
  )
}

export default Footer