import React from 'react';
import './projects.css';
import IMG1 from '../../assets/F+P.png'
import IMG2 from '../../assets/b&bdarre.png';
import IMG3 from '../../assets/live_chat.png'
import IMG4 from '../../assets/scrollspy.png';
import IMG5 from '../../assets/giorgiaci.github.png';
import IMG6 from '../../assets/southsideweb.png';

const cardData = [
  {
    id:1,
    image: IMG1,
    title: 'Foster+Partners',
    github: null,
    website:'https://www.fosterandpartners.com/'
  },
  {
    id:2,
    image: IMG2,
    title: 'B&B Darre',
    github: null,
    website:'https://www.palermobbdarre.com/'
  },
  {
    id:3,
    image: IMG3,
    title: 'Live chat',    
    github:'https://github.com/giorgiaci/chat_app',
    website: null
  },
  {
    id:4,
    image: IMG4,
    title: 'Scrollspy app',
    github:'https://github.com/giorgiaci/scrollspy-app',
    website:null
  },
  {
    id:5,
    image: IMG5,
    title: 'Codecademy project',
    github:'https://github.com/giorgiaci/codecademy_proj',
    website:null
   
  },
  {
    id:6,
    image: IMG6,
    title: 'Portfolio version 1.0',    
    github:'https://github.com/giorgiaci/personalPortfolio',
    website: null
  }
]

const Projects = () => {
  return (
    <section id='projects'>
      <h2 className='text-center mt-5 mb-3'>Some of my projects</h2>
      <div className="container card_container">

      {
        cardData.map(({id, image, title, github, website}) =>{
          return(
            <div key={id} className="card-item">
              <div className="card-image">
                <img className='w-100' src={image} alt={title} />
              </div>
              <h3 className='mt-2'>{title}</h3>
              <div className="card-item-links">                
                { website && <a href={website} className="btn btn-active" target='_blank' rel='noopener noreferrer'>Website</a>}
                { github && <a href={github} className="btn" target='_blank' rel='noopener noreferrer'>Github</a>}
              </div>              
            </div>
          )
        })
      }        
      </div>
    </section>
  )
}

export default Projects