import React from 'react';


import Footer from '../Component/Footer';

import bg from '../assets/bg.jpg';

import heart from '../assets/heart.svg';
import  earbox from '../assets/earbox.svg';
import infobox from '../assets/infobox.svg';
import mainbox from '../assets/mainbox.svg';
import mainheart from '../assets/mainheart.svg';
import adherer from '../assets/adherer.svg';
import imgEvent from '../assets/img-evenement.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import FaireUnDon from '../Component/FaireUnDon';
import Adherer from '../Component/Adherer';



class HomePage extends React.Component{
  componentWillMount(){
    AOS.init();
  }
  render(){
    return(
      <div>
        <div className="container">
          <div className="container-text">
            <h5>Commencez maintenant</h5>
            <h1 data-aos="fade-up" data-aos-duration="3000">Pour nous aider à nous développer,
            vous pouvez faire un don</h1>
            <Link to="/faireundon">
              <button>Faire un don <img src={heart} alt="" /></button>
            </Link>
          </div>
          <img src={bg} alt="" className="img-container" 
            data-aos="zoom-in" 
            data-aos-duration="3000"
            data-aos-easing="ease-in-out"
            data-aos-delay="500"
          />
          <div class="aniWrap">
              <div class="mouse">
                <div class="scroller">
                </div>
              </div>
              
            </div>
        </div>
        <div className="container box">
          <h5>Qui sommes nous ?</h5>
          <h2 data-aos="fade-up">Association LSC</h2>
          <div className="box-card" >
            <div 
              className="card" 
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-mirror="false"
            >
              <img src={earbox} alt="" className="img-card"/>
              <p>Un soutien psychologique, moral et une écoute particulière</p>
            </div>
            <div 
              className="card"
              data-aos="fade-up"
              data-aos-delay="90"
            >
            <img src={infobox} alt="" className="img-card"/>
              <p>Des diffusions d'informations en lien avec la santé et l'hygiène de vie</p>
            </div>
            <div 
              className="card"
              data-aos="fade-up"
              data-aos-delay="120"
            >
              <img src={mainbox} alt="" className="img-card"/>
              <p>Propose une aide aux personnes, défavorisées de la ville</p>
            </div>
          </div>
        </div>
        <div className="container details">
          <h5>Comment faire ?</h5>
          <div className="box-details" data-aos="fade-up">
            <div className="details-card">
              <img src={adherer} alt="" className="img-details"/>
              <h3>S'adhérer</h3>
              <p>Vous avez la possibilité de
              vous engager au sein de l'association</p>
              <Link to="/adherer">
                <span>En savoir plus</span>
              </Link>
            </div>
            <div className="details-card">
              <img src={mainheart} alt="" className="img-details"/>
              <h3>Faire un don</h3>
              <p>Pour nous aider à nous développer,
              vous pouvez faire un don</p>
              <Link to="/faireundon">
                <span>En savoir plus</span>
              </Link>
              
            </div>
          </div>
        </div>
        <div className="container event">
          <h5>Nos actions</h5>
          <div className="wrapper-event">
            <div className="box-event">
              <h3 data-aos="fade-up">Evenements</h3>
              <p data-aos="fade-up">Vous organisons des évènements divers
              atelier decouverte,sortis a la plage,rendonné en foret,concert,visite des personne agée,tournoie sportif </p>
              <Link to="/">
                <button data-aos="fade-up">Nos événements</button>
              </Link>
            </div>
            <img src={imgEvent} alt="" className="img-event" data-aos="zoom-in"/>
            </div>
        </div>
        <Footer />
        <Switch>
          <Route path="/faireundon">
            <FaireUnDon />
          </Route>
          <Route path="/adherer">
            <Adherer />
          </Route>
        </Switch>

      </div>
    )
  }
}

export default HomePage ;