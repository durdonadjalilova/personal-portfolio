import React from 'react';
import './App.css';
import Landing from './components/Landing';
import {Switch, Route} from 'react-router-dom'
import Site from './components/Site';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/' component={Landing} />
        <Route exact path='/suzette' component={Site}/>
      </Switch>

    </div>
  );
}

export default App;
