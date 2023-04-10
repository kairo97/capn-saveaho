
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
  const [isFirstLoad, setFirstLoad] =  useState(true)
  const showDiv = useDelayUnmount(isMounted, 250); 
  
  return (
      <div className='page'>
        <div className="headerContainer">
        <Header 
        />
        </div>
        <div className='midGrid'>
          

        <div className="projectContainer">
        <Projects isFirstLoad={isFirstLoad} setFirstLoad={setFirstLoad}/>
        </div>
        <div className="reviewContainer">
          <div className='navBtnContainer'>
          <button className='openReviewBtn Btn' onClick={() => {
            setRightPage("review")
          }}>Reviews</button>
          <button className='contactBtn Btn' onClick={() => {
            setIsMounted(!isMounted) }}>Contact Me</button>
            </div>
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
