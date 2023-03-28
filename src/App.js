
import React, { useState }from 'react';
import './App.css';
import Header from "./components/Header"
import Projects from './components/Projects';

function App() {
  [clickedLink, setClickedLink] = useState("")
  
  return (
      <div className='page'>
        <Header 
        clickedLink={clickedLink}
        setClickedLink={setClickedLink}
         />
        <Projects
        clickedLink={clickedLink}
        setClickedLink={setClickedLink}
        />
      </div>
  );
}

export default App;
