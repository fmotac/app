// Componente Pai
import React from 'react';

function Pai() {
  const mensagem = "Olá do Pai para o Filho!";
  return (
    <div>
      <Filho mensagem={mensagem} />
    </div>
  );
}

export default Pai;

// Componente Filho


function Filho(props) {
  return (
    <div>
      <p>{props.mensagem}</p>
    </div>
  );
}


