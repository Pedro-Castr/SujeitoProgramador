import { Link } from "react-router-dom";
import "./erro.css";

function Erro() {
  return (
    <div className="not-found">
      <h1>Ops!</h1>
      <h3>A página que você buscou não foi encontrada.</h3>
      <p>
        Retornar para a <Link to="/">Home</Link>
      </p>
    </div>
  );
}

export default Erro;
