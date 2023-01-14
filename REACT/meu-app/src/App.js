import React from 'react';
import Header from './Header';
import Counter from './Counter';
import './App.css';

function App() {
  return (
    <div>
    <Header name="ProgBr" links={["Sobre", "Comprar", "Contato","login"]}></Header>
    <Counter></Counter>
    </div>
    );
}

export default App;
