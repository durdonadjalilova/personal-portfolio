import React from 'react';
import './App.css';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import DisplayProjects from './components/DisplayProjects';
import Landing from './components/Landing';
import Slogo from './additional/si.png';

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <DisplayProjects />
      <Skills />
      <Contact />

      <div className='footer'>
        <img src ={Slogo} id='si'/>
        <h3>Suzette Islam</h3>
      </div>

    </div>
  );
}

export default App;
