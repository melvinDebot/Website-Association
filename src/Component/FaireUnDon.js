import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import Footer from '../Component/Footer';

const Content = styled.div`
  width:100%;
  height:120vh;
  background:white;
  padding-top: 6em;
  h2{
    font-size:50px;
    font-weight:bold;

  }
`

const BlockText = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
`

const Text = styled.div`
  width:80%;
  height:30%;
  display:flex;

  align-items:center;
  justify-content:start;
  p{
    font-size:20px;
    color:#6E7C90;
  }
  span{
    color:#8CC63F;
    font-weight:bold;
    font-size:25px;
    margin-right:20px;
  }
`

const FaireUnDon = () => {
  return (
    <Content>
      <Banner title="faire un don" />
      <h2>Etapes</h2>
      
      <BlockText>
        <Text>
          <span>1</span>
          <p>Accédez à votre compte bancaire sur le site de votre banque ou sur votre appli mobile.</p>
        </Text>
        <Text>
          <span>2</span>
          <p>Sélectionnez le service "Virements"</p>
        </Text>
        <Text>
          <span>3</span>
          <div>
            <p>Entrez les informations ci-dessus : </p>
            <p>Nom du bénéficiaire : Association de la seconde chance </p>
            <p>IBAN : FR76 3000 3043 9600 0500 4102 414 </p>
            <p>BIC : SOGEFRPP  </p>
          </div>
        </Text>
        <Text>
          <span>4</span>
          <p>Remplissez le montant et la date du virement. Parfois on vous demande aussi le motif de votre virement. Vous pouvez remplir cette case avec la mention "Don".</p>
        </Text>
        <Text>
          <span>5</span>
          <p>Dans les autres espaces qui vous sont proposés, pensez à écrire votre nom, votre prénom et votre adresse. Nous pourrons ainsi retrouver votre virement si un jour vous avez besoin d'un reçu. Veillez à écrire votre nom complet, toujours de la même façon.</p>
        </Text>
      </BlockText>
      <Footer />
    </Content>
  )
}

export default FaireUnDon;