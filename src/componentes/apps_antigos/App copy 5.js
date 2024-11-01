// Importando o React e a função useState do pacote 'react'
import React, { useState } from 'react';

// Definindo o componente InputControlado como uma função
function InputControlado() {
  // Criando um estado chamado 'texto' com valor inicial vazio ('')
  // setTexto é a função para atualizar esse estado
  const [texto, setTexto] = useState('');

  // Definindo a função 'handleChange' para lidar com as mudanças no input
  const handleChange = (event) => {
    // Atualizando o estado 'texto' com o valor digitado no input
    setTexto(event.target.value);
  };

  // Retornando o JSX que representa o componente
  return (
    <div>
      {/* Input controlado: seu valor é vinculado ao estado 'texto' */}
      <input
        type="text"
        value={texto} // Valor do input é definido pelo estado 'texto'
        onChange={handleChange} // Função chamada quando o input muda
        placeholder="Digite algo"
      />
      {/* Exibindo o que foi digitado no input usando o estado 'texto' */}
      <p>Você digitou: {texto}</p>
    </div>
  );
}

// Exportando o componente InputControlado para uso em outros arquivos
export default InputControlado;

