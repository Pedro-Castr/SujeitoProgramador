import { useState } from "react";

import { Header } from "./components/Header/header";
import { Aluno } from "./components/Aluno/aluno";
import { Footer } from "./components/Footer/footer";

export default function App() {
  const [cor, setCor] = useState("");
  const [contador, setContador] = useState(0);

  function adicionar() {
    setContador((valorAtual) => valorAtual + 1);
  }

  function diminuir() {
    if (contador === 0) {
      return;
    }
    setContador((valorAtual) => valorAtual - 1);
  }

  return (
    <div style={{ backgroundColor: cor }}>
      <Header titulo="Curso React + TypeScript" />
      <Aluno nome="Pedro Castro" idade={22} endereco="Rua dos Fodas" />

      <div>
        <h2>Altere a cor do site!</h2>
        <input
          placeholder="Digite a cor aqui"
          value={cor}
          onChange={(e) => setCor(e.target.value)}
        />
      </div>

      <div>
        <h2>Contador com useState</h2>
        <button onClick={adicionar}>+</button> {contador}{" "}
        <button onClick={diminuir}>-</button>
      </div>

      <Footer nome="Sujeito Programador" ano={2026} />
    </div>
  );
}
