import React, {useEffect} from 'react';
import Banner from '../pages/Banner';
import styled from 'styled-components';

const Content = styled.div`
  width:100%;
  height:200vh;
  background:white;
  border:2px solid red;
`

const FaireUnDon = () => {
  useEffect(()=> {
    scrollEffect()
  })

  const scrollEffect = () => {
    let divContaint = document.querySelector('.containt');
    let divContaintHeight = document.querySelector('.containt').offsetHeight; // Hauteur de 2002
    let scroll = 0;
    
    divContaint.addEventListener('scroll', function(){
      scroll++
      
    })
  }

  const scrollEnable = () => {
    let content = document.querySelector('body')
    content.classList.add('hidden')
    console.log(content)
  }
  const scrollDisable = () => {
    let content = document.querySelector('body')
    content.classList.remove('hidden')
    console.log(content)
  }
  return(
    <>
      <Content className="containt">

      </Content>
    </>
  )
}

export default FaireUnDon;