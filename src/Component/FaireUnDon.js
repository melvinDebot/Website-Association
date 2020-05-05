import React, {useState} from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import Footer from '../Component/Footer';
import copieImg from '../assets/copie.svg';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Content = styled.div`
  width:100%;
  height:120vh;
  background:white;
  padding-top: 6em;
  h2{
    font-size:50px;
    font-weight:bold;
  }
  @media(max-width:550px){
      height:170vh;
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
  width:92%;
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
const styleImg = {
  width:"15px",
  height:"15px"
}

const FaireUnDon = () => {
  const [iban, setIban] = useState('FR7610278061860002103480121 ');
  const [bic, setBic] = useState('CMCIFR2A ');
  const [Copy, setCopy] = useState(false);
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
            <p>Nom du bénéficiaire : La seconde chance</p>
            <p>IBAN : 
              <strong >{iban}</strong> 
              <CopyToClipboard text={iban} onCopy={()=> {setCopy(true)}}>
                <img className="copy" src={copieImg} alt="" style={styleImg}/>
              </CopyToClipboard>
              </p>
            <p>BIC : 
              <strong className="bic">{bic}</strong>  
              <CopyToClipboard text={bic} onCopy={()=> {setCopy(true)}}>
                <img src={copieImg} alt="" style={styleImg}/>
              </CopyToClipboard>
              </p>
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