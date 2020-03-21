import React from 'react';
import './App.css';
// import Landing from './components/Landing';
// import {Switch, Route} from 'react-router-dom'
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import DisplayProjects from './components/DisplayProjects';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Route exact path = '/' component={Landing} />
        <Route exact path='/portfolio' component={Site}/>
      </Switch> */}
    {/* <NavBar/> */}
    <About />
    <DisplayProjects />
    <Skills />
    <Contact />


    </div>
  );
}

export default App;
