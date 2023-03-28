
import React, { useState }from 'react';
import './App.css';
import Header from "./components/Header"
import Projects from './components/Projects';

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
      </div>
  );
}

export default App;
