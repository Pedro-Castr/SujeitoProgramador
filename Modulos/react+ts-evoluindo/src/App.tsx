import { Routes, Route, Link } from "react-router-dom";
import CalculadoraCombustivel from "./pages/calculadoraCombustivel/calculadoraCombustivel";
import "./App.css";

function Home() {
  return (
    <div>
      <h1 className="titulo">Atividades desenvolvidas nesse módulo</h1>

      <ul className="lista">
        <li>
          <Link to="/calculadoraCombustivel">Calculadora de Combustível</Link>
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
    </Routes>
  );
}
