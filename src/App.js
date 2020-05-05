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
import Adherer from './Component/Adherer';

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
    const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
        })

        document.addEventListener('click', () => {
            cursor.classList.add("expand");

            setTimeout(() => {
                cursor.classList.remove("expand");
            }, 500)
        })
  })
  return (
    <Router>
      {/* LE BON */}
      <div>
        <img src={logo} alt="tet" className="img-header"/>
        <div class="cursor"></div>
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
                <li>
                  <Link to="/adherer">S'adherer</Link>
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
          <Route path="/adherer">
            <Adherer  />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
