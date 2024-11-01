import React, { useState } from 'react';

const App = () => {
  const [nome, setNome] = useState('');

  const handleInputChange = (event) => {
    setNome(event.target.value);
  };

  return (
    <div>
      <input type="text" value={nome} onChange={handleInputChange} />
      <p>Olá, {nome}!</p>
    </div>
  );
};

export default App;


