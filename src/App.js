
import React, { useState }from 'react';
import './App.css';
import Header from "./components/Header"
import Projects from './components/Projects';
import About from "./components/About"

function App() {

  const [clickedLink, setClickedLink] = useState("")
  
  return (
      <div className='page'>
        <Header 
        setClickedLink={setClickedLink}
         />
        <Projects
        clickedLink={clickedLink}
        />
        <About/>
      </div>
  );
}

export default App;
