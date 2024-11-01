import React, { useState } from 'react';

const MeuComponente = () => {
  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={aumentarContador}>Aumentar</button>
    </div>
  );
};

export default MeuComponente;
