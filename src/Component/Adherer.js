import React from 'react';
import Banner from './Banner';
import Footer from '../Component/Footer';
import styled from 'styled-components';

const Content = styled.div`
  width:100%;
  height:140vh;
  background:white;
  padding-top: 6em;
`
const ContentBlock = styled.div`
  width:100%;
  height:80%;
  display:flex;
  justify-content:center;
`
const Block = styled.div`
  width:70%;
  height:70%;
  display: flex;
  flex-direction:column;
  justify-content: space-around;
  form{
    width:100%;
    height:100%;
  }
`
const InputBlock = styled.div`
  width:100%;
  height:70px;
  display: block;
  input{
    width:100%;
    height:30px;
    font-size:15px;
    border : none;
    border-bottom: 1px solid #8CC63F
  }
`
const ButtonBlock = styled.div`
  width:100%;
  height:20%;
  display:flex;
  justify-content:center;
  button{
  margin-top:20px;
  width:123px;
  height: 33px;
  text-align:center;
  background:#8CC63F;
  color:white;
  font-size: 17px;
  line-height: 33px;
  border:none;
  }
  


`

const Adherer = () => {
  return(
      <Content>
      <Banner title="S'adhérer"/>
      <ContentBlock>
        <Block>
          <form>
            <InputBlock>
              <p>Nom *</p>
              <input type="text" placeholder="Jean" required/>
            </InputBlock>
            <InputBlock>
              <p>Prénom *</p>
              <input type="text" placeholder="Dujardin" required/>
            </InputBlock>
            <InputBlock>
              <p>Numéro de téléphone *</p>
              <input type="tel" pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}" placeholder="0673548261"/>
            </InputBlock>
            <InputBlock>
              <p>Mail *</p>
              <input type="email" placeholder="xxxxx@gmail.com" required/>
            </InputBlock>
            <InputBlock>
              <p>Adresse </p>
              <input type="text" placeholder="13 rue lapie" required/>
            </InputBlock>
            <InputBlock>
              <p>Code postale </p>
              <input type="text" placeholder="35762" required/>
            </InputBlock>
            <InputBlock>
              <p>Ville </p>
              <input type="text" placeholder="Paris" required/>
            </InputBlock>
            <ButtonBlock>
              <button>Validé</button>
            </ButtonBlock>
          </form>
        </Block>
      </ContentBlock>
      <Footer />
    </Content>
  )
}

export default Adherer;
