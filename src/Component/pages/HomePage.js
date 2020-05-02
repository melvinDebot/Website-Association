import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Association from './Association';
import Adherer from './Adherer';
import FaireUnDon from './faireUnDon';


import bg from '../../assets/bg.jpg';
import logo from '../../assets/logo.svg';
import heart from '../../assets/heart.svg';
import  earbox from '../../assets/earbox.svg';
import infobox from '../../assets/infobox.svg';
import mainbox from '../../assets/mainbox.svg';
import mainheart from '../../assets/mainheart.svg';
import adherer from '../../assets/adherer.svg';
import imgEvent from '../../assets/img-evenement.jpg';

import Footer from '.././pages/Footer';



class HomePage extends React.Component{
  render(){
    return(
      <div>
        <Router>
        <div className="container">
          <div className="container-text">
            <h5>Commencez maintenant</h5>
            <h1>Pour nous aider à nous développer,
            vous pouvez faire un don</h1>
            <a href="/faireundon">
              <button>Faire un don <img src={heart} alt="" /></button>
            </a>
          </div>
          <img src={bg} alt="" className="img-container" />
        </div>
        <div className="container box">
          <h5>Qui sommes nous ?</h5>
          <h2>Association LSC</h2>
          <div className="box-card">
            <div className="card">
              <img src={earbox} alt="" className="img-card"/>
              <p>Un soutien psychologique, moral et une écoute particulière</p>
            </div>
            <div className="card">
            <img src={infobox} alt="" className="img-card"/>
              <p>Des diffusions d'informations en lien avec la santé et l'hygiène de vie</p>
            </div>
            <div className="card">
              <img src={mainbox} alt="" className="img-card"/>
              <p>Propose une aide aux personnes, défavorisées de la ville</p>
            </div>
          </div>
        </div>
        <div className="container details">
          <h5>Comment faire ?</h5>
          <div className="box-details">
            <div className="details-card">
              <img src={adherer} alt="" className="img-details"/>
              <h3>S'adhérer</h3>
              <p>Vous avez la possibilité de
              vous engager au sein de l'association</p>
              <a href="/adherer">
                <span>En savoir plus</span>
              </a>
            </div>
            <div className="details-card">
              <img src={mainheart} alt="" className="img-details"/>
              <h3>Faire un don</h3>
              <p>Pour nous aider à nous développer,
              vous pouvez faire un don</p>
              <a href="/faireundon">
                <span>En savoir plus</span>
              </a>
              
            </div>
          </div>
        </div>
        <div className="container event">
          <h5>Nos actions</h5>
          <div className="wrapper-event">
            <div className="box-event">
              <h3>Evenements</h3>
              <p>Vous organisons des évènements divers
              atelier decouverte,sortis a la plage,rendonné en foret,concert,visite des personne agée,tournoie sportif </p>
              <a href="/event">
                <button>Nos événements</button>
              </a>
              
            </div>
            <img src={imgEvent} alt="" className="img-event" />
            </div>
        </div>
        <Switch>
          <Route path="/faireundon">
            <FaireUnDon />
          </Route>
          <Route path="/adherer">
            <Adherer />
          </Route>
          <Route path="/event">
            <Association />
          </Route>
        </Switch>
        </Router>
        
        <Footer />


      </div>
    )
  }
}

export default HomePage ;