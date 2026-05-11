import { Link } from "react-router-dom";
import "./erro.css";

function Erro() {
  return (
    <div className="not-found">
      <h1>404</h1>

      <p>Página não encontrada.</p>

      <Link to="/">Voltar para início</Link>
    </div>
  );
}

export default Erro;
