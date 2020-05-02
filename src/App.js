import React from 'react';
import './App.scss';
import logo from './assets/logo.svg';
import Header from './Component/pages/Header';
import HomePage from './Component/pages/HomePage';

function App() {
  return (
    <>
      <Header image={logo}/>
      <HomePage />
    </>
  );
}

export default App;
