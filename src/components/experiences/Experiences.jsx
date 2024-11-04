import React from 'react';
import './experiences.css';
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experiences = () => {
  let experiences = [
    'Angular 16', 
    'RxJs - NGRX',     
    'Angular Material', 
    'HTML - CSS - Bootstrap',    
    'Windows - Linux', 
    'AZ-900'
  ];

  let interests = [
    'React JS', 
    '.NET', 
    'Node.js',  
    'AZ-400'
  ];

  return (
    <section id='experiences'>
      <h2 className='text-center mt-5 mb-4'>Tech Stack</h2>

      <div className="container experiences_container d-flex justify-content-evenly">
        <div className="content col-5">
          <h3 className='text-center'>Skills</h3>
          {
            experiences.map((experience) => {
              return (
                <div className="d-flex gap-3" key={experience}>
                  <BsFillPatchCheckFill className='details-icon' />
                  <div>
                    <h5 className='mb-0'>{experience}</h5>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="content col-5">
        <h3 className='text-center'>Interest</h3>
          {
            interests.map((interest) => {
              return (
                <div className="d-flex gap-3" key={interest}>
                  <BsFillPatchCheckFill className='details-icon' />
                  <div>
                    <h5 className='mb-0'>{interest}</h5>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

    </section>
  )
}
export default Experiences