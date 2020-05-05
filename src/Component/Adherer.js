import React from 'react';
import Banner from './Banner';
import Footer from '../Component/Footer';
import styled from 'styled-components';

const Content = styled.div`
  width:100%;
  height:240vh;
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
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdmaBynm1WC48-lhw9mOXS3L43FJfi4_Ku4kWSxT2sjLGZHNw/viewform?embedded=true" width="640" height="1249" frameborder="0" marginheight="0" marginwidth="0">Chargement…</iframe>
      </ContentBlock>
      <Footer />
    </Content>
  )
}

export default Adherer;
