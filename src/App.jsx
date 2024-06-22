import React, { useState } from 'react';
import Mensagem from './Mensagem';
import './App.css';
import { Botao } from './Botao';
const mensagensBruta = [
  {
    enviada: false,
    recebida: true,
    visualizada: true,
    mensagem: "oi..."

  },
  {
    enviada: false,
    recebida: true,
    visualizada: true,
    mensagem: "Tu não me ama mais?"
  },
  {
    enviada: true,
    recebida: true,
    visualizada: false,
    mensagem: "oi, boa tarde"
  },
  {
    enviada: true,
    recebida: true,
    visualizada: false,
    mensagem: "quem é voce"
  }
]
const App = () => {
  const [a, b]=useState(0)
  return(
    <>
  <div class="chat">
  <div class="header">
    <Botao></Botao>
    <h3>Meu Chat</h3>
  </div>
  <ul>
  {mensagensBruta.map(mensagem =><Mensagem {...mensagem}/>)}
  </ul>
  </div>
    </>
  )
};

export default App;
