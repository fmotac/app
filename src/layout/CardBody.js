import "../App.css";

const CardBody = (props) => {
  return (
    <div className="card">

      <h2>{props.titulo}</h2>
      <p>{props.conteudo}</p>

    </div>
  );
};
export default CardBody;