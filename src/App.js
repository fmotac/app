import React from "react";
import NavBar from "./layout/NavBar";
import CardBody from "./layout/CardBody";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <div className="card-body">
        <CardBody titulo="Card 01" conteudo="Conteudo card1" />
        <CardBody titulo="Card 02" conteudo="Conteudo card2" />
        <CardBody titulo="Card 03" conteudo="Conteudo card3" />
      </div>

      <Footer />
    </div>
  );
};

export default App;
