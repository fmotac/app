import React from 'react';

// Componente de Botão
function Botao(props) {
  return (
    <button
      style={{ backgroundColor: props.cor, color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      onClick={props.onClick}
    >
      {props.texto}
    </button>
  );
}

// Componente Pai
function App() {
  const handleClick = () => {
    console.log('Botão clicado!');
  };

  return (
    <div>
      <h1>Exemplo de Botões com Props</h1>
      <Botao cor="blue" texto="Botão Azul" onClick={handleClick} />
      <Botao cor="green" texto="Botão Verde" onClick={handleClick} />
    </div>
  );
}

export default App;
