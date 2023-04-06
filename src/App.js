
import React, { useState }from 'react';
import './App.css';
import Header from "./components/Header"
import Projects from './components/Projects';
import About from "./components/About"
import ContactMe from './components/ContactMe';
import Footer from "./components/Footer"

function App() {

  
  return (
      <div className='page'>
        <div className="headerContainer">
        <Header 
        setClickedLink={setClickedLink}
        />
        </div>
        <div className='midGrid'>
        <div className="projectContainer">
        <Projects
        clickedLink={clickedLink}
        />
        </div>
        <div className="aboutContainer">
        <About/>
        </div>
        </div>
        <div className="contactContainer">
        <ContactMe/>
        </div>
        <Footer/>
      </div>
  );
}

export default App;
