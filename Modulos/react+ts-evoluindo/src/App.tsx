import { Routes, Route, Link } from "react-router-dom";
import CalculadoraCombustivel from "./pages/calculadoraCombustivel/calculadoraCombustivel";
import RenderizacaoCondicional from "./pages/renderizacaoCondicional/renderizacaoCondicional";
import DevFrases from "./pages/devFrases/devFrases";
import Lista from "./pages/listas/listas";
import "./App.css";
import "./Global.css";

function Home() {
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/calculadoraCombustivel"
        element={<CalculadoraCombustivel />}
      />
      <Route path="/listas" element={<Lista />} />
      <Route
        path="/renderizacaoCondicional"
        element={<RenderizacaoCondicional />}
      />
      <Route path="/devFrases" element={<DevFrases />} />
    </Routes>
  );
}
