import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <h1 className="titulo">Atividades desenvolvidas nesse módulo</h1>

      <ul className="lista">
        <li>
          <Link to="/calculadoraCombustivel">Calculadora de Combustível</Link>
        </li>
        <li>
          <Link to="/listas">Lista de Tarefas</Link>
        </li>
        <li>
          <Link to="/renderizacaoCondicional">Renderização Condicional</Link>
        </li>
        <li>
          <Link to="/devFrases">Dev Frases</Link>
        </li>
      </ul>
    </div>
  );
}
