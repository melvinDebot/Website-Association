import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';

const Content = styled.div`
  width:100%;
  height:100vh;
  background:white;
  
`;

const Event = () => {
  return (
    <>
      <Content>
        <Banner title="Evvénements" />
        <h1>Page en cours </h1>
      </Content>
    </>
  )
}

export default Event;