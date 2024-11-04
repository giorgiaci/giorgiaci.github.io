import React from 'react';
import './contact.css';

import {BsLinkedin} from 'react-icons/bs'
const Contact = () => {
  
  return (
    <section id='contact'>
      <h2 className='text-center mt-5 mb-3'>Get in touch</h2>

      <div className="container">
        <div className='d-flex flex-column gap-3 align-items-center'>
         <h4 className='mb-0'>
           I’m always up for a chat.
          </h4>            
          <h4 className='text-center'>
            Send me an email at <span className="large">giorgiaciulla.pa@gmail.com</span> or reach me on  <span className="large">Linkedin</span>.<br/>            
          </h4>       
          <a href='https://www.linkedin.com/in/giorgia-ciulla/' className='btn' target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        </div>

    
      </div>
    </section>
  )
}

export default Contact