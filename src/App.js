
import React, { useState, useEffect }from 'react';
import './App.css';
import Header from "./components/Header"
import Projects from './components/Projects';
import About from "./components/About"
import ContactMe from './components/ContactMe';
import Footer from "./components/Footer"
function useDelayUnmount(isMounted, delayTime) {
  const [showDiv, setShowDiv] = useState(false);
  useEffect(() => {
    let timeoutId;
    if (isMounted && !showDiv) {
      setShowDiv(true);
    } else if (!isMounted && showDiv) {
      timeoutId = setTimeout(() => setShowDiv(false), delayTime);
    }
    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, showDiv]);
  return showDiv;
}
const mountedStyle = { animation: "inAnimation 500ms ease-in"};
const unmountedStyle = {
  animation: "outAnimation 500ms ease-out",
  animationFillMode: "forwards"
};
function App() {
  const [isMounted, setIsMounted] = useState(false) 
  const showDiv = useDelayUnmount(isMounted, 250); 
 
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
          <button className='contactBtn' onClick={() => {
            setIsMounted(!isMounted) }}>Contact Me</button>
        <About/>
        </div>
        </div>
        {showDiv && <div className="contactContainer" style={isMounted ? mountedStyle : unmountedStyle}>
         <ContactMe/>
        </div>}
        <Footer/>
      </div>
  );
}

export default App;
