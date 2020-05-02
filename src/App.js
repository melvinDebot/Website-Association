import React, {useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './assets/logo.svg'
import {Expo, TimelineMax} from 'gsap';
import HomePage from './Component/HomePage';
import FaireUnDon from './Component/FaireUnDon';

import './App.scss';

export default function App() {
  useEffect(()=> {
    var tl = new TimelineMax({paused: true});
    tl.to(".one", 0.8, {
      y: 6,
      rotation: 45,
      ease: Expo.easeInOut
    });
    tl.to(".two", 0.8, {
      y: -6,
      rotation: -45,
      ease: Expo.easeInOut,
      delay: -0.8
    });
    tl.to(".menu", 1, {
      top: "0%",
      ease: Expo.easeInOut,
      delay: -2
    })
    tl.staggerFrom(".menu ul li",0.8, {x: -200, opacity: 0, ease: Expo.easeInOut}, 0.3)
    tl.reverse();
    var button = document.querySelector('.toggle-btn');
    button.addEventListener('click', function(){
      tl.reversed(!tl.reversed());
    })
    button.addEventListener('touchstart', function(){
      tl.reversed(!tl.reversed());
    })
  })
  return (
    <Router>
      {/* LE BON */}
      <div>
        <img src={logo} alt="tet" className="img-header"/>
      <div className="toggle-btn">
          <span className="one"></span>
          <span className="two"></span>
      </div>
      <div className="menu">
          <div className="data">
            <div>
              <ul>
                <li>
                  <img src={logo} alt="logo lsc" />
                </li>
                <li>
                  <Link to="/">Accueil</Link>
                </li>
                <li>
                  <Link to="/faireundon">Faire un don</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/faireundon">
            <FaireUnDon />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const styleOne = {
  widtt:"100%",
  height:"100vh",
  background: "red"
}
const styleTwo = {
  widtt:"100%",
  height:"200vh",
  background: "blue"
}

function Home() {
  return (
    <div style={styleOne}></div>
  );
}

function About() {
  return (
    <div style={styleTwo}></div>
  );
}

function Users() {
  return <h2>Users</h2>;
}