import React from 'react';
import './App.scss';
import logo from './assets/logo.svg';
import Header from './Component/pages/Header';


// COMPONENTS
import HomePage from './Component/pages/HomePage.js';
import Association from './Component/pages/Association';
import Adherer from './Component/pages/Adherer';
import FaireUnDon from './Component/pages/faireUnDon';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Header image={logo}/>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/faireundon">
            <FaireUnDon />
          </Route>
          <Route path="/homepage">
            <HomePage />
          </Route>
          <Route path="/adherer">
            <Adherer />
          </Route>
          <Route path="/association">
            <Association />
          </Route>
        </Switch>
      </Router>
    </>
  );
}


export default App;
