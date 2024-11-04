import React from 'react'
import { useState } from 'react'
import './nav.css'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  
  const handleScrollToSection = (sectionId) => {
    setActiveNav(sectionId);
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="container pt-3">
      <div className="nav-links">

        <button 
          onClick={() => handleScrollToSection('#')} 
          className={activeNav === '#' || activeNav === '#about' ? 'active' : ''}>
          About
        </button>

        <button 
          onClick={() => handleScrollToSection('#experiences')} 
          className={activeNav === '#experiences' ? 'active' : ''}>
          Skills
        </button>

        <button 
          onClick={() => handleScrollToSection('#projects')} 
          className={activeNav === '#projects' ? 'active' : ''}>
          Projects
        </button>
        
        <button 
          onClick={() => handleScrollToSection('#contact')} 
          className={activeNav === '#contact' ? 'active' : ''}>
          Contact
        </button>

        </div>      
    </nav>
  )
}

export default Nav