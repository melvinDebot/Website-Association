import React from 'react';
import {Expo, TimelineMax} from 'gsap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// COMPONENTS
import HomePage from './HomePage';
import Association from './Association';
import Adherer from './Adherer';
import FaireUnDon from './faireUnDon';

class Header extends React.Component{
  constructor(props){
    super(props);

  }

  componentDidMount(){
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
    tl.to(".menu", 2, {
      top: "0%",
      ease: Expo.easeInOut,
      delay: -2
    })
    tl.staggerFrom(".menu ul li",2, {x: -200, opacity: 0, ease: Expo.easeInOut}, 0.3)
    tl.reverse();
    var button = document.querySelector('.toggle-btn');
    button.addEventListener('click', function(){
        tl.reversed(!tl.reversed());
    })
    button.addEventListener('touchmove', function(){
      tl.reversed(!tl.reversed());
  })
  }

  render(){




    
    return(
      <>
        <Router>
          <div className="toggle-btn">
            <span className="one"></span>
            <span className="two"></span>
          </div>
          <div className="menu">
            <div className="data">
              <ul>
                <li>
                  <img src={this.props.image} alt="logo" />
                </li>
                <li>
                  <a href="/homepage">Accueil</a>
                  </li>
                <li>
                  <a href="/adherer">S'adhérer</a>
                </li>
                <li>
                  <a href="/faireundon">Faire un don</a>
                </li>
                <li>
                  <a href="/association">L'association</a>
                </li>
              </ul>
            </div>
          </div>
          <Switch>
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
    )
  }
}

export default Header;