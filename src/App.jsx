import React from 'react'
import About from './components/about/About'
import Experiences from './components/experiences/Experiences'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

 const App = () => {
  return (
    <div>        
        <About/>
        <Experiences/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App;