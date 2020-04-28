import React from 'react';

class Footer extends React.Component{
  render(){
    return(
      <>
        <div className="footer">
          <div className="containt-bloc">
          <div className="bloc">
            <h4>Nous contactez</h4>
            <div className="footer-text">
              <p>1 rue Pasteur Martin Luther King , 94120 Fontenay-sous-Bois</p>
              <p>Téléphone : 09 84 19 28 76</p>
              <p>mail: contact@lasecondechance.fr</p>
            </div>
          </div>
          <div className="bloc">
            <h4>Faites un don</h4>
            <div className="footer-text">
              <p>
                L'association La Seconde récolte les fonds
                de manière à pouvoir atteindre les objectifs fixés. Nous avons besoin de votre soutien financier</p>
            </div>
          </div>
          <div className="bloc">
            <h4>L'Association</h4>
            <div className="footer-text">
              <p>L'association La Seconde récolte les fonds
              de manière à pouvoir atteindre les objectifs fixés. Nous avons besoin de votre soutien financier</p>
            </div>
          </div>
          </div>
          
          <div className="bloc-footer">
            <p>©Melvin Debot</p>
            <p>Conditions générale</p>
            <p>Plan du site</p>
            <p>Mention Légales</p>
          </div>
        </div>
      </>
    )
  }
}

export default Footer;