
import React, { useState, useEffect }from 'react';
import './App.css';
import Header from "./components/Header"
import Projects from './components/projects/Projects';
import Review from "./components/Review"
import ContactMe from './components/ContactMe';
import Footer from "./components/Footer"
import SplashPage from './components/splash/SplashPage';
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
  const [isRightPage, setRightPage] = useState("")
  const [navItem, setNavItem] = useState("")
  const [isFirstLoad, setFirstLoad] =  useState(true)
  const showDiv = useDelayUnmount(isMounted, 250); 
  const ChangePage = (event) => {
    event.preventDefault()
    setFirstLoad(false)
    if (event.target === document.querySelector("#auto")) {
         setNavItem("auto")
    } else if (event.target === document.querySelector("#floor")) {
         setNavItem("floor")
    } else if (event.target === document.querySelector("#drywall")) {
         setNavItem("drywall")
    } else if (event.target === document.querySelector("#misc")) {
         setNavItem("misc")
    }
}
  return (
      <div className='page'>
        <div className="headerContainer">
        <Header 
        />
        </div>
        <ul className="navMenu">
               <li className="navItem" id="auto" onClick={ChangePage}>Auto Repair</li>
               <li className="navItem" id="floor" onClick={ChangePage}>Flooring</li>
               <li className="navItem" id="drywall" onClick={ChangePage}>Drywall</li>
               <li className="navItem" id="misc" onClick={ChangePage}>Misc</li>
               <li className='navItem' id="reviews" onClick={() => {
                setRightPage("review")
               }}>Reviews</li>
               <li className='navItem' id="contact" onClick={() => {
            setIsMounted(!isMounted) }}>Contact</li>
          </ul>
        <div className='midGrid'>
        <div className="projectContainer">
        <Projects navItem={navItem}/>
        </div>
        <div className="reviewContainer">
        {isRightPage === "review" && <Review/>}
        </div>
        </div>
        {isFirstLoad === true && <SplashPage/>}
        {showDiv && <div className="contactContainer" style={isMounted ? mountedStyle : unmountedStyle}>
         <ContactMe/>
        </div>}
        <Footer/>
      </div>
  );
}

export default App;
