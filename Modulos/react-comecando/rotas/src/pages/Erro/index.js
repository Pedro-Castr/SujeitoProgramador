import { Link } from "react-router-dom";

function Erro() {
  return (
    <div>
      <h2>Ops! Parece que essa página não existe...</h2>
      <p>
        Retorne para a página <Link to="/">Home</Link>
      </p>
    </div>
  );
}

export default Erro;
