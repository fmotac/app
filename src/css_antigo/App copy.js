// Importa as dependências necessárias do React.
import React, { useState } from 'react';
// Importa o estilo do Bootstrap para estilização.
import 'bootstrap/dist/css/bootstrap.min.css';
// Importa o estilo CSS personalizado.
import './App.css';

// Define o componente App.
function App() {
  // Estados para armazenar os valores da operação, números de entrada e resultado.
  const [operation, setOperation] = useState('+');
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  // Função para calcular o resultado da operação selecionada.
  const handleCalculate = () => {
    // Converte os números de entrada para ponto flutuante.
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    let calculatedResult;

    // Realiza a operação selecionada com base no valor de 'operation'.
    switch (operation) {
      case '+':
        calculatedResult = num1 + num2;
        break;
      case '-':
        calculatedResult = num1 - num2;
        break;
      case '*':
        calculatedResult = num1 * num2;
        break;
      case '/':
        calculatedResult = num1 / num2;
        break;
      default:
        break;
    }

    // Converte o resultado calculado para string e atualiza o estado 'result'.
    setResult(calculatedResult.toString());
  };

  // Renderiza o componente da calculadora.
  return (
    <div className="calculadora">
      {/* Seletor para escolher a operação */}
      <select
        className="form-select mb-2"
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      {/* Campo de entrada para o primeiro número */}
      <input
        type="number"
        className="form-control mb-2"
        placeholder="Número 1"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      />
      {/* Campo de entrada para o segundo número */}
      <input
        type="number"
        className="form-control mb-2"
        placeholder="Número 2"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />
      {/* Botão para calcular o resultado */}
      <button className="btn btn-primary" onClick={handleCalculate}>
        Calcular
      </button>
      {/* Exibe o resultado se estiver disponível */}
      {result && <div className="result">Resultado: {result}</div>}
    </div>
  );
}

// Exporta o componente App para ser utilizado em outros lugares.
export default App;
