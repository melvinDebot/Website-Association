import React from 'react';
import {Expo, TimelineMax} from 'gsap';
import {BrowserRouter as Router,Link} from "react-router-dom";

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
        <div className="toggle-btn">
          <span className="one"></span>
          <span className="two"></span>
        </div>
        <div className="menu">
          <div className="data">
            <div>
              <img src={this.props.image} alt="logo" />
              <ul>
                <li>
                  <Link to="/homepage">Accueil</Link>
                </li>
                <li>
                  <Link to="/adherer">S'adhérer</Link>
                </li>
                <li>
                  <Link to="/faireundon">Faire un don</Link>
                </li>
                <li>
                  <Link to="/association">L'association</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Header;
