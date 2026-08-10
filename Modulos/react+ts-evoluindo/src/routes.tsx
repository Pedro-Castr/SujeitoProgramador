import { createBrowserRouter } from "react-router-dom";

import RenderizacaoCondicional from "./pages/renderizacaoCondicional/renderizacaoCondicional";
import CalculadoraCombustivel from "./pages/calculadoraCombustivel/calculadoraCombustivel";
import CalculaIdade from "./pages/calculaIdade/calculaIdade";
import DevFrases from "./pages/devFrases/devFrases";
import Lista from "./pages/listas/listas";
import Home from "./pages/home/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/devFrases",
    element: <DevFrases />,
  },
  {
    path: "/calculadoraCombustivel",
    element: <CalculadoraCombustivel />,
  },
  {
    path: "/CalculaIdade",
    element: <CalculaIdade />,
  },
  {
    path: "/listas",
    element: <Lista />,
  },
  {
    path: "/renderizacaoCondicional",
    element: <RenderizacaoCondicional />,
  },
]);

export { router };
