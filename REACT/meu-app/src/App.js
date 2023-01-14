import React from 'react';
import Header from './Header';
import './App.css';

function App() {
  return (
    <Header name="ProgBr" links={["Sobre", "Comprar", "Contato","login"]}></Header>
  );
}

export default App;
