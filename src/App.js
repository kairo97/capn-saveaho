
import React, { useState }from 'react';
import './App.css';
import Header from "./components/Header"
import Projects from './components/Projects';
import About from "./components/About"
import ContactMe from './components/ContactMe';
import Footer from "./components/Footer"

function App() {
  const [openContact, setOpenContact] = useState(false) 
  
  const openMenu = () => {
    if(openContact === false){
       setOpenContact(true)
      } else if (openContact === true){
        setOpenContact(false)
      }
  }
  return (
      <div className='page'>
        <div className="headerContainer">
        <Header 
        />
        </div>
        <div className='midGrid'>
        <div className="projectContainer">
        <Projects
        />
        </div>
        <div className="aboutContainer">
          <button className='contactBtn' onClick={openMenu}>Contact Me</button>
        <About/>
        </div>
        </div>
        {openContact && <div className="contactContainer">
         <ContactMe/>
        </div>}
        <Footer/>
      </div>
  );
}

export default App;
