import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Herring from './Components/Herring'

import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Herring"><Herring /></Route>        
        <Route render={() => "404 - Not Found!"} /> 
      </Switch>
    </Router>
  );
}

export default App;

/*        <Route exact path="/" component={Home}/>

        <Route path="/Roi"><Roi /></Route>
*/