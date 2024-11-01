import React, { useState } from "react";

const App = () => {
  const [real, setReal] = useState(0);
  const [dolar, setDolar] = useState(0);

  function converter() {
    setDolar(Number(real / 5));
  }

  function valorReal(event) {
    setReal(event.target.value);
  }

  return (
    <>
      <input type="text" value={real} onChange={valorReal} />

      <button onClick={converter}>Converter</button>
      <p>Valor em dolar $ {dolar}</p>
    </>
  );
};

export default App;
