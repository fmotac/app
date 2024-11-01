import React from "react";
import NavBar from "./layout/NavBar";
import CardBody from "./layout/CardBody";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <div className="card-body">
        <CardBody titulo="Card 01" conteudo="Flavio Mota da Cruz" />
        <CardBody titulo="Card 02" conteudo="Flavio Mota da Cruz" />
        <CardBody titulo="Card 03" conteudo="Flavio Mota da Cruz" />
      </div>

      <Footer />
    </div>
  );
};

export default App;
