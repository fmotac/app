// Importando o React e a função useState do pacote 'react'
import React, { useState } from 'react';

// Definindo o componente ToggleButton como uma função
function ToggleButton() {
  // Criando um estado chamado 'ligado' com o valor inicial 'false'
  // setLigado é a função para atualizar esse estado
  const [ligado, setLigado] = useState(false);

  // Definindo uma função chamada 'toggle' para alternar o estado 'ligado'
  const toggle = () => {
    // Atualizando o estado 'ligado' para o valor contrário usando setLigado
    setLigado(!ligado);
  };

  // Retornando o JSX que representa o componente
  return (
    <div>
      {/* Botão com um evento de clique que chama a função 'toggle' */}
      <button onClick={toggle}>
        {/* Exibindo 'Ligado' se 'ligado' for verdadeiro, senão 'Desligado' */}
        {ligado ? 'Ligado' : 'Desligado'}
      </button>
    </div>
  );
}

// Exportando o componente ToggleButton para uso em outros arquivos
export default ToggleButton;
