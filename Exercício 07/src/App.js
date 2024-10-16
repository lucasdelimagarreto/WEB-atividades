import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [contador, setContador] = useState(0);
  const [ativo, setAtivo] = useState(true);

  useEffect(() => {
    let intervalo;
    if (ativo) {
      intervalo = setInterval(() => {
        setContador((prevContador) => prevContador + 1);
      }, 1000);
    }
    return () => clearInterval(intervalo);
  }, [ativo]);

  const pararContador = () => {
    setAtivo(false);
    setContador(0);
  };

  const continuarContador = () => {
    setContador(0);
    setAtivo(true);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={pararContador}>Parar</button>
      <button onClick={continuarContador}>Iniciar</button>
    </div>
  );
}

export default App;
